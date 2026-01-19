import React, { Component } from 'react';
import type { HeaderProps } from '../../types';
import { BackArrowIcon } from '../common';

class Header extends Component<HeaderProps> {
  handleBackClick = (): void => {
    const { onBackClick } = this.props;
    if (onBackClick) {
      onBackClick();
    }
  };

  render(): React.ReactNode {
    const { title } = this.props;

    return (
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100">
        <div className="flex items-center h-14 px-4">
          <button
            type="button"
            onClick={this.handleBackClick}
            className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Go back"
          >
            <BackArrowIcon className="w-6 h-6 text-gray-800" />
          </button>
          <h1 className="ml-2 text-lg font-semibold text-gray-900">
            {title}
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
