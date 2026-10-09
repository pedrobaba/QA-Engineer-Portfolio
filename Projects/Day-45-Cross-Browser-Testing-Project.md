# Day 45 — Cross-Browser Testing Project

## 1. Project Overview

**Project:** Cross-Browser Compatibility Testing
**Application Under Test:** [SauceDemo](https://www.saucedemo.com/)
**Testing Type:** Manual Cross-Browser Testing
**Browsers Tested:** Google Chrome and Mozilla Firefox
**Viewport Tested:** 390 × 844 pixels
**Testing Status:** Completed
**Overall Result:** PASS for all recorded checks

### Objective

The objective of this project was to verify that key SauceDemo shopping workflows behave consistently in Chrome and Firefox, including login, cart operations, checkout, order completion, and responsive layout.

## 2. Scope of Testing

The following areas were tested:

* Login functionality
* Add-to-cart functionality
* Checkout information and overview
* Order completion and confirmation
* Cart consistency
* Responsive layout

The practical focused on identifying browser-specific differences in functionality, content, and layout.

## 3. Test Environment

| Item                | Details                    |
| ------------------- | -------------------------- |
| Application         | SauceDemo                  |
| Application URL     | https://www.saucedemo.com/ |
| Browser 1           | Google Chrome              |
| Browser 2           | Mozilla Firefox            |
| Testing approach    | Manual testing             |
| Responsive viewport | 390 × 844 pixels           |
| Test account        | SauceDemo standard user    |
| Automation          | None                       |

*Note: Browser versions, operating system version, and execution date were not recorded in this report.*

## 4. Test Scenarios and Results

### Scenario 1: Login Functionality

**Objective:** Verify that a user can log in successfully in both browsers.

| Browser | Expected Result                 | Actual Result                     | Status |
| ------- | ------------------------------- | --------------------------------- | ------ |
| Chrome  | Products page opens after login | Products page loaded successfully | PASS   |
| Firefox | Products page opens after login | Products page loaded successfully | PASS   |

**Finding:** No login compatibility issue was observed in the tested browsers.

### Scenario 2: Add to Cart

**Objective:** Verify that adding a product to the cart works consistently.

| Check                                 | Chrome | Firefox |
| ------------------------------------- | ------ | ------- |
| Button changes to Remove              | PASS   | PASS    |
| Cart badge displays the correct count | PASS   | PASS    |
| Backpack appears in the cart          | PASS   | PASS    |
| Overall scenario                      | PASS   | PASS    |

**Finding:** No Add to Cart compatibility issue was observed.

### Scenario 3: Checkout Workflow

**Objective:** Verify that the checkout process works consistently across both browsers.

| Check                            | Chrome | Firefox |
| -------------------------------- | ------ | ------- |
| Checkout page opens              | PASS   | PASS    |
| Customer information is accepted | PASS   | PASS    |
| Checkout Overview page opens     | PASS   | PASS    |
| Correct item is displayed        | PASS   | PASS    |
| Overall scenario                 | PASS   | PASS    |

**Finding:** No checkout compatibility issue was observed in the tested steps.

### Scenario 4: Order Completion

**Objective:** Verify that the user can complete the order and see the confirmation.

| Check                           | Chrome | Firefox |
| ------------------------------- | ------ | ------- |
| Item and price are correct      | PASS   | PASS    |
| Finish button works             | PASS   | PASS    |
| Confirmation page appears       | PASS   | PASS    |
| Confirmation message is visible | PASS   | PASS    |
| Overall scenario                | PASS   | PASS    |

**Finding:** The order completion workflow passed in both browsers based on the recorded observations.

### Scenario 5: Cart Consistency

**Objective:** Verify that multiple products and cart updates behave consistently.

| Check                            | Chrome | Firefox |
| -------------------------------- | ------ | ------- |
| Both products appear in the cart | PASS   | PASS    |
| Product names and prices match   | PASS   | PASS    |
| Removing an item works           | PASS   | PASS    |
| Cart badge updates correctly     | PASS   | PASS    |
| Overall scenario                 | PASS   | PASS    |

**Finding:** No cart consistency issue was observed.

### Scenario 6: Responsive Layout

**Objective:** Verify that the application remains usable at a narrow viewport.

**Viewport:** 390 × 844 pixels

| Check                                 | Chrome | Firefox |
| ------------------------------------- | ------ | ------- |
| Products remain readable              | PASS   | PASS    |
| Buttons are usable                    | PASS   | PASS    |
| Navigation and cart remain accessible | PASS   | PASS    |
| No unintended horizontal overflow     | PASS   | PASS    |
| Overall scenario                      | PASS   | PASS    |

**Finding:** No responsive-layout issue was observed at the tested viewport.

## 5. Consolidated Results

| Test Area         | Chrome | Firefox |
| ----------------- | ------ | ------- |
| Login             | PASS   | PASS    |
| Add to Cart       | PASS   | PASS    |
| Checkout Workflow | PASS   | PASS    |
| Order Completion  | PASS   | PASS    |
| Cart Consistency  | PASS   | PASS    |
| Responsive Layout | PASS   | PASS    |

### Summary

All six recorded test areas passed in Chrome and Firefox.

* **Browser coverage:** 2 browsers
* **Test areas completed:** 6
* **Compatibility defects observed:** 0
* **Overall outcome:** PASS for the tested scenarios

These results apply only to the scenarios and viewport tested. They do not establish that the entire application is defect-free.

## 6. Defect Reporting

No compatibility defects were observed during this practical exercise.

No defect report was created because the recorded results did not identify a reproducible failure.

A future defect should be documented with:

* Clear reproduction steps
* Expected result
* Actual result
* Browser and version
* Operating system and viewport
* Screenshot or recording, if captured
* Severity and priority, based on impact

## 7. Testing Limitations

The following limitations apply:

1. Testing was limited to Chrome and Firefox.
2. Responsive testing was performed at one recorded viewport size.
3. Browser and operating system versions were not recorded.
4. The test results are based on recorded manual observations.
5. No automated regression suite was executed.
6. No screenshots or recordings are claimed by this report unless they are separately captured and saved.

Additional testing would be needed to assess other browsers, devices, viewport sizes, accessibility, performance, and less common user journeys.

## 8. Key Learning Outcomes

Through this project, I practiced how to:

* Compare application behavior across browsers
* Test complete shopping workflows
* Validate cart updates and checkout behavior
* Inspect responsive layouts
* Record expected and actual results
* Report findings without inventing defects
* Explain the limits of a test run

## 9. Conclusion

Cross-browser testing was performed on SauceDemo using Google Chrome and Mozilla Firefox.

The tested login, cart, checkout, order-completion, and responsive-layout scenarios passed in both browsers. No compatibility defects were observed within the scope of this practical exercise.

This project demonstrates a structured manual testing approach and evidence-conscious reporting.

