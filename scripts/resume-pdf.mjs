// Generates public/resume.pdf from the built /resume route, so the PDF and the site cannot
// disagree. Run `npm run resume:pdf` after editing src/content/profile.ts, then commit the PDF.
//
// The PDF is written to public/ (the source of the file the site serves) AND copied into dist/,
// because Vite copies public/ into dist/ at build time — without the copy, the preview you are
// looking at still serves the previous PDF and you would think the run failed.
//
// Two runs on unchanged content differ by 4 bytes: Chromium stamps CreationDate/ModDate. The
// pages themselves are identical, so a diff on the tracked file means the timestamp, not the CV.
import { copyFileSync, existsSync } from 'node:fs'
import { chromium } from 'playwright'
import { preview } from 'vite'

const OUT = 'public/resume.pdf'

if (!existsSync('dist/index.html')) {
  console.error('dist/ is missing — run `npm run build` first (npm run resume:pdf does both).')
  process.exit(1)
}

const server = await preview({ preview: { port: 4321, strictPort: true } })
const browser = await chromium.launch()
const page = await browser.newPage()

page.on('pageerror', e => { throw e })
await page.goto(`${server.resolvedUrls.local[0]}resume`, { waitUntil: 'networkidle' })
// Webfonts are fetched from Google on load; a PDF taken before they arrive is laid out in the
// fallback faces and paginates differently.
await page.evaluate(() => document.fonts.ready)
await page.pdf({ path: OUT, format: 'A4', printBackground: true })

await browser.close()
await server.close()

copyFileSync(OUT, 'dist/resume.pdf')
console.log(`wrote ${OUT} (and dist/resume.pdf)`)
