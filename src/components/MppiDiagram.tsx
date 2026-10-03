import { useContent } from '@/hooks/useLocale'
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
export function MppiDiagram() {
  const { plannerDiagram } = useContent()
  return (
    <div
      role="group"
      aria-label={plannerDiagram.description}
      className="mx-auto max-w-2xl rounded-xl border border-line bg-surface/60 p-4 sm:p-6"
    >
      <div className="flex flex-col gap-2">
        <Box
          title={
            <>
              {plannerDiagram.state} x<sub>k</sub>
            </>
          }
        >
          {plannerDiagram.stateDetail}
        </Box>
        <Arrow />
        <div className="grid gap-3 sm:grid-cols-2">
          <Box title={plannerDiagram.cem}>{plannerDiagram.cemDetail}</Box>
          <Box title={plannerDiagram.prior}>{plannerDiagram.priorDetail}</Box>
        </div>
        <Arrow />
        <Box title={plannerDiagram.rollouts}>{plannerDiagram.rolloutsDetail}</Box>
        <Arrow />
        <Box title={plannerDiagram.simulation} strong>
          {plannerDiagram.simulationDetail}
        </Box>
        <Arrow />
        <Box title={plannerDiagram.selection}>{plannerDiagram.selectionDetail}</Box>
        <Arrow />
        <Box
          title={
            <>
              {plannerDiagram.action} u<sub>k</sub>
            </>
          }
        >
          {plannerDiagram.actionDetail}
        </Box>
      </div>
      <p className="mt-4 rounded-lg border border-dashed border-line px-3 py-2 text-center text-base text-muted">
        <span aria-hidden="true">↺ </span>x<sub>k+1</sub> = f(x<sub>k</sub>, u<sub>k</sub>):{' '}
        {plannerDiagram.feedback}
      </p>
    </div>
  )
}
