import { createContext } from 'react'
import type { SiteContent } from './content'
import type { Language } from './localize'

export const LocaleContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
  content: SiteContent
} | null>(null)
