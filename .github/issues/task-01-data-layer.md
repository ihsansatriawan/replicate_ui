# Task 1: Setup & Data Layer

**Labels:** `group-a`, `react-component`

## Description
Create data files with mock data for featured items and accordion items.

## Files to Create
- `src/data/featuredItems.js` - Array of featured icon data (id, icon, label)
- `src/data/accordionItems.js` - Array of accordion categories

## Data Structure

### featuredItems.js
```javascript
const featuredItems = [
  { id: 1, icon: 'computer-laptop', label: 'Komputer & Laptop' },
  { id: 2, icon: 'fashion-wanita', label: 'Fashion Wanita' },
  { id: 3, icon: 'kesehatan', label: 'Kesehatan' },
  { id: 4, icon: 'promo', label: 'Promo' },
  { id: 5, icon: 'pulsa', label: 'Pulsa' },
  { id: 6, icon: 'tokopedia-card', label: 'Tokopedia Card' },
  { id: 7, icon: 'tokopedia-farma', label: 'Tokopedia Farma' },
];

export default featuredItems;
```

### accordionItems.js
```javascript
const accordionItems = [
  { id: 1, title: 'Gadget & Elektronik' },
  { id: 2, title: 'Fashion & Kecantikan' },
  { id: 3, title: 'Kebutuhan Harian' },
  { id: 4, title: 'Mainan & Hobi' },
  { id: 5, title: 'Perlengkapan Rumah & Dekorasi' },
  { id: 6, title: 'Tagihan' },
  { id: 7, title: 'Top-Up' },
  { id: 8, title: 'Tokopedia Keuangan' },
  { id: 9, title: 'Pajak & Pendidikan' },
];

export default accordionItems;
```

## Dependencies
None - Can run in parallel with other Group A tasks

## Acceptance Criteria
- [ ] featuredItems.js exports array of featured items
- [ ] accordionItems.js exports array of accordion categories
- [ ] Data structure matches the UI requirements
