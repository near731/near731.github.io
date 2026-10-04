import { describe, expect, it } from 'vitest'
import { englishContent, getContent } from '@/lib/content'
import { germanTranslations, localize, readLanguage, sharedFields } from '@/lib/localize'

function strings(value: unknown, field = ''): string[] {
  if (sharedFields.has(field)) return []
  if (typeof value === 'string') return [value]
  if (Array.isArray(value)) return value.flatMap((item) => strings(item))
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, item]) => strings(item, key))
  }
  return []
}

describe('language content', () => {
  it('keeps original English content and defaults to English', () => {
    expect(getContent('en')).toBe(englishContent)
    expect(readLanguage()).toBe('en')
  })

  it('covers prose with German translations or explicit retained terms', () => {
    const missing = [...new Set(strings(englishContent))].filter(
      (value) =>
        /[a-zA-Z]{2}/.test(value) &&
        !(value in germanTranslations) &&
        !retainedTerms.has(value) &&
        !/^[\d\s.,%/–+×²=α]+(?:kg²?|cm²?|s|m|m\/s|Hz|kHz|Nm)?$/.test(value) &&
        !/^https?:|^\/|^@|\.webp$|\.jpg$|\.svg$|\.png$/.test(value),
    )
    expect(missing).toEqual([])
  })

  it('preserves routes, files, links, numbers and technical identifiers', () => {
    const de = getContent('de')
    for (let i = 0; i < englishContent.projects.length; i++) {
      const enProject = englishContent.projects[i]
      const deProject = de.projects[i]
      expect(deProject.slug).toBe(enProject.slug)
      expect(deProject.status).toBe(enProject.status)
      expect(
        deProject.results?.map((r) =>
          r.value.match(/\d+(?:[.,]\d+)?/g)?.map((n) => n.replace(',', '.')),
        ),
      ).toEqual(
        enProject.results?.map((r) =>
          r.value.match(/\d+(?:[.,]\d+)?/g)?.map((n) => n.replace(',', '.')),
        ),
      )
      expect(deProject.links?.map((l) => l.url)).toEqual(enProject.links?.map((l) => l.url))
      expect(deProject.heroVideo?.src).toBe(enProject.heroVideo?.src)
      expect(deProject.cover?.src).toBe(enProject.cover?.src)
      expect(deProject.sections.map((s) => s.diagram)).toEqual(
        enProject.sections.map((s) => s.diagram),
      )
    }
    expect(de.profile.links).toEqual({
      ...englishContent.profile.links,
      cv: 'cv/Aron_Imre_Nemeth_CV_DE.pdf',
    })
    expect(englishContent.profile.links.cv).toBe('cv/Aron_Imre_Nemeth_CV_EN.pdf')
    expect(localize({ slug: 'Projects', url: 'Home', layout: 'overlay' }, 'de')).toEqual({
      slug: 'Projects',
      url: 'Home',
      layout: 'overlay',
    })
  })

  it('uses German course originals once without altering English coursework', () => {
    const en = englishContent.coursework.flatMap((g) => g.courses)
    const de = getContent('de').coursework.flatMap((g) => g.courses)
    for (let i = 0; i < en.length; i++) {
      if (en[i].original) {
        expect(de[i].name).toBe(en[i].original)
        expect(de[i].original).toBeUndefined()
      }
    }
    expect(en.some((c) => c.original)).toBe(true)
  })
})

const retainedTerms = new Set([
  'Áron Imre Németh',
  'Antra ID Kft.',
  'Budaörs',
  'Deep Learning',
  'Reinforcement Learning',
  'Machine Learning',
  'Flow Matching',
  'Isaac Lab',
  'Franka',
  'ROS 2',
  'MPC',
  'C++',
  'Isaac Lab / Isaac Sim',
  'Franka (FCI / libfranka)',
  'RViz',
  'PyTorch',
  'scikit-learn',
  'pandas',
  'NumPy',
  'MPC / MPPI',
  'MATLAB',
  'Python',
  'C',
  'CUDA',
  'Git',
  'Docker',
  'Linux',
  'LaTeX',
  'Microsoft Office',
  'C1',
  'Anime',
  'CV',
  'GitHub',
  'LinkedIn',
  'Links',
  'Simulation',
  'Pause',
  'Rollouts',
  'Introduction to Deep Learning',
  'Hands-on Deep Learning',
  'Physics-Informed Machine Learning',
  'Advanced Deep Learning for Computer Vision: Visual Computing',
  'Machine Learning (IN2064)',
  'Adaptive and Learning-based Control',
  'Optimal Control and Decision Making',
  'Advanced Deep Learning for Robotics',
  'Introduction to ROS',
  'Computergestützter Regelungsentwurf',
  'Moderne Methoden der Regelungstechnik 1',
  'Moderne Methoden der Regelungstechnik 2',
  'Roboterdynamik',
  'aron_imre.nemeth@tum.de',
])
