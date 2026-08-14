import type { ReactNode } from 'react'

/* The mono label that opens a section, behind an accent // tick.
   The margin below it belongs to whatever encloses it — every page scopes its own
   `.kicker` rule, and there is deliberately no unscoped one. */
export default function Kicker({ children }: { children: ReactNode }) {
  return <p className="hud-label kicker"><span className="tick">{'//'}</span> {children}</p>
}
