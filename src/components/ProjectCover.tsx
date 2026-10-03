import type { Project } from '@/data/projects'
import { HeroBanner } from './HeroBanner'
import { ProjectImage } from './ProjectImage'

/** Card cover: the hero with its banner, or a plain figure / placeholder tile without one. */
export function ProjectCover({
  project,
  className = '',
}: {
  project: Project
  className?: string
}) {
  if (project.banner) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <HeroBanner project={project} compact />
      </div>
    )
  }
  return (
    <ProjectImage
      image={project.cover ?? project.hero ?? project.images[0]}
      className={className}
    />
  )
}
