# Alwayne Bailey – Portfolio

Personal portfolio site for **Alwayne Bailey** (Software Engineer, Educator, Web3 Developer). Built with Next.js, TypeScript, and Tailwind CSS.

**Live:** [alwaynebailey.netlify.app](https://alwaynebailey.netlify.app/)

---

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org/) (Pages Router, static export)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), custom CSS variables (light/dark theme)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Contact form:** [EmailJS](https://www.emailjs.com/)
- **Icons:** Font Awesome, custom SVG (GitHub, LinkedIn)

---

## Project structure

```
├── components/       # Reusable UI (modal, skill, ThemeToggle, hamburger, etc.)
├── contexts/        # ThemeContext (light/dark)
├── pages/           # Next.js pages (_app, _document, index)
├── sub/             # Page sections (Banner, About, NavBar, Experience, Education, Skills)
├── styles/          # globals.css (theme vars, components, reduced motion)
├── svg/             # Inline SVG components (github, linkedin)
├── utils/           # animations (Framer variants), useReducedMotion
├── appContext.tsx   # Global state (modal, mobile nav)
├── next.config.js   # Static export, image remotePatterns, env
└── tailwind.config.js
```

---

## Getting started

### Install

```bash
npm install
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

### Deploying to Netlify

This site uses **static export** (no Node server). Use the repo’s `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `out`
- **Node version:** 18 (set in `netlify.toml`; optional in Netlify UI)
- **Next.js plugin:** Disabled via `NETLIFY_NEXT_PLUGIN_SKIP=1` in `netlify.toml` so Netlify treats the build as static only.

Add the EmailJS env vars in Netlify **Site settings → Environment variables** if you want the contact form to work.

### Other scripts

- `npm run start` – run production server (after build)
- `npm run type-check` – TypeScript check
- `npm run lint` – ESLint

---

## Environment variables

For the contact form (EmailJS), create a `.env` (or configure in your host):

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_USER_ID` | EmailJS user ID |

---

## Features

- **Light / dark theme** – ThemeContext + CSS variables, persisted in `localStorage`
- **Contact modal** – Form sent via EmailJS
- **Responsive layout** – Mobile hamburger nav, desktop nav bar
- **Accessibility** – Skip link, focus styles, `prefers-reduced-motion`, semantic landmarks and ARIA
- **Static export** – No Node server required; deploy `out/` to Netlify or similar

---

## License

Private project. All rights reserved.
