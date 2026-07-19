import { NavLink, Link } from 'react-router-dom'
import type { ReactNode } from 'react'

export default function HudTop({ status }: { status: ReactNode }) {
  const cls = ({ isActive }: { isActive: boolean }) => (isActive ? 'here' : '')
  return (
    <header className="hud-top">
      <Link className="brand" to="/">AMOS<span className="dot">.</span>IO</Link>
      <nav>
        <NavLink to="/projects" className={cls}>Projects</NavLink>
        <NavLink to="/resume" className={cls}>Resume</NavLink>
        <NavLink to="/about" className={cls}>About</NavLink>
      </nav>
      <span className="hud-status">{status}</span>
    </header>
  )
}
