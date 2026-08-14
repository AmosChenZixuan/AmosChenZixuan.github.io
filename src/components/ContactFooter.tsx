import Reveal from './Reveal'
import Kicker from './Kicker'
import { profile } from '../content/profile'

/* The site's only footer — CTA, copyright, social row. Every page ends on it.
   The fixed #contact id can never collide: <Routes> renders one page at a time. */
export default function ContactFooter() {
  return (
    <footer className="contact-footer" id="contact">
      <div className="container">
        <Kicker>UPLINK</Kicker>
        <Reveal className="big">{profile.cta.lead}<br /><a href={`mailto:${profile.email}`}>{profile.cta.link}</a></Reveal>
        <div className="meta">
          <span>© 2026 AMOS.IO — {profile.name} ({profile.alias})</span>
          <span>
            <a href={profile.github} target="_blank" rel="noopener">GITHUB</a>
            {' · '}
            <a href={profile.linkedin} target="_blank" rel="noopener">LINKEDIN</a>
            {' · '}
            <a href={`mailto:${profile.email}`}>EMAIL</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
