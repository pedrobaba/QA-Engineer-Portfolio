# Day 48 — Responsive & Device Testing

## Overview

Day 48 focused on responsive web testing using SauceDemo and Chrome DevTools Device Mode.

The objective was to verify that essential website layouts, navigation controls, shopping cart interactions, checkout forms, order summaries, and order confirmation workflows remained usable across different viewport sizes and orientations.

Testing was performed in desktop Google Chrome using browser-based device emulation. No physical mobile device or native mobile application was tested.

---

## Learning Objectives

By the end of Day 48, I practiced how to:

- Test responsive layouts at different viewport sizes.
- Check portrait and landscape orientations.
- Verify the readability of product information and checkout content.
- Test navigation menu behavior at different screen sizes.
- Validate shopping cart interactions and badge updates.
- Check checkout form usability and validation presentation.
- Inspect checkout summaries and order confirmation pages.
- Perform responsive end-to-end regression testing.
- Record expected and actual behavior based on observed results.

---

## Testing Environment

| Item | Details |
|---|---|
| Application | SauceDemo |
| Browser | Google Chrome |
| Testing tool | Chrome DevTools Device Mode |
| Testing type | Responsive web testing |
| Small mobile viewport | 320 × 640 pixels |
| Mobile viewport | 390 × 844 pixels |
| Tablet-sized viewport | 768 × 1024 pixels |
| Landscape viewport | 844 × 390 pixels |
| Physical device testing | Not performed |

---

## Task 1: Responsive Layout Testing

### Objective

Verify that important page elements remained readable and usable at different viewport sizes.

### Viewports Tested

- 320 × 640 pixels
- 390 × 844 pixels
- 768 × 1024 pixels

### Checks Performed

- Product names and prices remained readable.
- Product images and buttons were usable.
- Navigation and cart controls remained accessible.
- No unexpected horizontal scrolling or overlapping elements were reported.

### Result

**PASS — All reported checks passed.**

No responsive layout defects were reported in the tested scenarios.

---

## Task 2: Portrait vs Landscape Testing

### Objective

Verify that the Products page remained usable when the viewport changed orientation.

### Viewports Tested

- Portrait: 390 × 844 pixels
- Landscape: 844 × 390 pixels

### Checks Performed

- Product names and prices remained readable.
- Product buttons remained usable.
- Navigation and cart controls remained accessible.
- No unexpected overlap or horizontal scrolling was reported.
- Lower products and their buttons remained reachable in landscape orientation.

### Result

**PASS — All 9 reported checks passed.**

No orientation-related usability defects were reported.

---

## Task 3: Responsive Checkout Form Testing

### Objective

Verify that the checkout information form remained usable on narrow and wider viewports.

### Viewports Tested

- 320 × 640 pixels
- 768 × 1024 pixels

### Checks Performed

- First Name, Last Name, and Postal Code fields were visible.
- Input fields accepted text.
- Labels and validation text were readable.
- The Continue button was visible and usable.
- No clipped or overlapping form controls were reported.
- Controls were reachable by scrolling.
- Valid checkout information allowed navigation to the checkout overview.

### Result

**PASS — All 12 reported checks passed.**

No checkout form usability defects were reported at either viewport size.

---

## Task 4: Responsive Checkout Overview Testing

### Objective

Verify that the checkout overview displayed important order information correctly.

### Viewports Tested

- 320 × 640 pixels
- 768 × 1024 pixels

### Checks Performed

- Product name and price were readable.
- Payment information was readable.
- Shipping information was readable.
- Item total, tax, and total were visible.
- The Finish button was visible and usable.
- No clipping or overlapping content was reported.
- All relevant content was reachable by scrolling.

### Result

**PASS — All 16 reported checks passed.**

The order summary remained accessible at both viewport sizes.

Note: This task verified the visibility and presentation of the totals. It did not independently establish that the arithmetic was correct.

---

## Task 5: Order Confirmation and Post-Checkout Usability

### Objective

Verify that the order confirmation page and post-checkout navigation remained usable.

