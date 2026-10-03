import { useContent } from '@/hooks/useLocale'
import type { ProjectTable } from '@/data/projects'
import { Link, useParams } from 'react-router-dom'
import { Tag } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { HeroBanner } from '@/components/HeroBanner'
import { MppiDiagram } from '@/components/MppiDiagram'
import { ProjectImage } from '@/components/ProjectImage'
import { VideoClip } from '@/components/VideoClip'
import { RichText } from '@/components/RichText'

function DataTable({ table }: { table: ProjectTable }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-xl border border-line bg-surface">
      <table className="w-full min-w-[34rem] border-collapse text-left text-base">
        <caption className="sr-only">{table.caption}</caption>
        <thead>
          <tr className="border-b border-line text-muted">
            {table.columns.map((c) => (
              <th key={c} scope="col" className="px-4 py-3 font-semibold">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]} className="border-b border-line last:border-0">
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row" className="px-4 py-2.5 font-medium">
                    {cell}
                  </th>
                ) : (
                  <td key={i} className="px-4 py-2.5 font-mono text-sm text-muted">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
        {table.summaryRow && (
          <tfoot>
            <tr className="border-t-2 border-accent/40 bg-accent-soft font-semibold">
              {table.summaryRow.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row" className="px-4 py-3">
                    {cell}
                  </th>
                ) : (
                  <td key={i} className="px-4 py-3 font-mono text-sm text-accent">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          </tfoot>
        )}
      </table>
      {table.note && (
        <p className="border-t border-line px-4 py-3 text-sm text-muted">{table.note}</p>
      )}
    </div>
  )
}

export function ProjectDetail() {
  const { ui, projects } = useContent()
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h1 className="text-3xl font-bold">{ui.projectNotFound}</h1>
        <Link to="/projects" className="mt-4 inline-block text-accent hover:underline">
          &larr; {ui.allProjects}
        </Link>
      </div>
    )
  }

  const meta = [project.period, project.context, project.team].filter(Boolean).join(' · ')
  // Without an explicit hero, the first extra figure is promoted to it.
  const hero = project.hero ?? project.images[0]
  const figures = project.hero ? project.images : project.images.slice(1)
  const stats = project.results ?? []

  return (
    <article className="mx-auto max-w-4xl break-words px-4 py-12 sm:px-6 sm:py-16">
      <Link to="/projects" className="text-base font-medium text-accent hover:underline">
        &larr; {ui.allProjects}
      </Link>

      <Reveal>
        <p className="mt-8 font-mono text-sm uppercase tracking-widest text-accent">
          {ui.statusLabels[project.status]}
        </p>
        <h1 className="mt-2 hyphens-auto text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-2 max-w-prose text-xl text-muted">{project.tagline}</p>
        <p className="mt-3 text-base text-muted">{meta}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-8">
        {project.banner ? (
          <HeroBanner project={project} />
        ) : (
          <figure>
            <ProjectImage
              image={hero}
              className={`w-full rounded-xl border border-line ${hero ? '' : 'aspect-[16/9]'}`}
            />
            {hero?.caption && (
              <figcaption className="mt-2 text-sm text-muted">{hero.caption}</figcaption>
            )}
          </figure>
        )}
      </Reveal>

      {stats.length > 0 && (
        <Reveal className="mt-8">
          {project.resultsTitle && (
            <p className="mb-3 font-mono text-sm uppercase tracking-widest text-muted">
              {project.resultsTitle}
            </p>
          )}
          <div
            className={`grid gap-4 ${stats.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : stats.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}
          >
            {stats.map((r) => (
              <div key={r.label} className="rounded-xl border border-line bg-surface p-5">
                <p className="text-base text-muted">{r.label}</p>
                <p className="mt-1 text-3xl font-bold text-accent">{r.value}</p>
                {r.note && (
                  <p className="mt-1 text-sm text-muted">
                    <RichText text={r.note} />
                  </p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      )}

      <div className="max-w-3xl">
        {project.sections.map((s) => (
          <Reveal key={s.heading} className="mt-12">
            <h2 className="mb-3 text-2xl font-semibold tracking-tight">{s.heading}</h2>
            <div className="space-y-3 text-muted">
              {s.paragraphs?.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
              {s.bullets && (
                <ul className="list-disc space-y-2 pl-5 marker:text-accent">
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <RichText text={b} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {s.table && <DataTable table={s.table} />}
            {s.diagram === 'mppi-flow' && (
              <div className="mt-2">
                <MppiDiagram />
              </div>
            )}
            {s.videos && (
              <div
                className={`mt-5 grid gap-4 ${
                  s.videoLayout === 'grid' ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
                }`}
              >
                {s.videos.map((v, i) => (
                  <figure
                    key={v.src}
                    className={s.videoLayout !== 'grid' && i === 0 ? 'sm:col-span-2' : ''}
                  >
                    <div className="overflow-hidden rounded-xl border border-line">
                      <VideoClip video={v} />
                    </div>
                    <figcaption className="mt-1.5 text-sm text-muted">{v.title}</figcaption>
                  </figure>
                ))}
              </div>
            )}
            {s.placeholderFigures?.map((caption) => (
              <figure key={caption} className="mt-5">
                <ProjectImage className="aspect-[16/9] w-full rounded-xl border border-line" />
                <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
              </figure>
            ))}
            {s.images?.map((img) => (
              <figure key={img.src} className="mt-5">
                <ProjectImage image={img} className="w-full rounded-xl border border-line" />
                {img.caption && (
                  <figcaption className="mt-2 text-sm text-muted">{img.caption}</figcaption>
                )}
              </figure>
            ))}
          </Reveal>
        ))}
      </div>

      {figures.length > 0 && (
        <Reveal className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">{ui.figures}</h2>
          <div className="space-y-6">
            {figures.map((img) => (
              <figure key={img.src}>
                <ProjectImage image={img} className="w-full rounded-xl border border-line" />
                {img.caption && (
                  <figcaption className="mt-2 text-sm text-muted">{img.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </Reveal>
      )}

      {project.links && (
        <Reveal className="mt-12">
          <h2 className="mb-3 text-2xl font-semibold tracking-tight">
            {project.linksTitle ?? ui.links}
          </h2>
          <ul className="space-y-3">
            {project.links.map((l) => (
              <li key={l.url}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  {l.label} &rarr;
                </a>
                {l.note && <span className="text-muted"> · {l.note}</span>}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </article>
  )
}
