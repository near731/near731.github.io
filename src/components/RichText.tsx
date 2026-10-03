import { Fragment } from 'react'

const LINK = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g

/** Renders plain text with [label](https://url) markup as external links. */
export function RichText({ text }: { text: string }) {
  const parts: (string | { label: string; url: string })[] = []
  let last = 0
  for (const m of text.matchAll(LINK)) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    parts.push({ label: m[1], url: m[2] })
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return (
    <>
      {parts.map((p, i) =>
        typeof p === 'string' ? (
          <Fragment key={i}>{p}</Fragment>
        ) : (
          <a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
          >
            {p.label}
          </a>
        ),
      )}
    </>
  )
}
