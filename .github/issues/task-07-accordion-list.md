# Task 7: AccordionList Component

**Labels:** `group-c`, `react-component`

## Description
Create container component for all accordion items.

## File to Create
- `src/components/Accordion/AccordionList.jsx`

## Component Specification

### Props
- `items` - Array of accordion item data (from data layer)

### State
- `expandedId` - ID of currently expanded item (null if none)

### Design Requirements
- Renders list of AccordionItem components
- Single-expand behavior (only one item expanded at a time)
- Clean vertical list layout

### Implementation
```jsx
import React, { Component } from 'react';
import AccordionItem from './AccordionItem';

class AccordionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedId: null,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(id) {
    this.setState((prevState) => ({
      expandedId: prevState.expandedId === id ? null : id,
    }));
  }

  render() {
    const { items = [] } = this.props;
    const { expandedId } = this.state;

    return (
      <div className="bg-white">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            isExpanded={expandedId === item.id}
            onToggle={() => this.handleToggle(item.id)}
          >
            {/* Placeholder for sub-items if needed */}
            {item.children && (
              <div className="text-sm text-gray-600">
                {item.children.map((child, index) => (
                  <div key={index} className="py-2">
                    {child}
                  </div>
                ))}
              </div>
            )}
          </AccordionItem>
        ))}
      </div>
    );
  }
}

export default AccordionList;
```

## Technical Requirements
- Use React class components (not functional)
- Use Tailwind CSS for styling
- Manage expanded state internally
- Bind methods in constructor
- No hooks allowed

## Dependencies
- Task 6 (AccordionItem component)

## Acceptance Criteria
- [ ] Renders all accordion items from data
- [ ] Only one item can be expanded at a time
- [ ] Clicking expanded item collapses it
- [ ] Clicking different item expands it and collapses previous
- [ ] Uses class-based React component with state
