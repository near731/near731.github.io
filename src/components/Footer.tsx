import { useContent } from '@/hooks/useLocale'

export function Footer() {
  const { profile } = useContent()
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 text-base text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-sm">{profile.location}</p>
      </div>
    </footer>
  )
}
