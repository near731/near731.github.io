import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string
  eyebrow?: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <Reveal>
        {eyebrow && (
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">{eyebrow}</p>
        )}
        <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
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
