# Task 3: Header Component

**Labels:** `group-b`, `react-component`

## Description
Create the top navigation header class component with TypeScript.

## Files to Create
- `src/components/Header/Header.tsx` - Header component
- `src/components/Header/index.ts` - Barrel export

## Header Component (src/components/Header/Header.tsx)
```typescript
import React, { Component } from 'react';
import { HeaderProps } from '../../types';
import { BackArrowIcon } from '../common';

class Header extends Component<HeaderProps> {
  handleBackClick = (): void => {
    const { onBackClick } = this.props;
    if (onBackClick) {
      onBackClick();
    }
  };

  render(): React.ReactNode {
    const { title } = this.props;

    return (
      <header className="flex items-center px-4 py-3 bg-white border-b border-gray-100">
        <button
          type="button"
          onClick={this.handleBackClick}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Go back"
        >
          <BackArrowIcon className="text-gray-800" />
        </button>
        <h1 className="ml-2 text-lg font-semibold text-gray-900">
          {title}
        </h1>
      </header>
    );
  }
}

export default Header;
```

## Barrel Export (src/components/Header/index.ts)
```typescript
export { default as Header } from './Header';
```

## Styling Details
- Background: white
- Padding: 12px vertical, 16px horizontal
- Back button: wrapped in button element with hover state
- Title: 18px, semibold, dark gray (#1a1a1a)
- Bottom border: 1px light gray
- Back button has accessible aria-label

## Technical Requirements
- Use React class components (not functional)
- Use TypeScript with proper type annotations
- Use Tailwind CSS for styling
- No hooks allowed
- Use arrow function for class method to preserve `this` context

## Dependencies
- Task 2 (BackArrowIcon component)

## Acceptance Criteria
- [ ] Header displays title correctly
- [ ] Back button is clickable and calls onBackClick
- [ ] Proper spacing and alignment
- [ ] Hover state on back button
- [ ] TypeScript types properly defined
- [ ] Uses class-based component syntax
- [ ] Accessible with proper aria-label
