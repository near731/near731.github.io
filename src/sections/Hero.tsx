import { ui } from '@/data/ui'
import { profile } from '@/data/profile'
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from '@/components/icons'

const btn =
  'inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-base font-medium transition-colors'

export function Hero() {
  const { links } = profile
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 pb-10 pt-12 text-center sm:px-6 md:pt-20">
      <img
        src={profile.photo}
        alt={profile.photoAlt}
        width={256}
        height={256}
        className="h-52 w-52 rounded-full border-4 border-surface object-cover shadow-lg ring-2 ring-accent sm:h-64 sm:w-64"
      />
      <p className="mt-8 font-mono text-sm uppercase tracking-widest text-accent">
        {profile.role} · {ui.university}
      </p>
      <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
      <p className="mt-3 text-2xl font-medium text-accent">{profile.tagline}</p>
      <p className="mt-5 max-w-prose text-muted">{profile.intro}</p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {links.cv && (
          <a
            href={`${import.meta.env.BASE_URL}${links.cv}`}
            className={`${btn} bg-accent text-accent-fg hover:opacity-90`}
          >
            <DownloadIcon /> {ui.downloadCv}
          </a>
        )}
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn} border border-line hover:border-accent`}
        >
          <GithubIcon /> {ui.github}
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn} border border-line hover:border-accent`}
        >
          <LinkedinIcon /> {ui.linkedin}
        </a>
        <a
          href={`mailto:${links.email}`}
          className={`${btn} border border-line hover:border-accent`}
        >
          <MailIcon /> {ui.email}
        </a>
      </div>
    </section>
  )
}
