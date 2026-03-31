# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — run ESLint (flat config, core-web-vitals)

Pre-commit hooks (husky + lint-staged) auto-format staged files with Prettier.

## Architecture

Next.js 16 App Router site, TypeScript, Tailwind CSS, deployed on Vercel (Node 24).

### Content system

- **Blog & Learning pages** use MDX files in `src/content/{blog,learning}/`. Each MDX file has gray-matter frontmatter (`title`, `publishedAt`, `summary`, `tags`). The data modules at `src/app/blog/blog.ts` and `src/app/learning/learning.ts` read these from the filesystem at build time.
- **Bookshelf** data lives in `src/data/bookshelf.json`, loaded via `src/app/bookshelf/bookshelf.ts`.
- MDX rendering uses `next-mdx-remote` (RSC) with custom components defined in `src/components/mdx/components.tsx` — includes code highlighting via sugar-high, embedded tweets via react-tweet, and auto-slugified headings.

### UI

- Uses shadcn/ui pattern (Radix UI primitives + CVA) — components in `src/components/ui/`.
- JetBrains Mono is the site-wide font.
- Homepage (`src/app/page.tsx`) is a client component with a terminal-style typing animation.

### Routing

Standard App Router file-based routing. Dynamic routes: `blog/[slug]` and `learning/[slug]`.
