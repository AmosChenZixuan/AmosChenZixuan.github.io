import HudTop from '../components/HudTop'
import Reveal from '../components/Reveal'
import { profile } from '../content/profile'
import './about.css'

export default function About() {
  const [firstGroup, ...restGroups] = Object.entries(profile.skills)
  return (
    <div className="about">
      <HudTop status="// IDENTITY FILE" />

      <div className="container about-hero">
        <div>
          <div className="slash" />
          <p className="hud-label kicker"><span className="tick">{'//'}</span> ABOUT — IDENTITY FILE</p>
          <h1>Digital <em>Alchemist.</em></h1>
          <p className="lead">{profile.aboutLead}</p>
        </div>
        <div className="portrait">
          <span className="tape">★ {profile.alias.toUpperCase()}</span>
          <img src="/me.jpg" alt={`${profile.name} (${profile.alias})`} />
        </div>
      </div>

      <section className="bio">
        <div className="container read">
          <p className="hud-label kicker"><span className="tick">{'//'}</span> 01 — THE SHORT VERSION</p>
          {profile.aboutBio.map(t => <p key={t.slice(0, 24)}>{t}</p>)}
        </div>
      </section>

      <section className="titles">
        <div className="container inner">
          <h2><small>{'//'} STATUS</small>Titles &amp;<br />Honors</h2>
          <ul>
            {profile.funTitles.map(t => (
              <li key={t.k}><span className="k">{t.k}</span><span className="v">{t.v}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="track">
        <div className="container">
          <div className="section-head">
            <p className="hud-label kicker"><span className="tick">{'//'}</span> 02 — THE LONG VERSION</p>
            <h2>Track Record</h2>
          </div>
          <div className="cols">
            <div className="timeline">
              {profile.work.map((w, i) => (
                <Reveal key={w.title} className="tl-item" delay={(i % 4) * 80}>
                  <div className="when">{w.when}</div>
                  <h3>{w.title}</h3>
                  <p>{w.bullets[0]}</p>
                </Reveal>
              ))}
            </div>
            <Reveal type="left" as="aside" className="skills-card hud-frame">
              {[firstGroup, ...restGroups].map(([group, items], gi) => (
                <div key={group}>
                  <h4>{group}</h4>
                  <div className="row">
                    {items.map(s => <span key={s} className={gi === 0 ? 'chip chip--hi' : 'chip'}>{s}</span>)}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="contact">
        <div className="container">
          <p className="hud-label kicker"><span className="tick">{'//'}</span> 03 — UPLINK</p>
          <div className="big">WORK WITH ME?<br /><a href={`mailto:${profile.email}`}>SAY HI →</a></div>
          <div className="meta">
            <span>© 2026 AMOS.IO — ABOUT</span>
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
    </div>
  )
}
