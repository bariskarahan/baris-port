# barış — a notebook on games & people

A personal learning publication for mobile game product thinking. Built with Next.js App Router, TypeScript, and Tailwind CSS. No database, authentication, CMS, or external fonts.

## Development

Node.js 22 or newer recommended (validated with Node 24).

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
- `/experiments` — question, hypothesis, setup, metric, result, lesson
- `/about` — short introduction and learning principles

Visual system: neutral paper tones, dark typography, muted olive accents, restrained graphic studies, and torn section edges inspired by the supplied reference. Global styles live in `app/globals.css`; reusable components in `components/`. English content reflects the supplied brief. Identity currently uses Barış; no unprovided contact details or credentials are fabricated.
