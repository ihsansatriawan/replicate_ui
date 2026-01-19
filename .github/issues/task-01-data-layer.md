# Task 1: Setup & Data Layer

**Labels:** `group-a`

## Description
Create TypeScript data files with mock data for featured items and accordion items, including type definitions.

## Files to Create
- `src/types/index.ts` - Shared type definitions
- `src/data/featuredItems.ts` - Array of featured icon data
- `src/data/accordionItems.ts` - Array of accordion categories

## Type Definitions (src/types/index.ts)
```typescript
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
```

## Featured Items Data (src/data/featuredItems.ts)
```typescript
import { FeaturedItem } from '../types';

export const featuredItems: FeaturedItem[] = [
  { id: '1', icon: 'computer-laptop', label: 'Komputer & Laptop' },
  { id: '2', icon: 'fashion-wanita', label: 'Fashion Wanita' },
  { id: '3', icon: 'kesehatan', label: 'Kesehatan' },
  { id: '4', icon: 'promo', label: 'Promo' },
  { id: '5', icon: 'pulsa', label: 'Pulsa' },
  { id: '6', icon: 'tokopedia-card', label: 'Tokopedia Card' },
  { id: '7', icon: 'tokopedia-farma', label: 'Tokopedia Farma' },
];
```

## Accordion Items Data (src/data/accordionItems.ts)
```typescript
import { AccordionItemData } from '../types';

export const accordionItems: AccordionItemData[] = [
  { id: '1', title: 'Gadget & Elektronik' },
  { id: '2', title: 'Fashion & Kecantikan' },
  { id: '3', title: 'Kebutuhan Harian' },
  { id: '4', title: 'Mainan & Hobi' },
  { id: '5', title: 'Perlengkapan Rumah & Dekorasi' },
  { id: '6', title: 'Tagihan' },
  { id: '7', title: 'Top-Up' },
  { id: '8', title: 'Tokopedia Keuangan' },
  { id: '9', title: 'Pajak & Pendidikan' },
];
```

## Technical Requirements
- Use TypeScript with strict mode
- Export all types for reuse across components
- Use string IDs for consistency

## Dependencies
None - Can run in parallel with other Group A tasks

## Acceptance Criteria
- [ ] All type definitions created in `src/types/index.ts`
- [ ] Featured items data with proper typing
- [ ] Accordion items data with proper typing
- [ ] No TypeScript compilation errors
- [ ] Types are exported and reusable by other components
