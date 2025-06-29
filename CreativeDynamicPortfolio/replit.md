# SK Motalib Portfolio - Replit Development Guide

## Overview

This is a modern, interactive portfolio application built for SK Motalib, an AI and NLP Engineer. The application showcases professional experience, skills, projects, and provides a contact system. It features a sophisticated dark theme with AI-inspired design elements, 3D animations, and responsive layout.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth animations and 3D interactions
- **3D Graphics**: React Three Fiber for 3D floating shapes and interactive elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development**: TSX for TypeScript execution in development
- **Build**: ESBuild for production bundling
- **API**: RESTful endpoints for contact form and project data
- **Storage**: In-memory storage implementation with interface for future database integration

### Design System
- **Component Library**: Fully integrated Shadcn/ui with custom theming
- **Theme**: Dark-first design with AI-inspired color palette
- **Typography**: Modern gradient text effects and responsive typography
- **Layout**: CSS Grid and Flexbox for responsive design
- **Effects**: Glass morphism, gradient backgrounds, and neural network-inspired patterns

## Key Components

### Frontend Components
1. **Navigation**: Sticky navigation with scroll effects and smooth scrolling
2. **Hero Section**: 3D animated background with floating geometric shapes
3. **About Section**: Professional background with experience highlights
4. **Skills Section**: Interactive skill cards with categorized technologies
5. **Projects Section**: Portfolio showcase with project cards and live demos
6. **Experience Section**: Timeline of professional experience and education
7. **Contact Section**: Interactive contact form with API integration

### Backend Components
1. **Routes**: API endpoints for contact form submission and project data
2. **Storage**: Abstract storage interface with in-memory implementation
3. **Error Handling**: Centralized error handling middleware
4. **Static Serving**: Vite integration for development and static file serving

### UI Components
- Comprehensive set of reusable components from Shadcn/ui
- Custom components for portfolio-specific features (ProjectCard, SkillOrb)
- Form components with validation and toast notifications
- Layout components with responsive design patterns

## Data Flow

### Client-Side Data Flow
1. **Component Rendering**: React components fetch data using TanStack Query
2. **State Management**: Local state for UI interactions, server state for API data
3. **Form Handling**: Contact form uses controlled components with validation
4. **Navigation**: Smooth scrolling navigation between portfolio sections

### API Data Flow
1. **Contact Form**: POST to `/api/contact` with form validation and email simulation
2. **Projects**: GET from `/api/projects` returning static project data
3. **Error Handling**: Consistent error responses with status codes and messages
4. **Logging**: Request logging with duration and response data

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI & Styling**: Tailwind CSS, Radix UI primitives, Lucide React icons
- **Animation**: Framer Motion for smooth animations
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Data Fetching**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Development Dependencies
- **Build Tools**: Vite, ESBuild, TypeScript
- **Database**: Drizzle ORM with PostgreSQL dialect (configured but not implemented)
- **Validation**: Zod for schema validation
- **Development**: TSX for TypeScript execution, various Vite plugins

### Database Integration (Prepared)
- **Drizzle ORM**: Configured for PostgreSQL with migration support
- **Neon Database**: Ready for serverless PostgreSQL integration
- **Schema**: User schema defined with Zod validation

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **TypeScript**: Real-time type checking and compilation
- **API Development**: Express server with automatic reload
- **Asset Handling**: Vite handles all static assets and imports

### Production Build
1. **Frontend**: Vite builds optimized React application to `dist/public`
2. **Backend**: ESBuild bundles Express server to `dist/index.js`
3. **Static Files**: Production server serves built frontend from Express
4. **Environment**: NODE_ENV-based configuration for development/production

### Deployment Considerations
- **Database**: PostgreSQL connection ready via DATABASE_URL environment variable
- **Static Assets**: All assets served through Express in production
- **Error Handling**: Comprehensive error handling for both development and production

## Changelog

```
Changelog:
- June 28, 2025. Initial setup with comprehensive 3D portfolio
- June 28, 2025. Updated to Python-focused AI/NLP portfolio with user's professional images and Google Cloud certifications
```

## Recent Updates (June 28, 2025)
- **Profile Images**: Added SK Motalib's professional headshot and Google Cloud Skills progress screenshot
- **Technology Focus**: Specialized exclusively on Python programming and AI/NLP technologies
- **Skills Update**: Removed React.js, emphasized Python, TensorFlow, Machine Learning, and NLP
- **Certifications**: Highlighted Google Cloud Skills Arcade (29 badges), Microsoft Azure AI, IBM AI Fundamentals
- **Projects**: Updated all project descriptions to emphasize Python development and AI/ML applications
- **User Images**: Integrated actual professional photos and certification progress screenshots
- **Database Integration**: Added PostgreSQL database with Drizzle ORM for dynamic content management
- **API Enhancement**: Created RESTful endpoints for projects, skills, and contact form submissions
- **Data Migration**: Seeded database with portfolio projects and skills organized by categories

## User Preferences

```
Preferred communication style: Simple, everyday language.
Programming focus: Python exclusively for AI/NLP development
Portfolio emphasis: AI/ML expertise, Google Cloud certifications, professional experience at IBM/Microsoft
```