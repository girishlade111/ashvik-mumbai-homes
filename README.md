# Ashvik Mumbai Homes

A modern real-estate website for **Ashvik Construction**, Mumbai — browse property listings,
ongoing/completed projects, renovation services, and get in touch. Built with React, Vite,
shadcn-ui, and Tailwind CSS.

## Features

- **Home page** — hero with property search bar, featured listings (sale/rent), services
  overview, testimonials, and contact CTA.
- **Listings page** — searchable/filterable property catalogue (BHK, budget, locality,
  furnishing status) with property cards.
- **Property detail pages** — full specs (area, bathrooms, parking, floor plan info),
  image gallery, and enquiry CTA for every property.
- **Projects page** — ongoing and completed construction projects with status and timelines.
- **Services page** — construction, renovation, interior design, and consultancy offerings.
- **About page** — company profile, milestones, and team values.
- **Contact page** — contact form, phone/email details, and office address/map.
- Client-side routing via React Router, fully responsive mobile-first design, dark UI
  accents with the shadcn component set.

## Tech stack

- **Vite 5** + **React 18** + **TypeScript 5**
- **React Router DOM 6** (client-side routing)
- **shadcn-ui** (Radix UI primitives), **Tailwind CSS 3**, **tailwindcss-animate**
- **TanStack React Query**, **React Hook Form** + **Zod** validation
- **lucide-react** icons, **date-fns**, **recharts**

## Quick start

Prerequisites: Node.js 18+ and npm.

```sh
# 1. Clone the repository
git clone https://github.com/girishlade111/ashvik-mumbai-homes.git
cd ashvik-mumbai-homes

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start the dev server
npm run dev
```

The app runs at `http://localhost:8080` (see `vite.config.ts`).

## Build

```sh
npm run build
```

Produces a static `dist/` folder. Because the site is served from the
`/ashvik-mumbai-homes` sub-path on GitHub Pages, the production build uses
`--base=/ashvik-mumbai-homes/` and the router uses a matching `basename`.

## Project structure

```
├── index.html            # Entry HTML
├── public/               # Static assets (favicon, robots.txt, images)
├── src/
│   ├── main.tsx          # App bootstrap
│   ├── App.tsx           # Router + providers (basename for Pages sub-path)
│   ├── pages/            # Index, Listings, PropertyDetail, Projects,
│   │                     # Services, About, Contact, NotFound
│   ├── components/       # Header, Footer, PropertyCard, SearchBar, ui/*
│   ├── hooks/            # Shared React hooks
│   ├── lib/              # Utility helpers
│   ├── assets/           # Images
│   ├── index.css / App.css
├── vite.config.ts        # Vite config (@ alias, dev server)
├── tailwind.config.ts    # Tailwind theme config
└── tsconfig*.json        # TypeScript configs
```

## Env vars

None — all listing/project data is bundled statically. No backend or API keys required.

## Deploy notes

- Static site — any static host works (GitHub Pages, Cloudflare Pages, Netlify, Vercel).
- Live on GitHub Pages at `https://girishlade111.github.io/ashvik-mumbai-homes/`
  (built output copied to the repo root on `main`; Pages serves the root).
- **SPA refresh caveat:** GitHub Pages has no rewrite rules, so refreshing a deep route
  like `/listings` falls back to the 404 page. In-app navigation works normally.

---

Built by Girish Lade — [ladestack.in](https://ladestack.in)
