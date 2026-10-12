# Day 50 — Accessibility Testing Practice

## Overview

Day 50 focused on practicing accessibility testing on SauceDemo. I tested keyboard accessibility, color contrast and readability, accessible names, form validation, browser zoom, responsive reflow, and regression behavior.

The goal was to evaluate whether essential content and interactive elements remained understandable and usable during the tested workflows.

## Activities Completed

1. **Keyboard accessibility:** Tested keyboard navigation, visible focus, product actions, cart interactions, and checkout navigation.
2. **Color contrast and readability:** Checked body text, button text, secondary text, and error text where present.
3. **Image alternatives and accessible names:** Checked product image alternatives and whether interactive controls communicated their actions.
4. **Accessible names and state changes:** Verified that product controls changed labels appropriately when adding and removing items.
5. **Checkout form validation:** Checked field identification, required-field validation, and whether users could understand and correct missing information.
6. **Browser zoom:** Checked the usability of product, cart, and checkout content at 200% zoom.
7. **Responsive reflow:** Checked content availability, clipping, overlapping elements, navigation, and horizontal scrolling at 400% zoom.
8. **Final accessibility regression:** Rechecked keyboard navigation, visible focus, product actions, cart updates, checkout labels, required-field validation, and usability at 200% zoom.

## Results Summary

- **Total reported checks:** 56
- **Reported passed checks:** 56
- **Reported failed checks:** 0
- **Defects reported:** None
- **Observations:** None provided

These results represent my reported manual checks of the selected SauceDemo workflows. They do not establish full WCAG conformance.

## Key Learnings

- Keyboard accessibility requires checking whether interactive elements can be reached and operated without a mouse.
- Visible focus helps keyboard users understand which element is currently selected.
- Accessible names should communicate the purpose of controls, while state changes should remain understandable.
- Form validation should help users identify missing information and recover from errors.
- Browser zoom and responsive reflow checks help identify content that becomes clipped, overlaps, or is difficult to use.
- Regression testing helps confirm that previously tested behaviors remain consistent after other checks.
- Passing a limited set of manual checks does not prove that a website is fully accessible.

## Limitations

The testing covered selected workflows on SauceDemo. I did not complete a full WCAG audit or document independent evidence for every check. Specific color-contrast ratios were not recorded, and screen-reader behavior was not tested.

## Reflection

Day 50 helped me practice evaluating accessibility from a user's perspective rather than focusing only on whether a feature works. I also learned to distinguish between reported test results and conclusions supported by documented evidence.

Going forward, I will improve my accessibility reports by recording specific observations, capturing screenshots where useful, measuring contrast ratios, and documenting the exact browser and testing conditions.

## Status

**Day 50 practical tasks completed.** Documentation and portfolio updates remain to be committed to GitHub.
