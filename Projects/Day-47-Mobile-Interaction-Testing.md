# Day 47 — Mobile Interaction Testing

## 1. Project Overview

This project focused on testing common user interactions on the SauceDemo website using Chrome DevTools mobile device emulation.

The goal was to evaluate whether key shopping and checkout workflows remained functional and usable within a mobile-sized viewport.

**Application:** SauceDemo  
**Testing approach:** Manual testing  
**Browser:** Google Chrome  
**Testing tool:** Chrome DevTools Device Mode  
**Viewport:** 390 × 844 pixels  
**Testing environment:** Desktop browser with mobile device emulation  
**Result:** All tested scenarios passed.

> **Important:** This was mobile web testing through browser emulation. It was not native mobile application testing or testing on a physical iPhone.

---

## 2. Testing Objectives

The objectives were to verify that:

- The application could be accessed through a mobile-sized viewport.
- The navigation menu opened and closed correctly.
- Product interactions worked as expected.
- Cart contents and badge counts updated correctly.
- Checkout validation handled empty fields appropriately.
- Form fields accepted and displayed user input.
- Checkout totals and order confirmation were displayed correctly.
- Returning to the products page preserved the expected application state.

---

## 3. Test Environment

| Item | Details |
|---|---|
| Application | SauceDemo |
| Browser | Google Chrome |
| Testing tool | Chrome DevTools Device Mode |
| Viewport width | 390 px |
| Viewport height | 844 px |
| Testing method | Manual interaction testing |
| Test account | Standard user |
| Device type | Emulated mobile viewport on a computer |

### Test Data

- Username: `standard_user`
- Password: `secret_sauce`
- Products tested: Sauce Labs Backpack and Sauce Labs Bike Light

These credentials are the standard SauceDemo practice-account credentials, not personal account credentials.

---

## 4. Test Scenarios and Results

### Scenario 1: Mobile Viewport and Navigation

**Objective:** Verify that the website remained usable in the configured mobile viewport.

| Test step | Expected result | Actual result | Status |
|---|---|---|---|
| Configure the mobile viewport | The viewport is set to 390 × 844 px | Viewport configured successfully | PASS |
| Log in with valid credentials | The products page loads | Login succeeded | PASS |
| Open the navigation menu | The menu opens | Menu opened successfully | PASS |
| Close the navigation menu | The menu closes | Menu closed successfully | PASS |
| Continue using the page | The page remains usable | Page remained usable | PASS |

### Scenario 2: Product Interaction and State

**Objective:** Verify that product selection worked correctly.

| Test step | Expected result | Actual result | Status |
|---|---|---|---|
| Add the Backpack to the cart | Product is added | Product added successfully | PASS |
| Check the product button | Button changes to Remove | Button changed to Remove | PASS |
| Check the cart badge | Badge displays 1 | Badge displayed 1 | PASS |
| Scroll the products page | Cart state remains correct | State remained correct | PASS |
| Open the cart | Backpack appears in the cart | Backpack was present | PASS |

### Scenario 3: Cart Removal and Badge Updates

**Objective:** Verify that removing products updated the cart correctly.

| Test step | Expected result | Actual result | Status |
|---|---|---|---|
| Add the Backpack and Bike Light | Both products are added | Both products appeared | PASS |
| Remove the Bike Light | Bike Light is removed | Bike Light was removed | PASS |
| Check the remaining product | Backpack remains | Backpack remained | PASS |
| Check the cart badge | Badge changes from 2 to 1 | Badge updated correctly | PASS |
| Remove the Backpack | Cart becomes empty | Cart became empty | PASS |

### Scenario 4: Empty Checkout Form Validation

**Objective:** Verify that checkout could not proceed without required information.

| Test step | Expected result | Actual result | Status |
|---|---|---|---|
| Attempt to continue with empty fields | Checkout is blocked | Checkout was blocked | PASS |
| Check for a validation message | An error message appears | Error message appeared | PASS |
| Check message readability | Message is readable | Message was readable | PASS |
| Interact with the form after the error | Form remains usable | Form remained usable | PASS |
| Check the current page | User remains on checkout information | User remained on the page | PASS |

