import type { Project } from '@/data/projects'
import { VideoClip } from './VideoClip'

const STRIP_BG =
  'linear-gradient(to top, rgb(8 15 30 / 0.92) 0%, rgb(8 15 30 / 0.78) 55%, rgb(8 15 30 / 0) 100%)'

function Chip({ value, label, small }: { value: string; label: string; small: boolean }) {
  return (
    <span
      className={`rounded-full border border-white/30 bg-white/10 text-white ${
        small ? 'px-2.5 py-0.5 text-sm' : 'px-3 py-1 text-base'
      }`}
    >
      <span className="font-bold">{value}</span> <span className="opacity-90">{label}</span>
    </span>
  )
}

function BannerText({ project, compact }: { project: Project; compact: boolean }) {
  const stats = (project.results ?? []).slice(0, 3)
  const kicker = project.banner?.kicker
  return (
    <>
      {kicker && !compact && (
        <p className="font-mono text-sm uppercase tracking-widest text-white/80">{kicker}</p>
      )}
      {!compact && (
        <p aria-hidden="true" className="mt-1 text-2xl font-bold leading-tight">
          {project.title}
        </p>
      )}
      <div className={`flex flex-wrap gap-2 ${compact ? '' : 'mt-3'}`}>
        {stats.map((s) => (
          <Chip key={s.label} value={s.value} label={s.label} small={compact} />
        ))}
      </div>
    </>
  )
}

/**
 * Hero figure (image or looping clip) with a dark banner showing kicker, title and key numbers.
 * `overlay` draws the banner over the bottom of the image, `stacked` puts it under the figure.
 * `compact` is the card cover on the overview page.
 */
export function HeroBanner({ project, compact = false }: { project: Project; compact?: boolean }) {
  const banner = project.banner
  if (!banner) return null
  const video = compact ? undefined : project.heroVideo
  const image = compact ? (project.cover ?? project.hero) : project.hero
  const [start, end] = banner.endLabels ?? []

  const media = video ? (
    <VideoClip video={video} hero />
  ) : image ? (
    <img
      src={image.src}
      alt={image.alt}
      className={compact ? 'h-full w-full object-contain' : 'block w-full'}
    />
  ) : null

  if (banner.layout === 'overlay') {
    return (
      <figure className={compact ? 'h-full' : ''}>
        <div
          className={`relative overflow-hidden bg-white ${
            compact ? 'h-full' : 'rounded-xl border border-line'
          }`}
        >
          <div className={compact ? 'relative h-full' : 'relative'}>
            {media}
            {!compact && start && end && (
              <>
                <span className="absolute left-3 top-3 rounded-full bg-slate-900/85 px-3 py-1 font-mono text-sm text-white">
                  {start}
                </span>
                <span className="absolute bottom-[27%] right-3 rounded-full bg-slate-900/85 px-3 py-1 font-mono text-sm text-white">
                  {end}
                </span>
              </>
            )}
          </div>
          <div
            className={`text-white ${
              compact
                ? 'absolute inset-x-0 bottom-0 px-3 pb-2 pt-8'
                : 'relative bg-slate-900 px-5 py-4 sm:absolute sm:inset-x-0 sm:bottom-0 sm:bg-transparent sm:px-6 sm:pb-4 sm:pt-14'
            }`}
            style={{ backgroundImage: STRIP_BG }}
          >
            <BannerText project={project} compact={compact} />
          </div>
        </div>
        {!compact && image?.caption && (
          <figcaption className="mt-2 text-sm text-muted">{image.caption}</figcaption>
        )}
      </figure>
    )
  }

  // stacked
  if (compact) {
    return (
      <div className="flex h-full flex-col">
        <div className="min-h-0 flex-1 overflow-hidden bg-white">{media}</div>
        <div className="bg-slate-900 px-3 py-2 text-white">
          <BannerText project={project} compact />
        </div>
      </div>
    )
  }
  return (
    <figure>
      <div className="overflow-hidden rounded-xl border border-line bg-white">{media}</div>
      <div className="mt-3 rounded-xl bg-slate-900 px-5 py-4 text-white sm:px-6">
        <BannerText project={project} compact={false} />
      </div>
      {!video && image?.caption && (
        <figcaption className="mt-2 text-sm text-muted">{image.caption}</figcaption>
      )}
    </figure>
  )
}
