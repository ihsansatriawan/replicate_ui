# Task 8: Featured Icons Assets

**Labels:** `group-a`

## Description
Create SVG icon files for the featured section items.

## Files to Create
All files in `public/icons/` directory:
- `computer-laptop.svg`
- `fashion-wanita.svg`
- `kesehatan.svg`
- `promo.svg`
- `pulsa.svg`
- `tokopedia-card.svg`
- `tokopedia-farma.svg`

## Icon Specifications
- Size: 32x32px viewBox
- Style: Flat, simple, two-tone colors matching Tokopedia design
- Format: Optimized SVG files
- Accessibility: Icons are decorative (used with img aria-hidden)

## Color Palette Reference
- Green (Tokopedia): #03AC0E
- Light Green: #E8F5E9
- Pink: #FF5C84
- Light Pink: #FCE4EC
- Blue: #0095DA
- Light Blue: #E3F2FD
- Red/Orange: #FF5722
- Teal: #00AA5B

## Example SVG Structure

### computer-laptop.svg
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Monitor -->
  <rect x="4" y="4" width="14" height="10" rx="1" fill="#E8F5E9" stroke="#03AC0E" stroke-width="1.5"/>
  <rect x="7" y="14" width="8" height="2" fill="#03AC0E"/>
  <!-- Laptop -->
  <rect x="14" y="12" width="14" height="9" rx="1" fill="#E8F5E9" stroke="#03AC0E" stroke-width="1.5"/>
  <rect x="12" y="21" width="18" height="2" rx="1" fill="#03AC0E"/>
</svg>
```

### fashion-wanita.svg
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Dress shape -->
  <path d="M16 4L12 8L10 28H22L20 8L16 4Z" fill="#FCE4EC" stroke="#FF5C84" stroke-width="1.5"/>
  <path d="M12 8H20" stroke="#FF5C84" stroke-width="1.5"/>
</svg>
```

### kesehatan.svg (Medical Mask)
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Mask shape -->
  <path d="M6 12C6 12 8 20 16 20C24 20 26 12 26 12" fill="#E3F2FD" stroke="#0095DA" stroke-width="1.5"/>
  <line x1="4" y1="12" x2="6" y2="12" stroke="#0095DA" stroke-width="1.5"/>
  <line x1="26" y1="12" x2="28" y2="12" stroke="#0095DA" stroke-width="1.5"/>
  <line x1="10" y1="14" x2="22" y2="14" stroke="#0095DA" stroke-width="1"/>
  <line x1="10" y1="17" x2="22" y2="17" stroke="#0095DA" stroke-width="1"/>
</svg>
```

### promo.svg
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Badge -->
  <circle cx="16" cy="16" r="12" fill="#FFF3E0" stroke="#FF5722" stroke-width="1.5"/>
  <text x="16" y="14" text-anchor="middle" fill="#FF5722" font-size="8" font-weight="bold">%</text>
  <text x="16" y="22" text-anchor="middle" fill="#FF5722" font-size="6" font-weight="bold">PROMO</text>
</svg>
```

### pulsa.svg
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Phone -->
  <rect x="10" y="4" width="12" height="24" rx="2" fill="#E8F5E9" stroke="#03AC0E" stroke-width="1.5"/>
  <circle cx="16" cy="24" r="2" fill="#03AC0E"/>
  <!-- Rp symbol -->
  <text x="16" y="16" text-anchor="middle" fill="#03AC0E" font-size="8" font-weight="bold">Rp</text>
</svg>
```

### tokopedia-card.svg
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Card -->
  <rect x="4" y="6" width="24" height="20" rx="2" fill="#E8F5E9" stroke="#03AC0E" stroke-width="1.5"/>
  <!-- QR pattern -->
  <rect x="8" y="10" width="4" height="4" fill="#03AC0E"/>
  <rect x="14" y="10" width="4" height="4" fill="#03AC0E"/>
  <rect x="8" y="16" width="4" height="4" fill="#03AC0E"/>
  <rect x="14" y="16" width="4" height="4" fill="#03AC0E"/>
  <rect x="20" y="10" width="4" height="4" fill="#03AC0E"/>
</svg>
```

### tokopedia-farma.svg
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Bottle -->
  <rect x="10" y="8" width="12" height="20" rx="2" fill="#E8F5E9" stroke="#03AC0E" stroke-width="1.5"/>
  <rect x="12" y="4" width="8" height="4" fill="#03AC0E"/>
  <!-- Plus symbol -->
  <line x1="16" y1="14" x2="16" y2="22" stroke="#03AC0E" stroke-width="2"/>
  <line x1="12" y1="18" x2="20" y2="18" stroke="#03AC0E" stroke-width="2"/>
</svg>
```

## Dependencies
None - Can run in parallel with other Group A tasks

## Acceptance Criteria
- [ ] All 7 icons created as SVG files in public/icons/
- [ ] Consistent style across all icons (flat, two-tone)
- [ ] Proper viewBox (32x32) and dimensions
- [ ] Optimized file sizes (no unnecessary attributes)
- [ ] Colors match the reference design
- [ ] Icons render correctly in IconCard component
- [ ] SVGs are valid and well-formed
