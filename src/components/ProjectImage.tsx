import { ui } from '@/data/ui'
import type { ProjectImage as Img } from '@/data/projects'

/** Renders the project image, or a themed "Placeholder" tile when there is none yet. */
export function ProjectImage({ image, className = '' }: { image?: Img; className?: string }) {
  if (!image) {
    return (
      <div
        role="img"
        aria-label={ui.placeholderAlt}
        className={`flex items-center justify-center border-line bg-accent-soft font-mono text-lg uppercase tracking-widest text-accent ${className}`}
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent 0 14px, rgb(128 128 128 / 0.08) 14px 15px)',
        }}
      >
        {ui.placeholder}
      </div>
    )
  }
  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className={`bg-white object-contain ${className}`}
    />
  )
}
