import { ui } from '@/data/ui'
import { Section, Tag } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { languages, personalInterests, skillGroups } from '@/data/skills'

export function Skills() {
  return (
    <div className="pt-6">
      <Section title={ui.skills} level={1}>
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <div className="h-full rounded-xl border border-line bg-surface p-5">
                <h3 className="mb-4 font-semibold">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <Tag key={s.name}>{s.name}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title={ui.languages}>
        <div className="grid gap-4 sm:grid-cols-3">
          {languages.map((l, i) => (
            <Reveal key={l.name} delay={i * 70}>
              <div className="rounded-xl border border-line bg-surface p-5">
                <p className="font-semibold">{l.name}</p>
                <p className="font-mono text-base text-accent">{l.level}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-sm uppercase tracking-widest text-muted">
              {ui.beyondWork}
            </span>
            {personalInterests.map((i) => (
              <Tag key={i}>{i}</Tag>
            ))}
          </div>
        </Reveal>
      </Section>
    </div>
  )
}
