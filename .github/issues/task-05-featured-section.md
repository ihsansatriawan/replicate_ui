# Task 5: FeaturedSection Component

**Labels:** `group-b`, `react-component`

## Description
Create collapsible featured section class component with icon grid using TypeScript.

## Files to Create/Update
- `src/components/Featured/FeaturedSection.tsx` - FeaturedSection component
- `src/components/Featured/index.ts` - Update barrel export

## FeaturedSection Component (src/components/Featured/FeaturedSection.tsx)
```typescript
import React, { Component } from 'react';
import { FeaturedSectionProps, FeaturedSectionState, FeaturedItem } from '../../types';
import { ChevronIcon } from '../common';
import IconCard from './IconCard';

class FeaturedSection extends Component<FeaturedSectionProps, FeaturedSectionState> {
  constructor(props: FeaturedSectionProps) {
    super(props);
    this.state = {
      isExpanded: true,
    };
  }

  handleToggle = (): void => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  renderIconCard = (item: FeaturedItem): React.ReactNode => {
    return (
      <IconCard
        key={item.id}
        icon={item.icon}
        label={item.label}
        onClick={item.onClick}
      />
    );
  };

  render(): React.ReactNode {
    const { title, items } = this.props;
    const { isExpanded } = this.state;

    return (
      <section className="bg-white">
        {/* Section Header */}
        <button
          type="button"
          onClick={this.handleToggle}
          className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors"
          aria-expanded={isExpanded}
        >
          <h2 className="text-base font-semibold text-gray-900">
            {title}
          </h2>
          <ChevronIcon direction={isExpanded ? 'up' : 'down'} className="text-gray-500" />
        </button>

        {/* Icon Grid */}
        {isExpanded && (
          <div className="px-4 pb-4">
            <div className="grid grid-cols-4 gap-4">
              {items.map(this.renderIconCard)}
            </div>
          </div>
        )}

        {/* Bottom Border */}
        <div className="border-b border-gray-200" />
      </section>
    );
  }
}

export default FeaturedSection;
```

## Updated Barrel Export (src/components/Featured/index.ts)
```typescript
export { default as IconCard } from './IconCard';
export { default as FeaturedSection } from './FeaturedSection';
```

## Styling Details
- Header: full width button, flex between, padding 16px
- Title: 16px, semibold
- Chevron: rotates on expand/collapse
- Grid: 4 columns, 16px gap
- Uses button element for accessible expand/collapse

## Technical Requirements
- Use React class components (not functional)
- Use TypeScript with proper state and props interfaces
- Use Tailwind CSS for styling
- Use arrow functions for class methods to preserve `this` context
- No hooks allowed

## Dependencies
- Task 2 (ChevronIcon component)
- Task 4 (IconCard component)

## Acceptance Criteria
- [ ] Section header with title and chevron
- [ ] Click toggles expand/collapse state
- [ ] Grid displays 4 icons per row
- [ ] Chevron rotates based on state
- [ ] Smooth transitions
- [ ] TypeScript types properly defined for props and state
- [ ] Uses class-based component syntax with state
- [ ] Accessible with aria-expanded attribute
