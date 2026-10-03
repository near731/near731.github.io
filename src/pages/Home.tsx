import { ui } from '@/data/ui'
import { Hero } from '@/sections/Hero'
import { Section, Tag } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { Timeline } from '@/components/Timeline'
import { Link } from 'react-router-dom'
import { coursework } from '@/data/coursework'
import { education } from '@/data/education'
import { achievements, experience } from '@/data/experience'
import { profile } from '@/data/profile'
import { skillGroups } from '@/data/skills'
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/icons'

export function Home() {
  return (
    <>
      <Hero />

      <Section id="about" title={ui.summary}>
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[3fr_2fr]">
            <div className="space-y-4 text-muted">
              {profile.summary.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div>
              <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-muted">
                {ui.interests}
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((i) => (
                  <Tag key={i}>{i}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="experience" title={ui.experience}>
        <Timeline
          entries={experience.map((e) => ({
            key: e.title + e.period,
            title: e.title,
            subtitle: `${e.org}, ${e.place}`,
            period: e.period,
            logo: e.logo,
            lines: e.bullets,
            footer: e.tags.map((t) => <Tag key={t}>{t}</Tag>),
          }))}
        />
        <div className="mt-10 space-y-3">
          {achievements.map((a) => (
            <Reveal key={a.title}>
              <div className="rounded-xl border border-line bg-surface p-5">
                <p className="font-mono text-sm uppercase tracking-widest text-accent">
                  {ui.achievement}
                </p>
                <h3 className="mt-1 font-semibold">{a.title}</h3>
                <p className="text-base text-muted">
                  {a.date} · {a.place}
                </p>
                <p className="mt-2 text-base text-muted">{a.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="education" title={ui.education}>
        <Timeline
          entries={education.map((e) => ({
            key: e.degree + e.period,
            title: e.degree,
            subtitle: e.school,
            period: e.period,
            logo: e.logo,
            lines: e.details,
          }))}
        />
      </Section>

      <Section id="coursework" title={ui.coursework}>
        <div className="grid items-start gap-6 md:grid-cols-3">
          {coursework.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div className="rounded-xl border border-line bg-surface p-5">
                <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
                  {g.title}
                </h3>
                <ul className="divide-y divide-line">
                  {g.courses.map((c) => (
                    <li key={c.name} className="py-3 first:pt-0 last:pb-0">
                      <span className="block text-[0.92rem] font-medium leading-snug">
                        {c.name}
                      </span>
                      {c.original && (
                        <span className="mt-0.5 block text-[0.8rem] text-muted">{c.original}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="skills" title={ui.skills}>
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups
            .filter((g) => g.skills.some((s) => s.featured))
            .map((g, i) => (
              <Reveal key={g.title} delay={i * 60}>
                <div className="h-full rounded-xl border border-line bg-surface p-5">
                  <h3 className="mb-3 font-semibold">{g.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {g.skills
                      .filter((s) => s.featured)
                      .map((s) => (
                        <Tag key={s.name}>{s.name}</Tag>
                      ))}
                  </div>
                </div>
              </Reveal>
            ))}
        </div>
        <Reveal>
          <Link
            to="/skills"
            className="mt-6 inline-block text-base font-medium text-accent hover:underline"
          >
            {ui.allSkills} &rarr;
          </Link>
        </Reveal>
      </Section>

      <Section id="contact" title={ui.contact}>
        <Reveal>
          <p className="mb-6 max-w-prose text-muted">{ui.contactIntro}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-base font-medium text-accent-fg hover:opacity-90"
            >
              <MailIcon /> {profile.links.email}
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-base font-medium hover:border-accent"
            >
              <GithubIcon /> {ui.github}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-base font-medium hover:border-accent"
            >
              <LinkedinIcon /> {ui.linkedin}
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
