import { useEffect, useState, type ReactNode } from 'react'
import { LocaleContext } from '@/lib/locale-context'
import { getContent } from '@/lib/content'
import { readLanguage, type Language } from '@/lib/localize'

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(readLanguage)
  const content = getContent(language)

  useEffect(() => {
    document.documentElement.lang = language
    document.title = content.ui.pageTitle
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]']) {
      document.querySelector(selector)?.setAttribute('content', content.ui.description)
    }
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', content.ui.pageTitle)
    try {
      localStorage.setItem('language', language)
    } catch {
      // The switch still works when browser storage is unavailable.
    }
  }, [language, content])

  return (
    <LocaleContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LocaleContext.Provider>
  )
}
