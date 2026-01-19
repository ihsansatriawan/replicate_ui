import React from 'react';

export interface FeaturedItem {
  id: string;
  icon: string;
  label: string;
  onClick?: () => void;
}

export interface AccordionItemData {
  id: string;
  title: string;
  children?: AccordionItemData[];
}

export interface IconCardProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

export interface HeaderProps {
  title: string;
  onBackClick?: () => void;
}

export interface FeaturedSectionProps {
  title: string;
  items: FeaturedItem[];
}

export interface FeaturedSectionState {
  isExpanded: boolean;
}

export interface AccordionItemProps {
  id: string;
  title: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  children?: React.ReactNode;
}

export interface AccordionListProps {
  items: AccordionItemData[];
}

export interface AccordionListState {
  expandedId: string | null;
}

export interface ChevronIconProps {
  direction: 'up' | 'down';
  className?: string;
}

export interface BackArrowIconProps {
  className?: string;
}
