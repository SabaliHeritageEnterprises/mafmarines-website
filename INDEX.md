# INDEX

A file-by-file map of the codebase. Start with `README.md` for setup; use
this file to jump straight to the piece you need to change.

## Routes (`app/`)

| File                                            | Route                            | Purpose                                                        |
| ------------------------------------------------ | --------------------------------- | --------------------------------------------------------------- |
| `app/layout.tsx`                                  | (root, wraps every page)          | Loads fonts, mounts the 3D background, mega-menu, footer, and page-transition wrapper |
| `app/globals.css`                                 | —                                 | Base styles, scrollbar theming, `prefers-reduced-motion` handling |
| `app/page.tsx`                                    | `/`                                | Homepage: split-letter hero + 2×2 service tilt-card grid |
| `app/about/page.tsx`                              | `/about`                          | Split-screen timeline slider, atmospheric image, scroll counters |
| `app/services/page.tsx`                           | `/services`                       | Services landing hero + 2×2 card grid |
| `app/services/yacht-support/page.tsx`             | `/services/yacht-support`         | Thin wrapper around `ServiceDetail` |
| `app/services/cargo-logistics/page.tsx`           | `/services/cargo-logistics`       | Thin wrapper around `ServiceDetail` |
| `app/services/offshore-engineering/page.tsx`      | `/services/offshore-engineering`  | Thin wrapper around `ServiceDetail` |
| `app/services/marine-consultancy/page.tsx`        | `/services/marine-consultancy`   | Thin wrapper around `ServiceDetail` |
| `app/fleet/page.tsx`                              | `/fleet`                          | Hero + `FleetDragScroll` |
| `app/insights/page.tsx`                           | `/insights`                       | News / case-study card grid |
| `app/contact/page.tsx`                            | `/contact`                        | Form + `ContactMap` |

## Components (`components/`)

| File                          | Used on                     | Purpose                                                                 |
| ------------------------------ | ---------------------------- | ------------------------------------------------------------------------ |
| `GlobalThreeDBackground.tsx`   | every page (via layout)     | `@react-three/fiber` particle field, persists across routes, regroups per pathname |
| `StickyMegaMenu.tsx`           | every page (via layout)     | Glass-morphism nav, hover-delay dropdown, active-page dot, scroll-shrink, mobile drawer |
| `GlobalFooter.tsx`             | every page (via layout)     | Sitemap links, office list, client-portal CTA |
| `PageTransition.tsx`           | every page (via layout)     | Framer Motion `AnimatePresence` fade/slide between routes |
| `TiltCard.tsx`                 | Home, Services landing      | 3D hover-tilt service card |
| `SplitHeadline.tsx`            | Home                         | Word-by-word staggered reveal for the hero headline |
| `Counter.tsx`                  | About                        | Scroll-triggered animated number |
| `Timeline.tsx`                 | About                        | Draggable/clickable horizontal milestone slider |
| `ServiceDetail.tsx`            | all 4 service sub-pages     | Shared hero + features + spec layout, keyed by `slug` |
| `SpecAccordion.tsx`            | `ServiceDetail`               | Collapsible technical-specifications table |
| `FleetDragScroll.tsx`          | Fleet                         | Pointer-drag horizontal scroll of vessel cards + modal trigger |
| `VesselModelViewer.tsx`        | Fleet modal                  | Rotatable Three.js hull placeholder (swap for real `.glb`) |
| `ContactMap.tsx`               | Contact                      | Stylised SVG world map with hover tooltips for each office |

## Shared logic (`lib/`)

| File            | Purpose                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------ |
| `constants.ts`   | Single source of truth: `IMAGES` (swap point for all photography), `SERVICES`, `FLEET`, `OFFICES`, `NAV_LINKS`, `COMPANY` copy |
| `utils.ts`       | `cn()` — Tailwind class-merge helper (`clsx` + `tailwind-merge`) |

## Config (project root)

| File                 | Purpose                                        |
| --------------------- | ------------------------------------------------ |
| `package.json`         | Dependencies + scripts                          |
| `next.config.js`       | Allowed remote image hosts                      |
| `tailwind.config.ts`   | Color tokens, type scale, keyframes — the design system |
| `postcss.config.js`    | Tailwind/Autoprefixer wiring                    |
| `tsconfig.json`        | TypeScript + `@/*` path alias                   |
| `README.md`            | Setup, route table, follow-ups before production |
