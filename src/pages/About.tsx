import { Link } from 'react-router-dom'
import ContactFooter from '../components/ContactFooter'
import HudTop from '../components/HudTop'
import Reveal from '../components/Reveal'
import { profile } from '../content/profile'
import './about.css'

export default function About() {
  const skillGroups = Object.entries(profile.skills)
  return (
    <div className="about">
      <HudTop status="// IDENTITY FILE" />

      <div className="container about-hero">
        <div>
          <div className="slash" />
          <p className="hud-label kicker"><span className="tick">{'//'}</span> ABOUT — IDENTITY FILE</p>
          <h1>Digital <em>Alchemist.</em></h1>
          <p className="lead">{profile.aboutLead}</p>
          <div className="about-status">
            <span><i>BASED</i>{profile.location}</span>
            <span><i>OPEN TO</i>{profile.openTo}</span>
            <Link className="cv" to="/resume">RESUME →</Link>
          </div>
        </div>
        <div className="portrait">
          <span className="tape">★ {profile.alias.toUpperCase()}</span>
          <img src="/me.jpg" alt={`${profile.name} (${profile.alias})`} />
        </div>
      </div>

      <section className="bio">
        <div className="container read">
          <p className="hud-label kicker"><span className="tick">{'//'}</span> THE SHORT VERSION</p>
          {profile.aboutBio.map(t => <p key={t.slice(0, 24)}>{t}</p>)}
        </div>
      </section>

      <section className="track">
        <div className="container">
          <div className="section-head">
            <p className="hud-label kicker"><span className="tick">{'//'}</span> THE LONG VERSION</p>
            <h2>Track Record</h2>
          </div>
          <div className="cols">
            <div className="timeline">
              <Reveal className="tl-item tl-item--now">
                <div className="when">{profile.now.when} · {profile.now.loc}</div>
                <h3>{profile.now.title}</h3>
                <ul>
                  {profile.now.bullets.map(b => <li key={b.slice(0, 24)}>{b}</li>)}
                </ul>
              </Reveal>
              {profile.work.map((w, i) => (
                <Reveal key={w.title} className="tl-item" delay={(i % 4) * 80}>
                  <div className="when">{w.when} · {w.loc}</div>
                  <h3>{w.title}</h3>
                  <ul>
                    {w.bullets.map(b => <li key={b.slice(0, 24)}>{b}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
            <Reveal type="left" as="aside" className="skills-card hud-frame">
              <h4>Education</h4>
              <div className="edu">
                {profile.education.map(e => (
                  <div key={e.deg}>
                    <b>{e.deg}</b>
                    <span>{e.sch}</span>
                    <span className="yr">{e.yr.replace(/ · GPA [\d./]+/, '')}</span>
                  </div>
                ))}
              </div>
              {skillGroups.map(([group, items], gi) => (
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

      <ContactFooter />
    </div>
  )
}
