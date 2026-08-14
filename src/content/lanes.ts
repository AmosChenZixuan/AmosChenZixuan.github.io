// The lane mechanism: which lanes exist, and how a per-lane rewrite is stored and read. Facts
// live in `profile.ts` and `projects.ts`, button labels with their markup in `Resume.tsx`. This
// module imports nothing — keep it that way and nothing here can create a cycle.

// Every lane the sheet can print, in the order the switch shows them. The head is the default:
// `Resume.tsx` falls back to it for a missing or unrecognised `?lane=`. Keys are addresses —
// `?lane=swe` links are already in circulation, so a key cannot be renamed for readability.
//
// `ai` overrides nothing: no bullet carries an `ai` key and `profile.lanes` has no `ai` entry,
// so every lookup falls back to `text` and to `profile`'s own defaults, which *are* the AI sheet.
export const LANE_KEYS = ['swe'] as const

// A named lane. `''` is not one: it is the *absence* of a lane, which is what the home timeline
// and the About page pass, and it can never be a bullet's rewrite key.
export type Lane = typeof LANE_KEYS[number]

// A bullet one lane rewrites is stored as a pair here, never copied into `profile.lanes`. A
// plain string is a bullet every lane shares. `text` is what a lane with no entry of its own
// prints, which is the whole of the AI sheet — it must stay byte-identical or that sheet moves.
//
// Keyed by `Lane`, never an open `[lane: string]`: that took any key and let a misspelt `swe`
// ship the AI wording on the SDE sheet with the build green. The check only bites where the
// bullets are closed with `satisfies` — an `as` assertion throws the excess-property check away.
export type Bullet = string | ({ readonly text: string } & Partial<Record<Lane, string>>)

// A lane's rewrite may be the empty string, which means "not on this lane's sheet" — the same
// fact can be worth a row to one reader and a repetition to another, and the alternative is a
// second bullet list per lane. `??` rather than `||` is what carries an empty rewrite through
// instead of falling back to `text`.
const one = (b: Bullet, lane: Lane | '') =>
  typeof b === 'string' ? b : lane === '' ? b.text : b[lane] ?? b.text

// Reads a list because the dropped rows must be gone before a caller sees an index — the tool
// chips ride the last project bullet, and that has to mean the last one on the page.
export const bulletTexts = (bs: readonly Bullet[], lane: Lane | '' = '') =>
  bs.map(b => one(b, lane)).filter(Boolean)
