import { describe, expect, it } from 'vitest'
import { coursework } from '@/data/coursework'
import { education } from '@/data/education'
import { skillGroups } from '@/data/skills'

describe('site data', () => {
  it('has unique skill names', () => {
    const names = skillGroups.flatMap((g) => g.skills.map((s) => s.name))
    expect(new Set(names).size).toBe(names.length)
  })

  it('lists education newest first', () => {
    expect(education[0].school).toBe('Technical University of Munich')
    expect(education.some((e) => e.degree === 'High School')).toBe(false)
  })

  it('lists each course once and carries no grades', () => {
    const names = coursework.flatMap((g) => g.courses.map((c) => c.name))
    expect(new Set(names).size).toBe(names.length)
    expect(JSON.stringify(coursework)).not.toMatch(/\b[1-5][,.][0-9]\b/)
  })
})
