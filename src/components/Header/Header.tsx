import React, { Component } from 'react';
import type { HeaderProps } from '../../types';
import { BackArrowIcon, MoonIcon, SunIcon } from '../common';
import { ThemeContext } from '../../context';

class Header extends Component<HeaderProps> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  handleBackClick = (): void => {
    const { onBackClick } = this.props;
    if (onBackClick) {
      onBackClick();
    }
  };

  handleDarkModeToggle = (): void => {
    const { onDarkModeToggle } = this.props;
    if (onDarkModeToggle) {
      onDarkModeToggle();
    }
    this.context.toggleTheme();
  };

  render(): React.ReactNode {
    const { title, isDarkMode = false } = this.props;

    return (
      <header className="sticky top-0 z-10 bg-white dark:bg-dark-bg-secondary border-b border-gray-100 dark:border-dark-border">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center">
            <button
              type="button"
              onClick={this.handleBackClick}
              className="flex items-center justify-center w-11 h-11 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary active:bg-gray-200 dark:active:bg-dark-bg-primary focus:outline-none focus:ring-2 focus:ring-tokopedia-green focus:ring-offset-2 dark:focus:ring-offset-dark-bg-secondary transition-colors"
              aria-label="Go back"
            >
              <BackArrowIcon className="w-6 h-6 text-gray-800 dark:text-dark-text-primary" />
            </button>
            <h1 className="ml-2 text-lg font-semibold text-gray-900 dark:text-dark-text-primary">
              {title}
            </h1>
          </div>
          <button
            type="button"
            onClick={this.handleDarkModeToggle}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary active:bg-gray-200 dark:active:bg-dark-bg-primary focus:outline-none focus:ring-2 focus:ring-tokopedia-green focus:ring-offset-2 dark:focus:ring-offset-dark-bg-secondary transition-colors"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            aria-pressed={isDarkMode}
          >
            {isDarkMode ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-700 dark:text-dark-text-secondary" />
            )}
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
