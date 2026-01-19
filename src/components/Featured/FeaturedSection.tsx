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
      <section className="bg-white">
        {/* Section Header */}
        <button
          type="button"
          onClick={this.handleToggle}
          className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
          aria-expanded={isExpanded}
        >
          <h2 className="text-base font-semibold text-gray-900">
            {title}
          </h2>
          <ChevronIcon
            direction={isExpanded ? 'up' : 'down'}
            className="w-5 h-5 text-gray-500"
          />
        </button>

        {/* Icon Grid */}
        {isExpanded && (
          <div className="px-4 pb-4">
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
        )}

        {/* Bottom Border */}
        <div className="h-2 bg-gray-100" />
      </section>
    );
  }
}

export default FeaturedSection;