### Viewports Tested

- 320 × 640 pixels
- 768 × 1024 pixels

### Checks Performed

- The confirmation page appeared after selecting Finish.
- The confirmation heading and message were readable.
- The Back Home button was visible and usable.
- No clipping or overlapping content was reported.
- Back Home returned to the Products page.
- Navigation and cart controls remained accessible after returning.

### Result

**PASS — All 12 reported checks passed.**

No order confirmation or post-checkout navigation defects were reported.

---

## Task 6: Responsive Navigation Menu Testing

### Objective

Verify that navigation menu interactions remained usable across different viewport sizes.

### Viewports Tested

- 320 × 640 pixels
- 768 × 1024 pixels

### Checks Performed

- The navigation menu opened successfully.
- Menu items were readable and accessible.
- All Items returned to the Products page.
- The menu closed correctly.
- The page remained usable after closing the menu.
- The cart remained accessible.

### Result

**PASS — All 12 reported checks passed.**

No responsive navigation defects were reported.

---

## Task 7: Responsive Shopping Cart Testing

### Objective

Verify that the cart displayed products correctly and that its controls continued to work at different viewport sizes.

### Viewports Tested

- 320 × 640 pixels
- 768 × 1024 pixels

### Checks Performed

- Both selected products were displayed correctly.
- Product names and prices were readable.
- Quantity information and Remove buttons were visible.
- Removing a product worked.
- The remaining product was displayed correctly.
- The cart badge updated correctly.
- No clipping, overlap, or unexpected horizontal scrolling was reported.

### Result

**PASS — All 14 reported checks passed.**

No responsive cart defects were reported in the tested scenarios.

---

## Task 8: Responsive End-to-End Regression Testing

### Objective

Verify that the main shopping workflow completed successfully at both viewport sizes.

### Viewports Tested

- 320 × 640 pixels
- 768 × 1024 pixels

### Workflow Tested

1. Add a product to the cart.
2. Verify the correct product in the cart.
3. Enter valid checkout information.
4. Continue to the checkout overview.
5. Verify that the product and totals were displayed.
6. Finish the order.
7. Verify the order confirmation message.
8. Check for major layout or usability issues.

### Result

**PASS — All 14 reported checks passed.**

The end-to-end shopping workflow completed successfully at both tested viewport sizes. No major layout or usability issues were reported.

---

## Overall Results

| Task | Testing Area | Result |
|---|---|---|
| 1 | Responsive layout testing | PASS |
| 2 | Portrait vs landscape testing | PASS |
| 3 | Responsive checkout form | PASS |
| 4 | Checkout overview and order summary | PASS |
| 5 | Order confirmation and navigation | PASS |
| 6 | Responsive navigation menu | PASS |
| 7 | Responsive shopping cart | PASS |
| 8 | End-to-end regression testing | PASS |

### Overall Conclusion

All reported checks passed across the eight practical task groups.

No defects were reported in the tested workflows. This conclusion applies only to the scenarios and viewport sizes covered during this exercise; it does not establish that the application is entirely defect-free.

---

## Testing Limitations

- Testing was performed in desktop Chrome using DevTools Device Mode.
- No physical iPhone or other mobile device was tested.
- No native mobile application was tested.
- Actual mobile keyboard behavior, operating-system interactions, and real-device performance were outside the scope of this exercise.
- Screenshots and recordings should be included only if they were actually captured and saved.

---

## Key Takeaways

1. Responsive testing evaluates both layout and functionality.
2. A page can fit a viewport while still having unusable controls.
3. Portrait and landscape testing can reveal issues that are not apparent in a single orientation.
4. Checkout forms, order summaries, and confirmation pages require responsive checks just like product pages.
5. Cart badge updates and product removal should be verified as functional behavior.
6. Regression testing checks that the complete user journey still works.
7. Test conclusions must be limited to the scenarios actually executed.
8. Browser emulation is useful for responsive web testing but does not replace physical-device testing.

## Day 48 Status

