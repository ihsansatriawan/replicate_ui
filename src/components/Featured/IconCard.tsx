import React, { Component } from 'react';
import type { IconCardProps, IconCardState } from '../../types';

class IconCard extends Component<IconCardProps, IconCardState> {
  state: IconCardState = {
    imageError: false,
  };

  handleClick = (): void => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  };

  handleImageError = (): void => {
    this.setState({ imageError: true });
  };

  renderIcon(): React.ReactNode {
    const { icon } = this.props;
    const { imageError } = this.state;

    if (imageError) {
      return (
        <div className="w-8 h-8 flex items-center justify-center bg-gray-300 dark:bg-gray-600 rounded text-gray-600 dark:text-gray-300 text-xs font-semibold">
          ?
        </div>
      );
    }

    return (
      <img
        src={`/icons/${icon}.svg`}
        alt=""
        className="w-8 h-8"
        aria-hidden="true"
        onError={this.handleImageError}
      />
    );
  }

  render(): React.ReactNode {
    const { label } = this.props;

    return (
      <button
        type="button"
        onClick={this.handleClick}
        aria-label={label}
        className="flex flex-col items-center group cursor-pointer bg-transparent border-none p-0 min-h-[88px] focus:outline-none focus:ring-2 focus:ring-tokopedia-green focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-2xl active:bg-gray-200 dark:active:bg-gray-700"
      >
        <div className="w-16 h-16 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-2xl mb-2 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors">
          {this.renderIcon()}
        </div>
        <span className="text-xs text-gray-700 dark:text-gray-300 text-center leading-tight max-w-20">
          {label}
        </span>
      </button>
    );
  }
}

export default IconCard;
