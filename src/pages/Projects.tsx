import { Link } from 'react-router-dom'
import HudTop from '../components/HudTop'
import Kicker from '../components/Kicker'
import ContactFooter from '../components/ContactFooter'
import Reveal from '../components/Reveal'
import { projects, storyCta } from '../content/projects'
import './projects.css'

export default function Projects() {
  return (
    <>
      <HudTop status={`// 0${projects.length} ITEMS`} />

      <div className="container show-head">
        <Kicker>SHOWROOM</Kicker>
        <h1>Selected Work</h1>
        <p className="lead">Things I&rsquo;ve designed, built and shipped. Each opens into how it works — the system, the hard parts, and what they cost.</p>
      </div>

      <div className="caution-bar show-caution" />

      <div className="container">
        <div className="show-grid">
          {projects.map((p, i) => (
            <Reveal
              key={p.slug}
              as={Link}
              to={`/projects/${p.slug}`}
              delay={(i % 3) * 70}
              className={[
                'card',
                p.cardVariant !== 'paper' ? p.cardVariant : '',
                p.span,
                p.span === 's4' || p.span === 's6' ? 'feat' : '',
              ].filter(Boolean).join(' ')}
            >
              {p.cardVariant === 'yellow' && <span className="star">★</span>}
              <div className="idx">{p.idx}</div>
              <div className="cat">{p.cat}</div>
              <h3>{p.title}</h3>
              <p>{p.card}</p>
              <div className="stack">
                {p.chips.slice(0, 4).map(c => <span key={c} className="chip">{c}</span>)}
              </div>
              <div className="go"><span>{storyCta} →</span></div>
            </Reveal>
          ))}
        </div>
      </div>

      <ContactFooter />
    </>
  )
}
