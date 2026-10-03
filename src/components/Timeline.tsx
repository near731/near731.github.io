import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export interface TimelineEntry {
  key: string
  title: string
  subtitle: string
  period: string
  logo?: string
  lines: string[]
  footer?: ReactNode
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
      {entries.map((e, i) => (
        <li key={e.key} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[29px] top-6 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[37px]"
          />
          <Reveal delay={i * 60}>
            <article className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/60">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                {e.logo && (
                  <img
                    src={e.logo}
                    alt=""
                    loading="lazy"
                    className="h-12 w-auto max-w-44 shrink-0 rounded-md bg-white object-contain p-1"
                  />
                )}
                <div className="min-w-0">
                  <h3 className="font-semibold leading-snug">{e.title}</h3>
                  <p className="text-base text-muted">{e.subtitle}</p>
                  <p className="mt-0.5 font-mono text-sm text-accent">{e.period}</p>
                </div>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-base text-muted marker:text-accent">
                {e.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              {e.footer && <div className="mt-3 flex flex-wrap gap-2">{e.footer}</div>}
            </article>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