**Observation:** The application prevented progression when the required checkout fields were empty.

The exact validation message was not recorded in the test notes.

### Scenario 5: Checkout Form Input

**Objective:** Verify that required form fields accepted input and allowed checkout to continue.

| Test step | Expected result | Actual result | Status |
|---|---|---|---|
| Enter a first name | Input is accepted and displayed | Input was accepted | PASS |
| Enter a last name | Input is accepted and displayed | Input was accepted | PASS |
| Enter a postal code | Input is accepted and displayed | Input was accepted | PASS |
| Move between fields | Fields remain usable | Fields remained usable | PASS |
| Continue checkout | Overview page opens | Overview page opened | PASS |

### Scenario 6: Checkout Overview and Order Completion

**Objective:** Verify that the checkout summary and order completion workflow worked correctly.

| Test step | Expected result | Actual result | Status |
|---|---|---|---|
| Check the selected product | Correct product is displayed | Correct product was displayed | PASS |
| Check the item price | Price is displayed correctly | Price appeared correct | PASS |
| Check totals | Totals are readable and consistent | Totals appeared readable and consistent | PASS |
| Select Finish | Order completion proceeds | Order completed successfully | PASS |
| Check confirmation page | Confirmation content is displayed | Confirmation page displayed correctly | PASS |

### Scenario 7: Return Home and Application State

**Objective:** Verify navigation and cart behavior after completing an order.

| Test step | Expected result | Actual result | Status |
|---|---|---|---|
| Select Back Home | Products page opens | Products page opened | PASS |
| Check the cart after the order | Cart is cleared | Cart was cleared | PASS |
| Add the Backpack again | Product is added | Product was added | PASS |
| Check the cart badge | Badge displays 1 | Badge displayed 1 | PASS |
| Open the cart | Backpack appears | Backpack was present | PASS |

---

## 5. Test Summary

| Metric | Result |
|---|---:|
| Test scenario groups | 7 |
| Checks reported as passed | 34 |
| Checks reported as failed | 0 |
| Checks blocked | 0 |
| Defects observed | 0 |

**Note:** These figures summarize the checks recorded in this project. They do not represent exhaustive testing of every SauceDemo feature or every mobile device.

---

## 6. Defect Analysis

No defects were observed in the tested workflows.

The following areas behaved as expected during the session:

- Navigation menu interactions
- Product selection
- Cart contents and badge updates
- Empty checkout form validation
- Checkout form input
- Checkout overview and order completion
- Return-home navigation and post-order cart state

This result applies only to the scenarios executed in the stated test environment. Additional testing could reveal issues outside the scope of this session.

---

## 7. Testing Limitations

The following limitations should be considered when interpreting the results:

1. Testing was performed on a desktop computer using Chrome DevTools mobile device emulation.
2. A physical iPhone was not used to execute the tests.
3. Native iOS application behavior was not tested.
4. Actual mobile operating system behavior, device-specific performance, and physical-device keyboard behavior were not verified.
5. No defect was observed in the tested scenarios, but this does not establish that the application is completely defect-free.

---

## 8. Skills Practiced

This exercise provided practice in:

- Mobile web testing
- Responsive viewport testing
- Manual functional testing
- Navigation testing
- Cart state validation
- Form validation testing
- Checkout workflow testing
- Expected-versus-actual result comparison
- Documenting test execution results
- Identifying the limitations of an emulated testing environment

---

## 9. Conclusion

The SauceDemo website successfully completed the tested mobile web interaction workflows within Chrome DevTools Device Mode at a viewport of 390 × 844 pixels.

All recorded checks passed, and no defects were observed during the session.

The next step for broader coverage would be to repeat relevant scenarios on a physical mobile device and, where available, test additional mobile browsers and viewport configurations.

**Final result: PASS — for the scenarios tested in the stated environment.**
