# Task 5: FeaturedSection Component

**Labels:** `group-b`, `react-component`

## Description
Create collapsible featured section with icon grid.

## File to Create
- `src/components/Featured/FeaturedSection.jsx`

## Component Specification

### Props
- `items` - Array of featured items (from data layer)
- `title` - Section title (default: "Featured")

### State
- `isExpanded` - Boolean to track collapse/expand state

### Design Requirements
- Collapsible section header with title and chevron icon
- Grid layout (4 columns on mobile)
- Smooth expand/collapse animation
- Padding and spacing to match UI

### Implementation
```jsx
import React, { Component } from 'react';
import ChevronIcon from '../common/ChevronIcon';
import IconCard from './IconCard';

class FeaturedSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: true,
    };
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  render() {
    const { items = [], title = 'Featured' } = this.props;
    const { isExpanded } = this.state;

    return (
      <div className="bg-white">
        {/* Section Header */}
        <div
          className="flex items-center justify-between px-4 py-3 cursor-pointer"
          onClick={this.toggleExpand}
        >
          <h2 className="text-base font-semibold text-gray-900">{title}</h2>
          <ChevronIcon direction={isExpanded ? 'up' : 'down'} />
        </div>

        {/* Grid Content */}
        {isExpanded && (
          <div className="px-4 pb-4">
            <div className="grid grid-cols-4 gap-4">
              {items.map((item) => (
                <IconCard
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  onClick={() => console.log('Clicked:', item.label)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FeaturedSection;
```

## Technical Requirements
- Use React class components (not functional)
- Use Tailwind CSS for styling
- Use component state for expand/collapse (no hooks)
- Bind methods in constructor

## Dependencies
- Task 2 (ChevronIcon component)
- Task 4 (IconCard component)

## Acceptance Criteria
- [ ] Section header displays title and chevron
- [ ] Click on header toggles expand/collapse
- [ ] Grid displays 4 columns
- [ ] IconCard components render correctly in grid
- [ ] Uses class-based React component with state
