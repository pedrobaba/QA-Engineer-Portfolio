# Day 46 Learning Journal — Mobile Testing Fundamentals

## Overview

**Topic:** Mobile Web Testing Fundamentals  
**Application Tested:** SauceDemo  
**Testing Tool:** Google Chrome DevTools — Device Emulation  
**Portrait Viewport:** 390 × 844 pixels  
**Landscape Viewport:** 844 × 390 pixels  
**Browser Zoom:** 125%  
**Testing Type:** Responsive, functional, navigation, and usability testing

## Learning Objectives

Today's goal was to understand how QA testers evaluate web applications in mobile-sized viewports and identify layout or functional defects that may affect mobile users.

I practiced:

- Inspecting responsive layouts in portrait and landscape orientations.
- Testing shopping cart functionality.
- Validating empty checkout form behavior.
- Testing checkout completion.
- Checking mobile navigation.
- Evaluating usability at increased browser zoom.
- Recording expected behavior and actual test outcomes.

## Practical Activities Completed

### Task 1: Mobile Layout Inspection

Tested the Products page at a viewport of 390 × 844 pixels.

Checks performed:
- Product names and prices were readable.
- Product images were visible.
- Add to Cart buttons were usable.
- Navigation and cart were accessible.
- No unexpected horizontal scrolling was observed.

**Result:** PASS

### Task 2: Shopping Cart Functionality

Tested adding the Sauce Labs Backpack to the cart and removing it.

Checks performed:
- Button changed from Add to Cart to Remove.
- Cart badge displayed the expected quantity.
- Backpack appeared in the cart.
- Product name and price were correct.
- Removing the item updated the cart.

**Result:** PASS

### Task 3: Empty Checkout Form Validation

Submitted the checkout information form with all fields empty.

Checks performed:
- Form fitted the mobile viewport.
- Submission was prevented.
- A validation message appeared.
- The message was readable.

**Result:** PASS

*Note: The exact validation message should be recorded separately if it was captured.*

### Task 4: Valid Checkout Information

Entered the following test data:

- First name: QA
- Last name: Tester
- Postal code: 100001

Checks performed:
- Customer information was accepted.
- Checkout Overview opened.
- Correct product and price were displayed.
- No text clipping or overlapping was observed.
- Visible controls were usable.

**Result:** PASS

### Task 5: Checkout Completion

Completed the checkout workflow.

Checks performed:
- Finish button worked.
- Confirmation page appeared.
- Confirmation message was readable.
- Confirmation content fitted the viewport.
- Back Home button was visible and usable.

**Result:** PASS

### Task 6: Landscape Orientation

Changed the simulated viewport to 844 × 390 pixels.

Checks performed:
- Product names and prices were readable.
- Images and buttons were visible.
- Navigation and cart were accessible.
- No overlapping or clipped content was observed.
- No unexpected horizontal scrolling was observed.

**Result:** PASS

### Task 7: Mobile Navigation

Tested the navigation menu at the portrait viewport.

Checks performed:
- Menu opened when tapped.
- Menu options were readable.
- All Items returned to the Products page.
- About opened its expected destination.
- Navigation remained usable afterward.

**Result:** PASS

### Task 8: Browser Zoom

Tested the Products page and cart at 125% browser zoom.

Checks performed:
- Product text remained readable.
- Buttons remained accessible.
- Navigation and cart remained usable.
- No unexpected clipping or overlapping was observed.
- Cart contents remained readable.

**Result:** PASS

## Results Summary

| Task | Testing Area | Result |
|---|---|---|
| 1 | Portrait layout | PASS |
| 2 | Cart functionality | PASS |
| 3 | Empty form validation | PASS |
| 4 | Valid checkout information | PASS |
| 5 | Checkout completion | PASS |
| 6 | Landscape layout | PASS |
| 7 | Navigation | PASS |
| 8 | Browser zoom | PASS |

**Total tasks:** 8  
**Tasks passed:** 8  
**Tasks failed:** 0  
**Defects observed:** 0

## Key Lessons Learned

1. Mobile testing includes functional behavior as well as visual layout.
2. A page can fit a mobile viewport but still contain functional defects.
3. Checkout validation must be tested with both invalid and valid input.
4. Portrait and landscape layouts may behave differently.
5. Navigation and shopping cart controls must remain usable at smaller viewport sizes.
6. Increased zoom can reveal readability and layout problems.
7. A test passes when the observed behavior meets the expected behavior.
8. A lack of observed defects does not prove that an application is defect-free.

## Limitations

- Testing used Chrome DevTools device emulation rather than a physical mobile device.
- Mobile Safari and other mobile browsers were not tested.
- Results apply only to the scenarios and viewport settings checked.
- Screenshots should be attached only if they were actually captured and saved during testing.

## Day 46 Conclusion

I completed eight mobile web testing tasks on SauceDemo using Chrome DevTools device emulation. All reported checks passed, and no defects were observed in the tested scenarios.

This exercise improved my understanding of responsive layout inspection, mobile cart and checkout testing, form validation, navigation, orientation changes, and zoom-related usability.

