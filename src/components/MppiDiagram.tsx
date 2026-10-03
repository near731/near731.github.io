import type { ReactNode } from 'react'

function Box({
  title,
  children,
  strong = false,
}: {
  title: ReactNode
  children?: ReactNode
  strong?: boolean
}) {
  return (
    <div
      className={`flex-1 rounded-xl border px-4 py-3 text-center ${
        strong ? 'border-accent bg-accent-soft' : 'border-line bg-surface'
      }`}
    >
      <p className="font-semibold leading-snug">{title}</p>
      {children && <p className="mt-0.5 text-base text-muted">{children}</p>}
    </div>
  )
}

function Arrow() {
  return (
    <span aria-hidden="true" className="self-center text-2xl leading-none text-accent">
      ↓
    </span>
  )
}

/**
 * Redrawn from the owner's report figure: state -> two proposal sources -> parallel rollouts ->
 * cost and elite selection -> executed action, closing the loop through the state update.
 */
export function MppiDiagram({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">Planner loop</p>
        <p className="text-base font-medium">Flow prior + CEM sampling</p>
        <span aria-hidden="true" className="text-accent">
          ↓
        </span>
        <p className="text-base font-medium">500 parallel rollouts</p>
        <span aria-hidden="true" className="text-accent">
          ↓
        </span>
        <p className="text-base font-medium">Cost &amp; elite selection</p>
      </div>
    )
  }
  return (
    <div
      role="group"
      aria-label="Planner loop: from the robot and object state, candidates come from a learned flow-matching prior and from CEM sampling, 500 sequences are rolled out in parallel in Isaac Lab, the cheapest are selected, and the executed action leads to the next state."
      className="mx-auto max-w-2xl rounded-xl border border-line bg-surface/60 p-4 sm:p-6"
    >
      <div className="flex flex-col gap-2">
        <Box
          title={
            <>
              State x<sub>k</sub>
            </>
          }
        >
          robot + object
        </Box>
        <Arrow />
        <div className="grid gap-3 sm:grid-cols-2">
          <Box title="CEM sampling">Gaussian, about 25% of the candidates</Box>
          <Box title="Flow-matching prior">learned, about 75% of the candidates</Box>
        </div>
        <Arrow />
        <Box title="Rollouts">K = 500 action sequences, 16 steps each</Box>
        <Arrow />
        <Box title="Parallel Isaac Lab rollout" strong>
          all sequences simulated in parallel
        </Box>
        <Arrow />
        <Box title="Cost & elite selection">the best candidates form the next plan</Box>
        <Arrow />
        <Box
          title={
            <>
              Executed action u<sub>k</sub>
            </>
          }
        >
          first part of the plan, tracked by CRISP
        </Box>
      </div>
      <p className="mt-4 rounded-lg border border-dashed border-line px-3 py-2 text-center text-base text-muted">
        <span aria-hidden="true">↺ </span>x<sub>k+1</sub> = f(x<sub>k</sub>, u<sub>k</sub>): the new
        state starts the next planning step
      </p>
    </div>
  )
}
