# Alwayne Bailey – Portfolio

Personal portfolio site for **Alwayne Bailey** (TechOps Engineer, Escalation Engineer, Software Engineer, and Teacher). Built with Next.js, TypeScript, and Tailwind CSS.

**Live:** [alwaynebailey.netlify.app](https://alwaynebailey.netlify.app/)

---

## Tech stack

- **Runtime:** Node.js 22+
- **Framework:** [Next.js 15](https://nextjs.org/) (Pages Router, static export)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), custom CSS variables (light/dark theme)
- **Contact form:** [Netlify Forms](https://docs.netlify.com/forms/setup/) (no third-party SDK)
- **Icons:** [Lucide React](https://lucide.dev/), custom SVG (GitHub, LinkedIn)

---

## Project structure

```
├── components/       # Reusable UI (ContactForm, ThemeToggle, hamburger, etc.)
├── contexts/         # ThemeContext (light/dark)
├── pages/            # Next.js pages (_app, _document, index)
├── sub/              # Page sections (Banner, About, NavBar, Experience, Education, Skills, Contact)
├── styles/           # globals.css (theme vars, components, reduced motion)
├── svg/              # Inline SVG components (github, linkedin)
├── utils/            # useReducedMotion
├── tests/            # Critical-path Vitest suite
├── appContext.tsx    # Global state (mobile nav)
├── next.config.js    # Static export, image remotePatterns
├── netlify.toml      # Netlify build (Node 22, npm ci, publish out)
├── .nvmrc            # Node 22 (for local dev / Netlify)
└── tailwind.config.js
```

---

## Requirements

- **Node.js 22** or higher (see [nodejs.org](https://nodejs.org/)). Use `.nvmrc` or `nvm use` if you use nvm.

---

## Getting started

### Install

```bash
npm install
```

For CI or a clean install from the lockfile:

```bash
npm ci
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build (static export)

```bash
npm run build
```

Output is in the `out/` directory. Deploy `out/` to any static host (e.g. Netlify, Vercel).

### Other scripts

- `npm test` – critical-path tests
- `npm run type-check` – TypeScript check
- `npm run lint` – ESLint

---

## Deploying to Netlify

This site uses **static export** (no Node server). The repo’s `netlify.toml` and `.nvmrc` are already set for Netlify:

| Setting               | Value                                   |
| --------------------- | --------------------------------------- |
| **Node version**      | 22 (via `netlify.toml` and `.nvmrc`)    |
| **Build command**     | `npm ci && npm run build`               |
| **Publish directory** | `out`                                   |
| **Next.js plugin**    | Disabled (`NETLIFY_NEXT_PLUGIN_SKIP=1`) |

- Use **Node.js 22** so Netlify Agent Runners and features work as expected.
- Contact form submissions are handled by **Netlify Forms**. Enable Forms in **Site configuration → Forms** and check the Forms tab in the deploy dashboard for submissions.

---

## Features

- **Light / dark theme** – defaults to dark; ThemeContext + CSS variables, persisted in `localStorage`
- **Contact form** – submissions via Netlify Forms (honeypot included)
- **Responsive layout** – mobile hamburger nav, desktop nav bar
- **Accessibility** – skip link, focus styles, `prefers-reduced-motion`, semantic landmarks and ARIA
- **Static export** – no Node server required; deploy `out/` to Netlify or similar

---

## License

Private project. All rights reserved.
