// A project's story may only state a number its own repo states. Nothing here is estimated.

import type { Bullet } from './lanes'

// One label for "this opens into the project's story", read by both card surfaces. Bare words:
// the arrow and the casing belong to whichever component renders it.
export const storyCta = 'How it works'

export type Shot = { src: string; cap: string }

export type Project = {
  slug: string
  idx: string
  title: string
  cat: string            // showroom card category line
  card: string           // showroom card blurb
  cv?: Bullet[]          // CV bullets; only on projects the résumé lists. Written, not derived
                         // from `card` — card copy sells, a CV bullet informs.
  cvWhen?: string        // CV date range. Not derivable from `cat`, which carries a bare year
                         // for the showroom card and cannot say whether the work is still live.
  tagline: string        // story-page hero tagline
  chips: string[]
  github?: string       // absent where no public repo exists — the story page drops the Links row
  language: string
  cardVariant: 'dark' | 'yellow' | 'magenta' | 'cyan' | 'paper'
  span: 's2' | 's4' | 's6'
  mark?: string          // brand mark for the home-card lockup
  short?: string         // lockup name when the full title is too long for the card
  hero?: Shot            // story-page hero shot
  stats?: { num: string; cap: string }[]
  sections: { kicker: string; title: string; paras: string[]; shot?: Shot | Shot[] }[]
  pull?: string
}

