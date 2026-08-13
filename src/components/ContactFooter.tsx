import Reveal from './Reveal'
import { profile } from '../content/profile'

/* The rich footer — CTA, copyright, social row — on the landing page and About.
   SiteFooter is the slim one the showroom and story pages use; the two are unrelated.
   No props: the pages differed only by a copyright note and a padding step, and both
   were unified. #contact is an anchor for links shared before it existed; <Routes>
   renders one page at a time, so it can never collide. */
export default function ContactFooter() {
  return (
    <footer className="contact-footer" id="contact">
      <div className="container">
        <p className="hud-label kicker"><span className="tick">{'//'}</span> UPLINK</p>
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
