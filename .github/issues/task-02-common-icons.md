# Task 2: Common Icon Components

**Labels:** `group-a`, `react-component`

## Description
Create reusable SVG icon class components with TypeScript.

## Files to Create
- `src/components/common/ChevronIcon.tsx` - Chevron up/down icon
- `src/components/common/BackArrowIcon.tsx` - Back arrow icon
- `src/components/common/index.ts` - Barrel export

## ChevronIcon Component (src/components/common/ChevronIcon.tsx)
```typescript
import React, { Component } from 'react';
import { ChevronIconProps } from '../../types';

class ChevronIcon extends Component<ChevronIconProps> {
  render(): React.ReactNode {
    const { direction, className = '' } = this.props;
    const rotation = direction === 'up' ? 'rotate-180' : '';

    return (
      <svg
        className={`w-5 h-5 transition-transform duration-200 ${rotation} ${className}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    );
  }
}

export default ChevronIcon;
```

## BackArrowIcon Component (src/components/common/BackArrowIcon.tsx)
```typescript
import React, { Component } from 'react';
import { BackArrowIconProps } from '../../types';

class BackArrowIcon extends Component<BackArrowIconProps> {
  render(): React.ReactNode {
    const { className = '' } = this.props;

    return (
      <svg
        className={`w-6 h-6 ${className}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    );
  }
}

export default BackArrowIcon;
```

## Barrel Export (src/components/common/index.ts)
```typescript
export { default as ChevronIcon } from './ChevronIcon';
export { default as BackArrowIcon } from './BackArrowIcon';
```

## Technical Requirements
- Use React class components (not functional)
- Use TypeScript with proper type annotations
- Use Tailwind CSS for styling
- Icons should accept className prop for customization
- No hooks allowed

## Dependencies
None - Can run in parallel with other Group A tasks

## Acceptance Criteria
- [ ] ChevronIcon renders correctly with up/down directions
- [ ] BackArrowIcon renders correctly
- [ ] Both components accept className prop for customization
- [ ] TypeScript types are properly defined and imported
- [ ] Smooth rotation transition on ChevronIcon
- [ ] Components use class-based syntax (not functional)
- [ ] No TypeScript compilation errors