export const projects: Project[] = [
  {
    slug: 'bibilab',
    idx: '01',
    title: 'BibiLab',
    cat: '2026 · AI · Local-first · Python',
    card: 'A local, private NotebookLM for video — turn videos & playlists into a searchable, citation-backed AI notebook. No cloud.',
    cvWhen: 'March 2026 — PRESENT',
    cv: [
      'Built a **self-hosted, agentic RAG platform** that turns multilingual video sources into a searchable vector knowledge base, powering both grounded chat and automated artifact generation',
      'Implemented SSE streaming for long-running agent workflows, exposing tool execution and intermediate results through a **live tool ledger**, and started generation ahead of retrieval to drop time-to-first-token to **sub-second**',
      'Developed a standalone RAG evaluation framework with a **35-case curated golden set** and **LLM-as-a-judge** scoring, for reproducible benchmarking and regression testing',
    ],
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
    slug: 'reqmaster',
    idx: '03',
    title: 'ReqMaster',
    cat: '2025 · Requirements · Multi-agent',
    card: 'AI peer-review for functional requirements.',
    tagline: 'A model that rewrites your safety requirement is no help. One that points at the exact words and waits for you to agree is.',
    chips: ['Python', 'FastAPI', 'LangGraph', 'React', 'Azure OpenAI', 'MCP', 'Server-Sent Events'],
    language: 'Python + TypeScript',
    cardVariant: 'magenta',
    span: 's2',
    hero: { src: '/projects/reqmaster/flow.gif', cap: 'Load → review → apply → publish, end to end' },
    sections: [
      {
        kicker: 'THE PROBLEM',
        title: 'Peer review that scales with headcount',
        paras: [
          'Every functional requirement is hand-checked by another engineer: writing conventions, missing conditions, conflicts with requirements someone else wrote a year ago, and whether the thing can be objectively tested at all. It is slow, two reviewers rarely come back with the same list, and the only way to review more is to hire more people.',
          'The target was to cut that review cycle in half. The obvious way to get there is to hand the requirement to a model and ask for a better one. And that is the first thing everyone builds.',
        ],
      },
      {
        kicker: 'THE WRONG SHAPE',
        title: 'A better requirement nobody can sign',
        paras: [
          'It comes back cleaner. It is also unusable. The reviewer is holding two blocks of text with no idea what moved, or which of the edits they are agreeing to. Someone signs their name under this wording, and "the model wrote it and it reads better" is not an argument a safety process accepts. Give a model the whole requirement and it will quietly fix things nobody asked it to touch.',
          'So the model stopped writing requirements and started writing findings — one problem at a time, each naming the exact words it is about. The engineer decides which ones are real, and the application makes the edit, not the model. The text under review is frozen the moment the review starts, and publishing supersedes it instead of overwriting it, so whatever gets signed can be traced back to what was read. The full rewrite is still there as its own command, for requirements past patching. It just is not the review.',
        ],
        shot: [
          { src: '/projects/reqmaster/review-findings.png', cap: 'Review — each finding quotes the words it is about, and is accepted on its own' },
          { src: '/projects/reqmaster/rewrite.png', cap: 'Rewrite — for a requirement past patching, the whole thing comes back as a draft, unpublished' },
          { src: '/projects/reqmaster/published.png', cap: 'Publish — the new revision supersedes the one that was reviewed. Nothing is overwritten' },
        ],
      },
      {
        kicker: 'WHAT THE ANNOTATED SET SHOWED',
        title: 'The model quoted lines that were not there',
        paras: [
          'Every requirement in the evaluation set carried a human judgement of what was wrong with it, topped up with synthetic ones for the faults that are rare but matter. It caught the failure that nearly killed the idea. Findings kept pointing at text that did not exist — the problem described well, the fix sensible, and the quoted line a paraphrase the model had written itself. A reviewer only has to be burned by that twice before they stop opening the panel.',
          'So a finding has to quote the requirement word for word, and one whose quote is not in the text never reaches a human. Version 0 asked the model for character positions instead. It hands those over with total confidence and they are usually wrong. Copying a span of text is the one thing it is reliably good at — ask for what the model does well, and check it yourself.',
          'The other decision the set settled was to stop asking one agent for everything. I split the review into six quality dimensions, and an orchestrator plans the pass and assigns an agent to each one.',
        ],
      },
    ],
    pull: '“A finding that cannot point at the line it is about is just an opinion.”',
  },
  {
    slug: 'logelite',
    idx: '04',
    title: 'LogElite',
    cat: '2024 · Log Analysis · Pipelines',
    card: 'Root cause analysis on failed vehicle test builds, from six hours to forty minutes. Compress the log with fixed rules, compare it against the builds that passed, and let the model explain what changed.',
    tagline: 'Six hours to find out why a test build failed. The fix was not a bigger model. It was giving the model something it could actually read.',
    chips: ['Python', 'FastAPI', 'LangChain', 'MongoDB', 'Azure OpenAI'],
    language: 'Python',
    cardVariant: 'cyan',
    span: 's2',
    mark: '/projects/logelite/mark.svg',
    sections: [
      {
        kicker: 'THE WRONG PROBLEM',
        title: 'I treated it like a search problem',
        paras: [
          'A software build gives you one giant log file, around four million lines, and one question: what broke? Troubleshooting took an average engineer six hours, if lucky. Sometimes days.',
          'My first read was wrong. I treated it like any other long document — too big to read, so search it or summarize it. Neither works here, because the answer is not on the surface.',
          'Nothing in the log connects the steps of one action, so a single request arrives as scattered pieces that never mention each other. Timestamps come from different machines that do not agree, and they reset whenever part of the car restarts, so the order you read is not the order things happened. Severity labels are decided by whoever wrote each component, so an error in one place is routine noise and an info in another place is a component that stopped. And many failures are something that should have happened and did not. You cannot search for a line that is not there.',
        ],
      },
      {
        kicker: 'THE OBVIOUS BUILD',
        title: 'Map-reduce was the standard, but not the fix',
        paras: [
          'In 2023, everyone was building the same thing: cut the log into chunks, summarize each chunk, then summarize the summaries. I built that first, too.',
          'It does not fit this problem. Four million lines is far past any context window available then, so most of the file is thrown away before the model ever sees it. And summarizing chunk by chunk costs real money on every run, in a pipeline that fails many times a day.',
          'So the direction changed. Not to wait for a larger model, but to provide better input for it. The model was good at reasoning over a small piece of structured evidence, and bad at scanning four million lines to find that piece. So I moved the work to the front: deterministic steps that compress the log into structural units, each one small enough for the model to reason about properly. The model still writes the answer. It just stops doing the part it is bad at.',
          'One side effect matters later. Deterministic steps are testable — same log in, same units out, every time. That let me build a regression set out of real past failures, with ground truth being the lines the engineer actually used to find the bug.',
        ],
      },
      {
        kicker: 'WHAT THE TESTS SHOWED',
        title: 'A fault does not announce itself',
        paras: [
          'Version 0 shipped with compression and LLMs, but the regression set said it was not good enough. The units were smaller and cleaner, but the lines that mattered often were not in them.',
          'So I went and observed how engineers actually debug this. I noticed that nobody reads the failing log top to bottom. They start by filtering and narrowing the scope, which is what we already offered. Then they open a build that passed, put it next to the failing one, and look for the difference. That was the part I had missed. A fault rarely looks wrong on its own. It looks wrong next to normal.',
          'So the system got a baseline. Every build that passes on a branch adds to a picture of what that branch normally prints, and a failed build is compared against that picture. Three kinds of difference come out: what is new, what is missing, and what changed in volume. The missing one is why this works. No search will ever return a line that is not there. A comparison will.',
          'The new version ended up reaching more engineers beyond my original team, then was adopted by a sister department. Six hours became forty minutes, as reported by actual users.',
        ],
      },
    ],
    pull: '“The answer is not on the surface.”',
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

// Client work under NDA: no public repo, and nothing in it may be shown. It gets a CV entry
// and no card, so it stays out of `projects` — everything in that array is a showroom card and
// a `/projects/<slug>` story route.
export const hrHelpdesk: Pick<Project, 'slug' | 'title' | 'cvWhen' | 'chips' | 'cv' | 'github'> = {
  slug: 'hrdesk',
  title: 'HR Helpdesk',
  cvWhen: 'FEB 2026 - March 2026',
  chips: ['Python', 'FastAPI', 'RAG', 'WeCom'],
  cv: [
    'Shipped a policy-grounded RAG backend for small-business employee handbooks and onboarding materials, **citing the source passages** for every answer',
    'Implemented **evidence-gated refusal**, with 25% of production queries routed to a templated inquiry path',
  ],
}

// The three the landing showroom puts up front, in order. /projects lists all five,
// newest first — this is a curation, not the top of that list.
export const featured = ['bibilab', 'awc', 'logelite']
  .map(slug => projects.find(p => p.slug === slug)!)
