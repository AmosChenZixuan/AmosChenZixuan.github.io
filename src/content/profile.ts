// This file is the source of truth for every fact on the site, and `/resume` prints from here.
// Nav labels, section heads and button text stay in the component — only the facts that change
// (job title, contact, dates, what the sheet says) live here, so a string has one address.

import type { Bullet } from './lanes'

export const profile = {
  name: 'Zixuan Chen',
  alias: 'Amos',
  heroLines: ['ZIXUAN', 'AMOS', 'CHEN'] as const, // middle line gets the .hl glitch treatment
  role: 'AI Engineer — Generative AI & Agentic Systems',
  blurb: 'Driven by a relentless curiosity. I build LLM systems that do real work inside real products.',
  aboutLead: 'Software engineer & machine-learning engineer. PC gamer, anime enthusiast.',
  resumeSummary: 'LLM systems taken from prototype to production — agents, retrieval, evaluation, and the full-stack work it takes to ship them.',
  location: 'Irvine, California',
  timeZone: 'America/Los_Angeles',
  openTo: 'AI · Full-Stack · Forward-Deployed Engineer',
  // Placement (which corner, what rotation) is keyed by index in home.css — a seventh entry needs
  // a matching .sticker--7 rule or it renders unpositioned.
  stickers: ['★ CMU ALUM', '🚗 EX-VOLVO', '⚡ LLM IN PROD', '◆ CLAUDE CODE', '🐍 PYTHON', '📍 IRVINE, CA'] as const,
  aboutBio: [
    'Driven by a relentless curiosity. I build LLM systems that do real work inside real products — multi-agent pipelines, retrieval over messy data, evaluation — along with the full-stack and performance work it takes to ship them. Most recently as a software developer at Volvo Cars in Gothenburg, Sweden, where I started on the Global Graduate programme and stayed on.',
    'Before that: a B.S. in Computer Science at UC Irvine (summa cum laude) and an M.S. in Electrical & Computer Engineering at Carnegie Mellon, with machine-learning work either side of it — vulnerability detection at CMU CyLab, real-time simulation and computer vision at Glinsun AI.',
    'In January 2026 I moved from Sweden back to Irvine, California, and spent the next eight months waiting on a work permit. I built through it: a deep dive into agentic coding, and the IRS Enrolled Agent exams.',
  ],
  // One ask, worded the same on every route. Where the line breaks stays in the component.
  cta: { lead: 'OPEN TO WORK.', link: 'LET’S TALK →' },

  email: 'zixuanchen1999@gmail.com',
  // Digits, spaces and hyphens only — no parentheses, which is the form phone parsers split on.
  // Country code stays; some readers dial from outside the US.
  phone: '+1 949-910-6482',
  github: 'https://github.com/AmosChenZixuan',
  linkedin: 'https://www.linkedin.com/in/amoschenzixuan/',
  siteUrl: 'https://amoschenzixuan.github.io',

  // Home status strip — measured from Amos's own agent telemetry. `where` must fit two lines at
  // the tightest column; a few characters more tips a cell onto a third.
  stats: [
    { num: '1.0B', verb: 'TOKENS', what: 'Weekly consumption', where: '→ 49 commits · 14 PRs' },
    { num: '$1.1K', verb: 'SAVED/MO', what: 'Against list API rates', where: '$1,169 of usage for $45' },
    { num: '7', verb: 'LLMS', what: 'Across 3 vendors', where: 'Plan · design · proto · exec · review' },
    { num: '192K', verb: 'CONTEXT', what: 'Average session', where: '17 fresh sessions a day, handed off clean' },
  ],

  // About timeline and CV aside. Hidden in print — `resume.css` states why. Experience stays
  // employment-only.
  now: {
    when: 'JAN 2026 — PRESENT',
    title: 'Relocation & Independent Build',
    loc: 'Irvine, CA',
    bullets: [
      'Self-directed deep dive into agentic coding — multi-agent workflows and AI-assisted delivery, applied end-to-end on side projects.',
    ],
  },

  // Bullet order is priority order, like `skills`, and it is one order for every lane. Do not add
  // a per-lane position array — it silently reselects when a bullet moves.
  work: [
    {
      when: 'AUG 2023 — DEC 2025',
      title: 'Software Developer (Global Graduate Programme) · Volvo Cars',
      loc: 'Gothenburg, Sweden',
      bullets: [
        {
          ai: 'Cut root-cause analysis from ~6 hours to 40 minutes with an LLM agent for vehicle test troubleshooting, adopted department-wide.',
          swe: 'Cut root-cause analysis on integration builds from 6 hours to 40 minutes with an LLM agent in the CI pipeline, deployed department-wide and live since July 2025.',
        },
        {
          ai: 'Built an LLM multi-agent reviewer for ADAS requirement-document audits, evaluated against a human-annotated benchmark with synthetic augmentation, and delivered to the owning team.',
          swe: 'Built an automated reviewer for the ADAS team’s requirement documents, 86% precision against 400+ human-annotated cases, each finding a verbatim span applied as a deterministic patch.',
        },
        {
          ai: 'Shipped conversion features on customer-facing web apps for the US market, including location-matched dealer inventory; bounce rate down 12% across the releases.',
          swe: 'Owned in-stock vehicle matching on Volvo’s US site, where an exact local match is rare, designing the relaxation policy that defines relevance; bounce down 12% across releases, in production since 2024.',
        },
        {
          ai: 'Took an LLM voice-assistant from PoC to shipped product — owner’s-manual answers, points of interest, and 100+ in-vehicle voice commands — running the product side across the navigation, voice and test teams, and an external LLM vendor.',
          swe: 'Led the two-month PoC that moved the car’s voice assistant from a fixed command set to open-domain question answering, across teams in Sweden and China, and an external vendor; the prototype shipped as a product.',
        },
      ],
    },
    {
      when: 'MAY 2022 — AUG 2022',
      title: 'Research Assistant · Carnegie Mellon CyLab',
      loc: 'Pittsburgh, PA',
      bullets: [
        {
          ai: 'Deployed vulnerability-detection models on GCP with PyTorch, tuning hyper-parameters for a 19% relative F1 gain and debiasing against identifier names with variable obfuscation.',
          swe: 'Built the config-driven pipeline behind a vulnerability-detection study, stripping identifier names and rebalancing a rare positive class for a four-backbone sweep.',
        },
      ],
    },
    {
      when: 'FEB 2021 — NOV 2021',
      title: 'Software Engineer · Glinsun AI',
      loc: 'Wuhan, China',
      bullets: [
        {
          ai: 'Implemented fluid, smoke, air-inflation, and two-way coupling on a unified particle model in a real-time C++/CUDA engine; 60+ FPS at 50k+ particles.',
          swe: 'Extended a C++/CUDA cloth engine with two-way coupled fluid, smoke, and air inflation on its unified particle solver, and held 60 FPS by trading expensive solved particles for cheap render-only ones.',
        },
        {
          ai: '',
          swe: 'Wrote that solver’s neighbor search as a single-pass uniform grid instead of an O(n²) all-pairs check, keeping lookup near-linear at 50k+ particles.',
        },
        {
          ai: 'Developed a semi-supervised human-body-measurement system in PyTorch, with body-shape classification reaching 87% F1 on a 6,000-image dataset.',
          swe: '',
        },
      ],
    },
    // `satisfies`, not `as`: an assertion runs no excess-property check, so a misspelt lane key
    // would pass it. This line is what makes the named lanes on `Bullet` enforceable.
  ] satisfies readonly { when: string; title: string; loc: string; bullets: readonly Bullet[] }[],

  // `yr` is the date and nothing else — print pulls it to the right edge where every other date
  // sits, so a grade riding along would land in the column a reader scans for "when".
  education: [
    { deg: 'M.S. Electrical & Computer Engineering', sch: 'Carnegie Mellon University', yr: 'MAY 2023', gpa: 'GPA 3.72/4.0' },
    { deg: 'B.S. Computer Science', sch: 'University of California, Irvine', yr: 'DEC 2020', gpa: 'GPA 3.96/4.0', honors: 'Summa Cum Laude' },
  ] as readonly { deg: string; sch: string; yr: string; gpa: string; honors?: string }[],

  // Key order is priority order, and the home page shows only the first two groups.
  // Named vendors and libraries belong here, stated as competencies — not inside a work bullet.
  skills: {
    // Tools only — a capability stated as a skill ("Multi-Agent Orchestration") is a bullet's job.
    'AI & LLM': ['Azure OpenAI', 'LangChain', 'MCP', 'BM25', 'ChromaDB', 'Ollama', 'Whisper', 'PyTorch'],
    // A language goes here only if the sheet backs it — that is what makes this list read as
    // depth rather than breadth.
    Languages: ['Python', 'TypeScript', 'JavaScript', 'C++', 'CUDA', 'SQL'],
    // `SQL` sits in `Languages` and `PostgreSQL` here; neither may be dropped as a duplicate of
    // the other, because a keyword filter matches tokens and a screen for one does not hit it.
    'Backend & Web': ['FastAPI', 'React', 'Next.js', 'PostgreSQL', 'Redis', 'MongoDB', 'Server-Sent Events (SSE)'],
    // `Linux` is table stakes and stays last — present for a keyword scan, never advertised.
    'Cloud & Ops': ['Azure', 'AWS', 'Docker', 'CI/CD', 'Jenkins', 'Ansible', 'Linux'],
  } as Record<string, readonly string[]>,

  // A lane holds only what it changes. The AI sheet is the *absence* of an entry here — `role`,
  // `resumeSummary` and the key order of `skills` above already are it.
  // Nothing factual may go in here: no bullet, date, school, contact or project. A lane stating
  // a fact would be a second copy of that fact, which is what this shape exists to prevent.
  // Do not close this object with `satisfies Record<Lane, …>` — the AI lane is deliberately the
  // missing key, so the answer to a compiler complaint is `Partial`, never an `ai` entry.
  lanes: {
    swe: {
      role: 'Software Engineer — LLM Systems',
      summary: 'Took systems from design to production. Bridged teams in the US, Sweden and China.',
      // Existing group names, reordered — no skill string moves. Languages lead because a
      // generalist requisition states a language list as its bar, and the first row answers it.
      skills: ['Languages', 'AI & LLM', 'Backend & Web', 'Cloud & Ops'],
    },
  } as Record<string, { role: string; summary: string; skills: readonly string[] }>,
} as const
