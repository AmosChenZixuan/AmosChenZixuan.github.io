// Story text is drawn strictly from each repo's README (and Redline's DESIGN.md).
// Stats appear only where the README states them.

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
  stats?: { num: string; cap: string }[]
  sections: { kicker: string; title: string; paras: string[] }[]
  pull?: string
}

export const projects: Project[] = [
  {
    slug: 'bibilab',
    idx: '01',
    title: 'BibiLab',
    cat: 'AI · Local-first · Python + React',
    card: 'A local, private NotebookLM for video — turn videos & playlists into a searchable, citation-backed AI notebook. No cloud.',
    tagline: 'Turn a playlist into a private notebook, then ask questions across every transcript — answers cite their sources.',
    chips: ['Python', 'FastAPI', 'React', 'SQLite', 'ChromaDB', 'RAG'],
    github: 'https://github.com/AmosChenZixuan/BibiLab',
    language: 'Python + TypeScript',
    cardVariant: 'dark',
    span: 's4',
    sections: [
      {
        kicker: '01 — THE IDEA',
        title: 'NotebookLM, but local and video-native',
        paras: [
          'BibiLab takes the "chat with your sources" idea and rebuilds it for people who want it local, open, and video-native. It ingests videos and playlists from Bilibili, YouTube and TikTok, and runs entirely on one machine: no account, no cloud, full ownership of your data and models — self-hosted or OpenAI-compatible backends (Ollama, LM Studio) plug straight in.',
        ],
      },
      {
        kicker: '02 — THE PIPELINE',
        title: 'Download → transcribe → chunk → digest ∥ embed',
        paras: [
          'A FastAPI backend runs the full processing pipeline. Each video becomes a punctuated, speaker-attributed transcript, split into token-quantized sections (~12k tokens each) with per-section summaries and keywords, then into chunks sized for hybrid vector + BM25 retrieval.',
          'Chat answers are grounded: the LLM dispatches find_passages or read_section mid-stream and cites sections as [N] — click a citation and the source viewer seeks to that moment in the video.',
        ],
      },
      {
        kicker: '03 — THE LAB',
        title: 'Sources become artifacts',
        paras: [
          'Beyond chat, the Lab turns sources into artifacts: briefs, study guides, and interactive mind maps where clicking a node asks about it in chat. Storage is a per-user directory — SQLite for structure, ChromaDB for vectors, a model cache for local ASR/embedding/reranker models.',
        ],
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
    tagline: 'The skills I hand my coding agents every day — plan, build, review, and cut cruft, as installable slash commands.',
    chips: ['Claude Code', 'Agent Skills', 'Markdown', 'OpenCode', 'Codex'],
    github: 'https://github.com/AmosChenZixuan/Agentic-working-contract',
    language: 'Markdown / agent skills',
    cardVariant: 'yellow',
    span: 's2',
    sections: [
      {
        kicker: '01 — WHAT IT IS',
        title: 'A working contract for agents',
        paras: [
          'AWC packages the workflows I expect from an AI coding agent as installable skills: one command (npx skills add) and any agent — Claude Code, OpenCode, Codex — picks up the same contract.',
        ],
      },
      {
        kicker: '02 — THE CHAIN',
        title: 'grill-me → to-issues → shipit',
        paras: [
          '/grill-me challenges an idea with design-decision questions; /to-issues converts the surviving spec into agent-ready GitHub issues; /shipit takes one issue to a review-ready PR — the agent plans, codes and commits on a branch, reviews itself in two phases (correctness, then leanness), and never merges. The human stays the reviewer.',
          '/razor and /razor-code guard both ends of implementation: the first derives the smallest design that meets the true need before building; the second cuts over-engineering from code already written.',
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
    tagline: 'Replace the routine part of requirements peer review with an agentic workflow — findings anchored to the exact text they concern.',
    chips: ['LLM Agents', 'Node', 'React', 'ISO 26262'],
    github: 'https://github.com/AmosChenZixuan/Redline',
    language: 'TypeScript',
    cardVariant: 'magenta',
    span: 's2',
    sections: [
      {
        kicker: '01 — THE PROBLEM',
        title: 'Peer review that scales with headcount',
        paras: [
          'Functional-requirement review in an ADAS department relies on peer reads: every requirement is hand-checked for writing standards, conflicts and duplicates against the requirement base, and SMART quality. It is slow, inconsistent between reviewers, and scales only by adding people.',
        ],
      },
      {
        kicker: '02 — THE WORKFLOW',
        title: 'Load, /review, apply, publish',
        paras: [
          'Redline is a two-panel portal: requirement viewer on the left, AI chat on the right. Load a requirement by tracking ID, run /review, and get categorized findings anchored to spans of the requirement text — conventions, conflicts, duplicates, ambiguity. Apply fixes by checkbox or agent rewrite, then publish as a new tracked revision: new ID, version+1, predecessor link, source superseded.',
        ],
      },
    ],
  },
  {
    slug: 'logsum',
    idx: '04',
    title: 'LogSum',
    cat: 'Log Analysis · Pipelines · Python',
    card: 'Turns a multi-gigabyte vehicle log into a one-page 5W1H incident report. Deterministic core, bounded memory — the LLM is optional.',
    tagline: 'A 500 MB log is ~130 million tokens. LogSum funnels it into a ~4 KB evidence pack any context window can hold.',
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
        kicker: '01 — THE FUNNEL',
        title: 'Every stage except the last is deterministic',
        paras: [
          'Template mining (Drain) collapses millions of lines into dozens of templates; error clusters keep counts, spans and one verbatim sample each — stack traces stitched into single records so a crash survives as a unit; a timeline records only onsets and rate spikes. The result serializes under a hard character cap with an error-preserving drop order.',
          'That evidence pack fits a single small-context LLM call. When it doesn’t, fold-summarization threads a rolling "story so far" state through sequential chunks — causality is temporal, and map-reduce loses the cross-chunk threads.',
        ],
      },
      {
        kicker: '02 — HOSTILE INPUT',
        title: 'Real captures are corrupted',
        paras: [
          'The DLT reader resyncs on corruption: scan forward for the next magic bytes, sanity-check the header, continue — recovering 47,055 of 47,064 messages from a capture with a deliberately destroyed header, where a bare parser dies at the first bad byte. Unknown text formats get an LLM-proposed regex validated in a sandboxed subprocess before it parses anything.',
        ],
      },
      {
        kicker: '03 — IN CI',
        title: 'A report and an exit code',
        paras: [
          'A FastAPI service wraps the pipeline; summarize-cli drives submit-and-poll and turns the verdict into a CI-friendly exit code, so a pipeline can gate directly on "a FATAL was found". The report renders fully without a model — the narrative degrades to a stub, never the pipeline.',
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
    tagline: 'One particle representation, one XPBD loop — materials differ only in which constraints touch their particles.',
    chips: ['Python', 'Taichi', 'XPBD', 'CUDA', 'Vulkan'],
    github: 'https://github.com/AmosChenZixuan/PyFlexim',
    language: 'Python',
    cardVariant: 'paper',
    span: 's6',
    sections: [
      {
        kicker: '01 — WHY UNIFIED',
        title: 'Everything is particles + constraints',
        paras: [
          'Cloth is XPBD distance + bending constraints; rigids are shape matching; soft bodies are overlapping shape-matched clusters with stiffness below one; fluid is a PBF density constraint; gas adds temperature buoyancy and vorticity; inflatables are a closed-mesh volume constraint. Sharing particles, grid and solver loop makes two-way coupling free — cloth drapes a rigid body, a cube squashes a balloon, a paddle pushes water.',
        ],
      },
      {
        kicker: '02 — THE STACK',
        title: 'Taichi kernels, headless export',
        paras: [
          'Built on Taichi (CUDA/Vulkan) with a CPU fallback that runs anywhere. Headless export renders gifs and mp4s without a display, and a bootstrap shim fixes the WSL CUDA linker path so uv run just works.',
        ],
      },
    ],
  },
]
