# Meridian Marine Group — Corporate Website

A fully routed Next.js 14 (App Router) marketing site for a premium marine
logistics, yacht support, and offshore engineering group.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires network access to Google Fonts at build
time (`fonts.googleapis.com`) since the type system uses `next/font/google`
for Syne, Inter, and Cormorant Garamond.

## Routes

| Path                              | Page                    |
| ---------------------------------- | ----------------------- |
| `/`                                | Home                    |
| `/about`                           | About Us                |
| `/services`                        | Services landing        |
| `/services/yacht-support`          | Yacht Support            |
| `/services/cargo-logistics`        | Cargo Logistics          |
| `/services/offshore-engineering`   | Offshore Engineering     |
| `/services/marine-consultancy`     | Marine Consultancy       |
| `/fleet`                           | The Fleet                |
| `/insights`                        | Insights (news)          |
| `/contact`                         | Contact                  |

## Swapping placeholder imagery

Every image on the site resolves through **one file**:

```
lib/constants.ts → IMAGES { ... }
```

Replace any URL there with a final asset (either a hosted URL or a path
under `/public`) — no component files need to change.

## Structure

- `app/` — routed pages (App Router)
- `components/` — shared UI: mega-menu, 3D background, tilt cards, timeline,
  fleet drag-scroll + 3D model viewer, contact map, etc.
- `lib/constants.ts` — single source of truth for copy, images, services,
  fleet data, and nav structure
- `lib/utils.ts` — `cn()` class-merge helper

## Notable implementation details

- **Persistent 3D background** (`components/GlobalThreeDBackground.tsx`):
  a `@react-three/fiber` particle field rendered once in `app/layout.tsx`
  so it survives route changes; it eases toward a different formation
  per route rather than reloading.
- **Mega-menu** (`components/StickyMegaMenu.tsx`): glass-morphism, 200ms
  hover-intent delay before the dropdown opens, glowing gold active-page
  dot, and a navbar that compresses on scroll.
- **Page transitions**: `components/PageTransition.tsx` wraps `{children}`
  in Framer Motion's `AnimatePresence` for a fade/slide between routes.
- **Fleet page**: pointer-based horizontal drag-scroll
  (`components/FleetDragScroll.tsx`) with a modal that mounts a rotatable
  Three.js hull placeholder (`components/VesselModelViewer.tsx`) — swap in
  a real `.glb` model when available.
- The 3D scene and vessel viewer are lazy-loaded client-only
  (`next/dynamic`, `ssr: false`) so they never block first paint.

## Known follow-ups before shipping to production

- Replace all Unsplash placeholder imagery via `lib/constants.ts`.
- Wire the contact form to a real endpoint (currently client-side only).
- Swap `VesselModelViewer`'s procedural hull for real vessel `.glb` scans.
- Next.js is pinned to `14.2.35` (last patched 14.x release — the 14.x line
  is EOL as of Oct 2025). Consider migrating to a current Next 15/16 release
  for ongoing security support.
