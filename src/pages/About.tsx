import { Link } from 'react-router-dom'
import ContactFooter from '../components/ContactFooter'
import SkillGroups from '../components/SkillGroups'
import Kicker from '../components/Kicker'
import HudTop from '../components/HudTop'
import Reveal from '../components/Reveal'
import { profile } from '../content/profile'
import { bulletTexts } from '../content/lanes'
import './about.css'

export default function About() {
  const skillGroups = Object.entries(profile.skills)
  return (
    <div className="about">
      <HudTop status="// IDENTITY FILE" />

      <div className="container about-hero">
        <div>
          <div className="slash" />
          <Kicker>ABOUT — IDENTITY FILE</Kicker>
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
          <Kicker>THE SHORT VERSION</Kicker>
          {profile.aboutBio.map(t => <p key={t.slice(0, 24)}>{t}</p>)}
        </div>
      </section>

      <Reveal type="wipe" className="caution-bar" />

      <section className="track">
        <div className="container">
          <div className="track-head">
            <Kicker>THE LONG VERSION</Kicker>
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
                    {bulletTexts(w.bullets).map(t => (
                      <li key={t.slice(0, 24)}>{t}</li>
                    ))}
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
                    {/* No GPA here — the About card is narrative, and a grade reads as a CV line. */}
                    <span className="yr">{e.yr}{e.honors && ` · ${e.honors}`}</span>
                  </div>
                ))}
              </div>
              <SkillGroups groups={skillGroups} />
            </Reveal>
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>
  )
}
