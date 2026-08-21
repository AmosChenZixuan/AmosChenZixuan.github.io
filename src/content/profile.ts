// This file is the source of truth for every fact on the site. `public/resume.pdf` is a
// hand-maintained copy and has drifted out of step with it — do not check a fact against it.
// A string lives here if two components need it, or if it states a fact that changes — job
// title, contact, dates. Nav labels, section heads and button text stay in the component.

export const profile = {
  name: 'Zixuan Chen',
  alias: 'Amos',
  heroLines: ['ZIXUAN', 'AMOS', 'CHEN'] as const, // middle line gets the .hl glitch treatment
  // `AI Engineer`, not `AI/ML Engineer`: the two are different hiring funnels, and a recruiter
  // searching the exact phrase "AI Engineer" does not match the string "AI/ML Engineer". The
  // ML keyword is carried by PyTorch in `skills` instead.
  role: 'AI Engineer — Generative AI & Agentic Systems',
  // Sits directly under `role` on the home hero — it must add to that line, not restate it.
  blurb: 'Driven by a relentless curiosity. I build LLM systems that do real work inside real products.',
  aboutLead: 'Software engineer & machine-learning engineer. PC gamer, anime enthusiast.',
  // Sits directly under `role` on the résumé sheet — like `blurb`, it must add to that line
  // rather than restate it. Together the two lines are the CV's headline, so this one carries
  // the scarce signal: the systems reached production, not a demo. No employer named — the
  // Experience block below already states it, with dates. `department-wide` is deliberately
  // not repeated here; it belongs to the bullet a few lines down that has a number behind it.
  resumeSummary: 'LLM systems taken from prototype to production — agents, retrieval, evaluation, and the full-stack work it takes to ship them.',
  // Status strip under the About hero. Work authorization is deliberately NOT a field here —
  // an application form already asks it. It lands as narrative in the `now` timeline entry instead.
  location: 'Irvine, California',
  timeZone: 'America/Los_Angeles',
  openTo: 'AI · Full-Stack · Forward-Deployed Engineer',
  // Hero sticker badges. Placement (which corner, what rotation) stays in home.css, keyed by
  // index — a seventh entry needs a matching .sticker--7 rule there or it renders unpositioned.
  stickers: ['★ CMU ALUM', '🚗 EX-VOLVO', '⚡ LLM IN PROD', '◆ CLAUDE CODE', '🐍 PYTHON', '📍 IRVINE, CA'] as const,
  aboutBio: [
    'Driven by a relentless curiosity. I build LLM systems that do real work inside real products — multi-agent pipelines, retrieval over messy data, evaluation — along with the full-stack and performance work it takes to ship them. Most recently as a software developer at Volvo Cars in Gothenburg, Sweden, where I started on the Global Graduate programme and stayed on.',
    'Before that: a B.S. in Computer Science at UC Irvine (summa cum laude) and an M.S. in Electrical & Computer Engineering at Carnegie Mellon, with machine-learning work either side of it — vulnerability detection at CMU CyLab, real-time simulation and computer vision at Glinsun AI.',
    'In January 2026 I moved from Sweden back to Irvine, California, and spent the next eight months waiting on a work permit. I built through it: a deep dive into agentic coding, and the IRS Enrolled Agent exams.',
  ],
  // Footer CTA, shared by both pages — one ask, worded the same wherever a reader reaches the
  // bottom. The words live here; where the line breaks stays in the component.
  cta: { lead: 'OPEN TO WORK.', link: 'LET’S TALK →' },

  email: 'zixuanchen1999@gmail.com',
  // Digits, spaces and hyphens only — parentheses around the area code are the form phone
  // parsers most often split on. The country code stays: the last employer on this CV is
  // in Europe, so some readers will dial from outside the US.
  phone: '+1 949-910-6482',
  github: 'https://github.com/AmosChenZixuan',
  linkedin: 'https://www.linkedin.com/in/amoschenzixuan/',
  resumePdf: '/resume.pdf',
  siteUrl: 'https://amoschenzixuan.github.io',

  // Home status strip. Measured from Amos's own agent telemetry over 2026-03-30 → 05-31
  // (nine weeks), except `where` on the first cell, which is GitHub's contribution API for
  // the same window. Deliberately NOT resume numbers — those appear again in the timeline
  // further down the same page, so repeating them here spends the best slot on a duplicate.
  // Each cell reads number → claim → evidence:
  //   `num` + `verb`  the claim line; the verb rides the figure so it stands alone
  //   `what`          the readable label, one line at every width
  //   `where`         dim mono evidence, written to run at most two lines at the tightest
  //                   column — a few characters more tips one cell onto a third line.
  stats: [
    { num: '1.0B', verb: 'TOKENS', what: 'Weekly consumption', where: '→ 49 commits · 14 PRs' },
    { num: '$1.1K', verb: 'SAVED/MO', what: 'Against list API rates', where: '$1,169 of usage for $45' },
    { num: '7', verb: 'LLMS', what: 'Across 3 vendors', where: 'Plan · design · proto · exec · review' },
    { num: '192K', verb: 'CONTEXT', what: 'Average session', where: '17 fresh sessions a day, handed off clean' },
  ],

  // Current chapter — About timeline, and the CV aside so the sheet does not end at DEC 2025
  // with nothing said about the months since. Out of `work`: Experience stays employment-only.
  now: {
    when: 'JAN 2026 — PRESENT',
    title: 'Relocation & Independent Build',
    loc: 'Irvine, CA',
    // No work-authorization line: an application form asks it with a checkbox, and answering
    // it unprompted raises the question rather than settling it. Nothing about immigration or
    // the tax exam belongs here either — on a sheet headlined agentic systems both read as a
    // career change. The tax exam has a home in `aboutBio`, as narrative.
    // The relocation itself is not a bullet: the title says Relocation, the header says Irvine,
    // and the Volvo entry says Gothenburg — three statements of it within one screen.
    bullets: [
      'Self-directed deep dive into agentic coding — multi-agent workflows and AI-assisted delivery, applied end-to-end on side projects.',
    ],
  },

  // Bullet order is priority order, like `skills`. The home timeline shows only `bullets[0]`.
  work: [
    {
      when: 'AUG 2023 — DEC 2025',
      title: 'Software Developer (Global Graduate Programme) · Volvo Cars',
      loc: 'Gothenburg, Sweden',
      bullets: [
        // Before-and-after times rather than the percentage they imply: 6h → 40min *is* 89%,
        // so stating both said one thing twice — and an approximate baseline cannot support an
        // exact percentage. The concrete pair is also the one a reader remembers.
        'Cut root-cause analysis from ~6 hours to 40 minutes with an LLM agent for vehicle test troubleshooting, adopted department-wide.',
        // No outcome figure here on purpose: the only number this work has is the target
        // written into the functional requirement, and the system never ran in production
        // here, so nothing measured whether it was hit. The evaluation set is a real fact
        // and a better one. Its size is an internal document count, so it stays off the page.
        // He left before the receiving team rolled it out, so nothing here claims an outcome he
        // cannot confirm: `delivered` is his own action, where `adopted by` or `for rollout`
        // would be theirs. `synthetic augmentation` rather than `extended with synthetic
        // requirements` — the first reads as method, the second as padding a thin dataset.
        'Built an LLM multi-agent reviewer for ADAS requirement-document audits, evaluated against a human-annotated benchmark with synthetic augmentation, and delivered to the owning team.',
        // The 12% covers features and performance together, so it attaches to "the releases",
        // not to any one change. No causal phrasing: the experiment design is not recallable.
        // That hedge is why it sits mid-list rather than last: it is the weakest attribution
        // here, and the last bullet is one a scan does read.
        // FCP −35% and LCP −20% also came out of this work; they belong in a full-stack
        // variant of this CV, not under a headline claiming agentic systems.
        'Shipped conversion features on customer-facing web apps for the US market, including location-matched dealer inventory; bounce rate down 12% across the releases.',
        // Last, not by priority — the exception to the ordering rule above. A scan reads the
        // first bullet and the last, and this one ends on a shipped product. Its scope is also
        // the widest here, which reads as range at the close and as a stretch at the top.
        // Not `Acted as product manager`: he never formally held the title, and the hedge was
        // audible. `running the product side` describes the same work without claiming it.
        // A product-lane variant of this CV would lead with the role instead.
        // The vendor is joined to the teams by `and`, not `with`: all four are parties he
        // coordinated. `with` dangled — it could attach to the test team or to the verb, and
        // the second reading made the vendor a co-driver of the product. The serial comma is
        // load-bearing for the same reason: without it `test teams and an external LLM vendor`
        // reads as one item.
        'Took an LLM voice-assistant from PoC to shipped product — owner’s-manual answers, points of interest, and 100+ in-vehicle voice commands — running the product side across the navigation, voice and test teams, and an external LLM vendor.',
      ],
    },
    {
      when: 'MAY 2022 — AUG 2022',
      title: 'Research Assistant · Carnegie Mellon CyLab',
      loc: 'Pittsburgh, PA',
      bullets: [
        // Two claims, deliberately not chained by `through`: tuning moved the F1, while
        // obfuscation is a generalization fix that usually costs in-distribution F1 rather
        // than adding to it. `relative` because the unit is not recallable, and the
        // conservative reading is the one that survives "what was the baseline?".
        'Deployed vulnerability-detection models on GCP with PyTorch, tuning hyper-parameters for a 19% relative F1 gain and debiasing against identifier names with variable obfuscation.',
      ],
    },
    {
      when: 'FEB 2021 — NOV 2021',
      title: 'Software Engineer · Glinsun AI',
      loc: 'Wuhan, China',
      bullets: [
        // His modules lead the sentence; the unified particle model was the team's call, so it
        // appears as what they run on rather than as something he decided.
        // One number on purpose. Frame rate against particle count reads on its own; a memory
        // or dedup figure from a particle engine tells a reader neither what it measures nor
        // why it matters, and dilutes the one that does.
        'Implemented fluid, smoke, air-inflation, and two-way coupling on a unified particle model in a real-time C++/CUDA engine; 60+ FPS across millions of particles.',
        // The 87% F1 attaches to the classification step, not to the measurement — measuring
        // a body is regression, which F1 does not score.
        'Developed a semi-supervised human-body-measurement system in PyTorch, with body-shape classification reaching 87% F1 on a 6,000-image dataset.',
      ],
    },
  ],

  // `yr` is the date and nothing else: on the printed sheet it is pulled to the right edge, where
  // every other date on the page sits, and a GPA riding along would put a grade in a column a
  // reader scans for "when". Attainment stays beside the school, and each surface takes the
  // fields it wants — About shows no grade, the sheet shows all three.
  education: [
    { deg: 'M.S. Electrical & Computer Engineering', sch: 'Carnegie Mellon University', yr: 'MAY 2023', gpa: 'GPA 3.72/4.0' },
    { deg: 'B.S. Computer Science', sch: 'University of California, Irvine', yr: 'DEC 2020', gpa: 'GPA 3.96/4.0', honors: 'Summa Cum Laude' },
  ] as readonly { deg: string; sch: string; yr: string; gpa: string; honors?: string }[],

  // Key order is priority order: the home page shows only the first two groups, so whatever
  // leads here is what a screener reads under the role line. AI leads because the role line
  // claims agentic systems — a skills block that opens with web frameworks contradicts it.
  // Named vendors and libraries belong here, stated as competencies, rather than inside a
  // work bullet where they would disclose an employer's stack.
  // Every entry has to survive five minutes of interview questions, which is why Java and
  // Spring are absent. `Evaluation & Benchmarking` is earned: each LLM system was scored
  // against a labelled set, not spot-checked.
  skills: {
    // `Claude Code` sits here, not in the project bullet that would otherwise name it — there
    // it would read as a limit on what that project runs on.
    // `Vector Search & Embeddings` is one entry, not two, and it is here for the same reason
    // `SQL` sits next to `PostgreSQL` below: a keyword filter matches strings, and it cannot
    // know that ChromaDB is a vector database. Split in two it would put four adjacent entries
    // on one subject and start to read as keyword stuffing.
    'AI & LLM': ['Azure OpenAI', 'LangChain', 'RAG & Hybrid Retrieval', 'Vector Search & Embeddings', 'Multi-Agent Orchestration', 'Evaluation & Benchmarking', 'Claude Code', 'ChromaDB', 'PyTorch'],
    Languages: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Kotlin'],
    // `SQL` rides alongside `PostgreSQL` on purpose: ATS keyword filters match tokens, so a
    // screen for `SQL` does not necessarily hit the string `PostgreSQL` — and a full-stack
    // claim with no data layer anywhere is the first thing an interviewer pulls on.
    'Backend & Web': ['FastAPI', 'React', 'Next.js', 'Django', 'PostgreSQL', 'SQL', 'GraphQL (Apollo)'],
    'Cloud & Ops': ['Azure', 'AWS', 'GCP', 'Docker', 'CI/CD'],
  } as Record<string, readonly string[]>,
} as const
