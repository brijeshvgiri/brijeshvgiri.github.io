# Portfolio Website

## Overview

This is a personal portfolio website for Brijesh Veer Bahadur Giri, a Software Engineer and MS Computer Science graduate from Northeastern University. The application showcases professional experience, education, skills, and projects through a modern, responsive web interface. Built as a full-stack application with React frontend and Express backend, it features a clean, professional design inspired by modern developer portfolio sites like Linear and Notion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom design system featuring light/dark mode support
- **Component Library**: Radix UI primitives with shadcn/ui components for consistent, accessible UI elements
- **State Management**: React Query (@tanstack/react-query) for server state and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API structure with `/api` prefix routing
- **Development**: Hot module replacement and error overlays via Vite integration
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL configured via Neon serverless
- **Schema Management**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database schema migrations

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

### Cloud Integration
- **Deployment**: Configured for Replit hosting environment
- **Asset Management**: Attached assets directory for static resources
- **Environment**: Development and production build configurations