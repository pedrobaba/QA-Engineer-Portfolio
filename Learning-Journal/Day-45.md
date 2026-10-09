# Day 45 — Learning Journal: Cross-Browser Testing

## Overview

**Topic:** Cross-Browser Testing
**Application:** SauceDemo — https://www.saucedemo.com/
**Browsers Tested:** Google Chrome and Mozilla Firefox
**Testing Type:** Manual Functional, Compatibility, and Responsive Layout Testing
**Overall Result:** PASS for all scenarios tested

## Learning Objectives

Today's objectives were to:

* Compare website behavior across Chrome and Firefox.
* Verify login functionality in both browsers.
* Test Add to Cart and cart consistency.
* Validate the checkout workflow and order confirmation.
* Check responsive layout at a viewport of 390 × 844 pixels.
* Identify and document browser-specific compatibility issues.

## Practical Activities and Results

### 1. Initial Page Inspection

| Check                         | Chrome | Firefox |
| ----------------------------- | ------ | ------- |
| Application loads             | PASS   | PASS    |
| Visual layout appears correct | PASS   | PASS    |

**Observation:** The application loaded successfully in both browsers. No visible layout issue was observed during the initial inspection.

### 2. Login Testing

| Check                 | Chrome | Firefox |
| --------------------- | ------ | ------- |
| Login succeeds        | PASS   | PASS    |
| Products page appears | PASS   | PASS    |

**Observation:** Login worked successfully in both browsers, and the Products page loaded as expected.

### 3. Add to Cart Testing

| Check                                 | Chrome | Firefox |
| ------------------------------------- | ------ | ------- |
| Add to Cart button changes to Remove  | PASS   | PASS    |
| Cart badge displays the correct count | PASS   | PASS    |
| Selected product appears in the cart  | PASS   | PASS    |

**Observation:** The Add to Cart workflow behaved as expected in both browsers.

### 4. Checkout Workflow Testing

| Check                            | Chrome | Firefox |
| -------------------------------- | ------ | ------- |
| Checkout page opens              | PASS   | PASS    |
| Customer information is accepted | PASS   | PASS    |
| Checkout Overview page opens     | PASS   | PASS    |
| Correct item is displayed        | PASS   | PASS    |
| Order completion succeeds        | PASS   | PASS    |
| Confirmation page appears        | PASS   | PASS    |
| Confirmation message is visible  | PASS   | PASS    |

**Observation:** The checkout workflow completed successfully in both browsers, including the final order confirmation step.

### 5. Cart Consistency Testing

Two products were added to the cart, checked, and one item was removed.

| Check                            | Chrome | Firefox |
| -------------------------------- | ------ | ------- |
| Both products appear in the cart | PASS   | PASS    |
| Product names and prices match   | PASS   | PASS    |
| Removing an item works           | PASS   | PASS    |
| Cart badge updates correctly     | PASS   | PASS    |

**Observation:** Cart contents and removal behavior were consistent in Chrome and Firefox during the test run.

### 6. Responsive Layout Testing

**Viewport:** 390 × 844 pixels

| Check                                 | Chrome | Firefox |
| ------------------------------------- | ------ | ------- |
| Products remain readable              | PASS   | PASS    |
| Buttons remain usable                 | PASS   | PASS    |
| Navigation and cart remain accessible | PASS   | PASS    |
| No unintended horizontal overflow     | PASS   | PASS    |

**Observation:** The tested page remained usable at the selected viewport size in both browsers.

## Defects Identified

**No compatibility defects were observed in the scenarios tested.**

This does not establish that the entire application is defect-free. Testing was limited to the listed workflows, the two browsers, and the selected viewport size.

## Key Lessons Learned

1. Cross-browser testing checks whether an application behaves consistently across different browsers.
2. A successful page load alone does not prove that all functionality works.
3. Functional workflows should be tested in each target browser.
4. Cart contents, prices, quantities, and removal behavior should be verified.
5. Responsive layout testing helps identify usability problems at smaller viewport sizes.
6. Browser-specific defects should be reported only when supported by actual observations and evidence.
7. Test results should clearly distinguish verified observations from assumptions.

## Challenges

No blocking issue was observed during the recorded test scenarios.

## Evidence

Screenshots and recordings should be added only if they were actually captured and saved.

Suggested location for any captured evidence:

`Screenshots-&-Recordings/Day-45/`

## Day 45 Summary

I completed practical cross-browser testing of SauceDemo using Chrome and Firefox. I tested login, Add to Cart, checkout, order confirmation, cart consistency, and responsive layout at 390 × 844 pixels.

All recorded scenarios passed in both browsers, and no compatibility defects were observed during this test run.

**Status:** Day 45 practical testing completed.

