import React, { Component } from 'react';
import type { IconCardProps } from '../../types';

class IconCard extends Component<IconCardProps> {
  handleClick = (): void => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  };

  renderIcon(): React.ReactNode {
    const { icon } = this.props;

    return (
      <img
        src={`/icons/${icon}.svg`}
        alt=""
        className="w-8 h-8"
        aria-hidden="true"
      />
    );
  }

  render(): React.ReactNode {
    const { label } = this.props;

    return (
      <button
        type="button"
        onClick={this.handleClick}
        className="flex flex-col items-center group cursor-pointer bg-transparent border-none p-0"
      >
        <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl mb-2 group-hover:bg-gray-100 transition-colors">
          {this.renderIcon()}
        </div>
        <span className="text-xs text-gray-700 text-center leading-tight max-w-[80px]">
          {label}
        </span>
      </button>
    );
  }
}

export default IconCard;
