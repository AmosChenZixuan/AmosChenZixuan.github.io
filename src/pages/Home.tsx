import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HudTop from '../components/HudTop'
import Reveal from '../components/Reveal'
import { profile } from '../content/profile'
import { projects } from '../content/projects'
import './home.css'

/* Magnetic sticker field — the cursor shoves badges aside and they spring back. The
   --tx/--ty contract with home.css is documented there, next to the properties it names.
   `capture` is the dead zone: inside it the push fades back to nothing, so a badge you
   commit to settles under the cursor and can be hovered. Without it the force only grows
   as you approach and the badge outruns you forever. */
const MAG = { radius: 340, capture: 96, push: 74, falloff: 1.3, stiffness: 0.14, damping: 0.76, sleep: 0.05 }

function useMagneticStickers(heroRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const hero = heroRef.current
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const els = [...hero.querySelectorAll<HTMLElement>('.sticker')]
    if (!els.length) return

    const spring = els.map(() => ({ x: 0, y: 0, vx: 0, vy: 0 }))
    let rest: { cx: number; cy: number }[] = []
    let live = false
    let mouse: { x: number; y: number } | null = null
    let raf = 0

    // Centres relative to the hero, taken with any displacement zeroed. `live` is read off
    // the layout rather than duplicating home.css's breakpoint: below it the badges drop out
    // of absolute positioning into a plain flow row, where displacing them makes no sense.
    // `position` is the probe because it is exactly what distinguishes the two modes.
    const measure = () => {
      live = getComputedStyle(els[0]).position === 'absolute'
      if (!live) return
      els.forEach(el => { el.style.setProperty('--tx', '0px'); el.style.setProperty('--ty', '0px') })
      const h = hero.getBoundingClientRect()
      rest = els.map(el => {
        const b = el.getBoundingClientRect()
        return { cx: b.left - h.left + b.width / 2, cy: b.top - h.top + b.height / 2 }
      })
    }

    const frame = () => {
      // Viewport-relative, re-read per frame: the hero moves under scroll, and the loop can
      // still be settling then. Only read it when there's a cursor to measure against.
      const h = mouse ? hero.getBoundingClientRect() : null
      let awake = false
      els.forEach((el, i) => {
        let tx = 0, ty = 0
        if (h && mouse) {
          const dx = rest[i].cx + h.left - mouse.x
          const dy = rest[i].cy + h.top - mouse.y
          const dist = Math.hypot(dx, dy)
          // Ring-shaped field: nothing at the centre, strongest at the capture edge,
          // fading out at the radius. The two branches meet at dist === capture, and the
          // first yields f === 0 at dist === 0, so the divisions below are always guarded.
          const f = dist < MAG.capture
            ? (dist / MAG.capture) * MAG.push
            : dist < MAG.radius
              ? (1 - (dist - MAG.capture) / (MAG.radius - MAG.capture)) ** MAG.falloff * MAG.push
              : 0
          if (f) { tx = (dx / dist) * f; ty = (dy / dist) * f }
        }
        const s = spring[i]
        s.vx = (s.vx + (tx - s.x) * MAG.stiffness) * MAG.damping
        s.vy = (s.vy + (ty - s.y) * MAG.stiffness) * MAG.damping
        s.x += s.vx; s.y += s.vy
        if (Math.hypot(s.vx, s.vy) + Math.hypot(tx - s.x, ty - s.y) > MAG.sleep) awake = true
        el.style.setProperty('--tx', `${s.x.toFixed(2)}px`)
        el.style.setProperty('--ty', `${s.y.toFixed(2)}px`)
      })
      raf = awake ? requestAnimationFrame(frame) : 0   // idle out when everything has settled
    }

    const wake = () => { if (live && !raf) raf = requestAnimationFrame(frame) }
    const onMove = (e: MouseEvent) => { mouse = { x: e.clientX, y: e.clientY }; wake() }
    const onLeave = () => { mouse = null; wake() }
    const onResize = () => { measure(); wake() }

    raf = requestAnimationFrame(() => { measure(); raf = 0 })   // measure after first layout
    // Badge widths shift when the mono webfont swaps in, which moves their rest centres.
    document.fonts?.ready.then(measure)
    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    window.addEventListener('resize', onResize)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [heroRef])
}

/* Amos's local time, not the visitor's — it only says something if it's pinned to where he is. */
function Clock() {
  const [t, setT] = useState('--:--:--')
  useEffect(() => {
    const tick = () => setT(new Date().toLocaleTimeString('en-GB', { timeZone: profile.timeZone }))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return <span>{t}</span>
}

/* The count-up that used to run here is gone with the resume numbers it was written for.
   It rewrote `.num`'s textContent, which would now wipe the <em> unit out of the claim
   line, and it only animates a leading integer — of the four figures, two (`$1.1K`, `1.0B`)
   would have counted to 1 and sat there looking broken next to the two that worked. */
function StatusStrip() {
  return (
    <section className="status-strip">
      <div className="container">
        <div className="status-grid">
          {profile.stats.map((s, i) => (
            <Reveal key={s.what} className="status-cell" delay={(i % 4) * 80}>
              <div className="num">{s.num} <em>{s.verb}</em></div>
              <div className="head">{s.what}</div>
              <div className="cap">{s.where}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const [l1, l2, l3] = profile.heroLines
  const heroRef = useRef<HTMLElement>(null)
  useMagneticStickers(heroRef)
  const city = profile.location.split(',')[0].toUpperCase()
  return (
    <>
      <HudTop status={<><span className="rec"><span className="blip" />ONLINE</span><span>{city} <Clock /></span></>} />

      <section className="hero" ref={heroRef}>
        <div className="container">
          <Reveal as="p" className="hud-label kicker" delay={0}><span className="tick">{'//'}</span> 00 — PERSONAL TERMINAL</Reveal>
          <Reveal as="h1" delay={90}>{l1}<br /><span className="hl">{l2}</span><br /><span className="stroke">{l3}</span></Reveal>
          <Reveal as="p" className="role" delay={180}>{profile.role}.</Reveal>
          <Reveal as="p" className="blurb" delay={270}>{profile.blurb}</Reveal>
          <Reveal className="cta" delay={360}>
            <Link className="btn" to="/projects">View Projects</Link>
            <Link className="btn btn--ghost" to="/resume">Read Resume ↗</Link>
          </Reveal>
          {/* Inside .container so that when the badges drop into flow below 1080px they pick
              up its gutters. .container is unpositioned, so while they are absolute they
              still resolve against .hero and the wrapper collapses to zero height. */}
          <div className="sticker-row">
            {profile.stickers.map((s, i) => (
              <span key={s} className={`sticker sticker--${i + 1}`}>{s}</span>
            ))}
          </div>
        </div>
        <span className="watermark">A</span>
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
          <Reveal className="big">{profile.cta.home.lead[0]}<br />{profile.cta.home.lead[1]}{' '}<a href={`mailto:${profile.email}`}>{profile.cta.home.link}</a></Reveal>
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
