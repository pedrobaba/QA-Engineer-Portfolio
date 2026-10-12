# Day 50 — Accessibility Testing Practice

## Overview

Day 50 focused on practical accessibility testing using SauceDemo. The goal was to evaluate whether key user workflows remained usable through keyboard navigation, readable text and color contrast, meaningful accessible names, form validation, browser zoom, responsive reflow, and regression testing.

All results below reflect my reported manual observations during the exercise. No defects or unexpected behavior were reported.

---

## Learning Objectives

By the end of Day 50, I practiced how to:

- Test keyboard accessibility and visible focus indicators.
- Evaluate text readability and color contrast.
- Inspect image alternatives and accessible names.
- Verify that interactive controls communicate their actions.
- Test checkout form labels and required-field validation.
- Check usability at 200% browser zoom.
- Test responsive reflow at 400% browser zoom.
- Perform a final accessibility regression check.
- Document test results and recognize evidence limitations.

---

## 1. Keyboard Accessibility Practice

**Objective:** Verify that essential product, cart, and checkout interactions can be performed using the keyboard.

### Areas tested

- Keyboard navigation through interactive elements.
- Forward and backward navigation using Tab and Shift+Tab.
- Visible focus indicators.
- Keyboard activation of Add to Cart.
- Keyboard navigation to the cart.
- Keyboard activation of Remove.
- Focus behavior after cart updates.

### Result

**Reported result: PASS — 8/8 checks.**

No observations or defects were reported.

---

## 2. Color Contrast and Readability

**Objective:** Evaluate the readability of important text and controls.

### Areas tested

- Main body text.
- Button text.
- Secondary or muted text.
- Error text, where present.
- At least two foreground/background color combinations.

### Result

**Reported result: PASS — 5/5 checks.**

No observations were provided.

### Evidence limitation

The specific foreground/background color pairs and their measured contrast ratios were not recorded. Therefore, the reported result does not independently establish that the tested combinations meet WCAG contrast requirements.

For WCAG 2.2 Level AA, the general minimum contrast ratios are:

- Normal text: 4.5:1.
- Large text: 3:1.

These requirements have specific exceptions and definitions, so actual color combinations should be measured and documented before claiming verified conformance.

---

## 3. Image Alternatives and Accessible Names

**Objective:** Check whether product images and interactive controls provide meaningful information to users.

### Areas tested

- Presence of alternative text on a product image.
- Appropriateness of the alternative text.
- Meaningful accessible name for Add to Cart.
- Whether the button name communicates its action.
- Whether the control remains meaningful after a product is added.

### Result

**Reported result: PASS — 5/5 checks.**

No observations or defects were reported.

### Evidence limitation

The actual image alternative text and computed accessible names were not recorded. A visible button label does not always match its accessible name, so further inspection would be needed to verify that distinction.

---

## 4. Accessible Names and State Changes

**Objective:** Verify that interactive controls communicate their current actions and update consistently after user interaction.

### Areas tested

- Add to Cart has a meaningful name.
- The control changes to Remove after adding a product.
- The Remove action is clear.
- Removing a product updates the cart.
- The control returns to Add to Cart after removal.
- Observed labels and actions are consistent.

### Result

**Reported result: PASS — 6/6 checks.**

No observations or defects were reported.

### Evidence limitation

The workflow was checked manually. Screen-reader announcements and programmatic state changes were not independently verified.

---

## 5. Checkout Form Instructions and Required Fields

**Objective:** Evaluate whether users can identify checkout fields, understand validation feedback, and correct missing information.

### Areas tested

- First Name field identification.
- Last Name field identification.
- Postal Code field identification.
- Validation after submitting an empty form.
- Understandability of validation feedback.
- Validation when Postal Code is missing.
- Visibility of feedback and ability to correct the form.

### Result

**Reported result: PASS — 7/7 checks.**

No observations or defects were reported.

### Evidence limitation

The exercise did not independently verify form labels and error messages using a screen reader or accessibility inspection tools.

---

## 6. Accessibility at 200% Browser Zoom

