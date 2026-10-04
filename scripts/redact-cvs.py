"""Regenerate public CVs from private originals (requires PyMuPDF and pypdf).

Run locally with: python scripts/redact-cvs.py
Never replace public PDFs with the originals: a visual overlay alone is insufficient.
"""

from pathlib import Path
import re

import pymupdf
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PHONE = re.compile(r"(?:\+|\b00)\d[\d ()/-]{7,}")
GMAIL = re.compile(r"[\w.+-]+@gmail\.com", re.IGNORECASE)


def redact(language):
    name = f"Aron_Imre_Nemeth_CV_{language}.pdf"
    source = ROOT / "private/cv/originals" / name
    target = ROOT / "public/cv" / name
    staging = ROOT / "private/cv" / f"redacted-{language}.pdf"
    secrets = set()
    regions = []
    phone_count = 0
    with pymupdf.open(source) as document:
        for page in document:
            for block in page.get_text("dict")["blocks"]:
                for line in block.get("lines", []):
                    text = "".join(span["text"] for span in line["spans"])
                    matches = [*PHONE.finditer(text), *GMAIL.finditer(text)]
                    if not matches:
                        continue
                    phone_count += len(list(PHONE.finditer(text)))
                    secrets.update(match.group().strip() for match in matches)
                    # These CVs put each contact detail on its own line.
                    rect = pymupdf.Rect(line["bbox"]) + (-1, -1, 1, 1)
                    page.add_redact_annot(rect, fill=(0, 0, 0), cross_out=False)
                    regions.append((page.number, rect))
            for link in page.get_links():
                uri = link.get("uri", "")
                if uri.lower().startswith("tel:") or GMAIL.search(uri):
                    page.delete_link(link)
            page.apply_redactions(images=2, graphics=0, text=0)
        if not phone_count:
            raise RuntimeError(f"{language}: no phone found; inspect the original before publishing")
        document.scrub(remove_links=False)
        document.set_metadata({})
        document.del_xml_metadata()
        # Copy only sanitized pages into a fresh document and discard orphan objects.
        with pymupdf.open() as clean:
            clean.insert_pdf(document)
            clean.save(staging, garbage=4, clean=True, deflate=True)

    independent = PdfReader(staging)
    extracted = "\n".join(page.extract_text() or "" for page in independent.pages)
    with pymupdf.open(staging) as clean:
        extracted += "\n".join(page.get_text() for page in clean)
        assert not GMAIL.search(extracted), f"{language}: personal email remains"
        for secret in secrets:
            assert secret not in extracted, f"{language}: redacted text remains"
            if PHONE.fullmatch(secret):
                assert re.sub(r"\D", "", secret) not in re.sub(r"\D", "", extracted)
        assert clean.embfile_count() == 0
        assert not clean.get_xml_metadata()
        assert not any(
            value for key, value in clean.metadata.items() if key not in ("format", "encryption")
        )
        for page in clean:
            assert not list(page.annots() or [])
            assert not list(page.widgets() or [])
            for link in page.get_links():
                uri = link.get("uri", "")
                assert not uri.lower().startswith("tel:") and not GMAIL.search(uri)
        # Check every decoded PDF object/stream without logging sensitive values.
        for index in range(1, clean.xref_length()):
            data = clean.xref_object(index).encode()
            if clean.xref_is_stream(index):
                data += clean.xref_stream(index)
            for secret in secrets:
                assert secret.encode() not in data
                assert secret.encode().hex().encode() not in data.lower()
        for page_number, rect in regions:
            pixels = clean[page_number].get_pixmap(
                clip=rect + (0.5, 0.5, -0.5, -0.5), colorspace=pymupdf.csRGB
            )
            assert max(pixels.samples) == 0, f"{language}: redaction is not opaque"
        previews = ROOT / "private/assets/cv-previews"
        previews.mkdir(parents=True, exist_ok=True)
        clean[0].get_pixmap(matrix=pymupdf.Matrix(1.5, 1.5)).save(
            previews / f"{language}-redacted.png"
        )
    # Publish only after verification passes; failed output stays private.
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(staging.read_bytes())
    print(f"{language}: redaction verified with two PDF readers, links, objects and pixels")


if __name__ == "__main__":
    for language in ("EN", "DE"):
        redact(language)
