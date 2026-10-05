# Project Context

## What this is

Marketing landing for **AI Guard** (workstation-side AI-DLP product).
Next.js (App Router) + Tailwind; page components in `components/`,
application routes in `app/`, static assets in `public/`.

This repository sells the product; it does not enforce anything. Behavioural
claims about Guard itself belong to the product repository specs —
never duplicate them here.

## Stack — do not change without an ADR

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router), TypeScript |
| Styling | Tailwind (`tailwind.config.ts`) |

## Verification commands

```bash
npm install
npm run dev      # local development
npm run build    # production build (must stay green)
```

## Non-negotiable properties

1. Product claims on the landing must match the guard repository's
   `specs/compliance-map.md` — no invented capabilities in marketing copy.
2. English is the primary content language.
