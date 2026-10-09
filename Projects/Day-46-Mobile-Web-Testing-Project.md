# Day 46 — Mobile Web Testing Project

## 1. Project Overview

**Project:** Mobile Web Testing — SauceDemo  
**QA Focus:** Mobile web usability, responsive layout, functional testing, checkout validation, and navigation  
**Website:** https://www.saucedemo.com/  
**Browser:** Google Chrome  
**Testing Method:** Chrome DevTools mobile device emulation  
**Portrait Viewport:** 390 × 844 pixels  
**Landscape Viewport:** 844 × 390 pixels  
**Browser Zoom:** 125%  
**Test Status:** Completed

### Objective

The objective of this project was to evaluate the usability and functionality of SauceDemo at simulated mobile viewport sizes. Testing focused on layout consistency, shopping cart behavior, checkout validation, navigation, orientation changes, and browser zoom.

## 2. Test Environment

| Item | Details |
|---|---|
| Application | SauceDemo |
| Browser | Google Chrome |
| Testing tool | Chrome DevTools |
| Testing mode | Mobile device emulation |
| Portrait viewport | 390 × 844 pixels |
| Landscape viewport | 844 × 390 pixels |
| Zoom level | 125% |
| Physical mobile device | Not used |
| Additional mobile browsers | Not tested |

**Environment limitation:** The tests were conducted using desktop Chrome's device emulation. Results do not confirm behavior on a physical mobile device or in mobile browsers such as Safari on iOS.

## 3. Test Scenarios and Results

| ID | Test Scenario | Expected Result | Reported Result | Status |
|---|---|---|---|---|
| MOB-01 | Inspect product names and prices in portrait mode | Text remains readable | Readable | PASS |
| MOB-02 | Inspect product images | Images remain visible | Visible | PASS |
| MOB-03 | Use Add to Cart buttons | Buttons respond correctly | Usable | PASS |
| MOB-04 | Inspect navigation and cart access | Both remain accessible | Accessible | PASS |
| MOB-05 | Check portrait layout overflow | No unexpected horizontal scrolling | None observed | PASS |
| MOB-06 | Add Sauce Labs Backpack to cart | Button changes to Remove | Observed | PASS |
| MOB-07 | Verify cart badge | Badge displays 1 | Observed | PASS |
| MOB-08 | Verify product in cart | Correct product appears | Observed | PASS |
| MOB-09 | Verify product name and price | Values are correct | Confirmed | PASS |
| MOB-10 | Remove product from cart | Item and badge update correctly | Observed | PASS |
| MOB-11 | Submit empty checkout form | Submission is blocked | Blocked | PASS |
| MOB-12 | Check checkout validation | Validation message appears and is readable | Confirmed | PASS |
| MOB-13 | Submit valid checkout information | Information is accepted | Accepted | PASS |
| MOB-14 | Verify Checkout Overview | Correct product and price appear | Confirmed | PASS |
| MOB-15 | Inspect checkout layout | No clipping or overlapping | None observed | PASS |
| MOB-16 | Complete checkout | Finish action works | Worked | PASS |
| MOB-17 | Verify order confirmation | Confirmation page and message appear | Confirmed | PASS |
| MOB-18 | Inspect confirmation layout | Content fits and is readable | Confirmed | PASS |
| MOB-19 | Verify Back Home button | Button is visible and usable | Usable | PASS |
| MOB-20 | Inspect landscape layout | Products and controls remain usable | Confirmed | PASS |
| MOB-21 | Inspect landscape overflow | No unexpected horizontal scrolling | None observed | PASS |
| MOB-22 | Open mobile navigation menu | Menu opens and options are readable | Confirmed | PASS |
| MOB-23 | Select All Items | Products page appears | Confirmed | PASS |
| MOB-24 | Select About | Expected destination opens | Confirmed | PASS |
| MOB-25 | Inspect layout at 125% zoom | Text and controls remain usable | Confirmed | PASS |
| MOB-26 | Inspect cart at 125% zoom | Cart contents remain readable | Confirmed | PASS |

**Result:** 26 recorded checks passed based on the observations reported during the exercise.

## 4. Detailed Test Coverage

### A. Responsive Layout

The Products page was inspected at portrait and landscape viewport sizes.

Checks included:

- Product name and price readability
- Product image visibility
- Button accessibility
- Navigation and cart visibility
- Unexpected horizontal scrolling
- Clipped or overlapping content

No layout defects were reported during these checks.

### B. Shopping Cart Functionality

The Sauce Labs Backpack was added to the cart and removed.

The reported results confirmed that:

- The product button changed from Add to Cart to Remove.
- The cart badge displayed the expected quantity.
- The correct product appeared in the cart.
- The product name and price were correct.
- Removing the item updated the cart.

### C. Checkout Validation

An empty checkout form was submitted to verify negative-input handling.

The reported results confirmed that:

- The form did not proceed with empty fields.
- A validation message appeared.
- The message was readable.

Valid checkout information was subsequently accepted, and the Checkout Overview displayed the expected product and price.

### D. Order Completion

The Finish button was tested, followed by inspection of the confirmation page.

The reported results confirmed that:

- Checkout completed successfully.
- The confirmation page appeared.
- The confirmation message was readable.
- The content fitted the viewport.
- The Back Home button was accessible.

### E. Navigation and Zoom

The navigation menu, All Items link, About destination, and 125% browser zoom were checked.

No navigation or zoom-related usability defects were reported.

## 5. Defect Summary

| Metric | Result |
|---|---:|
| Checks recorded | 26 |
| Passed | 26 |
| Failed | 0 |
| Defects observed | 0 |

No defects were observed in the tested scenarios.

This does not establish that SauceDemo is entirely defect-free. The result is limited to the reported checks, the tested viewport sizes, and the Chrome emulation environment.

## 6. Evidence

Screenshots and recordings should be added here only if they were actually captured and saved.

Suggested evidence filenames, if you capture the corresponding screenshots:

- `MOB-01-Products-Portrait.png`
- `MOB-06-Add-To-Cart.png`
- `MOB-11-Empty-Checkout-Validation.png`
- `MOB-14-Checkout-Overview.png`
- `MOB-17-Order-Confirmation.png`
- `MOB-20-Landscape-Layout.png`
- `MOB-25-Browser-Zoom-125.png`

**Evidence status:** The results above are based on the observations reported during the exercise. Screenshot files have not been verified as saved.

## 7. Limitations

- Testing was performed with Chrome DevTools mobile emulation rather than a physical mobile device.
- Safari on iOS and Chrome on a physical Android device were not tested.
- Network conditions, interruptions, and device-specific performance were not evaluated.
- Results apply to the tested scenarios rather than every possible application workflow.

## 8. Conclusion

The Day 46 mobile web testing exercise covered responsive layout, shopping cart functionality, checkout validation, order completion, navigation, orientation changes, and browser zoom.

All 26 recorded checks passed based on the reported observations. No defects were observed within the tested scope.

Further testing on physical devices and additional mobile browsers would be required to broaden compatibility coverage.

## 9. Skills Practiced

- Mobile web testing fundamentals
- Responsive layout inspection
- Chrome DevTools device emulation
- Shopping cart functional testing
- Negative testing of checkout forms
- Checkout workflow validation
- Mobile navigation testing
- Orientation and zoom testing
- Evidence-based test reporting
- Documenting test scope and limitations
