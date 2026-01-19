# Task 10: Global Styles & Tailwind Config

**Labels:** `group-a`

## Description
Configure Tailwind CSS with custom colors and ensure global styles are set up.

## Files to Modify/Create
- `tailwind.config.js` - Add custom Tokopedia colors
- `src/index.css` - Import Tailwind directives and global styles
- `postcss.config.js` - PostCSS configuration (if needed)

## Tailwind Config
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
    },
  },
  plugins: [],
};
```

## Global Styles (index.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom base styles */
@layer base {
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Custom component styles if needed */
@layer components {
  .icon-card-container {
    @apply w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl;
  }
}
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

## Dependencies
None - Can run in parallel with other Group A tasks

## Acceptance Criteria
- [ ] Tailwind CSS properly configured
- [ ] Custom Tokopedia colors available (tokopedia-green, etc.)
- [ ] Global font family set
- [ ] PostCSS configured correctly
- [ ] Build compiles without errors
- [ ] Tailwind classes work in components
