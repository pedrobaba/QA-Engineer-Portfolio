# Day 47 — Mobile Interaction Testing Practice

## Learning Objectives

Today, I practiced testing mobile web interactions using Chrome DevTools device emulation. The focus was on validating navigation, product interactions, cart behavior, checkout form validation, and application state in a mobile-sized viewport.

## Testing Environment

- **Application:** SauceDemo
- **Browser:** Google Chrome
- **Testing tool:** Chrome DevTools — Device Mode
- **Viewport:** 390 × 844 pixels
- **Testing method:** Mobile web testing through desktop browser emulation
- **Test account:** `standard_user`
- **Testing duration:** More than one hour

**Important limitation:** Although I used an iPhone-sized viewport, the tests were performed on a computer. I did not test directly on a physical iPhone or a native mobile application.

## Practical Activities Completed

### 1. Mobile Viewport and Navigation

- Configured the mobile viewport.
- Logged in successfully.
- Opened and closed the navigation menu.
- Confirmed the page remained usable after navigation interactions.

**Result:** PASS

### 2. Product Interaction

- Added a product to the cart.
- Verified that the button changed from **Add to Cart** to **Remove**.
- Confirmed that the cart badge displayed the correct item count.
- Scrolled the page and verified the product's cart state remained consistent.
- Confirmed the Backpack appeared in the cart.

**Result:** PASS

### 3. Cart Removal and Badge Updates

- Added the Backpack and Bike Light to the cart.
- Removed the Bike Light.
- Verified that the Backpack remained in the cart.
- Confirmed the badge changed from 2 to 1.
- Removed the Backpack and verified the cart became empty.

**Result:** PASS

### 4. Empty Checkout Form Validation

- Attempted to continue checkout without completing the required fields.
- Verified that checkout was blocked.
- Confirmed that a validation error appeared and was readable.
- Verified that the form remained usable after the error.
- Confirmed that the application stayed on the checkout information page.

**Result:** PASS

### 5. Checkout Form Input

- Entered a first name.
- Entered a last name.
- Entered a postal code.
- Verified that the fields accepted and displayed the entered values.
- Confirmed that the Continue button opened the checkout overview.

**Result:** PASS

### 6. Checkout and Order Completion

- Verified the correct product appeared in the order overview.
- Checked the displayed item price.
- Confirmed that the totals were readable and consistent.
- Selected Finish and verified that the order confirmation page appeared.

**Result:** PASS

### 7. Return Home and Application State

- Selected Back Home.
- Confirmed that the application returned to the Products page.
- Verified that the cart was cleared after the completed order.
- Added the Backpack again.
- Confirmed that the cart badge displayed 1 and the Backpack appeared in the cart.

**Result:** PASS

## Test Results Summary

| Testing Area | Result |
|---|---|
| Mobile viewport and navigation | PASS |
| Menu interaction | PASS |
| Product interaction and state | PASS |
| Cart removal and badge updates | PASS |
| Empty checkout validation | PASS |
| Form input and field navigation | PASS |
| Checkout overview and order completion | PASS |
| Return Home and cart state | PASS |

## Defects Identified

No defects were observed during the scenarios tested.

This result applies only to the tested workflows and the Chrome mobile-emulation environment. It does not establish that the application is entirely defect-free.

## Key Lessons Learned

1. Mobile web testing involves more than checking whether a page fits a smaller screen.
2. Navigation controls must remain usable in a mobile-sized viewport.
3. Cart badges, button labels, and product contents should remain consistent as users interact with the application.
4. Required checkout fields should prevent incomplete submissions and provide readable validation feedback.
5. Successful checkout should lead to the appropriate confirmation page.
6. Application state should remain consistent when navigating between pages.
7. Browser-based mobile emulation is useful for initial testing, but it does not replace testing on a real mobile device.

## Testing Limitations

- Testing was performed in desktop Chrome using mobile device emulation.
- No physical iPhone testing was performed.
- Native mobile application behavior was not tested.
- Real-device keyboard behavior, operating-system interactions, and actual mobile-device performance were not verified.
- No defect was confirmed during the tested scenarios.

## Day 47 Conclusion

Day 47 strengthened my practical understanding of mobile web interaction testing. I practiced validating navigation, product selection, cart state, form validation, checkout completion, and post-checkout behavior using a mobile-sized viewport.

This exercise reinforced the importance of verifying both individual controls and the consistency of the overall user journey.

**Status:** Day 47 practical activities completed.
