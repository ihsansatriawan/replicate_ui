# Task 9: App Container Component

**Labels:** `group-d`, `react-component`

## Description
Create main App class component that assembles all components together using TypeScript.

## Files to Create/Update
- `src/App.tsx` - Main App component
- `src/main.tsx` - Entry point (Vite)

## App Component (src/App.tsx)
```typescript
import React, { Component } from 'react';
import { Header } from './components/Header';
import { FeaturedSection } from './components/Featured';
import { AccordionList } from './components/Accordion';
import { featuredItems } from './data/featuredItems';
import { accordionItems } from './data/accordionItems';

interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  handleBackClick = (): void => {
    // Handle navigation back
    console.log('Back button clicked');
    // In real app: window.history.back() or router navigation
  };

  render(): React.ReactNode {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Mobile Container */}
        <div className="max-w-mobile mx-auto bg-white min-h-screen shadow-lg">
          {/* Header */}
          <Header
            title="Jelajah Tokopedia"
            onBackClick={this.handleBackClick}
          />

          {/* Main Content */}
          <main>
            {/* Featured Section */}
            <FeaturedSection
              title="Featured"
              items={featuredItems}
            />

            {/* Accordion Categories */}
            <AccordionList items={accordionItems} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
```

## Entry Point (src/main.tsx)
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
```

## Project Structure (Final)
```
src/
├── components/
│   ├── common/
│   │   ├── ChevronIcon.tsx
│   │   ├── BackArrowIcon.tsx
│   │   └── index.ts
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── index.ts
│   ├── Featured/
│   │   ├── IconCard.tsx
│   │   ├── FeaturedSection.tsx
│   │   └── index.ts
│   └── Accordion/
│       ├── AccordionItem.tsx
│       ├── AccordionList.tsx
│       └── index.ts
├── data/
│   ├── featuredItems.ts
│   └── accordionItems.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
public/
└── icons/
    ├── computer-laptop.svg
    ├── fashion-wanita.svg
    ├── kesehatan.svg
    ├── promo.svg
    ├── pulsa.svg
    ├── tokopedia-card.svg
    └── tokopedia-farma.svg
```

## Styling Details
- Outer container: gray-100 background, full height
- Inner container: max-width 428px (mobile), centered, white background
- Shadow for depth on desktop view

## Technical Requirements
- Use React class components (not functional)
- Use TypeScript with proper type annotations
- Use Tailwind CSS for styling
- No hooks allowed
- Use arrow functions for class methods

## Dependencies
- Task 1: Data files and types
- Task 3: Header component
- Task 5: FeaturedSection component
- Task 7: AccordionList component
- Task 10: Tailwind configuration

## Acceptance Criteria
- [ ] App renders without errors
- [ ] All components properly imported and displayed
- [ ] Mobile-first responsive layout (max-w-mobile)
- [ ] Centered container on larger screens
- [ ] TypeScript compiles without errors
- [ ] Uses class-based component syntax
- [ ] Matches reference design layout
- [ ] No console errors or warnings
