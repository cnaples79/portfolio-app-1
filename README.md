# Chase Naples — AI Engineering Portfolio

A production-focused portfolio for Chase Naples: Vice President, Software Engineer II, development lead, enterprise AI engineer, and open-source contributor.

The 2026 rebuild replaces the original single-component tab interface with a route-based Next.js application built around selected case studies, curated OSS evidence, original technical writing, accessibility, and verifiable deployment quality.

## Experience

- Senior AI engineering positioning and proof metrics on the home page
- Four detailed case studies under `/work/[slug]`
- Curated merged open-source contributions
- Original MDX articles under `/writing/[slug]`
- Direct email, GitHub, LinkedIn, and downloadable résumé actions
- Complete metadata, Open Graph image, JSON-LD, sitemap, and robots policy
- Responsive, keyboard-operable navigation and reduced-motion support
- Vercel Web Analytics and Speed Insights

Enterprise work is intentionally presented as a public-safe abstraction. The site does not include internal screenshots, architecture, code, URLs, product names, credentials, or confidential implementation details.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4 with a custom design system
- MDX for long-form writing
- Playwright and Axe for end-to-end and accessibility checks
- ESLint, Prettier, strict TypeScript, and GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

Run the non-browser checks and production build together with:

```bash
npm run check
```

Install the Chromium browser once before running Playwright locally:

```bash
npx playwright install chromium
```

## Content map

```text
app/
  page.tsx                 Home page
  work/[slug]/page.tsx     Project case studies
  writing/                 Writing index and article routes
  layout.tsx               Global metadata and shell
components/                Reusable site components
content/
  projects.ts              Typed project content
  contributions.ts         Curated OSS evidence
  writing.ts               Article metadata
  writing/*.mdx            Original articles
public/resume/             Current public résumé
tests/                     Playwright and Axe checks
```

## Deployment

The intended production source of truth is the repository `main` branch. Pull requests should receive a Vercel preview and pass the GitHub Actions quality workflow before merge.

The canonical production URL is [cnaples-portfolio.vercel.app](https://cnaples-portfolio.vercel.app/). Domain and branch settings should only be changed after the new preview is approved and the production deployment is verified.
