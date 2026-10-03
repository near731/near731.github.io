import { Hero } from '@/sections/Hero'
import { Section, Tag } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { Timeline } from '@/components/Timeline'
import { Link } from 'react-router-dom'
import { education } from '@/data/education'
import { achievements, experience } from '@/data/experience'
import { profile } from '@/data/profile'
import { skillGroups } from '@/data/skills'
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/icons'

export function Home() {
  return (
    <>
      <Hero />

      <Section id="about" title="Summary">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[3fr_2fr]">
            <div className="space-y-4 text-muted">
              {profile.summary.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div>
              <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-muted">
                Interests
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

      <Section id="experience" title="My Professional Experience">
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
                  Achievement
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

      <Section id="education" title="Education">
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

      <Section id="skills" title="Skills">
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
            See all skills &rarr;
          </Link>
        </Reveal>
      </Section>

      <Section id="contact" title="Contact">
        <Reveal>
          <p className="mb-6 max-w-prose text-muted">
            Interested in robotics, learning-based control or working together? I'm happy to hear
            from you.
          </p>
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
              <GithubIcon /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-base font-medium hover:border-accent"
            >
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
