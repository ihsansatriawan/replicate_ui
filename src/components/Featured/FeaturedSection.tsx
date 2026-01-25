import React, { Component } from 'react';
import type { FeaturedSectionProps, FeaturedSectionState } from '../../types';
import { ChevronIcon } from '../common';
import IconCard from './IconCard';

class FeaturedSection extends Component<FeaturedSectionProps, FeaturedSectionState> {
  constructor(props: FeaturedSectionProps) {
    super(props);
    this.state = {
      isExpanded: true,
    };
  }

  handleToggle = (): void => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render(): React.ReactNode {
    const { title, items } = this.props;
    const { isExpanded } = this.state;

    return (
      <section className="bg-white dark:bg-gray-900">
        {/* Section Header */}
        <button
          type="button"
          onClick={this.handleToggle}
          className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tokopedia-green"
          aria-expanded={isExpanded}
          aria-controls="featured-content"
        >
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <ChevronIcon
            direction={isExpanded ? 'up' : 'down'}
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
          />
        </button>

        {/* Icon Grid */}
        <div
          id="featured-content"
          className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
          aria-hidden={!isExpanded}
        >
          <div className="grid grid-cols-4 gap-4">
            {items.map((item) => (
              <IconCard
                key={item.id}
                icon={item.icon}
                label={item.label}
                onClick={item.onClick}
              />
            ))}
          </div>
        </div>

        {/* Bottom Border */}
        <div className="h-2 bg-gray-100 dark:bg-gray-800" />
      </section>
    );
  }
}

export default FeaturedSection;
