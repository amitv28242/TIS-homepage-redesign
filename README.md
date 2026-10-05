# Tulas International School (TIS) — Homepage Redesign

A modern, animated, high-converting redesign of the TIS homepage built with Next.js 14, Tailwind CSS and Framer Motion.

## 🚀 Live Demo
- **Live URL:** [tis-homepage-redesign-mvgdxvjx2-amit-verma-s-projects-4feda4e5.vercel.app](https://tis-homepage-redesign-mvgdxvjx2-amit-verma-s-projects-4feda4e5.vercel.app/)
- **Repository:** [https://github.com/your-username/tis-homepage-redesign](https://github.com/amitv28242/TIS-homepage-redesign)
## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + CSS variables
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## ✨ Standout Features Implemented

1. **Custom Cursor** — A spring-following dual-layer cursor (outer ring + inner dot) that enlarges on hoverable elements. Auto-disabled on touch devices via `matchMedia("(pointer: fine)")` and on `prefers-reduced-motion`. Uses Framer Motion `useMotionValue` + `useSpring` for 60 FPS without re-renders.

2. **Scroll Progress Bar** — Top-of-viewport gradient bar driven by `useScroll()` and smoothed with `useSpring`.

3. **Scroll-Triggered Reveals** — All sections wrap content in a reusable `<Reveal>` component using `whileInView` with `once: true` and 0.5s durations.

4. **Animated Theme Switcher** — Light/dark toggle with a spring-animated knob, persisted in `localStorage`, respecting system preference on first visit.

## 📦 Getting Started Locally

```bash
[https://github.com/amitv28242/TIS-homepage-redesign](https://github.com/amitv28242/TIS-homepage-redesign)
cd tis-homepage-redesign
npm install
npm run dev
