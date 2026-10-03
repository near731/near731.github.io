import { useLocale } from '@/hooks/useLocale'

export function LanguageSwitcher() {
  const {
    language,
    setLanguage,
    content: { ui },
  } = useLocale()
  return (
    <div
      role="group"
      aria-label={ui.language}
      className="flex shrink-0 rounded-lg border border-line p-0.5"
    >
      {(['en', 'de'] as const).map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          aria-label={ui.nativeLanguages[option]}
          aria-pressed={language === option}
          onClick={() => setLanguage(option)}
          className={`rounded-md px-2 py-1.5 font-mono text-sm transition-colors ${language === option ? 'bg-accent text-accent-fg' : 'text-muted hover:text-fg'}`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
