import { Fragment } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import HudTop from '../components/HudTop'
import SiteFooter from '../components/SiteFooter'
import { projects } from '../content/projects'
import './story.css'

export default function ProjectStory() {
  const { slug } = useParams()
  const i = projects.findIndex(p => p.slug === slug)
  if (i === -1) return <Navigate to="/projects" replace />
  const p = projects[i]
  const next = projects[(i + 1) % projects.length]

  return (
    <div className="story">
      <HudTop status={`// CASE ${p.idx} / 0${projects.length}`} />

      <div className="container">
        <p className="crumb"><Link to="/projects">Showroom</Link> &nbsp;/&nbsp; {p.title}</p>
      </div>

      <div className="container story-hero">
        <div className="slash" />
        <p className="hud-label kicker"><span className="tick">{'//'}</span> CASE STUDY {p.idx} — {p.cat}</p>
        <h1>{p.title}</h1>
        <p className="tag">{p.tagline}</p>
        <div className="meta-row">
          <div className="m"><span className="k">Category</span><span className="v">{p.cat}</span></div>
          <div className="m"><span className="k">Language</span><span className="v">{p.language}</span></div>
          <div className="m"><span className="k">Links</span><span className="v"><a href={p.github} target="_blank" rel="noopener">GitHub ↗</a></span></div>
        </div>
        {p.hero && (
          <figure className="shot">
            <img src={p.hero.src} alt={p.hero.cap} />
            <figcaption>{p.hero.cap}</figcaption>
          </figure>
        )}
      </div>

      {p.stats && (
        <section className="stats">
          <div className="container">
            <div className="grid">
              {p.stats.map(s => (
                <div className="cell" key={s.cap}><div className="num">{s.num}</div><div className="cap">{s.cap}</div></div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="container story-body">
        <div className="read">
          {p.sections.map((s, si) => (
            <Fragment key={s.kicker}>
              <section>
                <p className="hud-label kicker"><span className="tick">{'//'}</span> {s.kicker}</p>
                <h2>{s.title}</h2>
                {s.paras.map(t => <p key={t.slice(0, 24)}>{t}</p>)}
                {s.shot && (
                  <figure className="shot shot--inline">
                    <img src={s.shot.src} alt={s.shot.cap} loading="lazy" />
                    <figcaption>{s.shot.cap}</figcaption>
                  </figure>
                )}
              </section>
              {si === 0 && p.pull && <div className="pull">{p.pull}</div>}
            </Fragment>
          ))}

          <div className="facts">
            <div>
              <div className="k">Stack</div>
              <div className="chips">
                {p.chips.map((c, ci) => <span key={c} className={ci === 0 ? 'chip chip--hi' : 'chip'}>{c}</span>)}
              </div>
            </div>
            <div>
              <div className="k">Links</div>
              <div className="v"><a href={p.github} target="_blank" rel="noopener">GitHub ↗</a></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="pager">
          <Link to="/projects">← Back to Showroom</Link>
          <Link className="nxt" to={`/projects/${next.slug}`}>Next: {next.title} →</Link>
        </div>
      </div>

      <SiteFooter note={`CASE STUDY · ${p.title.toUpperCase()}`} />
    </div>
  )
}
