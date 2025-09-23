# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## Architecture

This is an **Astro-based portfolio website** using:
- **Astro 5.x** with static site generation
- **Tailwind CSS** for styling with custom design system
- **TypeScript** enabled via tsconfig.json

### Key Structure

- **Layout System**: Single `Layout.astro` provides base HTML structure with French localization, SEO meta tags, and global CSS import
- **Component Architecture**: Modular components for each portfolio section (Hero, About, TechStack, Projects, Contact, Navigation, Footer)
- **Data-Driven Content**: Portfolio data is centralized in `src/pages/index.astro` as a JavaScript object containing all content (personal info, skills, projects, contact details)
- **Styling System**:
  - Custom Tailwind config with primary/secondary color palette and custom animations
  - Global CSS with Inter font, custom scrollbar, and focus styles
  - Animation keyframes for fade-in, slide-up, and directional slide effects

### Content Management

All portfolio content (name, skills, projects, contact info) is managed through the `portfolioData` object in `index.astro`. This includes:
- Personal information and descriptions
- Technology stacks with skill levels and icons
- Project portfolios with technologies and links
- Contact information

### Styling Conventions

- Uses Tailwind utility classes throughout
- Custom color system: `primary-*` (blue tones) and `secondary-*` (purple tones)
- Custom animations: `animate-fade-in`, `animate-slide-up`, `animate-slide-in-left/right`
- Focus management with `.focus-outline` utility class