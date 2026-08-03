# Project Context

## What this is

Marketing landing for **Techcatalyst Guard** (workstation-side AI-DLP product).
Next.js (App Router) + Tailwind; design-system bundle in `ds-bundle/`, page
components in `components/`, application routes in `app/`, static assets in
`static/` and `public/`, build artifacts in `artifacts/`.

This repository sells the product; it does not enforce anything. Behavioural
claims about Guard itself belong to the `techcatalyst_guard` repository specs —
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
2. Russian is the primary content language unless a section states otherwise.
