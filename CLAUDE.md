# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Polyscope** — marketing website for a Polymarket whale-intelligence mobile app (iOS & Android).
- GitHub repo: `williamjnewkirk/polyscope_website`
- Deployed at: `https://polyscopeapp.com` (custom domain via `public/CNAME`; GitHub Pages serves at the domain root)

## Commands

```bash
npm run dev      # start local dev server (http://localhost:5173)
npm run build    # TypeScript compile + Vite production build → dist/
npm run preview  # preview the production build locally
```

## Stack

- **React 18** + **TypeScript** — component framework
- **Vite 6** — build tool; `base: '/'` in `vite.config.ts` (custom domain at root). Local URLs are `http://localhost:5173/` (dev) and `http://localhost:4173/` (preview) — no subpath.
- **react-router-dom 7** — `/`, `/support`, `/privacy`, `/terms`, `/eula` routes (pages in `src/pages/`)
- **react-snap** — postbuild prerender of all routes to static HTML; `src/lib/prerender.ts` exposes `isPrerendering`, and `main.tsx` stubs `IntersectionObserver` during prerender so animated content is captured visible
- **Tailwind CSS v3** — utility styling; custom `ps-*` color tokens in `tailwind.config.js`
- **Framer Motion** — scroll-reveal animations (`whileInView`) and pricing toggle
- **@phosphor-icons/react** — all icons (no emojis in code per SKILL.md rules)
- **Google Fonts** — Outfit (sans) + JetBrains Mono (monospaced), loaded in `index.html`

## Architecture

All code lives in `src/`. The entry point is `src/main.tsx` → `src/App.tsx`, which composes these sections in order:

| Component | Section |
|---|---|
| `Navbar` | Fixed glass header with scroll-spy active-section underline |
| `Hero` | Asymmetric split: word-blur headline + 3D-tilt phone, sonar rings, push-notification simulator |
| `MarqueeTicker` | Infinite-scroll market ticker (pauses on hover, pinned "Live markets" label) |
| `Features` | Bento grid of mouse-spotlight cards — LiveFeed, Signals, WalletTracker, AI Advisor |
| `HowItWorks` | 3-step staggered layout with scroll-drawn SVG path + CountUp stats |
| `AppShowcase` | Auto-advancing interactive tabs (feed/signals/wallets/ai) driving the phone mockup |
| `Pricing` | Monthly/yearly toggle + tier cards (Pro card has animated conic border) + comparison table |
| `DownloadCTA` | Waitlist email form + coming-soon App Store badges |
| `Footer` | Brand, nav columns, legal |

`PhoneMockup` is a shared sub-component (Hero, Features, AppShowcase). Its `screen` prop is `'feed' | 'signals' | 'wallets' | 'ai'` and it renders a CSS-simulated phone UI mirroring the real app screens, with animated screen transitions and a scrolling trade feed (`animate-scroll-up`). Demo data mirrors real app screenshots — keep it realistic when editing.

`src/components/fx/` holds reusable interaction primitives: `Magnetic` (cursor-attracted buttons), `Tilt` (pointer-tracked 3D tilt + glare), `CountUp` (in-view counters), `SpotlightCard` (mouse-tracked border glow via CSS vars), `TypeText` (typewriter). All of them render their final state during react-snap prerendering via `isPrerendering`.

## Custom Tailwind tokens

All brand colors are prefixed `ps-`:
`ps-black`, `ps-surface`, `ps-card`, `ps-border`, `ps-green`, `ps-green-dim`, `ps-orange`, `ps-text`, `ps-muted`

Custom animations defined in `tailwind.config.js`: `marquee`, `float`, `float-slow`, `scroll-up`, `pulse-dot`, `fade-in-up`.

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys automatically.
Requires **GitHub Pages** enabled in repo Settings → Pages → Source: **GitHub Actions**.
