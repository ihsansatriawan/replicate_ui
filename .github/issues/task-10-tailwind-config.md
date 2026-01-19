# Task 10: Global Styles & Tailwind Config

**Labels:** `group-a`

## Description
Configure Tailwind CSS with TypeScript support, custom colors, and ensure global styles are set up.

## Files to Modify/Create
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `src/index.css` - Global styles with Tailwind directives
- `tsconfig.json` - TypeScript configuration (verify/update)

## Tailwind Config (tailwind.config.js)
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tokopedia: {
          green: '#03AC0E',
          'green-light': '#E8F5E9',
          'green-dark': '#028A0F',
        },
      },
      maxWidth: {
        'mobile': '428px',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
```

## PostCSS Config (postcss.config.js)
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## Global Styles (src/index.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply bg-gray-100 text-gray-900;
  }
}

@layer components {
  /* Reusable component classes if needed */
  .icon-container {
    @apply w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl;
  }
}

@layer utilities {
  /* Custom utilities if needed */
}
```

## TypeScript Config (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@data/*": ["src/data/*"],
      "@types/*": ["src/types/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Package.json Dependencies
Ensure these are installed:
```json
{
  "devDependencies": {
    "@types/react": "^18.x",
    "@types/react-dom": "^18.x",
    "typescript": "^5.x",
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x"
  }
}
```

## Dependencies
None - Can run in parallel with other Group A tasks

## Acceptance Criteria
- [ ] Tailwind CSS properly configured for TypeScript files
- [ ] Custom Tokopedia colors available
- [ ] Custom max-width for mobile container
- [ ] PostCSS configured correctly
- [ ] TypeScript strict mode enabled
- [ ] Path aliases configured (optional)
- [ ] Build compiles without errors
- [ ] Tailwind classes work in .tsx components
