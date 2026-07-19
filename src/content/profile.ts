// All facts sourced from the resume PDF (assets/) and Azurtelier.com author files.
// Edit this file to update the site — components never contain copy.

export const profile = {
  name: 'Zixuan Chen',
  alias: 'Amos',
  heroLines: ['ZIXUAN', 'AMOS', 'CHEN'] as const, // middle line gets the .hl glitch treatment
  role: 'Digital Alchemist',
  identities: ['Software Engineer', 'Machine Learning Engineer', 'PC Gamer', 'Anime Enthusiast', 'Cat-person'],
  blurb: 'Driven by a relentless curiosity. Generative AI & agentic architecture design, full-stack development & performance tuning.',
  aboutLead: 'Software engineer & machine-learning engineer. PC gamer, anime enthusiast, cat-person.',
  aboutBio: [
    'Driven by a relentless curiosity. I work on generative AI and agentic architecture design, full-stack development and performance tuning — most recently as a Global Graduate on the Software Engineering track at Volvo Cars in Gothenburg, Sweden.',
    'Before that: an M.S. in Electrical & Computer Engineering at Carnegie Mellon, a B.S. in Computer Science at UC Irvine (summa cum laude), a research stint at CMU CyLab, and a physics-engine job at Glinsun AI simulating millions of particles in real time.',
  ],
  email: 'zixuanchen1999@gmail.com',
  github: 'https://github.com/AmosChenZixuan',
  linkedin: 'https://www.linkedin.com/in/amoschenzixuan/',
  resumePdf: '/resume.pdf',

  // Home status strip — every number is a resume bullet
  stats: [
    { num: '89%', cap: 'Troubleshooting time cut' },
    { num: '50%', cap: 'Manual audit reduced' },
    { num: '82%', cap: 'Semantic accuracy (LLM PoC)' },
    { num: '60', cap: 'FPS · millions of particles' },
  ],

  work: [
    {
      when: 'AUG 2023 — DEC 2025',
      title: 'Global Graduate, Software Engineering · Volvo Cars',
      loc: 'Gothenburg, Sweden',
      bullets: [
        'Developed an LLM-based multi-agent system with automated scoring and suggestions, reducing manual intervention in requirement document audits by 50%.',
        'Spearheaded an AI agent for software-testing workflows; structured chunking + Map-Reduce over DLT logs cut troubleshooting from ~5 hours to 40 minutes (89%).',
        'Architected a brand website upgrade for the US region: dynamic route loading (−35% FCP) and a CDN (−20% LCP), for a 12% lower bounce rate.',
        'Led cross-functional teams in Shanghai as PM on an LLM + legacy voice-control PoC; hybrid intent recognition reached 82% semantic accuracy in complex scenarios.',
      ],
    },
    {
      when: 'MAY 2022 — AUG 2022',
      title: 'Research Assistant · Carnegie Mellon CyLab',
      loc: 'Pittsburgh, PA',
      bullets: [
        'Deployed vulnerability detection systems on GCP using PyTorch; +19% model performance via hyper-parameter tuning and variable obfuscation.',
      ],
    },
    {
      when: 'MAY 2021 — NOV 2021',
      title: 'Software Engineer · Glinsun AI',
      loc: 'Wuhan, China',
      bullets: [
        'Built a real-time C++/CUDA cloth-simulation physics engine with 10 engineers; added fluid, smoke, air-inflation and two-way coupling.',
        'Unified particle model cut data duplication 50%, holding 60+ FPS simulating millions of particles in parallel.',
        'Semi-supervised human-body-measurement system in PyTorch; 87% F1 on 6,000 images.',
      ],
    },
  ],

  education: [
    { deg: 'M.S. Electrical & Computer Engineering', sch: 'Carnegie Mellon University', yr: 'MAY 2023 · GPA 3.72/4.0' },
    { deg: 'B.S. Computer Science', sch: 'University of California, Irvine', yr: 'DEC 2020 · GPA 3.96/4.0 · Summa Cum Laude' },
  ],

  skills: {
    Languages: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'Kotlin'],
    'Frameworks & AI': ['FastAPI', 'React', 'Next.js', 'PyTorch', 'Spring', 'Django'],
    'Cloud & Ops': ['AWS', 'Azure', 'GCP', 'Docker', 'CI/CD'],
    Practice: ['Agentic Architecture', 'Performance Tuning', 'Agile Leadership'],
  } as Record<string, readonly string[]>,

  // Azurtelier "Titles" — tongue-in-cheek, rendered as-is in About
  funTitles: [
    { k: 'Summoner', v: 'League of Legends — Diamond rank' },
    { k: 'Hunter', v: 'Monster Hunter: World — the Sapphire Star, master of Charge Blade' },
    { k: 'Traveler', v: 'Renowned traveler of the Teyvat continent' },
    { k: 'Trailblazer', v: 'Trailblazer of the Honkai universe' },
    { k: 'Laureate', v: "Time's Person of the Year 2006 (— is YOU)" },
    { k: 'Reader', v: '2015 Hugo Award for Best Novel — reader' },
  ],
} as const
