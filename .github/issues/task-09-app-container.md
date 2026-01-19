# Task 9: App Container Component

**Labels:** `group-d`, `react-component`

## Description
Create main App component that assembles all components together.

## File to Create/Modify
- `src/App.jsx`

## Component Specification

### Design Requirements
- Mobile-first container (max-width ~428px, centered)
- Light gray background for the page
- White background for content sections
- Proper spacing between sections

### Implementation
```jsx
import React, { Component } from 'react';
import Header from './components/Header/Header';
import FeaturedSection from './components/Featured/FeaturedSection';
import AccordionList from './components/Accordion/AccordionList';
import featuredItems from './data/featuredItems';
import accordionItems from './data/accordionItems';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleBackClick() {
    console.log('Back button clicked');
    // Navigation logic here
  }

  render() {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Mobile Container */}
        <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg">
          {/* Header */}
          <Header
            title="Jelajah Tokopedia"
            onBackClick={this.handleBackClick}
          />

          {/* Main Content */}
          <main>
            {/* Featured Section */}
            <FeaturedSection
              title="Featured"
              items={featuredItems}
            />

            {/* Divider */}
            <div className="h-2 bg-gray-100" />

            {/* Accordion Menu */}
            <AccordionList items={accordionItems} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
```

## Technical Requirements
- Use React class components (not functional)
- Use Tailwind CSS for styling
- Import and use all created components
- Mobile-first responsive design
- No hooks allowed

## Dependencies
- Task 1 (Data Layer - featuredItems, accordionItems)
- Task 3 (Header component)
- Task 5 (FeaturedSection component)
- Task 7 (AccordionList component)

## Acceptance Criteria
- [ ] App renders all sections correctly
- [ ] Mobile container is properly sized and centered
- [ ] Header, Featured, and Accordion sections display
- [ ] Data is passed correctly to components
- [ ] Uses class-based React component
- [ ] Styling matches the reference UI
