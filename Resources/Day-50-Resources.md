# Day 50 — Accessibility Testing Practice Resources

## Overview

Day 50 focused on practicing accessibility testing on SauceDemo. The exercises covered keyboard accessibility, color contrast, accessible names, form validation, browser zoom, responsive reflow, and final accessibility regression testing.

## Resources Used

### 1. Web Content Accessibility Guidelines (WCAG)

- **Link:** https://www.w3.org/WAI/standards-guidelines/wcag/
- **Purpose:** Reference for understanding accessibility requirements, including keyboard access, contrast, and reflow.

### 2. WebAIM Contrast Checker

- **Link:** https://webaim.org/resources/contrastchecker/
- **Purpose:** Check foreground and background color combinations against WCAG contrast thresholds.
- **Key learning:** Normal text generally requires a contrast ratio of at least 4.5:1 for WCAG AA; large text generally requires at least 3:1.

### 3. W3C WAI — Keyboard Accessibility

- **Link:** https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html
- **Purpose:** Understand keyboard operability and why interactive functionality should be accessible without a mouse.

### 4. W3C WAI — Reflow

- **Link:** https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
- **Purpose:** Learn how content should adapt to narrow viewports and high browser zoom without unnecessary two-dimensional scrolling for ordinary reading.

### 5. MDN — Accessibility

- **Link:** https://developer.mozilla.org/en-US/docs/Web/Accessibility
- **Purpose:** Learn about semantic HTML, accessible names, form labels, keyboard interaction, and general accessibility testing practices.

### 6. SauceDemo

- **Link:** https://www.saucedemo.com/
- **Purpose:** Practice accessibility checks on product selection, cart actions, checkout forms, keyboard navigation, and browser zoom.

## Day 50 Practical Coverage

The following areas were tested and reported as passing during the exercises:

- Keyboard-only navigation and visible focus
- Product action labels and accessible names
- Cart updates after adding and removing products
- Form labels and required-field validation
- Color contrast and readability checks
- Browser zoom at 200% and 400%
- Responsive reflow and content availability
- Final accessibility regression checks

**Reported result:** 56 out of 56 checklist checks passed across Tasks 1–8, with no defects reported.

**Evidence limitation:** The results are based on manual observations reported during practice. Color-contrast ratios were not recorded, and screen-reader behavior was not verified. These results should not be presented as a complete WCAG conformance audit.

## Key Takeaways

1. Accessibility testing should include keyboard navigation, visible focus, readable content, and usable forms.
2. Visible button text and accessible names should communicate the action clearly.
3. Browser zoom and reflow checks help identify content that becomes clipped, overlaps, or requires unnecessary horizontal scrolling.
4. Contrast ratios should be measured and recorded rather than judged by appearance alone.
5. A passing manual checklist does not prove full accessibility conformance; additional testing and evidence may be necessary.
