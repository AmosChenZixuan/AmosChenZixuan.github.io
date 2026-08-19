import { useEffect } from 'react'
import HudTop from '../components/HudTop'
import ContactFooter from '../components/ContactFooter'
import { profile } from '../content/profile'
import { projects } from '../content/projects'
import './resume.css'

// A link's visible text is the link, minus the parts a reader doesn't need. Derived rather
// than typed so it cannot name one profile while the href points at another.
// `linkedin.com/` goes too: the full URL is 6px wider than the value column on a phone, and
// `in/handle` is the form a CV uses anyway. The label next to it already says which site.
const short = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/^linkedin\.com\//, '').replace(/\/$/, '')

// Picked by slug, not by array index: the CV lists personal work only, and an index silently
// pointed at Volvo work once the array was reordered. `cat` starts with the year.
const cvProjects = ['bibilab', 'awc'].map(s => projects.find(p => p.slug === s)!)

// Taken verbatim as a filename, so: legal name, plain hyphen, no dots.
const pdfName = 'Zixuan Chen - Resume'

export default function Resume() {
  // Chrome names a printed PDF after the document title, which is otherwise one static string
  // for every route.
  useEffect(() => {
    const prev = document.title
    document.title = pdfName
    return () => { document.title = prev }
  }, [])

  return (
    <div className="resume-page">
      <HudTop status="// CV" />

      <div className="container">
        <div className="sheet">
          <div className="sheet-inner">

            <div className="r-head">
              <div>
                {/* The break goes between name and alias — a first name and a last name belong
                    on one line. Keep the quotes: unquoted, AMOS reads as part of the legal
                    name, which it is not. */}
                <h1 className="name">{profile.name}<br /><span className="alias">“{profile.alias}”</span></h1>
                <p className="role">{profile.role}</p>
                <p className="summary">{profile.resumeSummary}</p>
              </div>
              <div>
                <div className="r-contact">
                  <div className="line"><span className="k">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
                  {/* `tel:` needs the number without its separators; the visible text keeps them. */}
                  <div className="line"><span className="k">Phone</span><a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>{profile.phone}</a></div>
                  {/* Second, above the profile links: it is the one address that shows the work
                      rather than pointing at where the work is filed. `Portfolio`, not the domain's
                      own word — two rows reading `github` would take a beat to tell apart. */}
                  <div className="line"><span className="k">Portfolio</span><a href={profile.siteUrl} target="_blank" rel="noopener">{short(profile.siteUrl)}</a></div>
                  <div className="line"><span className="k">GitHub</span><a href={profile.github} target="_blank" rel="noopener">{short(profile.github)}</a></div>
                  <div className="line"><span className="k">LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noopener">{short(profile.linkedin)}</a></div>
                  {/* The last employer on this sheet is in Sweden; without a city a US screener
                      files the whole CV as an overseas candidate. */}
                  <div className="line"><span className="k">Location</span><span>{profile.location}</span></div>
                </div>
                <button className="print-btn" onClick={() => window.print()}>↓ Print</button>
                <a className="print-btn" href={profile.resumePdf} download={`${pdfName}.pdf`}>↓ PDF</a>
              </div>
            </div>

            <div className="rule" />

            <div className="r-cols">
              <main>
                <section className="r-sec r-exp">
                  <h2><span className="tick">{'//'}</span> Experience</h2>
                  {profile.work.map(w => {
                    const [title, co] = w.title.split(' · ')
                    return (
                      <div className="job" key={w.title}>
                        {/* Stacked, not side by side: sharing a row with a 40-character
                            place-and-date string wrapped the long Volvo title to four lines. */}
                        <div className="title">{title} · <span className="co">{co}</span></div>
                        <div className="when">{w.loc} · {w.when}</div>
                        <ul>
                          {w.bullets.map(b => <li key={b.slice(0, 24)}>{b}</li>)}
                        </ul>
                      </div>
                    )
                  })}
                </section>

                {/* The section classes are print's running order — see the `order` rules in
                    resume.css. On screen they do nothing. */}
                <section className="r-sec r-proj">
                  {/* The URL rides the heading. It used to sit in the slot Experience uses for
                      an employer, labelled "Showroom" — a nav label from this site, which is
                      not a thing a CV names. */}
                  {/* A plain anchor, not a router Link: `to` renders a relative href, and Chrome
                      resolves that against whatever host the sheet was printed from — a PDF made
                      on a local preview carries a localhost link forever. Costs a full page load
                      on screen, which the nav already offers a cheaper route to. */}
                  <h2><span className="tick">{'//'}</span> Selected Projects
                    <a className="more" href={`${profile.siteUrl}/projects`}>{short(profile.siteUrl)}/projects</a>
                  </h2>
                  {/* An entry each, not one list of sentences: a project a reader has to find
                      mid-line is a project they skip. */}
                  {cvProjects.map(p => (
                    <div className="job" key={p.slug}>
                      {/* `cat` starts with the year. Nothing else on this block is dated. */}
                      {/* The name is the repo link. Undecorated, so the printed sheet is
                          unchanged and the PDF gains a live link per project. */}
                      <div className="title">
                        <a href={p.github} target="_blank" rel="noopener">{p.title}</a> · {p.cat.split(' · ')[0]}
                      </div>
                      <ul>
                        {/* `chips` rides the last bullet — personal work has no employer stack
                            to protect, so this section can name tools freely. */}
                        {p.cv!.map((b, i, all) => (
                          <li key={b.slice(0, 24)}>
                            {b}.{i === all.length - 1 && <> <span className="stack">{p.chips.join(', ')}</span></>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </section>
              </main>

              <aside>
                {/* First in the aside, so it sits level with the Volvo entry and the two read
                    across as one timeline. Last, a reader reaches the bottom still thinking
                    the sheet ends at DEC 2025. */}
                <section className="r-sec cur">
                  <h2><span className="tick">{'//'}</span> Current</h2>
                  <div className="job">
                    <div className="title">{profile.now.title}</div>
                    {/* No place, unlike an Experience entry — it would repeat the header. */}
                    <div className="when">{profile.now.when}</div>
                    <ul>
                      {profile.now.bullets.map(b => <li key={b.slice(0, 24)}>{b}</li>)}
                    </ul>
                  </div>
                </section>

                <section className="r-sec r-skills">
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

              </aside>
            </div>

          </div>
        </div>
      </div>

      <ContactFooter />
    </div>
  )
}
