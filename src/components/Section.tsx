import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function Section({
  id,
  eyebrow,
  title,
  level = 2,
  children,
}: {
  id?: string
  eyebrow?: string
  title: string
  /** Use 1 for the main heading of a page. */
  level?: 1 | 2
  children: ReactNode
}) {
  const Heading = level === 1 ? 'h1' : 'h2'
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <Reveal>
        {eyebrow && (
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">{eyebrow}</p>
        )}
        <Heading className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </Heading>
      </Reveal>
      {children}
    </section>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-sm text-accent">
      {children}
    </span>
  )
}
