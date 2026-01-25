import React, { Component } from 'react';
import type { AccordionItemProps } from '../../types';
import { ChevronIcon } from '../common';

class AccordionItem extends Component<AccordionItemProps> {
  handleClick = (): void => {
    const { id, onToggle } = this.props;
    onToggle(id);
  };

  render(): React.ReactNode {
    const { id, title, icon, isExpanded, children } = this.props;
    const contentId = `accordion-content-${id}`;

    return (
      <div className="border-b border-gray-100 dark:border-gray-800">
        {/* Accordion Header */}
        <button
          type="button"
          onClick={this.handleClick}
          className="flex items-center justify-between w-full min-h-[56px] px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tokopedia-green"
          aria-expanded={isExpanded}
          aria-controls={contentId}
        >
          <div className="flex items-center gap-3">
            {icon && (
              <img
                src={`/icons/${icon}.svg`}
                alt=""
                className="w-6 h-6 text-tokopedia-green"
              />
            )}
            <span className="text-base font-semibold text-gray-900 dark:text-white">
              {title}
            </span>
          </div>
          <ChevronIcon
            direction={isExpanded ? 'up' : 'down'}
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
          />
        </button>

        {/* Expandable Content */}
        <div
          id={contentId}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isExpanded}
        >
          {children && (
            <div className="px-4 pb-4">
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AccordionItem;
