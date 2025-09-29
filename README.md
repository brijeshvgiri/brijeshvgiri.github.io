# Portfolio Website

## Overview

This is a personal portfolio website for Brijesh Veer Bahadur Giri. The application showcases professional experience, education, skills, and projects through a modern, responsive web interface. The app is a frontend-only React site built with Vite and Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom design system featuring light/dark mode support
- **Component Library**: Radix UI primitives with shadcn/ui components for consistent, accessible UI elements
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

This project does not include a backend or database.

### Design System
- **Typography**: Inter (primary) and JetBrains Mono (code) from Google Fonts
- **Color Palette**: Professional blue accents with neutral base colors
- **Layout**: Consistent spacing using Tailwind's 4/6/8/12/16/24 unit system
- **Components**: Card-based layouts with glassmorphism effects and subtle shadows
- **Responsive**: Mobile-first design with adaptive navigation

### Development Tooling
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Bundling**: Vite with React plugin and development error overlays
- **Code Quality**: ESNext modules with modern JavaScript features
- **Asset Management**: Organized assets directory with image optimization

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **Routing**: Wouter for lightweight client-side navigation
- **UI Components**: Comprehensive Radix UI primitive collection (accordion, dialog, dropdown, etc.)
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer

### Database & Backend
- **Database**: Neon PostgreSQL serverless database
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Storage**: connect-pg-simple for PostgreSQL session management
- **Validation**: Zod for runtime type validation with Drizzle integration

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Runtime**: tsx for TypeScript execution in development
- **Module System**: ESNext with bundler module resolution
- **Error Handling**: Replit-specific error modal and cartographer plugins

### Utility Libraries
- **Styling Utilities**: clsx and class-variance-authority for conditional styling
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation and formatting
- **UI Enhancements**: Embla Carousel for interactive components

## Running Locally

```bash
# install deps
npm install

# start dev server (light mode by default)
npm run dev    # http://localhost:5001/

# build production bundle
npm run build  # outputs to dist/

# preview the built site locally
npm run preview  # http://localhost:4173/
```

## Deploying to GitHub Pages

This repo uses the `gh-pages` workflow:

- `main` branch: your source code
- `gh-pages` branch: the built static site that GitHub Pages serves

Current scripts in `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Deploy with:

```bash
npm run deploy  # predeploy runs automatically, then dist/ is pushed to gh-pages
```

### GitHub Pages Settings

- Repository: `brijeshvgiri/brijeshvgiri.github.io`
- Pages → Source: "Deploy from a branch"
- Branch: `gh-pages` (root)

After deploying, your site is available at:

- https://brijeshvgiri.github.io/

## Notes

- You don't need to push `main` to update the live site; `npm run deploy` pushes the built files directly to `gh-pages`.
- If you see 404s after a rename, give Pages a few minutes to propagate and hard refresh the browser (Shift+Reload).