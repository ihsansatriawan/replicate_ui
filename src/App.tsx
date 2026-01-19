import React, { Component } from 'react';
import { Header } from './components/Header';
import { FeaturedSection } from './components/Featured';
import { AccordionList } from './components/Accordion';
import { featuredItems } from './data/featuredItems';
import { accordionItems } from './data/accordionItems';

class App extends Component {
  handleBackClick = (): void => {
    console.log('Back button clicked');
    // Navigation logic - in real app: window.history.back() or router
  };

  render(): React.ReactNode {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Mobile Container */}
        <div className="max-w-mobile mx-auto bg-white min-h-screen shadow-lg">
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

            {/* Accordion Categories */}
            <AccordionList items={accordionItems} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
