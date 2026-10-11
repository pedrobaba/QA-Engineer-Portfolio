## Day 49 — Accessibility Testing Fundamentals

### Learning Resources

1. **W3C — Web Accessibility Initiative (WAI)**
   - Link: https://www.w3.org/WAI/
   - Purpose: Introduction to web accessibility and accessible user experiences.

2. **W3C — WCAG 2 Overview**
   - Link: https://www.w3.org/WAI/standards-guidelines/wcag/
   - Purpose: Understand the Web Content Accessibility Guidelines and the principles used to evaluate accessibility.

3. **MDN — Accessibility**
   - Link: https://developer.mozilla.org/en-US/docs/Web/Accessibility
   - Purpose: Learn accessibility fundamentals, including keyboard access, semantic HTML, labels, and assistive technologies.

4. **WebAIM — Keyboard Accessibility**
   - Link: https://webaim.org/techniques/keyboard/
   - Purpose: Learn how keyboard users navigate websites and why logical focus order, visible focus indicators, and keyboard operability matter.

5. **SauceDemo**
   - Link: https://www.saucedemo.com/
   - Purpose: Practical website used for manual keyboard-accessibility checks during Day 49.

### Practical Testing Completed

- Tested keyboard access to login fields and buttons.
- Checked keyboard navigation through product selection, cart, and checkout.
- Verified logical focus order on the login and Products pages.
- Checked form labels and visible validation feedback.
- Tested recovery from login errors.
- Verified visible keyboard focus on the login, Products, and cart pages.
- Tested keyboard-based product selection and cart badge updates.
- Completed a keyboard-only regression flow through the checkout overview.

### Results Summary

- Total reported checks: 60
- Passed: 60
- Failed: 0
- Defects reported: None

### Testing Environment and Limitations

- Application: SauceDemo
- Browser: Google Chrome
- Method: Manual keyboard testing using Tab, Shift+Tab, Enter, and Space where applicable.
- Scope: Selected login, product selection, cart, and checkout workflows.
- Screen-reader testing was not performed.
- This exercise was not a complete WCAG conformance audit.
- No screenshots or recordings are claimed as evidence unless separately saved.

### Key Learning

Keyboard accessibility testing checks whether users can navigate and operate interactive elements without a mouse. QA testers should examine keyboard operability, logical focus order, visible focus indicators, understandable validation feedback, and the ability to recover from errors. Passing these checks does not, by itself, establish full accessibility compliance.
