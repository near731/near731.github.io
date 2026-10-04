# Handoff: Permanently redacted CV downloads by language

- **Date:** 2026-10-04
- **From:** codex
- **Next agent:** owner
- **Next agent's role:** reviewer
- **Branch / commit:** main, uncommitted

## Goal of this task
Keep original CVs private, permanently redact the phone number, and download the English or German CV according to the website language.

## Done
- Organized all four original CV PDFs under git-ignored `private/cv/originals/`.
- Owner replaced the EN and DE originals during this task. Regenerated public PDFs from those updated originals, which use the TUM email rather than Gmail.
- Removed phone text using applied PDF redaction and added opaque black bars. Removed sensitive telephone/personal-email links, metadata, attachments, hidden content and orphan objects. Other text remains selectable.
- Published only verified copies under `public/cv/Aron_Imre_Nemeth_CV_{EN,DE}.pdf`.
- Enabled download links in the hero, desktop header and mobile menu. English is the default; German selects the DE file.
- Added locale/download checks and a reusable local redaction script. No package dependencies were added; installed Python PyMuPDF and pypdf were used.
- Updated the agreed CV decision in AGENTS.md to reflect the owner's explicit publication request.

## Not done / in progress
- Nothing pending in the requested scope. No commit, push or deployment performed.

## Files touched
- `AGENTS.md`
- `src/data/cv.ts`, `src/data/profile.ts`, `src/lib/content.ts`, `src/lib/localize.ts`
- `src/components/Header.tsx`, `src/sections/Hero.tsx`
- `tests/unit/localization.test.ts`, `tests/e2e/language.spec.ts`
- `scripts/redact-cvs.py`
- Both public CV PDFs, private originals and private verification previews/staging PDFs.

## Verification (actual results)
| Command | Result |
|---|---|
| npm run lint | PASS |
| npm run typecheck | PASS |
| npm test | PASS: 10 tests across 3 files |
| npm run build | PASS |
| npm run test:e2e -- tests/e2e/language.spec.ts --workers=1 | PASS: 7 tests, exit 0 using the existing preview server |
| python scripts/redact-cvs.py | PASS for both updated CVs: independent PyMuPDF/pypdf extraction, decoded object/stream checks, metadata, attachments, annotations, widgets and links; black-bar pixel checks |
| Manual check (themes / mobile / reduced motion) | Both redacted PDFs visually inspected; browser tests covered hero/header/mobile downloads, language changes and mobile layout. Existing reduced-motion layout test passed. No new theme-specific styling. |
| Deployment artifact checks | PASS: SHA-256 equality between verified public PDFs and dist copies; no root PDFs or dist/private directory; originals git-ignored |
| git diff --check | PASS |

The first Playwright invocation passed all 7 cases but hung during Windows web-server teardown. A second invocation reused that server and completed successfully with exit 0. The original hung runner was then interrupted (exit 1). No test failure occurred.

## Decisions made
- The user's current request authorizes public download of sanitized CV copies, superseding the previous CV-off decision.
- Actual PDF redaction removes the phone content; a rectangle overlay alone does not. Reference: https://pymupdf.readthedocs.io/en/latest/page.html#Page.apply_redactions
- The updated originals contain the approved TUM email, so it remains visible. The script also redacts Gmail if it reappears, honoring AGENTS.md.
- Verification occurs in private staging before copying a result to public. Original PDFs and rendered originals must never be copied into public or dist.
- This protects the supplied downloadable PDFs. It does not make claims about unrelated copies of the phone number elsewhere.

## Open questions for the owner
- None.

## TODO(owner)
- After future CV updates, replace the matching originals in `private/cv/originals/`, run `python scripts/redact-cvs.py`, inspect the private previews, and rebuild. The script requires local PyMuPDF and pypdf and is not part of the website build.

## Do not redo / do not undo
- Keep originals and verification previews private. Never upload unredacted originals as downloadable files.
- Do not publish the old full CV, which contains additional personal information.
- Do not change unrelated CV facts or translate/re-export its contents without owner instruction.

## Suggested next steps
1. Owner reviews the downloadable EN/DE CVs and website changes before committing/deploying.
