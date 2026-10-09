# Day 46 — Mobile Testing Fundamentals

## 1. Overview

Day 46 focused on mobile web testing fundamentals using SauceDemo and Chrome DevTools device emulation.

The goal was to evaluate how a web application behaves within mobile-sized viewports, including layout responsiveness, touch interactions, shopping cart functionality, checkout validation, navigation, orientation changes, and browser zoom.

**Website tested:** https://www.saucedemo.com/

**Testing environment:**
- Browser: Google Chrome
- Testing method: Chrome DevTools device emulation
- Portrait viewport: 390 × 844 pixels
- Landscape viewport: 844 × 390 pixels
- Zoom level checked: 125%

**Important limitation:** These tests used desktop Chrome's device emulation. They were not performed on a physical mobile device or across multiple mobile browsers.

---

## 2. Learning Objectives

By completing this lesson, I practiced how to:

- Explain the difference between mobile web testing and native mobile app testing.
- Inspect responsive layouts at mobile viewport sizes.
- Check text readability and image visibility.
- Validate buttons and navigation controls.
- Test shopping cart functionality.
- Validate empty and completed checkout forms.
- Check layout behavior in portrait and landscape orientations.
- Inspect usability at increased browser zoom.
- Record expected and actual behavior without inventing defects.

---

## 3. Mobile Web Testing vs. Native Mobile App Testing

### Mobile Web Testing

Mobile web testing evaluates websites accessed through mobile browsers such as Chrome on Android or Safari on iOS.

Examples:
- Checking responsive layouts.
- Testing website navigation.
- Validating shopping cart functionality.
- Checking checkout forms on smaller screens.

### Native Mobile App Testing

Native mobile app testing evaluates applications installed on mobile devices.

Examples:
- Testing application installation and launch.
- Checking device permissions.
- Testing notifications and interruptions.
- Evaluating behavior during network changes.

This practical focused on mobile web testing rather than native application testing.

---

## 4. Common Mobile Testing Areas

### Responsive Layout

Verify that content fits the available viewport and remains readable.

Potential defects include:
- Horizontal overflow.
- Overlapping elements.
- Clipped text.
- Images extending beyond their containers.
- Controls that become inaccessible.

### Touch Interactions

Verify that important controls respond to taps.

Examples:
- Add to Cart buttons.
- Navigation menu.
- Shopping cart icon.
- Checkout buttons.

### Form Validation

Verify that forms reject missing required information and display understandable validation messages.

### Orientation

Check whether the application remains usable in portrait and landscape layouts.

### Browser Zoom

Check whether increasing zoom makes important content or controls inaccessible.

### Functional Consistency

Verify that core functionality continues to work at the tested viewport size.

---

## 5. Practical Test Scenarios

The following scenarios were tested in Chrome's emulated mobile viewport.

| ID | Test Scenario | Result |
|---|---|---|
| MOB-001 | Inspect Products page in portrait orientation | PASS |
| MOB-002 | Add and remove a product from the cart | PASS |
| MOB-003 | Submit checkout information with required fields empty | PASS |
| MOB-004 | Submit valid checkout information | PASS |
| MOB-005 | Complete the checkout workflow | PASS |
| MOB-006 | Inspect layout in landscape orientation | PASS |
| MOB-007 | Test mobile navigation | PASS |
| MOB-008 | Inspect usability at 125% browser zoom | PASS |

The results reflect the observations recorded during the practical session.

---

## 6. Detailed Test Coverage

### Test 1: Portrait Layout

**Viewport:** 390 × 844 pixels

Checks performed:
- Product names and prices were readable.
- Product images were visible.
- Add to Cart buttons were usable.
- Navigation and cart were accessible.
- No unexpected horizontal scrolling was observed.

**Result:** PASS

### Test 2: Shopping Cart Functionality

Checks performed:
- The Add to Cart button changed to Remove.
- The cart badge displayed the expected count.
- The selected product appeared in the cart.
- Product name and price were correct.
- Removing the product updated the cart.

**Result:** PASS

### Test 3: Empty Checkout Form

Checks performed:
- Checkout form fitted the viewport.
- The empty form was prevented from proceeding.
- A validation message appeared.
- The message was readable.

**Result:** PASS

**Evidence note:** Record the exact validation message if it was captured. Do not invent the wording.

### Test 4: Valid Checkout Information

Test data used:
- First name: `QA`
- Last name: `Tester`
- Postal code: `100001`

Checks performed:
- Customer information was accepted.
- Checkout Overview opened.
- The expected product and price were displayed.
- No text clipping or overlapping was observed.
- Visible controls were usable.

**Result:** PASS

### Test 5: Checkout Completion

Checks performed:
- Finish button worked.
- Confirmation page appeared.
- Confirmation message was readable.
- Confirmation content fitted the viewport.
- Back Home button was visible and usable.

**Result:** PASS

### Test 6: Landscape Orientation

**Viewport:** 844 × 390 pixels

Checks performed:
- Product names and prices remained readable.
- Images and buttons remained visible.
- Navigation and cart remained accessible.
- No overlapping or clipped content was observed.
- No unexpected horizontal scrolling was observed.

**Result:** PASS

### Test 7: Mobile Navigation

Checks performed:
- Navigation menu opened.
- Menu options were readable.
- All Items returned to the Products page.
- About opened its expected destination.
- Navigation remained usable afterward.

**Result:** PASS

### Test 8: Browser Zoom

**Zoom level:** 125%

Checks performed:
- Product text remained readable.
- Buttons remained accessible.
- Navigation and cart remained usable.
- No unexpected clipping or overlapping was observed.
- Cart contents remained readable.

**Result:** PASS

---

## 7. Summary of Findings

No defects were observed in the scenarios tested during this practical session.

The testing covered responsive layout, shopping cart behavior, checkout validation, order completion, orientation, navigation, and browser zoom.

This result does not prove that the entire website is defect-free. Coverage was limited to the listed scenarios, one browser, and simulated mobile viewports.

No defect report was created because no failing behavior was observed in the recorded results.

---

## 8. Limitations

The following limitations apply:

1. Testing was performed using Chrome DevTools device emulation.
2. No physical Android or iOS device was used in this session.
3. No second mobile browser was tested.
4. Network performance, interruptions, and device-specific behavior were not evaluated.
5. Results apply only to the scenarios actually performed.

These limitations should be considered before making broader compatibility claims.

---

## 9. Key Takeaways

1. Mobile testing includes both functional and usability checks.
2. A responsive layout should remain readable and usable at the tested viewport.
3. Shopping cart and checkout functionality must be checked in addition to appearance.
4. Empty-form validation is a useful negative test.
5. Orientation changes may reveal layout problems not visible in portrait mode.
6. Browser zoom can expose clipping and accessibility issues.
7. A passing result means the tested scenario met its expected behavior; it does not prove the entire application is defect-free.
8. Device emulation is useful for initial testing but does not replace real-device testing.

---


