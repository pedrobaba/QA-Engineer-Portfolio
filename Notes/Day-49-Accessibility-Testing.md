# Day 49 — Accessibility Testing Fundamentals

## Overview

Day 49 focused on manual accessibility testing using keyboard navigation on SauceDemo.

The goal was to evaluate whether users could navigate the login, products, cart, and checkout workflows using only a keyboard, identify the currently focused element, interact with product controls, and recover from form validation errors.

Testing was performed manually using a web browser. The results cover the specific scenarios tested and do not represent a complete WCAG accessibility audit.

---

## Learning Objectives

By the end of Day 49, I practiced how to:

- Test keyboard-only navigation.
- Verify logical keyboard focus order.
- Identify visible keyboard focus indicators.
- Check form field identification and validation feedback.
- Test keyboard-based error recovery.
- Verify keyboard interaction with product controls.
- Perform an accessibility-focused regression test.
- Document accessibility findings using expected and actual behavior.

---

## 1. What Is Accessibility Testing?

Accessibility testing evaluates whether people with different abilities can use a website or application.

It considers users who may rely on:

- Keyboard navigation instead of a mouse.
- Screen readers to understand page content.
- Screen magnification or zoom.
- Alternative input methods.
- Clear labels, instructions, and error messages.

Accessibility testing helps identify barriers that may prevent users from accessing information or completing important tasks.

---

## 2. Keyboard-Only Testing

Keyboard-only testing checks whether users can navigate and operate interactive elements without using a mouse.

Common keyboard controls include:

| Key | Typical Purpose |
|---|---|
| `Tab` | Move focus forward |
| `Shift + Tab` | Move focus backward |
| `Enter` | Activate links and buttons |
| `Space` | Activate many buttons and toggle controls |
| Arrow keys | Navigate within certain controls |
| `Escape` | Close some menus, dialogs, or overlays |

The behavior of individual keys depends on the element being tested.

### Day 49 Practice

On SauceDemo, I verified keyboard access to:

- Username and password fields.
- Login button.
- Product Add to Cart and Remove buttons.
- Cart link.
- Checkout button.
- Checkout form fields.
- Continue button.

The tested shopping workflow could be completed using only the keyboard.

---

## 3. Keyboard Focus Order

Keyboard focus order is the sequence in which interactive elements receive focus during keyboard navigation.

A logical focus order helps users understand where they are on a page and what they can interact with next.

### What to Check

- Focus moves in a meaningful sequence.
- Important interactive elements can receive focus.
- Focus does not jump unexpectedly.
- Users can move backward using `Shift + Tab`.
- Keyboard focus does not become trapped in an ordinary page workflow.

### Day 49 Result

The login page and Products page followed a logical focus order in the scenarios tested. The cart link received focus at an expected point, and no unexpected focus jumps or keyboard traps were reported.

---

## 4. Visible Keyboard Focus

A visible focus indicator shows which interactive element is currently selected during keyboard navigation.

Examples include:

- An outline around a button.
- A visible border around a form field.
- A clear visual change to the focused control.

### Why It Matters

Without a visible focus indicator, keyboard users may not know which control will respond when they press `Enter` or `Space`.

### Day 49 Result

Visible focus indicators were reported on the tested login, Products, and cart page elements. Focus remained identifiable during the final keyboard-only regression test.

---

## 5. Form Labels and Validation Feedback

Form labels help users identify the information required in each field.

Validation feedback explains why an attempted action cannot be completed.

### Examples of Login Validation Scenarios

| Scenario | Expected Behavior |
|---|---|
| Both fields empty | Display understandable validation feedback |
| Password missing | Display feedback explaining the problem |
| Invalid credentials | Reject the login and provide understandable feedback |
| Valid credentials after an error | Allow the user to proceed successfully |

An error response is not automatically a defect. The result must be compared with the expected behavior.

### Day 49 Result

