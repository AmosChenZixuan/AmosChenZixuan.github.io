// All facts sourced from the resume PDF (assets/) and Azurtelier.com author files.
// Edit this file to update the site — components never contain copy.

export const profile = {
  name: 'Zixuan Chen',
  alias: 'Amos',
  heroLines: ['ZIXUAN', 'AMOS', 'CHEN'] as const, // middle line gets the .hl glitch treatment
  role: 'Software Engineer — Generative AI & Agentic Systems',
  // Sits directly under `role` on the home hero — it must add to that line, not restate it.
  blurb: 'Driven by a relentless curiosity. I build LLM systems that do real work inside real products.',
  aboutLead: 'Software engineer & machine-learning engineer. PC gamer, anime enthusiast.',
  // Status strip under the About hero. Work authorization is deliberately NOT a field here —
  // an application form already asks it. It lands as narrative in the `now` timeline entry instead.
  location: 'Irvine, California',
  timeZone: 'America/Los_Angeles',
  openTo: 'AI/ML · Full-Stack · Forward-Deployed Engineer',
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
  github: 'https://github.com/AmosChenZixuan',
  linkedin: 'https://www.linkedin.com/in/amoschenzixuan/',
  resumePdf: '/resume.pdf',

  // Home status strip. Measured from Amos's own agent telemetry over 2026-03-30 → 05-31
  // (nine weeks), except `where` on the first cell, which is GitHub's contribution API for
  // the same window. Deliberately NOT resume numbers — those appear again in the timeline
  // further down the same page, so repeating them here spends the best slot on a duplicate.
  // Each cell reads number → claim → evidence:
  //   `num` + `verb`  the claim line; the verb rides the figure so it stands alone
  //   `what`          the readable label, one line at every width
  //   `where`         dim mono evidence, written to run exactly two lines at the tightest
  //                   column — a few characters more tips one cell onto a third line.
  stats: [
    { num: '1.0B', verb: 'TOKENS', what: 'Weekly consumption', where: '→ 49 commits · 14 PRs a week' },
    { num: '$1.1K', verb: 'SAVED/MO', what: 'Against list API rates', where: '$1,169 of usage for $45' },
    { num: '7', verb: 'LLMS', what: 'Across 3 vendors', where: 'Plan · design · proto · exec · review' },
    { num: '192K', verb: 'CONTEXT', what: 'Average session', where: '17 fresh sessions a day, handed off clean' },
  ],

  // Current chapter — About timeline only, deliberately kept out of `work` so the CV
  // Experience list stays employment-only.
  now: {
    when: 'JAN 2026 — NOW',
    title: 'Relocation & Independent Build',
    loc: 'Irvine, CA',
    bullets: [
      'Relocated Gothenburg → Irvine; US work authorization granted.',
      'Self-directed deep dive into agentic coding — multi-agent workflows and AI-assisted delivery, applied end-to-end on side projects.',
      'Sat the IRS Special Enrollment Exams (Enrolled Agent, in progress) — US tax code, for the family’s immigration planning.',
    ],
  },

  work: [
    {
      when: 'AUG 2023 — DEC 2025',
      title: 'Software Developer · Volvo Cars',
      loc: 'Gothenburg, Sweden',
      bullets: [
        '50% less manual intervention in requirement-document audits, via an LLM multi-agent system that scores and suggests fixes.',
        '89% faster troubleshooting — an AI agent for test workflows using structured chunking + Map-Reduce over DLT logs; ~5 hours to 40 minutes.',
        'Rebuilt the US-region brand site: dynamic route loading (−35% FCP) and a CDN (−20% LCP), for a 12% lower bounce rate.',
        'PM on an LLM + legacy voice-control PoC across Shanghai teams; hybrid intent recognition reached 82% semantic accuracy.',
      ],
    },
    {
      when: 'MAY 2022 — AUG 2022',
      title: 'Research Assistant · Carnegie Mellon CyLab',
      loc: 'Pittsburgh, PA',
      bullets: [
        'Deployed vulnerability-detection models on GCP with PyTorch; +19% performance via hyper-parameter tuning and variable obfuscation.',
      ],
    },
    {
      when: 'MAY 2021 — NOV 2021',
      title: 'Software Engineer · Glinsun AI',
      loc: 'Wuhan, China',
      bullets: [
        'Real-time C++/CUDA cloth-simulation engine with 10 engineers; added fluid, smoke, air-inflation and two-way coupling.',
        'Unified particle model cut data duplication 50%, holding 60+ FPS across millions of particles in parallel.',
        'Semi-supervised human-body-measurement system in PyTorch; 87% F1 on 6,000 images.',
      ],
    },
  ],

  education: [
    { deg: 'M.S. Electrical & Computer Engineering', sch: 'Carnegie Mellon University', yr: 'MAY 2023 · GPA 3.72/4.0' },
    { deg: 'B.S. Computer Science', sch: 'University of California, Irvine', yr: 'DEC 2020 · GPA 3.96/4.0 · Summa Cum Laude' },
  ],

  // Key order is priority order: the home page shows only the first two groups, so whatever
  // leads here is what a screener reads under the role line.
  skills: {
    Practice: ['Agentic Systems', 'Performance Tuning', 'Agile Leadership'],
    'Frameworks & AI': ['FastAPI', 'React', 'Next.js', 'PyTorch', 'Spring', 'Django'],
    'Cloud & Ops': ['AWS', 'Azure', 'GCP', 'Docker', 'CI/CD'],
    Languages: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'Kotlin'],
  } as Record<string, readonly string[]>,

  funTitles: [
    { k: 'Summoner', v: 'League of Legends — Diamond rank' },
    { k: 'Sapphire Star', v: 'Monster Hunter: World — master of Charge Blade' },
    { k: 'Traveler', v: 'Renowned traveler of the Teyvat continent — and, off-screen, of Asia, America and Europe' },
    ],
} as const