**Objective:** Check whether key product, cart, and checkout workflows remain usable at increased browser zoom.

### Areas tested

- Products page readability.
- Product button visibility and usability.
- Navigation and cart access.
- Cart content and Checkout button.
- Checkout field visibility and usability.
- Overlapping or clipped content.
- Availability of essential content.

### Result

**Reported result: PASS — 7/7 checks.**

No observations or defects were reported.

---

## 7. Responsive Reflow at 400% Browser Zoom

**Objective:** Check whether essential content remains available and usable when increased browser zoom creates a narrow effective viewport.

### Areas tested

- Products page content availability.
- Product control visibility and usability.
- Overlapping or clipped product information.
- Cart content and Checkout button usability.
- Checkout field visibility and usability.
- Readability without unnecessary horizontal scrolling.
- Navigation usability at increased zoom.

### Result

**Reported result: PASS — 7/7 checks.**

No observations or defects were reported.

### Evidence limitation

The exact browser viewport dimensions were not recorded. The result represents the tested browser and device configuration, not proof that the application satisfies every responsive reflow requirement.

---

## 8. Final Accessibility Regression Check

**Objective:** Recheck important accessibility behaviors after completing the previous exercises.

### Areas tested

- Keyboard navigation and visible focus.
- Product actions and button-label updates.
- Cart updates after removing a product.
- Checkout form label identification.
- Required-field validation.
- Checkout usability at 200% browser zoom.

### Result

**Reported result: PASS — 6/6 checks.**

No observations or defects were reported.

---

## Overall Results

| Task | Area | Reported Result |
|---|---|---|
| 1 | Keyboard accessibility | PASS — 8/8 |
| 2 | Color contrast and readability | PASS — 5/5 |
| 3 | Image alternatives and accessible names | PASS — 5/5 |
| 4 | Accessible names and state changes | PASS — 6/6 |
| 5 | Checkout form labels and validation | PASS — 7/7 |
| 6 | Accessibility at 200% zoom | PASS — 7/7 |
| 7 | Responsive reflow at 400% zoom | PASS — 7/7 |
| 8 | Final accessibility regression | PASS — 6/6 |
| **Total** | **Eight practical tasks** | **56/56 reported checks passed** |

### Defect Summary

- Defects reported: 0
- Unexpected behavior reported: 0
- Tasks completed: 8
- Reported checks passed: 56

These figures summarize the reported results of the exercise. They are not an independently verified accessibility score.

---

## Key Learnings

1. Keyboard accessibility testing checks whether essential interactions can be completed without a mouse.
2. Visible focus helps keyboard users identify the currently focused element.
3. Color contrast should be measured using actual foreground and background color values.
4. Accessible names should communicate the purpose of interactive controls.
5. Dynamic controls should communicate their current actions consistently.
6. Checkout validation should help users identify and correct missing information.
7. Browser zoom testing can reveal readability, visibility, clipping, and layout problems.
8. Responsive reflow testing should consider whether essential content remains available without unnecessary two-dimensional scrolling.
9. Regression testing helps identify unexpected changes to previously tested behavior.
10. Passing selected manual checks does not prove complete WCAG conformance.

---

## Limitations and Follow-up

The following areas remain outside the evidence collected during this exercise:

- Actual contrast ratios were not recorded.
- Computed accessible names and image alternative text were not documented.
- Screen-reader behavior was not tested.
- Exact viewport dimensions for the 400% zoom test were not recorded.
- No screenshots or recordings were supplied as evidence for these results.
- The exercise was not a complete WCAG audit.

Future testing could include recorded contrast measurements, browser accessibility-tree inspection, screen-reader checks, and screenshots showing the tested zoom and viewport settings.

---

## Conclusion

Day 50 provided practical experience testing accessibility-related behaviors across keyboard navigation, color contrast, accessible names, form validation, browser zoom, responsive reflow, and regression workflows.

All eight tasks were reported as passing, with no defects reported. The exercise strengthened my understanding of accessibility checks while highlighting the importance of objective measurements, supporting evidence, and assistive-technology testing before making broader conformance claims.
