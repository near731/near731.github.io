import { ui } from '@/data/ui'
import { useEffect, useRef, useState } from 'react'
import type { ProjectVideo } from '@/data/projects'

const prefersReducedMotion = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Simulation clip. The hero loops silently while visible (with a pause button), unless the user
 * prefers reduced motion; every other clip shows a poster and starts on click.
 */
export function VideoClip({ video, hero = false }: { video: ProjectVideo; hero?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null)
  // True after the visitor pressed Pause: scrolling back must not restart the clip.
  const userPaused = useRef(false)
  const [autoplay] = useState(() => hero && !prefersReducedMotion())
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !autoplay) return
    el.muted = true
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPaused.current) el.play().catch(() => {})
        } else el.pause()
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [autoplay])

  const toggle = () => {
    const el = ref.current
    if (!el) return
    if (el.paused) {
      userPaused.current = false
      el.play().catch(() => {})
    } else {
      userPaused.current = true
      el.pause()
    }
  }

  return (
    <div className="relative aspect-video overflow-hidden bg-black">
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        muted
        loop={autoplay}
        playsInline
        controls={!autoplay}
        preload={autoplay ? 'auto' : 'none'}
        aria-label={video.title}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-contain"
      />
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-slate-900/85 px-3 py-1 font-mono text-sm text-white">
        {ui.video.simulation}
      </span>
      {video.legend && (
        <span className="pointer-events-none absolute bottom-3 left-3 flex max-w-[calc(100%-6rem)] flex-wrap items-center gap-x-4 gap-y-1 rounded-lg bg-slate-900/85 px-3 py-1.5 text-sm text-white">
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-red-500" />
            {ui.video.flowPrior}
          </span>
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-blue-500" />
            {ui.video.cem}
          </span>
        </span>
      )}
      {autoplay && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? ui.video.pauseLabel : ui.video.playLabel}
          className="absolute bottom-3 right-3 rounded-full bg-slate-900/85 px-3 py-1.5 text-sm text-white hover:bg-slate-900"
        >
          {playing ? ui.video.pause : ui.video.play}
        </button>
      )}
    </div>
  )
}
