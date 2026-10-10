# Day 48 Learning Journal — Responsive & Device Testing

## Overview

Day 48 focused on responsive web testing using SauceDemo and Chrome DevTools Device Mode.

The goal was to verify that important website layouts, navigation controls, shopping cart interactions, checkout forms, order summaries, and confirmation pages remained usable at different viewport sizes and orientations.

All testing was performed in a desktop browser using mobile viewport emulation. No physical iPhone or native mobile application was tested.

## Testing Environment

- **Application:** SauceDemo
- **Browser:** Google Chrome
- **Testing tool:** Chrome DevTools Device Mode
- **Viewports tested:** 320 × 640, 390 × 844, 768 × 1024, and 844 × 390 pixels
- **Testing approach:** Manual responsive web testing
- **Overall reported result:** All submitted checks passed

## Tasks Completed

### Task 1: Responsive Layout Testing

Tested SauceDemo at 320 × 640, 390 × 844, and 768 × 1024.

Verified product names, prices, images, buttons, navigation, cart accessibility, and the absence of unexpected horizontal scrolling or overlapping elements.

**Result:** PASS

### Task 2: Portrait and Landscape Testing

Compared portrait (390 × 844) and landscape (844 × 390) layouts.

Verified product readability, button usability, navigation access, scrolling, and the absence of unexpected overlap or horizontal scrolling.

**Result:** PASS

### Task 3: Responsive Checkout Form Testing

Tested the checkout information form at 320 × 640 and 768 × 1024.

Verified that the First Name, Last Name, and Postal Code fields were visible, accepted input, and remained readable. Confirmed that the Continue button was usable and that valid information opened the checkout overview.

**Result:** PASS

### Task 4: Checkout Overview and Order Summary

Checked the checkout overview at both viewport sizes.

Verified product names, prices, payment information, shipping information, item total, tax, total, Finish button visibility, and access to content through scrolling.

**Result:** PASS

### Task 5: Order Confirmation and Post-Checkout Usability

Completed checkout at both viewport sizes.

Verified that the confirmation page appeared, the confirmation message was readable, Back Home was usable, and the Products page remained accessible afterward.

**Result:** PASS

### Task 6: Responsive Navigation Menu

Tested the navigation menu at 320 × 640 and 768 × 1024.

Verified that the menu opened and closed, menu items remained accessible, All Items returned to the Products page, and the cart remained accessible.

**Result:** PASS

### Task 7: Responsive Cart Testing

Added two products to the cart and checked cart behavior at both viewport sizes.

Verified product names, prices, quantity information, Remove buttons, product removal, remaining cart contents, badge updates, and layout usability.

**Result:** PASS

### Task 8: End-to-End Regression Testing

Repeated the main shopping workflow at both viewport sizes:

1. Add a product to the cart.
2. Open the cart and verify the product.
3. Enter valid checkout information.
4. Review the order overview and totals.
5. Finish the order.
6. Verify the confirmation message.

**Result:** PASS

## Results Summary

| Testing Area | Result |
|---|---|
| Responsive layouts | PASS |
| Portrait and landscape orientation | PASS |
| Checkout form usability | PASS |
| Checkout overview readability | PASS |
| Order confirmation | PASS |
| Navigation menu | PASS |
| Cart interactions | PASS |
| End-to-end regression | PASS |

## Defects Observed

No defects were reported in the scenarios tested.

This conclusion applies only to the tested workflows and viewport configurations. It does not establish that the application is completely defect-free.

## Key Lessons Learned

1. Responsive testing involves both visual presentation and functional behavior.
2. A website should remain usable at narrow and wider viewport sizes.
3. Orientation changes can affect the amount of visible content and how users reach controls.
4. Checkout forms must remain readable and usable on smaller screens.
5. Cart badges and product lists should update correctly after cart operations.
6. Order summaries and confirmation messages must remain accessible.
7. End-to-end regression testing helps verify that connected workflows continue to work.
8. Chrome DevTools emulation is useful for responsive web testing but does not replace physical-device testing.

## Testing Limitations

- Testing was performed in desktop Chrome using Device Mode.
- No physical iPhone or other physical mobile device was tested.
- Native mobile application behavior was outside the scope of this exercise.
- No screenshots or recordings are claimed in this journal unless separately captured and saved.

## Day 48 Conclusion

I completed eight practical task groups focused on responsive web testing using SauceDemo. All submitted checks passed across the tested viewport sizes and orientations.

This practice strengthened my understanding of responsive layout verification, mobile web usability, cart behavior, checkout testing, and end-to-end regression testing.


