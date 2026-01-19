# Task 6: AccordionItem Component

**Labels:** `group-b`, `react-component`

## Description
Create individual accordion menu item class component with TypeScript.

## Files to Create
- `src/components/Accordion/AccordionItem.tsx` - AccordionItem component
- `src/components/Accordion/index.ts` - Barrel export (partial, will be updated in Task 7)

## AccordionItem Component (src/components/Accordion/AccordionItem.tsx)
```typescript
import React, { Component } from 'react';
import { AccordionItemProps } from '../../types';
import { ChevronIcon } from '../common';

class AccordionItem extends Component<AccordionItemProps> {
  handleToggle = (): void => {
    const { id, onToggle } = this.props;
    onToggle(id);
  };

  render(): React.ReactNode {
    const { title, isExpanded, children } = this.props;

    return (
      <div className="border-b border-gray-200">
        {/* Accordion Header */}
        <button
          type="button"
          onClick={this.handleToggle}
          className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors"
          aria-expanded={isExpanded}
        >
          <span className="text-base font-semibold text-gray-900">
            {title}
          </span>
          <ChevronIcon
            direction={isExpanded ? 'up' : 'down'}
            className="text-gray-400"
          />
        </button>

        {/* Accordion Content (expandable) */}
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

## Barrel Export (src/components/Accordion/index.ts)
```typescript
export { default as AccordionItem } from './AccordionItem';
```

## Styling Details
- Container: full width, bottom border
- Header button: full width, flex between, padding 16px
- Title: 16px, semibold, dark gray
- Chevron: gray-400, right aligned
- Hover: light gray background
- Content area: padding when expanded

## Technical Requirements
- Use React class components (not functional)
- Use TypeScript with proper type annotations
- Use Tailwind CSS for styling
- Component is controlled (state managed by parent)
- No hooks allowed
- Use button element for accessibility

## Dependencies
- Task 2 (ChevronIcon component)

## Acceptance Criteria
- [ ] AccordionItem displays title with chevron
- [ ] Click calls onToggle with item id
- [ ] Chevron rotates based on isExpanded prop
- [ ] Children render when expanded
- [ ] Bottom border always visible
- [ ] Hover state works
- [ ] TypeScript types properly defined
- [ ] Uses class-based component syntax
- [ ] Accessible with aria-expanded attribute
