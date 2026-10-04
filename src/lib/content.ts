import { profile } from '@/data/profile'
import { cvDownloads } from '@/data/cv'
import { experience, achievements } from '@/data/experience'
import { education } from '@/data/education'
import { coursework } from '@/data/coursework'
import { skillGroups, languages, personalInterests } from '@/data/skills'
import { projects } from '@/data/projects'
import { ui, plannerDiagram } from '@/data/ui'
import { localize, type Language } from './localize'

export const englishContent = {
  profile,
  experience,
  achievements,
  education,
  coursework,
  skillGroups,
  languages,
  personalInterests,
  projects,
  ui,
  plannerDiagram,
}
export type SiteContent = typeof englishContent

const germanContent: SiteContent = localize(englishContent, 'de')
germanContent.profile = {
  ...germanContent.profile,
  links: { ...germanContent.profile.links, cv: cvDownloads.de },
}
// Show German originals once, while retaining official English course names.
germanContent.coursework = germanContent.coursework.map((group) => ({
  ...group,
  courses: group.courses.map((course) => (course.original ? { name: course.original } : course)),
}))

export const getContent = (language: Language): SiteContent =>
  language === 'de' ? germanContent : englishContent
