# Day 49 — Keyboard Accessibility Assessment

## 1. Project Overview

**Application:** SauceDemo  
**Testing Type:** Manual Accessibility Testing  
**Focus Area:** Keyboard Accessibility, Focus Order, Form Validation, Error Recovery, and Keyboard Navigation  
**Test Environment:** Google Chrome on desktop  
**Testing Method:** Manual keyboard-only interaction and visual observation  
**Status:** Completed

## 2. Objective

The objective of this assessment was to evaluate whether selected SauceDemo workflows could be completed using only a keyboard, without relying on a mouse.

The assessment focused on keyboard navigation, visible focus indicators, form validation feedback, error recovery, product selection, and checkout usability.

## 3. Scope of Testing

The following areas were assessed:

- Keyboard access to login form controls
- Keyboard navigation through the Products page
- Logical keyboard focus order
- Visible focus indicators
- Form labels and validation feedback
- Recovery from login errors
- Keyboard-based product selection and removal
- Cart and checkout navigation
- Keyboard-only checkout regression

## 4. Test Scenarios and Results

| No. | Test Scenario | Checks Passed | Checks Failed | Result |
|---|---|---:|---:|---|
| 1 | Basic keyboard accessibility | 7 | 0 | PASS |
| 2 | Keyboard navigation through cart and checkout | 9 | 0 | PASS |
| 3 | Keyboard focus order | 5 | 0 | PASS |
| 4 | Form labels and validation feedback | 7 | 0 | PASS |
| 5 | Accessible error recovery | 7 | 0 | PASS |
| 6 | Visible keyboard focus | 7 | 0 | PASS |
| 7 | Accessible product selection | 9 | 0 | PASS |
| 8 | Final keyboard accessibility regression | 9 | 0 | PASS |
| **Total** | **8 test scenarios** | **60** | **0** | **PASS** |

**Reported result:** 60 of 60 checks passed.

## 5. Detailed Findings

### 5.1 Keyboard Navigation

The reported checks confirmed that the tested login, Products, cart, and checkout interactions were accessible through keyboard navigation.

The following actions were completed using the keyboard:

- Moving between form fields using `Tab`
- Moving backward using `Shift + Tab`
- Activating controls using `Enter` or `Space`
- Navigating to the cart
- Opening checkout
- Entering checkout information
- Proceeding to the checkout overview

### 5.2 Focus Order and Visibility

The reported checks indicated that keyboard focus followed a logical order on the login and Products pages.

Visible focus indicators were observed on the tested interactive elements, including product buttons and the cart link. Focus remained identifiable during the tested navigation.

No keyboard trap or unexpected focus jump was reported.

### 5.3 Form Validation and Error Recovery

The login form fields were reported as clearly identifiable.

The tested invalid-input scenarios produced visible and understandable error feedback, including empty-field submission, a missing password, and invalid credentials.

After an error, keyboard navigation allowed the tester to correct the input and submit valid credentials successfully. The previous error message disappeared after successful login.

### 5.4 Product Selection

The reported checks confirmed that the tester could add and remove products using the keyboard.

The Add to Cart button changed to Remove after a product was added. The cart badge updated when products were added or removed, and the first product's button returned to Add to Cart after removal.

### 5.5 End-to-End Regression

The final regression check confirmed that the tested workflow could proceed from login through product selection, cart navigation, and checkout to the checkout overview using only the keyboard.

The test stopped at the checkout overview. The Finish action was not part of this final regression check.

## 6. Defects Identified

**No defects were reported during the tested scenarios.**

This finding is limited to the interactions and checks performed. It does not establish that the application is free of accessibility defects.

## 7. Limitations

The assessment was a manual keyboard-accessibility check rather than a comprehensive accessibility audit.

The following areas were not established by these results:

- Screen-reader announcements and assistive-technology behavior
- Full WCAG conformance
- Automated accessibility scan results
- Accessibility across every page and interactive element
- Physical-device or cross-browser accessibility behavior

The testing method was desktop keyboard interaction with visual observation.

## 8. Conclusion

The reported results indicate that the selected SauceDemo workflows supported keyboard-only interaction during this assessment. Navigation, product selection, visible focus, login validation feedback, error recovery, and progression to the checkout overview all passed the checks performed.

No defects were reported. Further testing with a screen reader and additional accessibility criteria would be needed to assess accessibility more comprehensively.

## 9. Skills Practiced

- Manual accessibility testing
- Keyboard-only testing
- Focus order verification
- Visible focus inspection
- Form validation testing
- Error recovery testing
- Regression testing
- Test result documentation
- Defining test scope and limitations

## 10. Evidence

Evidence status: **Not confirmed.**

No screenshots or recordings were confirmed for this assessment. Add evidence links here only if screenshots or recordings were actually captured and saved.

## 11. Learning Outcome

This assessment reinforced the importance of checking whether users can navigate, operate controls, understand validation feedback, and recover from errors using a keyboard.

It also reinforced the distinction between passing selected accessibility checks and establishing full accessibility compliance.
