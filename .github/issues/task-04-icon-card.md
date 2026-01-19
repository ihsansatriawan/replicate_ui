# Task 4: IconCard Component

**Labels:** `group-a`, `react-component`

## Description
Create individual icon card class component for the featured grid with TypeScript.

## Files to Create
- `src/components/Featured/IconCard.tsx` - IconCard component
- `src/components/Featured/index.ts` - Barrel export (partial, will be updated in Task 5)

## IconCard Component (src/components/Featured/IconCard.tsx)
```typescript
import React, { Component } from 'react';
import { IconCardProps } from '../../types';

class IconCard extends Component<IconCardProps> {
  handleClick = (): void => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  };

  renderIcon(): React.ReactNode {
    const { icon } = this.props;

    // Render icon from public folder
    return (
      <img
        src={`/icons/${icon}.svg`}
        alt=""
        className="w-8 h-8"
        aria-hidden="true"
      />
    );
  }

  render(): React.ReactNode {
    const { label } = this.props;

    return (
      <button
        type="button"
        onClick={this.handleClick}
        className="flex flex-col items-center group cursor-pointer"
      >
        <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl mb-2 group-hover:bg-gray-100 transition-colors">
          {this.renderIcon()}
        </div>
        <span className="text-xs text-gray-700 text-center leading-tight max-w-[80px]">
          {label}
        </span>
      </button>
    );
  }
}

export default IconCard;
```

## Barrel Export (src/components/Featured/index.ts)
```typescript
export { default as IconCard } from './IconCard';
```

## Styling Details
- Container: flex column, centered, uses button element for accessibility
- Icon box: 64x64px, rounded-2xl (16px), light gray background (#F5F5F5)
- Icon: 32x32px, centered
- Label: 12px, gray-700, centered, max-width 80px
- Hover: slightly darker background via group hover

## Technical Requirements
- Use React class components (not functional)
- Use TypeScript with proper type annotations
- Use Tailwind CSS for styling
- Use button element for accessibility
- No hooks allowed

## Dependencies
None - Can run in parallel with other Group A tasks

## Acceptance Criteria
- [ ] IconCard displays icon and label
- [ ] Click handler works correctly
- [ ] Proper hover state
- [ ] Responsive text wrapping for long labels
- [ ] TypeScript types properly defined
- [ ] Uses class-based component syntax
- [ ] Uses semantic button element
