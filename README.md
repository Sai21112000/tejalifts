# Sai Teja Vaidya — Strength & Recomposition Coaching

A fully static personal coaching website built with Vite, React, TypeScript, and Tailwind CSS. Deployed to GitHub Pages. No backend, no database, no login.

- **Live site:** https://tejalifts.com/ (or your GitHub Pages URL)
- **Stack:** Vite + React 18 + TypeScript + Tailwind CSS + lucide-react
- **Hosting:** GitHub Pages via GitHub Actions

---

## Table of Contents

1. [What This Is](#what-this-is)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Editing Content](#editing-content)
6. [Adding the Free Guide PDF](#adding-the-free-guide-pdf)
7. [Updating Testimonials](#updating-testimonials)
8. [Build & Deploy](#build--deploy)
9. [GitHub Pages Setup](#github-pages-setup)
10. [Custom Domain (Optional)](#custom-domain-optional)
11. [SEO & Social Previews](#seo--social-previews)
12. [Design System](#design-system)
13. [Roadmap](#roadmap)
14. [Troubleshooting](#troubleshooting)

---

## What This Is

A single-page coaching portfolio that explains:

- **Who I help** — beginners and intermediates rebuilding after setbacks
- **What I offer** — custom training programs and 1-on-1 coaching
- **Why someone should trust me** — story, powerlifting results, artifacts, testimonials
- **How to contact me** — WhatsApp, Instagram, email

The site is intentionally static. Content lives in one file (`src/content/siteContent.ts`). Testimonials and the free guide are shipped with the bundle — no database required.

---

## Tech Stack

| Layer        | Choice                              |
| ------------ | ----------------------------------- |
| Build tool   | Vite 5                              |
| Framework    | React 18 + TypeScript               |
| Styling      | Tailwind CSS 3                      |
| Icons        | lucide-react                        |
| Fonts        | Fraunces (display) + Inter (sans)   |
| Hosting      | GitHub Pages                        |
| CI           | GitHub Actions                      |

No runtime dependencies on external services. The site works completely offline once loaded.

---

## Project Structure

```
.
├── .github/workflows/deploy.yml     GitHub Pages deployment workflow
├── public/                          Static assets (favicon, guides, images)
│   └── guides/
│       └── protein-calories-cheat-sheet.pdf   Free downloadable guide
├── src/
│   ├── App.tsx                      Root component, composes all sections
│   ├── main.tsx                     React entry point
│   ├── index.css                    Tailwind base styles
│   ├── content/
│   │   └── siteContent.ts           ALL editable copy lives here
│   └── components/
│       ├── Navbar.tsx               Sticky nav with anchor links
│       ├── Hero.tsx                 Headline, CTAs, trust badges
│       ├── Story.tsx                Personal journey + timeline
│       ├── Services.tsx             Two service cards
│       ├── WhoFor.tsx               Who this is / isn't for
│       ├── RealWorldProof.tsx       Fat loss, rebuild, setback, powerlifting
│       ├── Results.tsx              Competition PRs
│       ├── Approach.tsx             Coaching philosophy cards
│       ├── Artifacts.tsx            Sample program / nutrition previews
│       ├── Testimonials.tsx         Client quotes
│       ├── FreeGuide.tsx            Free PDF download block
│       ├── FAQ.tsx                  Common questions
│       ├── Contact.tsx              WhatsApp / IG / Email buttons
│       └── Footer.tsx               Disclaimer + copyright
├── index.html                       HTML shell + SEO meta tags
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Opens at http://localhost:5173.

### Type-check

```bash
npm run typecheck
```

### Lint

```bash
npm run lint
```

### Production build

```bash
npm run build
```

Outputs to `dist/`. The build also copies `dist/index.html` to `dist/404.html` so client-side anchor navigation works on GitHub Pages.

### Preview the production build locally

```bash
npm run preview
```

---

## Editing Content

Almost every word on the site lives in **`src/content/siteContent.ts`**. To update the site:

1. Open `src/content/siteContent.ts`
2. Find the section (`hero`, `story`, `services`, `whoFor`, `proof`, `results`, `approach`, `artifacts`, `testimonials`, `freeGuide`, `faq`, `contact`, `footer`)
3. Edit the strings
4. Save — the dev server will hot-reload

### Common edits

**Change the hero headline:**

```ts
hero: {
  title: 'Your new headline here.',
  subtitle: 'Your new subtitle.',
  ...
}
```

**Update WhatsApp link:** `contact.buttons` — replace `https://wa.me/` with `https://wa.me/<your_number>` (international format, no `+`).

**Update Instagram handle:** `contact.buttons` — change the Instagram URL.

**Update email:** `contact.buttons` — change the `mailto:` URL.

**Add / edit FAQ items:** edit `faq.items` array.

---

## Adding the Free Guide PDF

The homepage links to `/guides/protein-calories-cheat-sheet.pdf`. To make the download work:

1. Create a `public/guides/` folder if it doesn't exist
2. Drop your PDF in it with the filename `protein-calories-cheat-sheet.pdf`
3. Or change the `guideHref` in `siteContent.ts` under `freeGuide` to match your filename

Anything inside `public/` is copied verbatim to the build output.

---

## Updating Testimonials

Testimonials are a plain array in `src/content/siteContent.ts`:

```ts
testimonials: {
  sectionLabel: 'What People Say',
  title: 'Real words from people I have coached.',
  items: [
    {
      name: 'Arjun M.',
      context: 'Beginner, 6 months in',
      quote: 'I went from random YouTube workouts to...',
    },
    // add more here
  ],
},
```

Add, edit, or reorder entries, commit, and push. The deploy workflow will rebuild the site automatically.

---

## Build & Deploy

Deployment is automated via `.github/workflows/deploy.yml`. Every push to `main` triggers:

1. `npm ci`
2. `npm run build` with `VITE_BASE_PATH=/${repo-name}/` injected
3. Upload of `dist/` as a Pages artifact
4. Deploy to GitHub Pages

Manual deploy: push to `main` or trigger **Actions → Deploy to GitHub Pages → Run workflow**.

### Why `VITE_BASE_PATH`?

GitHub Pages project sites are served under `https://<user>.github.io/<repo>/`. Vite needs to know that prefix so it can rewrite asset URLs correctly. The workflow sets this automatically from the repo name.

If you deploy to a **user/organization site** (served at the domain root, e.g. `https://<user>.github.io/`) or a **custom domain**, set `VITE_BASE_PATH=/` instead — see [Custom Domain](#custom-domain-optional) below.

---

## GitHub Pages Setup

One-time setup in your GitHub repo:

1. Go to **Settings → Pages**
2. Under **Build and deployment → Source**, select **GitHub Actions**
3. Push to `main` — the workflow will run and the site will be live at `https://<your-username>.github.io/<repo-name>/`

---

## Custom Domain (Optional)

To use a custom domain like `tejalifts.com`:

1. In **Settings → Pages → Custom domain**, enter your domain and save
2. At your DNS provider, add either:
   - **Apex domain** (`tejalifts.com`): four A records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **Subdomain** (`www.tejalifts.com`): CNAME pointing to `<your-username>.github.io`
3. Wait for DNS to propagate, then enable **Enforce HTTPS** on the Pages settings page
4. Update the workflow so the site is built for the root, not a subpath:

   ```yaml
   - name: Build
     env:
       VITE_BASE_PATH: /
     run: npm run build
   ```

5. Update the `<link rel="canonical">` and `og:url` in `index.html` to match your domain

---

## SEO & Social Previews

Meta tags live in `index.html`:

- `<title>` and `<meta name="description">`
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter card tags
- `<link rel="canonical">`

Replace the Pexels placeholder image in `og:image` / `twitter:image` with a hosted 1200×630 branded graphic for better link previews on WhatsApp, LinkedIn, and X.

---

## Design System

- **Fonts:** Fraunces for display headings, Inter for body. Three weights max per font.
- **Palette:** warm neutrals (stone) + amber-700 as the single accent. No purple, no gradients.
- **Spacing:** Tailwind 8-pt system. Sections use `py-20 md:py-24` consistently.
- **Layout:** mobile-first, 6xl max width for content, hero uses a two-column grid on desktop.
- **Motion:** subtle — color transitions on hover, no heavy animations.
- **Line height:** ~150% for body, ~120% for display headings.
- **Contrast:** all body text on light backgrounds uses `stone-700`/`stone-600`; dark sections use `stone-100`/`stone-400`.

---

## Roadmap

Current priority:

1. Ship V1 — **done**
2. Add testimonials — **done** (static)
3. Add "Who this is for / not for" — **done**
4. Add one free guide — **done** (needs the actual PDF dropped in `public/guides/`)
5. Share the site publicly

Future (V2):

- Separate Coaching / Powerlifting / Resources pages
- Intake form or Calendly link
- Case studies with before/after
- Blog / resources section

See the project roadmap in the original planning doc for the full picture.

---

## Troubleshooting

**Assets 404 on GitHub Pages**
Make sure `VITE_BASE_PATH` matches your deploy path. Project site → `/<repo>/`. User site or custom domain → `/`.

**Anchor links break on refresh**
The build step copies `index.html` to `404.html` so GitHub Pages falls back to the SPA. If you renamed files, ensure that copy step still runs (`package.json` → `build` script).

**Custom domain keeps resetting**
Add a `public/CNAME` file containing just your domain (e.g. `tejalifts.com`). Vite copies it into `dist/` on every build and GitHub Pages will respect it.

**Fonts look wrong**
Check the Google Fonts `<link>` in `index.html` is still present and not blocked by the network.

**PDF download does nothing**
The file must exist at the path in `siteContent.ts → freeGuide.guideHref`. Default location: `public/guides/protein-calories-cheat-sheet.pdf`.

---

## License

Personal project. All content (story, photos, testimonials) is owned by Sai Teja Vaidya. Code is free to reference.
