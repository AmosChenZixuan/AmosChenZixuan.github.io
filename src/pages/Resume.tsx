import { Link } from 'react-router-dom'
import HudTop from '../components/HudTop'
import { profile } from '../content/profile'
import { projects } from '../content/projects'
import './resume.css'

export default function Resume() {
  const [name1, name2] = [profile.name.split(' ')[1] ?? profile.name, profile.name.split(' ')[0]]
  return (
    <div className="resume-page">
      <HudTop status="// CV" />

      <div className="container">
        <div className="sheet">
          <div className="sheet-inner">

            <div className="r-head">
              <div>
                <h1 className="name">{name2}<br />{name1}</h1>
                <p className="role">Software Engineer — Generative AI &amp; Agentic Systems</p>
                <p className="summary">Generative AI &amp; agentic architecture design, full-stack development &amp; performance tuning, agile development and leadership.</p>
              </div>
              <div>
                <div className="r-contact">
                  <div className="line"><span className="k">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
                  <div className="line"><span className="k">GitHub</span><a href={profile.github} target="_blank" rel="noopener">github.com/AmosChenZixuan</a></div>
                  <div className="line"><span className="k">LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noopener">in/amoschenzixuan</a></div>
                </div>
                <button className="print-btn" onClick={() => window.print()}>↓ Print</button>
                <a className="print-btn" href={profile.resumePdf} download>↓ PDF</a>
              </div>
            </div>

            <div className="rule" />

            <div className="r-cols">
              <main>
                <section className="r-sec">
                  <h2><span className="tick">{'//'}</span> Experience</h2>
                  {profile.work.map(w => {
                    const [title, co] = w.title.split(' · ')
                    return (
                      <div className="job" key={w.title}>
                        <div className="top">
                          <div className="title">{title} · <span className="co">{co}</span></div>
                          <div className="when">{w.when}</div>
                        </div>
                        <ul>
                          {w.bullets.map(b => <li key={b.slice(0, 24)}>{b}</li>)}
                        </ul>
                      </div>
                    )
                  })}
                </section>

                <section className="r-sec">
                  <h2><span className="tick">{'//'}</span> Selected Projects</h2>
                  <div className="job">
                    <div className="top">
                      <div className="title"><Link to="/projects">Showroom →</Link></div>
                      <div className="when">amoschenzixuan.github.io/projects</div>
                    </div>
                    <ul>
                      {[projects[0], projects[3]].map(p => (
                        <li key={p.slug}>{p.title} — {p.card}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              </main>

              <aside>
                <section className="r-sec">
                  <h2><span className="tick">{'//'}</span> Skills</h2>
                  {Object.entries(profile.skills).map(([group, items], gi) => (
                    <div className="skill-group" key={group}>
                      <div className="lbl">{group}</div>
                      <div className="row">
                        {items.map(s => <span key={s} className={gi === 0 ? 'chip chip--hi' : 'chip'}>{s}</span>)}
                      </div>
                    </div>
                  ))}
                </section>

                <section className="r-sec edu">
                  <h2><span className="tick">{'//'}</span> Education</h2>
                  {profile.education.map(e => (
                    <div className="item" key={e.deg}>
                      <div className="deg">{e.deg}</div>
                      <div className="sch">{e.sch}</div>
                      <div className="yr">{e.yr}</div>
                    </div>
                  ))}
                </section>

                <section className="r-sec">
                  <h2><span className="tick">{'//'}</span> Find Me</h2>
                  <div className="r-links">
                    <a href={profile.github} target="_blank" rel="noopener"><span>GitHub</span><span className="ar">↗</span></a>
                    <a href={profile.linkedin} target="_blank" rel="noopener"><span>LinkedIn</span><span className="ar">↗</span></a>
                    <a href={`mailto:${profile.email}`}><span>Email</span><span className="ar">↗</span></a>
                  </div>
                </section>
              </aside>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
