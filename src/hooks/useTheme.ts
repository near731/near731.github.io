import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const current = (): Theme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(current)

  // Follow the system preference until the user picks a theme explicitly.
  useEffect(() => {
    const mq = matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem('theme')) return
      } catch {
        /* storage unavailable */
      }
      document.documentElement.classList.toggle('dark', e.matches)
      setTheme(e.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    const next: Theme = current() === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* storage unavailable */
    }
    setTheme(next)
  }, [])

  return { theme, toggle }
}
