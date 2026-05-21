# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Polyscope** — marketing website for a Polymarket whale-intelligence mobile app (iOS & Android).
- GitHub repo: `williamjnewkirk/polyscope_website`
- Deployed at: `https://williamjnewkirk.github.io/polyscope_website/`

## Commands

```bash
npm run dev      # start local dev server (http://localhost:5173)
npm run build    # TypeScript compile + Vite production build → dist/
npm run preview  # preview the production build locally
```

## Stack

- **React 18** + **TypeScript** — component framework
- **Vite 6** — build tool; `base: '/polyscope_website/'` in `vite.config.ts` for GitHub Pages
- **Tailwind CSS v3** — utility styling; custom `ps-*` color tokens in `tailwind.config.js`
- **Framer Motion** — scroll-reveal animations (`whileInView`) and pricing toggle
- **@phosphor-icons/react** — all icons (no emojis in code per SKILL.md rules)
- **Google Fonts** — Outfit (sans) + JetBrains Mono (monospaced), loaded in `index.html`

## Architecture

All code lives in `src/`. The entry point is `src/main.tsx` → `src/App.tsx`, which composes these sections in order:

| Component | Section |
|---|---|
| `Navbar` | Fixed glass header with scroll-aware background |
| `Hero` | Asymmetric split: copy (left) + animated CSS phone mockup (right) |
| `MarqueeTicker` | Infinite-scroll market-name ticker |
| `Features` | Bento grid — LiveFeed, Signals, WalletTracker, AI Advisor |
| `HowItWorks` | 3-step staggered layout |
| `Pricing` | Monthly/yearly toggle + tier cards + feature comparison table |
| `DownloadCTA` | Waitlist email form + coming-soon App Store badges |
| `Footer` | Brand, nav columns, legal |

`PhoneMockup` is a shared sub-component rendered inside `Hero` and `Features`. It accepts a `screen` prop (`'feed'` | `'signals'`) and renders a fully CSS-simulated phone UI with a scrolling trade-card feed driven by `animate-scroll-up` (defined in `tailwind.config.js`).

## Custom Tailwind tokens

All brand colors are prefixed `ps-`:
`ps-black`, `ps-surface`, `ps-card`, `ps-border`, `ps-green`, `ps-green-dim`, `ps-orange`, `ps-text`, `ps-muted`

Custom animations defined in `tailwind.config.js`: `marquee`, `float`, `float-slow`, `scroll-up`, `pulse-dot`, `fade-in-up`.

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys automatically.
Requires **GitHub Pages** enabled in repo Settings → Pages → Source: **GitHub Actions**.
