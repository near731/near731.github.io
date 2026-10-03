import { describe, expect, it } from 'vitest'
import { projects } from '@/data/projects'

describe('projects data', () => {
  it('has unique slugs', () => {
    const slugs = projects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('gives every image alt text', () => {
    for (const p of projects) for (const img of p.images) expect(img.alt.length).toBeGreaterThan(10)
  })

  it('resolves every video and poster file', () => {
    for (const p of projects) {
      const clips = [p.heroVideo, ...p.sections.flatMap((s) => s.videos ?? [])]
      for (const v of clips) {
        if (!v) continue
        expect(v.src, v.title).toBeTruthy()
        expect(v.poster, v.title).toBeTruthy()
      }
    }
  })
})
