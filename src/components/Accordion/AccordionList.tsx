import React, { Component } from 'react';
import type { AccordionListProps, AccordionListState } from '../../types';
import AccordionItem from './AccordionItem';
import { IconCard } from '../Featured';

class AccordionList extends Component<AccordionListProps, AccordionListState> {
  constructor(props: AccordionListProps) {
    super(props);
    this.state = {
      expandedId: null,
    };
  }

  handleToggle = (id: string): void => {
    this.setState((prevState) => ({
      expandedId: prevState.expandedId === id ? null : id,
    }));
  };

  render(): React.ReactNode {
    const { items } = this.props;
    const { expandedId } = this.state;

    return (
      <nav aria-label="Category navigation">
        <div className="bg-white" role="list">
          {items.length === 0 ? (
            <div className="px-4 py-8 text-center text-gray-500">
              No categories available
            </div>
          ) : (
            items.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                icon={item.icon}
                isExpanded={expandedId === item.id}
                onToggle={this.handleToggle}
              >
                {item.children && item.children.length > 0 && (
                  <div className="grid grid-cols-4 gap-4">
                    {item.children.map((child) => (
                      <IconCard
                        key={child.id}
                        icon={child.icon || ''}
                        label={child.title}
                      />
                    ))}
                  </div>
                )}
              </AccordionItem>
            ))
          )}
        </div>
      </nav>
    );
  }
}

export default AccordionList;
