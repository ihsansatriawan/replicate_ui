# Replicate UI - Tokopedia "Jelajah Tokopedia"

## Project Overview

A React TypeScript implementation of Tokopedia's "Jelajah Tokopedia" (Explore Tokopedia) mobile UI, built with class components and Tailwind CSS.

## Tech Stack

- **Framework:** React 18 (Class Components only - no hooks)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with `@tailwindcss/postcss`
- **Build Tool:** Vite
- **Package Manager:** npm

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable icons (ChevronIcon, BackArrowIcon)
│   ├── Header/           # App header with back button
│   ├── Featured/         # IconCard, FeaturedSection (collapsible grid)
│   └── Accordion/        # AccordionItem, AccordionList
├── data/                 # Static data (featuredItems, accordionItems)
├── types/                # TypeScript interfaces
├── App.tsx               # Main app container
├── main.tsx              # Entry point
└── index.css             # Tailwind config with @theme
public/icons/             # SVG icon assets
```

## Code Conventions

### Components
- **Always use React Class Components** - no functional components or hooks
- Use arrow functions for class methods to auto-bind `this`
- Export components as default, use barrel exports (index.ts)

```typescript
// Correct
class MyComponent extends Component<Props, State> {
  handleClick = (): void => { /* ... */ };
  render(): React.ReactNode { /* ... */ }
}

// Wrong - don't use functional components
const MyComponent: React.FC<Props> = () => { /* ... */ };
```

### TypeScript
- Use `import type` for type-only imports (required by `verbatimModuleSyntax`)
- Define interfaces in `src/types/index.ts`
- All props and state must be typed

```typescript
import type { MyProps } from '../types';  // Correct
import { MyProps } from '../types';        // Wrong
```

### Styling
- Use Tailwind CSS classes exclusively
- Custom theme variables defined in `src/index.css` under `@theme`
- Available custom classes:
  - `max-w-mobile` (428px) - mobile container width
  - `text-tokopedia-green` (#03AC0E)
  - `bg-tokopedia-green-light` (#E8F5E9)

### File Naming
- Components: PascalCase (`Header.tsx`, `IconCard.tsx`)
- Data/utils: camelCase (`featuredItems.ts`)
- Always include barrel exports (`index.ts`)

## Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Deployment

Configured for Netlify (`netlify.toml`):
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects configured

## Component Hierarchy

```
App
├── Header (title, back button)
├── FeaturedSection (collapsible)
│   └── IconCard[] (grid of icons)
└── AccordionList
    └── AccordionItem[] (expandable categories)
```

## Adding New Components

1. Create component file in appropriate folder
2. Use class component pattern with TypeScript
3. Add types to `src/types/index.ts`
4. Export from barrel file (`index.ts`)
5. Import using barrel export path

## Important Notes

- Mobile-first design (max-width: 428px centered)
- All icons are SVGs in `public/icons/`
- State management is component-level (no Redux/Context)
- Accessibility: use proper ARIA attributes on interactive elements
