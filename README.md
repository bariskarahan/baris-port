# barış — a notebook on games & people

A personal learning publication for mobile game product thinking. Built with Next.js App Router, TypeScript, and Tailwind CSS. No database, authentication or CMS. The one display font (Playfair Display, via `@fontsource`) is self-hosted, so no requests go to external font services.

## Development

Use a supported Node.js LTS on current systems (validated with Node 24). Next.js requires Node 18.18+; Node 18.20.8 can be used for local-only preview on macOS Catalina, but it is end of life and must not be used for production. Tailwind 3 avoids the Tailwind 4 native CSS binding requirement.

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run build
npm run typecheck
```

Production: `npm run start` after building.

## Content

Add notes to `lib/content.ts`. Each article includes a unique slug, category, summary, visual motif, and sections. Routes and article contents are generated from this data. Add experiment plans to the `experiments` array. Currently all content is illustrative and all experiments are proposed, not run. Replace sample copy with real work as research develops.

## Routes

- `/` — introduction, selected thinking, experiments, topics, about
- `/thinking` — searchable archive with topic filters
- `/thinking/[slug]` — analysis with section navigation
- `/experiments` — the hub: analyses and tests in one searchable, filterable grid
- `/experiments/[slug]` — a test plan: question, hypothesis, setup, metric, result, lesson
- `/about` — short introduction and learning principles

Visual system (DeGods-led): neutral gray paper, black grotesk headings (Helvetica Neue stack), a fat serif wordmark, italic serif accents, a white-framed hero image with a full-screen viewer, sticker buttons, flat two-column experiment cards, flat hand-drawn comic illustrations of cacti and research-informed mobile puzzles, progression tracks, and team events, and torn paper transitions inspired by the supplied reference. Global styles live in `app/globals.css`; reusable components in `components/`. English content reflects the supplied brief. Identity currently uses Barış; no unprovided contact details or credentials are fabricated.

Illustration subjects and source links are recorded in `docs/mobile-gaming-visual-research.md` and `lib/visuals.ts`. Artwork is original and conceptual; it does not depict official screenshots or establish the sample hypotheses as findings.
