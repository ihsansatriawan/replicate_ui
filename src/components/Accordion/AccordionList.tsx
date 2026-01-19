import React, { Component } from 'react';
import type { AccordionListProps, AccordionListState } from '../../types';
import AccordionItem from './AccordionItem';

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
      <div className="bg-white">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            id={item.id}
            title={item.title}
            isExpanded={expandedId === item.id}
            onToggle={this.handleToggle}
          />
        ))}
      </div>
    );
  }
}

export default AccordionList;
