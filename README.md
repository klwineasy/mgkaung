# KAUNG LWIN — Cyberpunk Portfolio

> A static portfolio site built with **Next.js 15**, **React 19**, **TypeScript 5.7**, and **Tailwind CSS 3**, requiring **Node.js 24+**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![Node](https://img.shields.io/badge/Node.js-24+-green?style=flat-square&logo=node.js)
![Static Export](https://img.shields.io/badge/Output-Static_Export-green?style=flat-square)

---

## ✨ Features

- **Terminal boot screen** — animated system startup sequence before the page loads
- **Glitch title effect** — chromatic aberration on the hero name, triggered periodically
- **Interactive particle field** — floating nodes with connecting lines that react to mouse movement
- **Scroll-triggered reveals** — content cards animate in as you scroll
- **Section typewriter** — section headings type themselves in on scroll
- **Card sweep animations** — neon light sweep on experience card hover
- **Random card glitch** — periodic jitter + hue-rotate on random experience cards
- **Animated background** — scanlines, grid, floating color orbs, side data streams
- **Fully typed** — all resume data, component props, and utilities are TypeScript-typed
- **Static export** — builds to plain HTML/CSS/JS — deploy anywhere

---

## 📋 Requirements

| Tool | Version |
|------|---------|
| Node.js | **24.x** or higher |
| npm | 10.x or higher (bundled with Node 24) |

> Use [nvm](https://github.com/nvm-sh/nvm), [fnm](https://github.com/Schniz/fnm), or [Volta](https://volta.sh/) to manage Node versions.
> A `.nvmrc` and `.node-version` file pinned to `24` are included.

```bash
# With nvm
nvm install 24
nvm use 24

# With fnm
fnm use 24
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server (uses Turbopack by default)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 Building for Production

```bash
# Type-check first
npm run type-check

# Build and export as static files
npm run build
```

The static output is generated in the `out/` directory. Deploy this folder to:

- **GitHub Pages**
- **Netlify** (drag and drop the `out/` folder)
- **Vercel** (automatic static detection)
- **Cloudflare Pages**
- **Any static host** (S3, etc.)

---

## 🗂 Project Structure

```
kaung-portfolio/
├── .nvmrc                      # Pins Node 24 for nvm
├── .node-version               # Pins Node 24 for fnm/volta
├── eslint.config.mjs           # ESLint 9 flat config
├── next.config.ts              # Static export + Turbopack config
├── tailwind.config.ts          # Extended theme with custom animations
├── tsconfig.json               # TypeScript 5.7 config (target: ES2022)
├── postcss.config.mjs
├── package.json                # Next 15 + React 19 + Node 24 engine field
└── src/
    ├── app/
    │   ├── layout.tsx          # Root layout — metadata + viewport exports
    │   ├── page.tsx            # Main page (React Server Component)
    │   └── globals.css         # Global styles, keyframes, Tailwind directives
    ├── components/
    │   ├── Background.tsx      # Scanlines, grid, orbs, data streams (server)
    │   ├── BootScreen.tsx      # Terminal boot animation (client)
    │   ├── CertCard.tsx        # AWS certification card (server)
    │   ├── ClientShell.tsx     # Client wrapper: boot screen + particles
    │   ├── ExperienceCard.tsx  # Work experience card with hover FX (client)
    │   ├── Hero.tsx            # Hero / header section (server)
    │   ├── ParticleCanvas.tsx  # Canvas particle system (client)
    │   ├── Reveal.tsx          # Scroll-triggered reveal wrapper (client)
    │   ├── SectionTitle.tsx    # Typewriter section heading (client)
    │   └── SkillBlock.tsx      # Skill tag group card (server)
    ├── data/
    │   └── resume.ts           # All resume content — single source of truth
    └── types/
        └── resume.ts           # TypeScript interfaces for all resume data
```

---

## ✏️ Customizing Content

All resume data lives in one file:

```
src/data/resume.ts
```

Edit this file to update name, contact info, work history, skills, certs, and education. The entire site re-renders from this data — no component changes needed.

### Example: Adding a new experience entry

```ts
// src/data/resume.ts
experience: [
  {
    title: "Senior Front-End Engineer",
    company: "Your Company",
    location: "City, State",
    period: "JAN 2025 – PRESENT",
    bullets: [
      "Led architecture decisions for a React 19 component library...",
      "Reduced bundle size by 40% using tree shaking and code splitting...",
    ],
  },
  // ...existing entries
]
```

### Example: Adding a skill group

```ts
skillGroups: [
  {
    category: "Testing",
    variant: "cyan",   // "cyan" | "pink" | "yellow"
    skills: ["Jest", "React Testing Library", "Playwright"],
  },
  // ...
]
```

---

## 🔄 Next 15 Highlights

| Feature | Detail |
|---------|--------|
| **Turbopack** | Default dev server (`next dev --turbopack`) — faster HMR |
| **React 19** | New JSX transform, no manual `React` import needed |
| **`viewport` export** | Separated from `metadata` into its own named export |
| **ESLint 9** | Flat config (`eslint.config.mjs`) replaces `.eslintrc` |
| **`Readonly<>` children** | `RootLayout` uses `Readonly<{ children }>` convention |
| **`target: ES2022`** | tsconfig targets modern JS aligned with Node 24 |

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Cyan | `#00f5ff` | Primary accents, glow, links |
| Magenta | `#ff00a0` | Alternate card accents |
| Yellow | `#f5e642` | Dates, certification highlights |
| Green | `#00ff88` | Status indicator |

**Fonts** (Google Fonts):
- **Orbitron** — headings and labels
- **Share Tech Mono** — monospace / code elements
- **Rajdhani** — body text

---

## 🔧 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.1.7 | Framework (App Router, static export) |
| React | 19.0.0 | UI rendering |
| TypeScript | 5.7.3 | Type safety |
| Tailwind CSS | 3.4.17 | Utility-first styling |
| ESLint | 9.17.0 | Linting (flat config) |
| Node.js | 24.x | Runtime requirement |

---

## 📄 License

MIT — free to use and adapt for your own portfolio.
