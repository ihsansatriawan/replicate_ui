# Task 4: IconCard Component

**Labels:** `group-a`, `react-component`

## Description
Create individual icon card component for the featured grid section.

## File to Create
- `src/components/Featured/IconCard.jsx`

## Component Specification

### Props
- `icon` - Icon component or image source
- `label` - Text label below the icon
- `onClick` - Click handler function

### Design Requirements
- Rounded square container with light gray/white background
- Icon centered in the container
- Label text below, centered, can wrap to 2 lines
- Subtle hover state for interactivity

### Implementation
```jsx
import React, { Component } from 'react';

class IconCard extends Component {
  render() {
    const { icon, label, onClick } = this.props;

    return (
      <div
        className="flex flex-col items-center cursor-pointer group"
        onClick={onClick}
      >
        <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl mb-2 group-hover:bg-gray-100 transition-colors">
          {icon}
        </div>
        <span className="text-xs text-center text-gray-700 font-medium leading-tight max-w-[80px]">
          {label}
        </span>
      </div>
    );
  }
}

export default IconCard;
```

## Technical Requirements
- Use React class components (not functional)
- Use Tailwind CSS for styling
- No hooks allowed

## Dependencies
None - Can run in parallel with other Group A tasks

## Acceptance Criteria
- [ ] IconCard renders icon and label correctly
- [ ] Click handler works properly
- [ ] Styling matches the UI design (rounded container, centered content)
- [ ] Uses class-based React component
- [ ] Label supports multi-line text
