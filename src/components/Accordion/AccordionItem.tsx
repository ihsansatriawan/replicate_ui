import React, { Component } from 'react';
import type { AccordionItemProps } from '../../types';
import { ChevronIcon } from '../common';

class AccordionItem extends Component<AccordionItemProps> {
  handleClick = (): void => {
    const { id, onToggle } = this.props;
    onToggle(id);
  };

  render(): React.ReactNode {
    const { title, isExpanded, children } = this.props;

    return (
      <div className="border-b border-gray-100">
        {/* Accordion Header */}
        <button
          type="button"
          onClick={this.handleClick}
          className="flex items-center justify-between w-full px-4 py-4 hover:bg-gray-50 transition-colors"
          aria-expanded={isExpanded}
        >
          <span className="text-base font-semibold text-gray-900">
            {title}
          </span>
          <ChevronIcon
            direction={isExpanded ? 'up' : 'down'}
            className="w-5 h-5 text-gray-500"
          />
        </button>

        {/* Expandable Content */}
        {isExpanded && children && (
          <div className="px-4 pb-4">
            {children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionItem;
