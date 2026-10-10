# Day 48 — Responsive Testing Report

## 1. Project Overview

**Project:** SauceDemo Responsive Web Testing  
**Day:** 48 of the 90-Day QA Engineering Roadmap  
**Testing Type:** Responsive Web Testing, Orientation Testing, Functional Testing, and Regression Testing  
**Application:** https://www.saucedemo.com/  
**Browser:** Google Chrome  
**Testing Tool:** Chrome DevTools Device Mode  
**Execution Status:** Completed

### Objective

To verify that SauceDemo remains readable, accessible, and functionally usable across different viewport sizes and orientations, with particular attention to navigation, product selection, cart management, checkout, and order confirmation.

---

## 2. Test Environment

| Item | Details |
|---|---|
| Application | SauceDemo |
| Browser | Google Chrome |
| Testing tool | Chrome DevTools Device Mode |
| Small mobile viewport | 320 × 640 px |
| Mobile viewport | 390 × 844 px |
| Tablet-sized viewport | 768 × 1024 px |
| Landscape viewport | 844 × 390 px |
| Testing method | Desktop-browser device emulation |

**Environment limitation:** These tests were performed using Chrome DevTools viewport emulation. They were not performed on a physical mobile device or within a native mobile application.

---

## 3. Testing Scope

The following areas were covered:

- Responsive product listing and layout
- Portrait and landscape orientation
- Checkout form usability
- Checkout overview and order-summary presentation
- Order confirmation and post-checkout navigation
- Responsive navigation menu
- Shopping cart functionality
- End-to-end regression testing

---

## 4. Test Execution Summary

| Task | Testing Area | Result |
|---|---|---|
| 1 | Responsive layouts across viewport sizes | PASS |
| 2 | Portrait and landscape orientation | PASS |
| 3 | Responsive checkout form | PASS |
| 4 | Checkout overview and order summary | PASS |
| 5 | Order confirmation and post-checkout usability | PASS |
| 6 | Responsive navigation menu | PASS |
| 7 | Responsive cart functionality | PASS |
| 8 | End-to-end regression testing | PASS |

**Overall outcome:** All eight task groups were completed, and all submitted checks were reported as passing.

---

## 5. Detailed Test Results

### 5.1 Responsive Layout Testing

**Viewports:** 320 × 640, 390 × 844, and 768 × 1024 px

Verified that:

- Product names and prices were readable.
- Product images and buttons were usable.
- Navigation and cart controls were accessible.
- No unexpected horizontal scrolling or overlap was observed in the reported checks.

**Result:** PASS

### 5.2 Orientation Testing

**Viewports:** 390 × 844 px portrait and 844 × 390 px landscape

Verified that:

- Product information remained readable.
- Product buttons remained usable.
- Navigation and cart controls remained accessible.
- Lower products and their buttons remained reachable in landscape.
- No unexpected overlap or horizontal scrolling was reported.

**Result:** PASS

### 5.3 Responsive Checkout Form

**Viewports:** 320 × 640 and 768 × 1024 px

Verified that:

- First Name, Last Name, and Postal Code fields were visible.
- Fields accepted input.
- Labels and validation text were readable.
- The Continue button was visible and usable.
- Form controls were not reported as clipped or overlapping.
- Checkout proceeded to the overview after valid information was entered.

**Result:** PASS

### 5.4 Checkout Overview and Order Summary

**Viewports:** 320 × 640 and 768 × 1024 px

Verified that:

- Product name and price were readable.
- Payment and shipping information were readable.
- Item total, tax, and total were visible.
- The Finish button was visible and usable.
- Relevant content remained accessible by scrolling.
- No clipping or overlapping content was reported.

**Result:** PASS

**Scope note:** This exercise verified the presentation and accessibility of the displayed totals. It did not independently validate the arithmetic of every total.

### 5.5 Order Confirmation and Post-Checkout Usability

**Viewports:** 320 × 640 and 768 × 1024 px

Verified that:

- The confirmation page appeared after selecting Finish.
- The confirmation heading and message were readable.
- Back Home was visible and usable.
- Back Home returned to the Products page.
- Navigation and cart controls remained accessible afterward.
- No clipping or overlapping content was reported.

**Result:** PASS

### 5.6 Responsive Navigation Menu

**Viewports:** 320 × 640 and 768 × 1024 px

Verified that:

- The navigation menu opened and closed correctly.
- Menu items were readable and accessible.
- All Items returned to the Products page.
- The page remained usable after closing the menu.
- The cart remained accessible.

**Result:** PASS

### 5.7 Responsive Cart Testing

**Viewports:** 320 × 640 and 768 × 1024 px

Verified that:

- Two products were displayed correctly.
- Product names and prices were readable.
- Quantity information and Remove buttons were visible.
- Removing a product worked.
- The remaining product stayed displayed correctly.
- The cart badge updated correctly.
- No clipping, overlap, or unexpected horizontal scrolling was reported.

**Result:** PASS

### 5.8 End-to-End Regression Testing

**Viewports:** 320 × 640 and 768 × 1024 px

Verified the main shopping workflow:

1. Add a product to the cart.
2. Confirm the correct product appears in the cart.
3. Enter valid checkout information.
4. Continue to the order overview.
5. Confirm product and total information are displayed.
6. Finish the order.
7. Confirm that the confirmation message appears.

The workflow completed successfully at both viewport sizes, with no major layout or usability issues reported.

**Result:** PASS

---

## 6. Defect Summary

| Defect Category | Outcome |
|---|---|
| Responsive layout defects | None reported |
| Orientation-related defects | None reported |
| Checkout form usability defects | None reported |
| Order-summary presentation defects | None reported |
| Navigation defects | None reported |
| Cart interaction defects | None reported |
| End-to-end workflow defects | None reported |

**Important:** “None reported” means no defects were identified in the scenarios documented above. It does not establish that the entire application is defect-free.

---

## 7. Limitations

- Testing used desktop Chrome with simulated mobile and tablet viewport sizes.
- Physical-device behavior was not verified.
- Native mobile application testing was not performed.
- Mobile operating-system keyboards and real-device performance were not evaluated.
- Detailed screenshots or recordings are not claimed because their capture and storage have not been confirmed.
- Checkout total visibility was checked, but independent arithmetic verification was outside this exercise's reported scope.

---

## 8. Key Learnings

This exercise reinforced the importance of checking both layout and functionality when testing responsive web applications.

A page can appear visually correct while its buttons, navigation, cart state, or checkout workflow fail. Responsive QA should therefore include multiple viewport sizes, orientation changes, interaction checks, and end-to-end regression tests.

---

## 9. Final Conclusion

Day 48 focused on responsive web testing using SauceDemo and Chrome DevTools Device Mode. Eight practical task groups were completed across mobile-sized, tablet-sized, portrait, and landscape viewports.

All submitted checks passed, and no defects were reported in the tested scenarios.

The results provide practice evidence of responsive layout assessment, navigation testing, cart interaction testing, checkout usability testing, and end-to-end regression testing. The findings remain limited to the tested browser-emulated environments and workflows.
