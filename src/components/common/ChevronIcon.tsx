import React, { Component } from 'react';
import type { ChevronIconProps } from '../../types';

class ChevronIcon extends Component<ChevronIconProps> {
  render(): React.ReactNode {
    const { direction, className = '' } = this.props;
    const rotation = direction === 'up' ? 'rotate-180' : '';

    return (
      <svg
        className={`w-5 h-5 transition-transform duration-200 ${rotation} ${className}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    );
  }
}

export default ChevronIcon;
