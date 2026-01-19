# Task 2: Common Icon Components

**Labels:** `group-a`, `react-component`

## Description
Create reusable SVG icon components using React class components.

## Files to Create
- `src/components/common/ChevronIcon.jsx` - Chevron up/down icon
- `src/components/common/BackArrowIcon.jsx` - Back arrow icon

## Component Specifications

### ChevronIcon.jsx
```jsx
import React, { Component } from 'react';

class ChevronIcon extends Component {
  render() {
    const { direction = 'down', className = '' } = this.props;
    const rotation = direction === 'up' ? 'rotate-180' : '';

    return (
      <svg
        className={`w-6 h-6 transition-transform ${rotation} ${className}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
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

### BackArrowIcon.jsx
```jsx
import React, { Component } from 'react';

class BackArrowIcon extends Component {
  render() {
    const { className = '', onClick } = this.props;

    return (
      <svg
        className={`w-6 h-6 cursor-pointer ${className}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        onClick={onClick}
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

## Technical Requirements
- Use React class components (not functional)
- Use Tailwind CSS for styling
- Icons should be scalable via className prop
- No hooks allowed

## Dependencies
None - Can run in parallel with other Group A tasks

## Acceptance Criteria
- [ ] ChevronIcon renders correctly with up/down directions
- [ ] BackArrowIcon renders correctly
- [ ] Both components use class-based syntax
- [ ] Tailwind classes applied for styling
