// A project's story may only state a number its own repo states. Nothing here is estimated.

// One label for "this opens into the project's story" — both the home card and the
// /projects card read it, so the wording only changes here. Bare words: the arrow and
// the casing belong to whichever component renders it.
export const storyCta = 'How it works'

export type Shot = { src: string; cap: string }

export type Project = {
  slug: string
  idx: string
  title: string
  cat: string            // showroom card category line
  card: string           // showroom card blurb
  cv?: string            // CV one-liner; only on projects the résumé lists. CV register is not
                         // card register, so it is written rather than derived from `card`.
  tagline: string        // story-page hero tagline
  chips: string[]
  github?: string       // absent where no public repo exists — the story page drops the Links row
  language: string
  cardVariant: 'dark' | 'yellow' | 'magenta' | 'cyan' | 'paper'
  span: 's2' | 's3' | 's4' | 's6'
  mark?: string          // brand mark for the home-card lockup
  short?: string         // lockup name when the full title is too long for the card
  hero?: Shot            // story-page hero shot
  stats?: { num: string; cap: string }[]
  sections: { kicker: string; title: string; paras: string[]; shot?: Shot }[]
  pull?: string
}

export const projects: Project[] = [
  {
    slug: 'bibilab',
    idx: '01',
    title: 'BibiLab',
    cat: '2026 · AI · Local-first · Python',
    card: 'A local, private NotebookLM for video — turn videos & playlists into a searchable, citation-backed AI notebook. No cloud.',
    // Retrieval leads, deployment trails. `card` opens on local-first because that is the
    // pitch against NotebookLM, but local is a deployment property, not a capability.
    cv: 'A searchable, citation-backed AI notebook over video, local and self-hosted',
    tagline: 'Turn a playlist into a private notebook, then ask questions across every transcript — answers cite their sources, and citations seek the video.',
    chips: ['Python', 'FastAPI', 'React', 'SQLite', 'ChromaDB', 'RAG'],
    github: 'https://github.com/AmosChenZixuan/BibiLab',
    language: 'Python + TypeScript',
    cardVariant: 'dark',
    span: 's4',
    mark: '/projects/bibilab/mark.svg',
    hero: { src: '/projects/bibilab/chat.png', cap: 'Ask your video sources — streamed answers with transcript citations' },
    sections: [
      {
        kicker: 'THE PROBLEM',
        title: 'Your watch-later list is a graveyard',
        paras: [
          'Hours of lectures, podcasts and tutorials sit locked inside video — unsearchable, unquotable, impossible to skim. The tools that fix this for documents are cloud products: they want an account, they only speak YouTube, and your sources live on someone else’s machine.',
          'BibiLab is the counter-offer: the NotebookLM idea, rebuilt local, open, and video-native. Bilibili, YouTube and TikTok in; nothing leaves your machine; self-hosted or OpenAI-compatible models (Ollama, LM Studio) plug straight in.',
        ],
      },
      {
        kicker: 'THE SOLUTION',
        title: 'A notebook that answers with receipts',
        paras: [
          'Drop in a playlist and a FastAPI pipeline takes over: download → transcribe → punctuate → chunk → digest and embed in parallel. Every video becomes a speaker-attributed transcript, and every chat answer is grounded — the model cites sections as [N], and clicking a citation seeks the source video to that exact moment.',
          'Beyond chat, the Lab turns sources into artifacts: briefs, study guides, and interactive mind maps where clicking a node asks about it in chat.',
        ],
        shot: { src: '/projects/bibilab/mindmap.png', cap: 'Mind maps generated from the sources — click a node to interrogate it' },
      },
      {
        kicker: 'THE HARD PARTS',
        title: 'Grounding is an engineering problem',
        paras: [
          'Honest citations need structure the model can actually read: transcripts are cut into token-quantized sections (~12k tokens, bounded range) with per-section digests, then into retrieval chunks sized per language for hybrid vector + BM25 search. Mid-stream, the LLM chooses between two tools — a recall-biased passage finder and a bounded verbatim section read — so answers stay pinned to transcript text instead of vibes.',
          'The rest of the fight is running everything locally: lazy-downloaded ASR, embedding and reranker models, and a one-command Docker install that probes for CUDA or ROCm, falls back to CPU, and clamps back at runtime if the GPU it guessed isn’t really there.',
        ],
        shot: { src: '/projects/bibilab/report.png', cap: 'Reports — briefs & study guides generated from your sources' },
      },
    ],
    pull: '“Same idea as NotebookLM — traded polish for full ownership of your data.”',
  },
  {
    slug: 'awc',
    idx: '02',
    title: 'Agentic Working Contract',
    cat: '2026 · AI Agents · Tooling',
    card: 'Personal skills collection for AI coding agents — /shipit, /razor, /grill-me and friends. Built for Claude Code, works cross-platform.',
    // Not `card`'s "skills collection" — on a CV that reads as a config repo, and it tells the
    // reader what this person counts as a project. The engineering claim is portability: one
    // set of standards, three vendors' agent tools.
    cv: 'A portable working contract for AI coding agents: one set of engineering standards, installed once, honoured across tools',
    tagline: 'Stop re-teaching your agent your standards every session — install the contract once, get the same discipline everywhere.',
    chips: ['Claude Code', 'Agent Skills', 'Markdown', 'OpenCode', 'Codex'],
    github: 'https://github.com/AmosChenZixuan/Agentic-working-contract',
    language: 'Markdown / agent skills',
    cardVariant: 'yellow',
    span: 's2',
    mark: '/projects/awc/mark.svg',
    short: 'AWC',
    sections: [
      {
        kicker: 'THE PROBLEM',
        title: 'Every session starts from zero',
        paras: [
          'A coding agent is only as good as the working agreement you re-explain to it — how to challenge a design, when to write issues, how hard to review its own code. That agreement evaporates with every new session, and it doesn’t travel between tools.',
          'AWC freezes it into installable skills: one command (npx skills add), and Claude Code, OpenCode or Codex all pick up the same contract.',
        ],
      },
      {
        kicker: 'THE CHAIN',
        title: 'grill-me → to-issues → shipit',
        paras: [
          'The core loop is a pipeline: /grill-me stress-tests an idea with design-decision questions, /to-issues converts the surviving spec into agent-ready GitHub issues, and /shipit takes one issue all the way to a review-ready PR — the agent plans, codes and commits on a branch, then reviews itself in two phases: first correctness against acceptance criteria, then leanness. It never merges; the human stays the reviewer.',
          '/razor and /razor-code guard both ends of that pipeline — the first derives the smallest design that meets the true need before anything is built, the second cuts over-engineering out of code that already exists.',
        ],
      },
    ],
  },
  {
    slug: 'redline',
    idx: '03',
    title: 'Redline',
    cat: '2025 · Requirements · ADAS',
    card: 'Agent-driven requirements quality portal — AI peer-review for ADAS functional requirements, with tracked revisions.',
    tagline: 'AI peer-review for safety requirements: the routine read handled by an agent, the judgement calls left to a human, every revision tracked.',
    chips: ['LLM Agents', 'Node', 'React', 'ISO 26262'],
    language: 'TypeScript',
    cardVariant: 'magenta',
    span: 's2',
    hero: { src: '/projects/redline/flow.gif', cap: 'Load → review → apply → publish, end to end' },
    sections: [
      {
        kicker: 'THE PROBLEM',
        title: 'Peer review that scales with headcount',
        paras: [
          'Every ADAS functional requirement gets hand-checked by a peer: writing conventions, conflicts and duplicates against the requirement base, SMART quality, ambiguity. It’s slow, it’s inconsistent between reviewers, and the only way to do more of it is to hire more reviewers.',
          'Redline replaces the routine part of that read with an agentic workflow — and keeps the human on the judgment calls.',
        ],
      },
      {
        kicker: 'THE SHAPE',
        title: 'The agent proposes, the human decides',
        paras: [
          'The design question worth arguing about is where the human sits. An agent that rewrites requirements on its own is unusable in a regulated process; one that only leaves comments gets ignored. Redline sits in between — it returns categorized findings, the reviewer accepts the ones they agree with, and publishing mints a tracked revision instead of overwriting the source.',
          'Everything else follows from that choice. Findings have to be specific enough to accept one at a time, and the audit trail has to stay intact for the cases where the agent is simply wrong.',
        ],
        shot: { src: '/projects/redline/review-findings.png', cap: 'Categorized findings — accept the ones you agree with, leave the rest' },
      },
    ],
  },
  {
    slug: 'logsum',
    idx: '04',
    title: 'LogSum',
    cat: '2024 · Log Analysis · Pipelines',
    card: 'Turns a multi-gigabyte vehicle log into a one-page incident report. Deterministic core, bounded memory — the LLM is optional.',
    tagline: 'A capture far too large for any context window, funnelled into an evidence pack small enough to reason about — then written up as an incident story an engineer can act on.',
    chips: ['Python', 'DLT', 'FastAPI', 'LLM'],
    language: 'Python',
    cardVariant: 'cyan',
    span: 's2',
    mark: '/projects/logsum/mark.svg',
    sections: [
      {
        kicker: 'THE PROBLEM',
        title: 'Nobody reads a multi-gigabyte log',
        paras: [
          'When a test vehicle misbehaves, someone gets a capture measured in gigabytes and a question: what happened? No context window holds it, shipping raw logs to a cloud model is slow, expensive, and leaks things that shouldn’t leave the machine — and the capture is probably damaged anyway, because that’s what a yanked USB stick does.',
        ],
      },
      {
        kicker: 'THE SHAPE',
        title: 'A deterministic funnel with an LLM on top',
        paras: [
          'The load-bearing decision is that the model does as little as possible. Every stage before it is deterministic and streams in bounded memory, reducing the capture to a small evidence pack; only the closing narrative is generated. That ordering is what makes the output reproducible, cheap, and safe to run on a machine the data cannot leave.',
          'It also means the pipeline degrades rather than fails. With no model available the report still renders, minus the prose — a diagnostic tool that stops working when an API is down is not a diagnostic tool.',
        ],
      },
    ],
    pull: '“Errors are the payload; verbose noise is not.”',
  },
  {
    slug: 'pyflexim',
    idx: '05',
    title: 'PyFlexim',
    cat: '2022 · Simulation · GPU · Python',
    card: 'A GPU-accelerated unified particle solver inspired by NVIDIA Flex — one XPBD loop simulates cloth, rigids, soft bodies, fluids, gases and inflatables.',
    tagline: 'One particle representation, one XPBD loop — cloth, rigid bodies, soft bodies, water, smoke and balloons, all colliding with each other for free.',
    chips: ['Python', 'Taichi', 'XPBD', 'CUDA', 'Vulkan'],
    github: 'https://github.com/AmosChenZixuan/PyFlexim',
    language: 'Python',
    cardVariant: 'paper',
    span: 's6',
    hero: { src: '/projects/pyflexim/dam_break.gif', cap: 'dam_break — PBF fluid, wave-maker paddle, and a light box that floats' },
    sections: [
      {
        kicker: 'THE IDEA',
        title: 'Stop writing one solver per material',
        paras: [
          'Physics engines traditionally silo materials: a cloth solver, a rigid-body solver, a fluid solver — and coupling them is where projects go to die. PyFlexim takes the NVIDIA Flex bet: every body is the same primitive, particles plus constraints. Cloth is distance + bending; rigids are shape matching; fluid is a density constraint; gas adds buoyancy and vorticity; a balloon is a closed-mesh volume constraint.',
          'Because everything shares one particle set, one grid and one XPBD solver loop, two-way coupling costs nothing extra: cloth drapes a moving cube, smoke splits around an obstacle, a dropped crate squashes a balloon and the balloon pushes back.',
        ],
      },
      {
        kicker: 'WHAT EMERGES',
        title: 'Buoyancy nobody programmed',
        paras: [
          'The demo scenes are chosen to show behavior that falls out of the model instead of being scripted. In dam_break, a box with density 0.4 floats — displaced fluid pushes back on the lighter body, emergent Archimedes. In the smoke scenes, temperature buoyancy plus vorticity confinement rolls rising gas into vortex rings. The soft-body bunny uses overlapping shape-matching clusters, so its ears bend and haunches squash locally, then it recovers its shape.',
        ],
        shot: { src: '/projects/pyflexim/soft_bunny.gif', cap: 'soft_bunny — overlapping shape-match clusters: local squash, full recovery' },
      },
      {
        kicker: 'THE HARD PARTS',
        title: 'Making it fast, stable, and visible',
        paras: [
          'The solver runs as Taichi kernels on CUDA or Vulkan with a CPU fallback that runs anywhere. Rendering is its own problem: water is ray-marched with Beer-Lambert absorption and Fresnel so thin water shows the floor and thick water deepens to teal; smoke is a ray-marched volume driven by passive markers advected through the velocity field. Scenes are plain YAML — global parameters plus a list of objects — and headless export writes gifs and mp4s without a display, which is exactly how every clip on this page was made.',
        ],
      },
    ],
  },
]

// The three the landing showroom puts up front, in order. /projects lists all five,
// newest first — this is a curation, not the top of that list.
export const featured = ['bibilab', 'awc', 'logsum']
  .map(slug => projects.find(p => p.slug === slug)!)
