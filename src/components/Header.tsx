import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { profile } from '@/data/profile'
import { useTheme } from '@/hooks/useTheme'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
]

export function Header() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-base font-medium transition-colors ${
      isActive ? 'text-accent' : 'text-muted hover:text-fg'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link to="/" aria-label="Home">
          <img
            src={profile.photo}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-line object-cover"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 sm:flex">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
          {profile.links.cv && (
            <a
              href={`${import.meta.env.BASE_URL}${profile.links.cv}`}
              className="ml-2 rounded-md border border-line px-3 py-1.5 text-base font-medium transition-colors hover:border-accent hover:text-accent"
            >
              CV
            </a>
          )}
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="ml-1 rounded-md p-2 text-muted transition-colors hover:text-fg"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>

        <div className="flex items-center gap-1 sm:hidden">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="rounded-md p-2 text-muted"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-md p-2 text-muted"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="flex flex-col border-t border-line bg-bg px-4 py-2 sm:hidden"
        >
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </NavLink>
          ))}
          {profile.links.cv && (
            <a
              href={`${import.meta.env.BASE_URL}${profile.links.cv}`}
              className="rounded-md px-3 py-2 text-base font-medium text-muted hover:text-fg"
            >
              Download CV
            </a>
          )}
        </nav>
      )}
    </header>
  )
}