The username and password fields were clearly identifiable. Empty-field submission, missing-password submission, and invalid credentials produced visible, understandable feedback in the scenarios tested.

---

## 6. Accessible Error Recovery

Error recovery checks whether users can correct invalid input and continue without unnecessary barriers.

### Day 49 Practice

I tested the following sequence:

1. Submit the login form with empty fields.
2. Observe the validation error.
3. Return to the username field using keyboard navigation.
4. Enter valid credentials.
5. Activate Login using `Enter`.
6. Verify that the Products page opens.
7. Confirm that the previous error message disappears after successful login.

### Result

All seven reported checks passed. No error-recovery defect was reported.

---

## 7. Keyboard Accessibility of Product Controls

Interactive controls should be usable with the keyboard and provide understandable feedback when their state changes.

### Day 49 Practice

I tested the following actions:

- Add a product using the keyboard.
- Verify that the button changes to Remove.
- Confirm that the cart badge updates.
- Add a second product.
- Verify the updated cart count.
- Remove the first product using the keyboard.
- Confirm that the cart badge decreases.
- Verify that the button returns to Add to Cart.

### Result

All nine reported checks passed.

The tested product selection and removal actions worked using the keyboard.

---

## 8. Final Keyboard-Only Regression Test

The final regression test checked whether the key shopping workflow remained usable when the individual interactions were combined.

### Workflow

1. Log in.
2. Add a product to the cart.
3. Open the cart.
4. Open checkout.
5. Complete the checkout information fields.
6. Activate Continue.
7. Verify that the checkout overview opens.

The test stopped at the checkout overview. The Finish button was not activated during this final regression test.

### Result

All nine reported checks passed. The tested workflow completed without a reported keyboard trap or loss of visible focus.

---

## 9. Day 49 Test Summary

| Task | Checks Passed | Total Checks |
|---|---:|---:|
| Task 1 — Basic keyboard access | 7 | 7 |
| Task 2 — Cart and checkout navigation | 9 | 9 |
| Task 3 — Keyboard focus order | 5 | 5 |
| Task 4 — Form labels and validation | 7 | 7 |
| Task 5 — Error recovery | 7 | 7 |
| Task 6 — Visible keyboard focus | 7 | 7 |
| Task 7 — Keyboard product selection | 9 | 9 |
| Task 8 — Final regression | 9 | 9 |
| **Total** | **60** | **60** |

**Reported result:** 60 of 60 checks passed.

No defects were reported during the tested scenarios.

---

## 10. Testing Limitations

The following limitations should be considered when interpreting the results:

- The assessment covered selected SauceDemo workflows rather than every page and interaction.
- Passing keyboard checks does not establish complete accessibility compliance.
- Screen-reader announcements were not tested.
- No automated accessibility audit or complete WCAG conformance assessment was documented.
- No screenshots or recordings are claimed as evidence unless they were actually saved.

These limitations help keep the report accurate and distinguish tested observations from unverified conclusions.

---

## Key Takeaways

1. Keyboard-only testing can reveal barriers that mouse-based testing may miss.
2. Interactive elements should be reachable and operable using the keyboard.
3. Focus order should be logical and predictable.
4. Visible focus indicators help keyboard users identify the active control.
5. Form fields and validation messages should be understandable.
6. Users should be able to correct errors and continue.
7. Product actions should provide clear feedback when their state changes.
8. A successful regression test covers the interaction of multiple features.
9. Passing selected tests does not prove complete accessibility compliance.
10. QA documentation should clearly distinguish verified observations from untested areas.

---

## Conclusion

Day 49 provided practical experience in manual accessibility testing through keyboard navigation, focus order, visible focus indicators, form validation, error recovery, and product selection.

All 60 checks reported across the eight tasks passed, with no defects reported in the tested scenarios.

This assessment provides a foundation for further accessibility testing, including screen-reader testing, automated accessibility checks, and more comprehensive WCAG-based evaluation.
