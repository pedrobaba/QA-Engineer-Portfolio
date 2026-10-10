# Day 47 — Mobile App Testing Practice

## 1. Overview

Day 47 focused on mobile interaction testing using SauceDemo in Google Chrome's mobile device emulation.

The goal was to evaluate whether important website workflows remained functional and usable in a mobile-sized viewport.

**Important:** This was mobile web testing performed on a computer using Chrome DevTools. It was not native iPhone application testing.

## 2. Test Environment

| Item | Details |
|---|---|
| Application | SauceDemo |
| Website | https://www.saucedemo.com/ |
| Browser | Google Chrome |
| Testing method | Chrome DevTools device emulation |
| Viewport | 390 × 844 pixels |
| Device context | Simulated mobile viewport |
| Actual mobile device testing | Not performed |
| Native iOS app testing | Not performed |

## 3. Learning Objectives

By completing this practice, I worked on:

- Testing navigation menu interactions in a mobile-sized viewport.
- Validating product and shopping cart functionality.
- Checking cart badge updates and product removal.
- Testing empty checkout form validation.
- Checking form input and navigation between fields.
- Validating checkout overview and order completion.
- Verifying application state after completing an order.
- Recording expected and actual results accurately.
- Understanding the limitations of browser-based mobile emulation.

## 4. Mobile Testing Concepts

### Mobile Web Testing

Mobile web testing evaluates a website through a mobile browser or a simulated mobile viewport.

Examples include checking responsive layouts, navigation, forms, shopping carts, and checkout workflows.

### Native Mobile App Testing

Native mobile app testing evaluates an application installed on a mobile operating system, such as iOS or Android.

It may include app installation, operating-system permissions, device interruptions, native keyboard behavior, and application lifecycle testing.

### Mobile Device Emulation

Chrome DevTools can simulate selected mobile viewport dimensions and emulate certain device characteristics.

However, emulation does not fully reproduce physical-device behavior, including the real iPhone keyboard, all operating-system interactions, or actual mobile network and performance conditions.

## 5. Practical Test Scenarios

### Task 1 — Mobile Navigation

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Configure mobile viewport | Viewport set to 390 × 844 | Viewport configured | PASS |
| Log in | Products page opens | Login succeeded | PASS |
| Open menu | Menu opens | Menu opened | PASS |
| Close menu | Menu closes | Menu closed | PASS |
| Check page after closing | Page remains usable | Page remained usable | PASS |

### Task 2 — Product Interaction

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Add Backpack to cart | Product added | Passed | PASS |
| Check product button | Button changes to Remove | Passed | PASS |
| Check cart badge | Badge displays 1 | Passed | PASS |
| Scroll and return | Product state remains consistent | Passed | PASS |
| Open cart | Backpack appears | Passed | PASS |

### Task 3 — Empty Checkout Form Validation

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Continue with empty fields | Progress blocked | Passed | PASS |
| Check validation feedback | Error message appears | Passed | PASS |
| Check message readability | Message readable | Passed | PASS |
| Check form after error | Form remains usable | Passed | PASS |
| Check current page | Remains on information page | Passed | PASS |

### Task 4 — Valid Checkout Information

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Enter customer information | Input accepted | Passed | PASS |
| Continue to overview | Overview opens | Passed | PASS |
| Verify product and price | Correct details displayed | Passed | PASS |
| Inspect layout | No clipping or overlapping | Passed | PASS |
| Check visible controls | Controls usable | Passed | PASS |

### Task 5 — Order Completion

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Tap Finish | Order completes | Passed | PASS |
| Check confirmation page | Page appears | Passed | PASS |
| Check confirmation message | Message readable | Passed | PASS |
| Inspect confirmation layout | Content fits viewport | Passed | PASS |
| Check Back Home | Button visible and usable | Passed | PASS |

### Task 6 — Return Home and Application State

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Tap Back Home | Products page opens | Passed | PASS |
| Check cart after order | Cart cleared | Passed | PASS |
| Add Backpack again | Product added | Passed | PASS |
| Check badge | Badge displays 1 | Passed | PASS |
| Open cart | Backpack appears | Passed | PASS |

## 6. Test Results Summary

All recorded checks passed during the practical session.

| Metric | Result |
|---|---|
| Practical tasks completed | 8 |
| Reported checks passed | All reported checks |
| Reported failed checks | 0 |
| Compatibility defects observed | None in the tested scenarios |

The results are based on the observations reported during the session. They do not establish that all application features are defect-free.

## 7. Defects Identified

No defects were observed in the tested scenarios.

No bug report was created because no failure was reported during the practical.

## 8. Limitations

- Testing was performed using desktop Chrome's mobile device emulation.
- No native iPhone application was tested.
- The physical iPhone keyboard was not tested.
- Native iOS permissions and operating-system interactions were not tested.
- Results apply only to the workflows exercised in the simulated viewport.
- Screenshots or recordings should be added only if they were actually captured.

## 9. Key Takeaways

1. Mobile web testing and native mobile app testing are different activities.
2. Mobile-sized layouts should be tested alongside functionality.
3. Cart badges and product state should remain consistent during interactions.
4. Empty form submissions should produce appropriate validation feedback.
5. Checkout testing should cover the full workflow through confirmation.
6. Application state should be checked after completing an order.
7. Passing selected test cases does not prove that an application is defect-free.
8. Test documentation must accurately identify the environment and its limitations.

## 10. Learning Outcome

I practiced evaluating navigation, product interactions, cart behavior, checkout validation, form input, order completion, and application state in a mobile-sized viewport.

I also learned to distinguish browser-based mobile emulation from native mobile application testing and to report conclusions based only on the scenarios tested.

---

