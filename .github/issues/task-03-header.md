# Task 3: Header Component

**Labels:** `group-b`, `react-component`

## Description
Create the top navigation header component.

## File to Create
- `src/components/Header/Header.jsx`

## Component Specification

### Props
- `title` - Header title text (default: "Jelajah Tokopedia")
- `onBackClick` - Callback function when back button is clicked

### Design Requirements
- Fixed height header
- Back arrow on the left
- Title text next to the back arrow
- Clean white background
- Bottom border or shadow

### Implementation
```jsx
import React, { Component } from 'react';
import BackArrowIcon from '../common/BackArrowIcon';

class Header extends Component {
  render() {
    const { title = 'Jelajah Tokopedia', onBackClick } = this.props;

    return (
      <header className="flex items-center px-4 py-3 bg-white border-b border-gray-100">
        <BackArrowIcon
          onClick={onBackClick}
          className="text-gray-800"
        />
        <h1 className="ml-4 text-lg font-semibold text-gray-900">
          {title}
        </h1>
      </header>
    );
  }
}

export default Header;
```

## Technical Requirements
- Use React class components (not functional)
- Use Tailwind CSS for styling
- No hooks allowed

## Dependencies
- Task 2 (BackArrowIcon component)

## Acceptance Criteria
- [ ] Header displays title correctly
- [ ] Back button is clickable and triggers onBackClick
- [ ] Styling matches the UI design
- [ ] Uses class-based React component
