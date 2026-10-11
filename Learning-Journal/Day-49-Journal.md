# Day 49 — Learning Journal: Accessibility Testing Fundamentals

## Overview

Day 49 focused on manual accessibility testing using keyboard navigation on SauceDemo. The objective was to evaluate whether key shopping and checkout workflows could be completed without a mouse, whether keyboard focus was visible and predictable, and whether form validation and error recovery were usable.

## Learning Objectives

During this session, I practiced how to:

- Test keyboard-only navigation.
- Verify logical keyboard focus order.
- Check visible focus indicators.
- Evaluate form labels and validation feedback.
- Test keyboard-based error recovery.
- Verify product selection and cart updates using the keyboard.
- Perform a keyboard-only checkout regression test.
- Record expected behavior and actual observations.

## Activities Completed

### 1. Basic Keyboard Accessibility

I used the keyboard to navigate the login page and Products page. I verified that the username field, password field, Login button, product controls, and navigation elements could receive focus.

**Result:** All reported checks passed.

### 2. Keyboard Navigation Through Cart and Checkout

I added a product using the keyboard, opened the cart, navigated to checkout, completed the checkout information fields, and activated Continue using Enter.

**Result:** All 9 checks passed, and the checkout overview opened successfully.

### 3. Keyboard Focus Order

I checked the focus order on the login and Products pages. Focus moved through the tested navigation and product controls in a logical, predictable order. I did not encounter an unexpected focus jump or keyboard trap.

**Result:** All 5 checks passed.

### 4. Form Labels and Validation Feedback

I checked whether the username and password fields were identifiable and whether the application displayed understandable feedback for empty fields, a missing password, and invalid credentials.

**Result:** All 7 checks passed.

### 5. Accessible Error Recovery

After triggering a login error, I used the keyboard to return to the form, correct the input, and log in successfully. The previous error message disappeared after successful login.

**Result:** All 7 checks passed.

### 6. Visible Keyboard Focus

I checked focus indicators on the login, Products, and cart pages. The indicators remained visible and identifiable as I navigated between tested interactive elements.

**Result:** All 7 checks passed.

### 7. Accessible Product Selection

I added two products and removed one using the keyboard. I verified the Add to Cart and Remove button states and the corresponding cart badge updates.

**Result:** All 9 checks passed.

### 8. Final Accessibility Regression Check

I repeated the main login-to-checkout-overview workflow using only the keyboard. I verified that the tested steps worked, focus remained visible, and no keyboard trap prevented progress.

I stopped at the checkout overview without completing the order.

**Result:** All 9 checks passed.

## Results Summary

| Task | Checks Passed | Checks Failed |
|---|---:|---:|
| Task 1 — Basic keyboard access | 7 | 0 |
| Task 2 — Cart and checkout navigation | 9 | 0 |
| Task 3 — Keyboard focus order | 5 | 0 |
| Task 4 — Form labels and validation | 7 | 0 |
| Task 5 — Error recovery | 7 | 0 |
| Task 6 — Visible keyboard focus | 7 | 0 |
| Task 7 — Keyboard product selection | 9 | 0 |
| Task 8 — Final regression | 9 | 0 |
| **Total** | **60** | **0** |

No defects were reported during the eight tasks.

## Key Lessons Learned

1. Keyboard accessibility testing checks whether users can interact with important functionality without a mouse.
2. A logical focus order helps users understand where they are on a page.
3. Visible focus indicators help keyboard users identify the currently focused control.
4. Form validation should provide understandable feedback when required information is missing or invalid.
5. Users should be able to recover from errors without restarting the application.
6. Dynamic interface changes, such as cart badge updates and button label changes, should be checked after user actions.
7. Regression testing helps confirm that several interactions work together in a complete workflow.
8. Passing selected manual checks does not prove that an application meets every accessibility requirement.

## Limitations

- Testing was performed on SauceDemo using a browser and keyboard.
- No screen-reader testing was performed.
- No comprehensive WCAG audit was performed.
- No accessibility automation tool results were collected.
- No screenshots or recordings are claimed in this journal.

## Conclusion

Day 49 strengthened my understanding of manual accessibility testing, particularly keyboard navigation, focus order, visible focus, form validation, error recovery, and interactive state changes.

All 60 reported checks passed across the eight tasks. No defects were identified in the tested scenarios.

This exercise reinforced the importance of checking both individual controls and complete user workflows when evaluating accessibility and usability.

