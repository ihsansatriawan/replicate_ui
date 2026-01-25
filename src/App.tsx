import React, { Component } from 'react';
import { Header } from './components/Header';
import { FeaturedSection } from './components/Featured';
import { AccordionList } from './components/Accordion';
import { featuredItems } from './data/featuredItems';
import { accordionItems } from './data/accordionItems';

interface AppState {
  isDarkMode: boolean;
}

class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);

    this.state = {
      isDarkMode,
    };
  }

  componentDidMount(): void {
    this.applyTheme(this.state.isDarkMode);
  }

  applyTheme = (isDark: boolean): void => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  handleDarkModeToggle = (): void => {
    this.setState(
      (prevState) => {
        const newIsDarkMode = !prevState.isDarkMode;
        return { isDarkMode: newIsDarkMode };
      },
      () => {
        this.applyTheme(this.state.isDarkMode);
      }
    );
  };

  handleBackClick = (): void => {
    // Navigation logic - in real app: window.history.back() or router
  };

  render(): React.ReactNode {
    const { isDarkMode } = this.state;

    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
        {/* Mobile Container */}
        <div className="max-w-mobile mx-auto bg-white dark:bg-gray-900 min-h-screen shadow-lg">
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
            isDarkMode={isDarkMode}
            onDarkModeToggle={this.handleDarkModeToggle}
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
    );
  }
}

export default App;
