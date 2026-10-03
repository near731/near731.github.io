import { projectTranslations } from '@/data/locales/projects.de'
import { generalTranslations } from '@/data/locales/general.de'

export type Language = 'en' | 'de'

export const germanTranslations: Record<string, string> = {
  ...projectTranslations,
  ...generalTranslations,
}

// Route identifiers, asset locations and discriminants are shared across languages.
export const sharedFields = new Set([
  'slug',
  'to',
  'url',
  'src',
  'poster',
  'photo',
  'logo',
  'layout',
  'diagram',
  'videoLayout',
  'status',
  'nativeLanguages',
])

export function localize<T>(value: T, language: Language, field = ''): T {
  if (language === 'en' || sharedFields.has(field)) return value
  if (typeof value === 'string') return (germanTranslations[value] ?? value) as T
  if (Array.isArray(value)) return value.map((item) => localize(item, language)) as T
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localize(item, language, key)]),
    ) as T
  }
  return value
}

export function readLanguage(): Language {
  try {
    return localStorage.getItem('language') === 'de' ? 'de' : 'en'
  } catch {
    return 'en'
  }
}
