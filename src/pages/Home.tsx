import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HudTop from '../components/HudTop'
import Reveal from '../components/Reveal'
import { profile } from '../content/profile'
import { projects } from '../content/projects'
import './home.css'

function Clock() {
  const [t, setT] = useState('--:--:--')
  useEffect(() => {
    const id = setInterval(() => setT(new Date().toLocaleTimeString('en-GB')), 1000)
    return () => clearInterval(id)
  }, [])
  return <span>{t}</span>
}

/* Count-up on the status numbers when the strip scrolls in (mockup.html port) */
function StatusStrip() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const strip = ref.current
    if (!strip || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        strip.querySelectorAll('.status-cell .num').forEach(el => {
          const m = el.textContent!.trim().match(/^(\d+)(.*)$/)
          if (!m) return
          const target = +m[1], suffix = m[2], t0 = performance.now(), dur = 900
          el.textContent = '0' + suffix
          const step = (t: number) => {
            const p = Math.min((t - t0) / dur, 1)
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        })
        io.disconnect()
      })
    }, { threshold: 0.4 })
    io.observe(strip)
    return () => io.disconnect()
  }, [])
  return (
    <section className="status-strip" ref={ref}>
      <div className="container">
        <div className="status-grid">
          {profile.stats.map((s, i) => (
            <Reveal key={s.cap} className="status-cell" delay={(i % 4) * 80}>
              <div className="num">{s.num}</div>
              <div className="cap">{s.cap}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const [l1, l2, l3] = profile.heroLines
  return (
    <>
      <HudTop status={<><span className="rec"><span className="blip" />ONLINE</span><Clock /></>} />

      <section className="hero">
        <div className="container">
          <Reveal as="p" className="hud-label kicker" delay={0}><span className="tick">{'//'}</span> 00 — PERSONAL TERMINAL</Reveal>
          <Reveal as="h1" delay={90}>{l1}<br /><span className="hl">{l2}</span><br /><span className="stroke">{l3}</span></Reveal>
          <Reveal as="p" className="role" delay={180}>{profile.role}.</Reveal>
          <Reveal as="p" className="blurb" delay={270}>{profile.blurb}</Reveal>
          <Reveal className="cta" delay={360}>
            <Link className="btn" to="/projects">View Projects</Link>
            <Link className="btn btn--ghost" to="/resume">Read Resume ↗</Link>
          </Reveal>
        </div>
        <span className="watermark">A</span>
        <span className="sticker sticker--1">★ CMU ALUM</span>
        <span className="sticker sticker--2">⚡ GEN-AI</span>
        <span className="sticker sticker--3">🐱 CAT-PERSON</span>
      </section>

      <Reveal type="wipe" className="caution-bar" />

      <StatusStrip />

      <section className="block" id="projects">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <p className="hud-label"><span className="tick">{'//'}</span> 01 — SHOWROOM</p>
              <h2>Selected Work</h2>
            </div>
            <Link className="more" to="/projects">All Projects →</Link>
          </Reveal>
          <div className="proj-grid">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} as="article" delay={(i % 4) * 80}>
                <Link className="proj" to={`/projects/${p.slug}`}>
                  <div className="thumb">
                    {p.thumb && <img src={p.thumb} alt={`${p.title} screenshot`} loading="lazy" />}
                    <span className="idx">{p.idx}</span>
                  </div>
                  <div className="body">
                    <h3>{p.title}</h3>
                    <p>{p.card}</p>
                    <div className="stack">
                      {p.chips.slice(0, 3).map((c, j) => (
                        <span key={c} className={j === 0 ? 'chip chip--hi' : 'chip'}>{c}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal type="wipe" className="caution-bar" />

      <section className="block" id="resume">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <p className="hud-label"><span className="tick">{'//'}</span> 02 — DOSSIER</p>
              <h2>Resume</h2>
            </div>
            <a className="more" href={profile.resumePdf} download>Download PDF ↓</a>
          </Reveal>
          <div className="resume-wrap">
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
              {Object.entries(profile.skills).slice(0, 2).map(([group, items], gi) => (
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

      <footer className="home-footer" id="contact">
        <div className="container">
          <p className="hud-label" style={{ color: 'var(--accent)', marginBottom: 'var(--s-4)' }}>
            <span className="tick">{'//'}</span> 03 — UPLINK
          </p>
          <Reveal className="big">LET&rsquo;S BUILD<br />SOMETHING <a href={`mailto:${profile.email}`}>LOUD →</a></Reveal>
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
    </>
  )
}
