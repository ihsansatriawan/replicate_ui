# Replicate UI - Tokopedia Jelajah Tokopedia

A React TypeScript implementation of Tokopedia's "Jelajah Tokopedia" (Explore Tokopedia) mobile UI. Built with class components and Tailwind CSS v4, this project demonstrates a responsive mobile-first design with collapsible sections and interactive accordion components.

## Tech Stack

- **Framework:** React 19.2.0 (Class Components only - no hooks)
- **Language:** TypeScript 5.9.3 (strict mode)
- **Styling:** Tailwind CSS v4.1.18 with @tailwindcss/postcss
- **Build Tool:** Vite 7.2.4
- **Package Manager:** npm
- **Linting:** ESLint 9.39.1

## Prerequisites

Before getting started, ensure you have the following installed on your system:

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)
- **Git** (for version control and cloning)

## Installation & Setup

Follow these steps to set up the project locally:

```bash
# 1. Clone the repository
git clone git@github.com:ihsansatriawan/replicate_ui.git
cd replicate_ui

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The development server will be available at **http://localhost:5173**

## Available Scripts

The project includes the following npm scripts:

- **`npm run dev`** - Start the development server with hot module reloading at http://localhost:5173
- **`npm run build`** - Build the project for production (outputs to `dist/` directory)
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality and style compliance

## Project Structure

```
replicate_ui/
├── src/
│   ├── components/
│   │   ├── common/           # Reusable UI elements (ChevronIcon, BackArrowIcon)
│   │   ├── Header/           # App header with back button
│   │   ├── Featured/         # IconCard, FeaturedSection (collapsible grid)
│   │   └── Accordion/        # AccordionItem, AccordionList (expandable sections)
│   ├── data/                 # Static data (featuredItems, accordionItems)
│   ├── types/                # TypeScript interfaces and type definitions
│   ├── App.tsx               # Main app container component
│   ├── main.tsx              # React application entry point
│   └── index.css             # Tailwind CSS configuration with custom @theme
├── public/
│   └── icons/                # SVG icon assets
├── netlify.toml              # Netlify deployment configuration
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build configuration
└── README.md                 # This file
```

## Code Conventions

For detailed code conventions and standards, see [CLAUDE.md](./CLAUDE.md). Key guidelines include:

### Components
- **Always use React Class Components** - no functional components or hooks
- Use arrow functions for class methods to auto-bind `this`
- Export components as default, use barrel exports (index.ts)

### TypeScript
- Use `import type` for type-only imports
- Define interfaces in `src/types/index.ts`
- All props and state must be typed

### Styling
- Use Tailwind CSS classes exclusively
- Custom theme variables defined in `src/index.css` under `@theme`
- Mobile-first design with max-width: 428px

## Contributing

We welcome contributions! Please follow these guidelines when contributing to the project.

### Development Workflow

1. **Fork the repository** on GitHub

2. **Create a feature branch** with a descriptive name:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** following the conventions in [CLAUDE.md](./CLAUDE.md)

4. **Run the linter** to check for style issues:
   ```bash
   npm run lint
   ```

5. **Build the project** to verify everything compiles:
   ```bash
   npm run build
   ```

6. **Commit your changes** with a clear, descriptive message:
   ```bash
   git commit -m "Brief description of your changes"
   ```

7. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request** to the `main` branch with:
   - Clear description of the changes
   - Reference to any related issues
   - Confirmation that lint and build checks pass

### Pull Request Guidelines

- Provide a clear title and description of changes
- Ensure all checks pass (ESLint, TypeScript, build)
- Reference any related issues
- Follow existing code patterns and conventions
- Include only the necessary changes for your feature

## Deployment

The project is configured for deployment on **Netlify** via `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA redirects:** Enabled for client-side routing

To deploy:
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically build and deploy on push to `main`

## Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Detailed code conventions, file naming, and project standards
- **[package.json](./package.json)** - Project dependencies and scripts
- **[netlify.toml](./netlify.toml)** - Deployment configuration

## Component Hierarchy

```
App
├── Header (title, back button)
├── FeaturedSection (collapsible)
│   └── IconCard[] (grid of icons)
└── AccordionList
    └── AccordionItem[] (expandable categories)
```

## Project Status

- **Repository:** https://github.com/ihsansatriawan/replicate_ui
- **Type:** Private repository
- **License:** See repository for details

## Troubleshooting

**Dev server won't start:**
- Ensure Node.js v18+ is installed: `node --version`
- Try deleting `node_modules` and reinstalling: `rm -rf node_modules && npm install`
- Check that port 5173 is not in use

**Build fails:**
- Run `npm run lint` to check for ESLint errors
- Ensure TypeScript compiles: `npx tsc --noEmit`
- Clear Vite cache: `rm -rf node_modules/.vite`

**ESLint errors:**
- Run `npm run lint` to see all issues
- Most issues can be auto-fixed: `npx eslint . --fix`

## Getting Help

For questions or issues:
- Check the [CLAUDE.md](./CLAUDE.md) documentation
- Review the project structure and existing components
- Report issues on GitHub

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
