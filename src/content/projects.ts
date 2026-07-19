// Story content is drawn from each repo's README, docs (Redline's DESIGN.md
// and story-assets walkthrough), and demo-scene notes. Stats appear only
// where the repo states them.

export type Shot = { src: string; cap: string }

export type Project = {
  slug: string
  idx: string
  title: string
  cat: string            // showroom card category line
  card: string           // showroom card blurb
  tagline: string        // story-page hero tagline
  chips: string[]
  github: string
  language: string
  cardVariant: 'dark' | 'yellow' | 'magenta' | 'cyan' | 'paper'
  span: 's2' | 's3' | 's4' | 's6'
  thumb?: string         // home-card cover image
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
    cat: 'AI · Local-first · Python + React',
    card: 'A local, private NotebookLM for video — turn videos & playlists into a searchable, citation-backed AI notebook. No cloud.',
    tagline: 'Turn a playlist into a private notebook, then ask questions across every transcript — answers cite their sources, and citations seek the video.',
    chips: ['Python', 'FastAPI', 'React', 'SQLite', 'ChromaDB', 'RAG'],
    github: 'https://github.com/AmosChenZixuan/BibiLab',
    language: 'Python + TypeScript',
    cardVariant: 'dark',
    span: 's4',
    thumb: '/projects/bibilab/chat.png',
    hero: { src: '/projects/bibilab/chat.png', cap: 'Ask your video sources — streamed answers with transcript citations' },
    sections: [
      {
        kicker: '01 — THE PROBLEM',
        title: 'Your watch-later list is a graveyard',
        paras: [
          'Hours of lectures, podcasts and tutorials sit locked inside video — unsearchable, unquotable, impossible to skim. The tools that fix this for documents are cloud products: they want an account, they only speak YouTube, and your sources live on someone else’s machine.',
          'BibiLab is the counter-offer: the NotebookLM idea, rebuilt local, open, and video-native. Bilibili, YouTube and TikTok in; nothing leaves your machine; self-hosted or OpenAI-compatible models (Ollama, LM Studio) plug straight in.',
        ],
      },
      {
        kicker: '02 — THE SOLUTION',
        title: 'A notebook that answers with receipts',
        paras: [
          'Drop in a playlist and a FastAPI pipeline takes over: download → transcribe → punctuate → chunk → digest and embed in parallel. Every video becomes a speaker-attributed transcript, and every chat answer is grounded — the model cites sections as [N], and clicking a citation seeks the source video to that exact moment.',
          'Beyond chat, the Lab turns sources into artifacts: briefs, study guides, and interactive mind maps where clicking a node asks about it in chat.',
        ],
        shot: { src: '/projects/bibilab/mindmap.png', cap: 'Mind maps generated from the sources — click a node to interrogate it' },
      },
      {
        kicker: '03 — THE HARD PARTS',
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
    cat: 'AI Agents · Tooling · Skills',
    card: 'Personal skills collection for AI coding agents — /shipit, /razor, /grill-me and friends. Built for Claude Code, works cross-platform.',
    tagline: 'Stop re-teaching your agent your standards every session — install the contract once, get the same discipline everywhere.',
    chips: ['Claude Code', 'Agent Skills', 'Markdown', 'OpenCode', 'Codex'],
    github: 'https://github.com/AmosChenZixuan/Agentic-working-contract',
    language: 'Markdown / agent skills',
    cardVariant: 'yellow',
    span: 's2',
    sections: [
      {
        kicker: '01 — THE PROBLEM',
        title: 'Every session starts from zero',
        paras: [
          'A coding agent is only as good as the working agreement you re-explain to it — how to challenge a design, when to write issues, how hard to review its own code. That agreement evaporates with every new session, and it doesn’t travel between tools.',
          'AWC freezes it into installable skills: one command (npx skills add), and Claude Code, OpenCode or Codex all pick up the same contract.',
        ],
      },
      {
        kicker: '02 — THE CHAIN',
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
    cat: 'AI Agents · Requirements · ADAS',
    card: 'Agent-driven requirements quality portal — AI peer-review for ADAS functional requirements, with text-anchored findings and tracked revisions.',
    tagline: 'AI peer-review for safety requirements: findings anchored to the exact words they concern, fixes applied deterministically, every revision tracked.',
    chips: ['LLM Agents', 'Node', 'React', 'SQLite FTS5', 'ISO 26262'],
    github: 'https://github.com/AmosChenZixuan/Redline',
    language: 'TypeScript',
    cardVariant: 'magenta',
    span: 's2',
    thumb: '/projects/redline/flow.gif',
    hero: { src: '/projects/redline/flow.gif', cap: 'Load → /review → apply → publish, end to end' },
    sections: [
      {
        kicker: '01 — THE PROBLEM',
        title: 'Peer review that scales with headcount',
        paras: [
          'Every ADAS functional requirement gets hand-checked by a peer: writing conventions, conflicts and duplicates against the requirement base, SMART quality, ambiguity. It’s slow, it’s inconsistent between reviewers, and the only way to do more of it is to hire more reviewers.',
          'Redline replaces the routine part of that read with an agentic workflow — and keeps the human on the judgment calls.',
        ],
      },
      {
        kicker: '02 — THE SOLUTION',
        title: 'Findings you can click, fixes you can trust',
        paras: [
          'Load a requirement by tracking ID and run /review. One forced tool-call returns categorized findings — conventions, conflicts, duplicates, ambiguity, verifiability — each anchored to a span of the requirement text and highlighted in the viewer. Tick the findings you accept and apply them mechanically, or ask the agent to /rewrite the draft. Publishing mints a tracked revision: new ID, version+1, predecessor link, source superseded.',
        ],
        shot: { src: '/projects/redline/review-findings.png', cap: '/review — categorized findings, each highlighting the span it concerns' },
      },
      {
        kicker: '03 — THE HARD PARTS',
        title: 'Never trust a model with character offsets',
        paras: [
          'The load-bearing decision: findings quote an exact substring of the requirement, not offsets — LLMs fabricate offsets too often to build a UI on. Quotes are validated server-side with indexOf; a match becomes a highlight, a miss keeps the finding without one. The same trick makes "Apply selected" a deterministic string replace — no second model call, no drift.',
          'Retrieval stayed boring on purpose: an FTS5/BM25 prefilter over siblings and related requirements beats standing up a vector store for a corpus this size. And the agent is vendor-agnostic by construction — it needs exactly two capabilities (forced tool calling, structured results), so each provider is a ~40-line adapter and the model is configuration, not architecture.',
        ],
        shot: { src: '/projects/redline/published.png', cap: 'Publish — new tracking ID, version+1, predecessor link; source superseded' },
      },
    ],
    pull: '“Verbatim quotes are verifiable — and double as patch operations.”',
  },
  {
    slug: 'logsum',
    idx: '04',
    title: 'LogSum',
    cat: 'Log Analysis · Pipelines · Python',
    card: 'Turns a multi-gigabyte vehicle log into a one-page 5W1H incident report. Deterministic core, bounded memory — the LLM is optional.',
    tagline: 'A 500 MB log is ~130 million tokens. LogSum funnels it into a ~4 KB evidence pack, then writes the incident story any engineer can act on.',
    chips: ['Python', 'DLT', 'Drain', 'FastAPI', 'LLM'],
    github: 'https://github.com/AmosChenZixuan/LogSum',
    language: 'Python',
    cardVariant: 'cyan',
    span: 's2',
    stats: [
      { num: '~3,400×', cap: 'Compression (Drain mining)' },
      { num: '167k', cap: 'Records/sec streamed' },
      { num: '36 MB', cap: 'RSS on 2M records' },
      { num: '~40 s', cap: 'End-to-end incl. LLM' },
    ],
    sections: [
      {
        kicker: '01 — THE PROBLEM',
        title: 'Nobody reads a 500 MB log',
        paras: [
          'When a test vehicle misbehaves, someone gets a multi-gigabyte DLT capture and a question: what happened? No context window holds 130 million tokens, shipping raw logs to a cloud model is slow, expensive, and leaks things that shouldn’t leave the machine — and the capture is probably corrupted anyway, because that’s what a yanked USB stick does.',
        ],
      },
      {
        kicker: '02 — THE SOLUTION',
        title: 'A deterministic funnel with an LLM on top',
        paras: [
          'Every stage except the last is deterministic and streams in bounded memory. Drain template mining collapses millions of lines into dozens of templates (~3,400× compression); error clusters keep counts, time spans, and one verbatim sample each; a timeline records only error onsets and rate spikes. It all serializes into a ~4 KB evidence pack — and only then does a model turn it into a 5W1H narrative: what died, when, why, and what to do about it.',
          'No model? The report still renders — the narrative degrades to a stub, never the pipeline. In CI, summarize-cli turns the verdict into an exit code, so a pipeline can gate directly on "a FATAL was found".',
        ],
      },
      {
        kicker: '03 — THE HARD PARTS',
        title: 'Real captures fight back',
        paras: [
          'Corruption: a bare DLT parser dies at the first damaged header. LogSum resyncs — scan forward for the next magic bytes, sanity-check the candidate header, keep going — recovering 47,055 of 47,064 messages from a capture with its storage header deliberately destroyed.',
          'Meaning: stack traces are stitched into single records before mining so a crash survives as one unit instead of exploding into per-frame templates. The evidence pack has a hard character cap with an error-preserving drop order — verbose noise is dropped first, E/F clusters never silently. And when the pack still doesn’t fit, fold-summarization threads a rolling "story so far" through sequential chunks, because causality is temporal and parallel map-reduce loses the thread that connects chunk 1’s binder death to chunk 3’s crash.',
          'Unknown formats get an LLM-proposed regex — validated against a sample in a sandboxed subprocess with a timeout before it parses anything, so catastrophic backtracking can’t hang the pipeline.',
        ],
      },
    ],
    pull: '“Errors are the payload; verbose noise is not.”',
  },
  {
    slug: 'pyflexim',
    idx: '05',
    title: 'PyFlexim',
    cat: 'Simulation · GPU · Python',
    card: 'A GPU-accelerated unified particle solver inspired by NVIDIA Flex — one XPBD loop simulates cloth, rigids, soft bodies, fluids, gases and inflatables.',
    tagline: 'One particle representation, one XPBD loop — cloth, rigid bodies, soft bodies, water, smoke and balloons, all colliding with each other for free.',
    chips: ['Python', 'Taichi', 'XPBD', 'CUDA', 'Vulkan'],
    github: 'https://github.com/AmosChenZixuan/PyFlexim',
    language: 'Python',
    cardVariant: 'paper',
    span: 's6',
    thumb: '/projects/pyflexim/dam_break.gif',
    hero: { src: '/projects/pyflexim/dam_break.gif', cap: 'dam_break — PBF fluid, wave-maker paddle, and a light box that floats' },
    sections: [
      {
        kicker: '01 — THE IDEA',
        title: 'Stop writing one solver per material',
        paras: [
          'Physics engines traditionally silo materials: a cloth solver, a rigid-body solver, a fluid solver — and coupling them is where projects go to die. PyFlexim takes the NVIDIA Flex bet: every body is the same primitive, particles plus constraints. Cloth is distance + bending; rigids are shape matching; fluid is a density constraint; gas adds buoyancy and vorticity; a balloon is a closed-mesh volume constraint.',
          'Because everything shares one particle set, one grid and one XPBD solver loop, two-way coupling costs nothing extra: cloth drapes a moving cube, smoke splits around an obstacle, a dropped crate squashes a balloon and the balloon pushes back.',
        ],
      },
      {
        kicker: '02 — WHAT EMERGES',
        title: 'Buoyancy nobody programmed',
        paras: [
          'The demo scenes are chosen to show behavior that falls out of the model instead of being scripted. In dam_break, a box with density 0.4 floats — displaced fluid pushes back on the lighter body, emergent Archimedes. In the smoke scenes, temperature buoyancy plus vorticity confinement rolls rising gas into vortex rings. The soft-body bunny uses overlapping shape-matching clusters, so its ears bend and haunches squash locally, then it recovers its shape.',
        ],
        shot: { src: '/projects/pyflexim/soft_bunny.gif', cap: 'soft_bunny — overlapping shape-match clusters: local squash, full recovery' },
      },
      {
        kicker: '03 — THE HARD PARTS',
        title: 'Making it fast, stable, and visible',
        paras: [
          'The solver runs as Taichi kernels on CUDA or Vulkan with a CPU fallback that runs anywhere. Rendering is its own problem: water is ray-marched with Beer-Lambert absorption and Fresnel so thin water shows the floor and thick water deepens to teal; smoke is a ray-marched volume driven by passive markers advected through the velocity field. Scenes are plain YAML — global parameters plus a list of objects — and headless export writes gifs and mp4s without a display, which is exactly how every clip on this page was made.',
        ],
      },
    ],
  },
]
