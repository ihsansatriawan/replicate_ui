# Task 8: Featured Icons Assets

**Labels:** `group-a`

## Description
Create or add SVG icons for the featured section items.

## Files to Create in `src/assets/icons/`
- `ComputerLaptopIcon.jsx` - Computer/laptop icon (green)
- `FashionWanitaIcon.jsx` - Dress/fashion icon (pink)
- `KesehatanIcon.jsx` - Health/mask icon (blue)
- `PromoIcon.jsx` - Promo badge icon (red/orange)
- `PulsaIcon.jsx` - Phone/pulsa icon (teal)
- `TokopediaCardIcon.jsx` - QR code card icon (green)
- `TokopediaFarmaIcon.jsx` - Pharmacy/medicine icon (blue)
- `index.js` - Export all icons

## Icon Specifications
- Size: Use viewBox="0 0 48 48" for consistency
- Style: Flat, simple, two-tone colors
- Format: React class components returning SVG
- Colors should match Tokopedia's design system

## Color Palette Reference
- Green (Tokopedia): #03AC0E
- Pink: #FF5C84
- Blue: #0095DA
- Red/Orange: #FF5722
- Teal: #00AA5B

## Example Icon Component
```jsx
import React, { Component } from 'react';

class ComputerLaptopIcon extends Component {
  render() {
    const { className = '' } = this.props;

    return (
      <svg
        className={className}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SVG paths here */}
        <rect x="8" y="8" width="32" height="24" rx="2" fill="#E8F5E9" stroke="#03AC0E" strokeWidth="2"/>
        <rect x="4" y="32" width="40" height="4" rx="1" fill="#03AC0E"/>
      </svg>
    );
  }
}

export default ComputerLaptopIcon;
```

## Index Export File
```jsx
export { default as ComputerLaptopIcon } from './ComputerLaptopIcon';
export { default as FashionWanitaIcon } from './FashionWanitaIcon';
export { default as KesehatanIcon } from './KesehatanIcon';
export { default as PromoIcon } from './PromoIcon';
export { default as PulsaIcon } from './PulsaIcon';
export { default as TokopediaCardIcon } from './TokopediaCardIcon';
export { default as TokopediaFarmaIcon } from './TokopediaFarmaIcon';
```

## Dependencies
None - Can run in parallel with other Group A tasks

## Acceptance Criteria
- [ ] All 7 icon components created
- [ ] Icons are properly sized and styled
- [ ] Icons use class-based components
- [ ] Index file exports all icons
- [ ] Visual style matches the reference UI
