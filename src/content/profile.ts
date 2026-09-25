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
  location: 'Irvine, CA',
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
      // Three postings under one employer, which is what the programme was. Gothenburg first
      // because it was the base; the other two are why a US screener should not file this as
      // overseas-only experience.
      loc: 'Gothenburg, Sweden · Mahwah, NJ',
      bullets: [
        'Built a vehicle software build triage workflow that deterministically reduces a 4M-lines log into ~20 ranked evidence packs of **6k tokens each for LLM report generation**. Graded it against historical runs with diagnosed failures, achieving **90%+ recall** with 70% of runs containing the right evidence in the top five.',
        'Cut time-to-root-cause on failed CI builds from **~6 hours to 40 minutes**, shipped on Azure and triggered by Jenkins, holding per-run **LLM cost under $2** and p95 latency under 6 minutes against a fixed TPM quota. In production **department-wide**.',
        'Developed a multi-agent reviewer for functional requirements with a self-reflect loop driven by deterministic citation verification, raising **recall by 30 points** and **precision by 20 points**.',
        'Engineered task-specific context routing, structured agent outputs, and targeted MCP retrieval to eliminate redundant LLM context, **reducing tokens per review by 60%**.',
        'Shipped two conversion modules on Volvo’s US site, replacing a dead end in the shopping flow with a next step; **bounce down 12%** across the releases, in production since 2024.',
        'Extended the team’s CI/CD pipeline with automated visual regression gates, reducing manual QA verification overhead and catching layout regressions across mobile and desktop viewports.',
      ],
    },
    {
      when: 'MAY 2022 — AUG 2022',
      title: 'Research Assistant · Carnegie Mellon CyLab',
      loc: 'Pittsburgh, PA',
      onResume: false,
      bullets: [
        'Swept four vulnerability-detection backbones in PyTorch on GCP with hyperparameter tuning, identifiers obfuscation and label rebalancing; *Increased F1 score for 19%**.',
      ],
    },
    {
      when: 'FEB 2021 — NOV 2021',
      title: 'Software Engineer · Glinsun AI',
      loc: 'Wuhan, China',
      bullets: [
        'Extended a C++/CUDA simulation engine with a two-way coupled fluid and volume-cloth solver, achieving **60+ FPS** at real-time rendering on 50k+ particles.',
        'Implemented parallel GPU **uniform-grid** neighbor search for fluid density calculations and volume-cloth self-collision passes, replacing all-pairs checks to reduce per-frame lookup latency by **~100ms**.',
        'Developed a semi-supervised ResNet-based human-body-measurement system, enhancing the dataset with rendered synthetic data and web-crawled real-world images, achieving **87% F1** on its body-shape classification subtask.',
      ],
    },
    // `satisfies`, not `as`: an assertion runs no excess-property check, so a misspelt lane key
    // would pass it. This line is what makes the named lanes on `Bullet` enforceable.
  ] satisfies readonly { when: string; title: string; loc: string; bullets: readonly Bullet[]; onResume?: boolean }[],

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
    'AI & LLM': ['Azure OpenAI', 'LangChain', 'MCP', 'BM25', 'ChromaDB', 'Ollama', 'Whisper', 'PyTorch', 'Claude Code'],
    // A language goes here only if the sheet backs it — that is what makes this list read as
    // depth rather than breadth.
    Languages: ['Python', 'TypeScript', 'JavaScript', 'C++', 'CUDA', 'SQL'],
    // `SQL` sits in `Languages` and `PostgreSQL` here; neither may be dropped as a duplicate of
    // the other, because a keyword filter matches tokens and a screen for one does not hit it.
    'Backend & Web': ['FastAPI', 'React', 'Next.js', 'PostgreSQL', 'Redis', 'MongoDB', 'REST', 'Server-Sent Events (SSE)'],
    // `Linux` is table stakes and stays last — present for a keyword scan, never advertised.
    'Cloud & Ops': ['Azure', 'AWS', 'Docker', 'Azure Container Apps', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Ansible', 'Linux'],
  } as Record<string, readonly string[]>,

  // A lane holds only what it changes. The AI sheet is the *absence* of an entry here — `role`
  // and the key order of `skills` above already are it.
  // Nothing factual may go in here: no bullet, date, school, contact or project. A lane stating
  // a fact would be a second copy of that fact, which is what this shape exists to prevent.
  // Do not close this object with `satisfies Record<Lane, …>` — the AI lane is deliberately the
  // missing key, so the answer to a compiler complaint is `Partial`, never an `ai` entry.
  lanes: {
    swe: {
      role: 'Software Engineer — Applied AI',
      // Existing group names, reordered — no skill string moves. Languages lead because a
      // generalist requisition states a language list as its bar, and the first row answers it.
      skills: ['Languages', 'AI & LLM', 'Backend & Web', 'Cloud & Ops'],
    },
  } as Record<string, { role: string; skills: readonly string[] }>,
} as const
