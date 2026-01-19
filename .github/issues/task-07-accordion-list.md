# Task 7: AccordionList Component

**Labels:** `group-c`, `react-component`

## Description
Create container class component for all accordion items with expand/collapse state management using TypeScript.

## Files to Create/Update
- `src/components/Accordion/AccordionList.tsx` - AccordionList component
- `src/components/Accordion/index.ts` - Update barrel export

## AccordionList Component (src/components/Accordion/AccordionList.tsx)
```typescript
import React, { Component } from 'react';
import { AccordionListProps, AccordionListState, AccordionItemData } from '../../types';
import AccordionItem from './AccordionItem';

class AccordionList extends Component<AccordionListProps, AccordionListState> {
  constructor(props: AccordionListProps) {
    super(props);
    this.state = {
      expandedId: null,
    };
  }

  handleToggle = (id: string): void => {
    this.setState((prevState) => ({
      expandedId: prevState.expandedId === id ? null : id,
    }));
  };

  renderAccordionItem = (item: AccordionItemData): React.ReactNode => {
    const { expandedId } = this.state;

    return (
      <AccordionItem
        key={item.id}
        id={item.id}
        title={item.title}
        isExpanded={expandedId === item.id}
        onToggle={this.handleToggle}
      >
        {/* Render sub-items if they exist */}
        {item.children && (
          <ul className="space-y-2">
            {item.children.map((child: AccordionItemData) => (
              <li key={child.id} className="text-sm text-gray-600 py-1">
                {child.title}
              </li>
            ))}
          </ul>
        )}
      </AccordionItem>
    );
  };

  render(): React.ReactNode {
    const { items } = this.props;

    return (
      <div className="bg-white">
        {items.map(this.renderAccordionItem)}
      </div>
    );
  }
}

export default AccordionList;
```

## Updated Barrel Export (src/components/Accordion/index.ts)
```typescript
export { default as AccordionItem } from './AccordionItem';
export { default as AccordionList } from './AccordionList';
```

## Features
- Single expand mode (only one item open at a time)
- State management for expanded item using component state
- Renders list of AccordionItem components
- Supports nested children (for sub-categories)

## Technical Requirements
- Use React class components (not functional)
- Use TypeScript with proper state and props interfaces
- Use Tailwind CSS for styling
- Use arrow functions for class methods to preserve `this` context
- No hooks allowed

## Dependencies
- Task 6 (AccordionItem component)

## Acceptance Criteria
- [ ] Renders all accordion items from data
- [ ] Only one item can be expanded at a time
- [ ] Clicking expanded item collapses it
- [ ] Clicking different item expands it and collapses previous
- [ ] Children render correctly when expanded
- [ ] TypeScript types properly defined for props and state
- [ ] Uses class-based component syntax with state
