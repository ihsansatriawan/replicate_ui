import React, { Component } from 'react';
import type { HeaderProps } from '../../types';
import { BackArrowIcon, DarkModeToggle } from '../common';

class Header extends Component<HeaderProps> {
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
  };

  render(): React.ReactNode {
    const { title, isDarkMode = false, onDarkModeToggle } = this.props;

    return (
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center">
            <button
              type="button"
              onClick={this.handleBackClick}
              className="flex items-center justify-center w-11 h-11 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-tokopedia-green focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors"
              aria-label="Go back"
            >
              <BackArrowIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </button>
            <h1 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h1>
          </div>
          {onDarkModeToggle && (
            <DarkModeToggle
              isDarkMode={isDarkMode}
              onToggle={this.handleDarkModeToggle}
            />
          )}
        </div>
      </header>
    );
  }
}

export default Header;
