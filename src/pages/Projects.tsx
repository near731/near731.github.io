import { ui } from '@/data/ui'
import { Link } from 'react-router-dom'
import { Section, Tag } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { ProjectCover } from '@/components/ProjectCover'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <div className="pt-6">
      <Section title={ui.projects} level={1}>
        <Reveal>
          <p className="mb-8 max-w-prose text-muted">{ui.projectsIntro}</p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link
                to={`/projects/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent/60"
              >
                <ProjectCover project={p} className="aspect-[16/10] w-full border-b border-line" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-sm text-accent">
                    {p.status} · {p.period}
                  </p>
                  <h3 className="mt-1 font-semibold leading-snug group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-base text-muted">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  )
}
