# Task 6: AccordionItem Component

**Labels:** `group-b`, `react-component`

## Description
Create individual accordion menu item component.

## File to Create
- `src/components/Accordion/AccordionItem.jsx`

## Component Specification

### Props
- `title` - Menu item title text
- `children` - Optional expandable content
- `isExpanded` - Boolean for expanded state (controlled)
- `onToggle` - Callback when item is clicked

### Design Requirements
- Full width item with padding
- Title on the left
- Chevron icon on the right
- Bottom border separator
- Clean typography matching UI

### Implementation
```jsx
import React, { Component } from 'react';
import ChevronIcon from '../common/ChevronIcon';

class AccordionItem extends Component {
  render() {
    const { title, children, isExpanded = false, onToggle } = this.props;

    return (
      <div className="border-b border-gray-100">
        {/* Accordion Header */}
        <div
          className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={onToggle}
        >
          <span className="text-base font-semibold text-gray-900">
            {title}
          </span>
          <ChevronIcon
            direction={isExpanded ? 'up' : 'down'}
            className="text-gray-400"
          />
        </div>

        {/* Expandable Content */}
        {isExpanded && children && (
          <div className="px-4 pb-4">
            {children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionItem;
```

## Technical Requirements
- Use React class components (not functional)
- Use Tailwind CSS for styling
- Component should be controlled (state managed by parent)
- No hooks allowed

## Dependencies
- Task 2 (ChevronIcon component)

## Acceptance Criteria
- [ ] Accordion item displays title and chevron
- [ ] Click triggers onToggle callback
- [ ] Chevron rotates based on isExpanded state
- [ ] Children content shows when expanded
- [ ] Bottom border separator present
- [ ] Uses class-based React component
