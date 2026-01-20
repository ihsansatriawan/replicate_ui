import React, { Component } from 'react';
import { Header } from './components/Header';
import { FeaturedSection } from './components/Featured';
import { AccordionList } from './components/Accordion';
import { ThemeProvider } from './context';
import { featuredItems } from './data/featuredItems';
import { accordionItems } from './data/accordionItems';

class App extends Component {
  handleBackClick = (): void => {
    // Navigation logic - in real app: window.history.back() or router
  };

  render(): React.ReactNode {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-dark-bg-primary">
          {/* Mobile Container */}
          <div className="max-w-mobile mx-auto bg-white dark:bg-dark-bg-secondary min-h-screen shadow-lg">
            {/* Skip Link for Keyboard Navigation */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-tokopedia-green focus:text-white focus:rounded"
            >
              Skip to main content
            </a>

            {/* Header */}
            <Header
              title="Jelajah Tokopedia"
              onBackClick={this.handleBackClick}
            />

            {/* Main Content */}
            <main id="main-content" aria-label="Main content">
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
      </ThemeProvider>
    );
  }
}

export default App;
