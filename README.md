# Thanh Trong Portfolio

Personal portfolio website for Trần Thanh Trọng — Backend Developer Intern.

Built with React + Vite + JavaScript, featuring a cinematic dark UI with glassmorphism, 3D tilt cards, and smooth animations.

## Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Features

- Hero section with background video
- 3D tilt card effects on hover (`TiltCard` component)
- Glassmorphism design system (liquid glass)
- Animated skill tags with staggered entrance
- Project showcase with metrics badges
- Experience timeline with company logos
- Education & certifications section with award icons
- Contact section with email copy, GitHub & LinkedIn links
- Resume PDF download
- Responsive design (mobile-first)

## Sections

- **Hero** — Avatar, headline, CTA buttons, social links
- **About** — Bio & stats counters (repos, skills, experience, certifications)
- **Skills** — Categorized skill tags (Backend, Database, Tools, Other)
- **Projects** — ParkMaster (featured), Company Website, LMS Module
- **Experience** — WordPress Developer & LMS Module Developer
- **Education** — FPT University + 7 certifications
- **Contact** — Contact info cards, action buttons
- **Footer** — Social icons, back to top

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── components/     # React components
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── AboutSection.jsx
│   ├── SkillsSection.jsx
│   ├── ProjectsSection.jsx
│   ├── ExperienceSection.jsx
│   ├── EducationSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── TiltCard.jsx
│   └── BackgroundVideo.jsx
├── data/
│   └── portfolioData.js   # All personal data
├── index.css              # Global styles + glass classes
├── App.jsx
└── main.jsx
public/
├── data/                  # Resume PDF
├── images/                # Company logos
└── video/                 # Background video
```

## Deployment

Deployed on Vercel. Push to `main` branch to trigger auto-deploy.
