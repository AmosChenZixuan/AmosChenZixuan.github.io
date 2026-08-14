import { NavLink, Link } from 'react-router-dom'
import type { ReactNode } from 'react'

const routes = [
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/about', label: 'About' },
]

export default function HudTop({ status }: { status: ReactNode }) {
  const cls = ({ isActive }: { isActive: boolean }) => (isActive ? 'here' : '')
  const links = routes.map(r => <NavLink key={r.to} to={r.to} className={cls}>{r.label}</NavLink>)
  return (
    <>
      <header className="hud-top">
        <Link className="brand" to="/">AMOS<span className="dot">.</span>IO</Link>
        <nav>{links}</nav>
        <span className="hud-status">{status}</span>
      </header>
      {/* The same links as a bottom dock — on a phone the top bar has no room for a nav. */}
      <nav className="nav-dock" aria-label="Sections">{links}</nav>
    </>
  )
}
