# Day 69 — SauceDemo End-to-End Manual Testing Project

## 1. Project Overview

**Project Name:** SauceDemo End-to-End Manual Testing

**Application:** SauceDemo

**Application URL:** https://www.saucedemo.com/

**Testing Type:** Functional and End-to-End Manual Testing

**Test Environment:** Google Chrome on Windows

**Project Status:** Learning project — practical execution pending.

## 2. Project Objective

The objective of this project is to evaluate the main e-commerce user journey, from user authentication through product selection, shopping cart management, checkout and order confirmation.

The project demonstrates how a QA tester plans, executes, documents and closes an end-to-end testing activity.

## 3. Testing Scope

### In Scope

- Authentication.
- Product inventory.
- Shopping cart.
- Checkout information.
- Order overview.
- Order completion.

### Out of Scope

- Real payment gateway processing.
- Performance and load testing.
- Advanced security testing.

## 4. End-to-End Test Scenarios

| Scenario ID | Test Scenario | Expected Result |
|---|---|---|
| E2E-001 | Verify successful login | Inventory page opens. |
| E2E-002 | Verify invalid login | Appropriate error message appears. |
| E2E-003 | Verify product display | Product information is displayed. |
| E2E-004 | Verify adding a product to cart | Product appears in the cart. |
| E2E-005 | Verify adding multiple products | All selected products appear. |
| E2E-006 | Verify removing a product | Product is removed successfully. |
| E2E-007 | Verify continuing shopping | User returns to inventory. |
| E2E-008 | Verify checkout navigation | Checkout information page opens. |
| E2E-009 | Verify checkout validation | Missing information is rejected. |
| E2E-010 | Verify valid checkout information | User proceeds to order overview. |
| E2E-011 | Verify order details | Correct products and totals are displayed. |
| E2E-012 | Verify order completion | Confirmation page appears. |

## 5. Detailed Test Case Design

The following test cases were designed as examples for the project.

### TC-001: Successful Login

**Scenario:** E2E-001

**Priority:** High

**Precondition:** User is on the login page.

**Test Data:**
- Username: standard_user
- Password: secret_sauce

| Step | Action | Expected Result |
|---|---|---|
| 1 | Enter valid username | Username is accepted. |
| 2 | Enter valid password | Password is accepted. |
| 3 | Click Login | User is authenticated. |
| 4 | Observe the page | Inventory page is displayed. |

### TC-002: Invalid Login

**Scenario:** E2E-002

**Priority:** High

**Precondition:** User is on the login page.

| Step | Action | Expected Result |
|---|---|---|
| 1 | Enter invalid username | Username is entered. |
| 2 | Enter invalid password | Password is entered. |
| 3 | Click Login | Login is rejected. |
| 4 | Observe the page | Error message is displayed. |

### TC-003: Product Display

**Scenario:** E2E-003

**Priority:** Medium

**Precondition:** User is logged in.

| Step | Action | Expected Result |
|---|---|---|
| 1 | Open inventory page | Product list is displayed. |
| 2 | Inspect product names | Names are visible. |
| 3 | Inspect product images | Images are displayed. |
| 4 | Inspect product prices | Prices are displayed. |
| 5 | Inspect descriptions | Descriptions are visible. |

### TC-004: Add Product to Cart

**Scenario:** E2E-004

**Priority:** High

**Precondition:** User is logged in.

**Test Data:** Sauce Labs Backpack.

| Step | Action | Expected Result |
|---|---|---|
| 1 | Locate Sauce Labs Backpack | Product is visible. |
| 2 | Click Add to Cart | Product is added. |
| 3 | Check cart badge | Count displays 1. |
| 4 | Open cart | Selected product is displayed. |

### TC-005: Remove Product from Cart

**Scenario:** E2E-006

**Priority:** High

**Precondition:** At least one product is in the cart.

| Step | Action | Expected Result |
|---|---|---|
| 1 | Open cart | Selected product is displayed. |
| 2 | Click Remove | Product is removed. |
| 3 | Inspect cart | Product is no longer displayed. |
| 4 | Check cart badge | Count is updated or badge disappears. |

### TC-006: Checkout Validation

**Scenario:** E2E-009

**Priority:** High

**Precondition:** User has added a product and opened the cart.

| Step | Action | Expected Result |
|---|---|---|
| 1 | Click Checkout | Checkout information page opens. |
| 2 | Leave first name empty | Field remains empty. |
| 3 | Enter last name and postal code | Values are accepted. |
| 4 | Click Continue | Application prevents progression. |
| 5 | Observe validation message | Appropriate error appears. |

### TC-007: Successful Checkout

**Scenario:** E2E-010 and E2E-012

**Priority:** Critical

**Precondition:** User is logged in and has a product in the cart.

| Step | Action | Expected Result |
|---|---|---|
| 1 | Open cart | Product is displayed. |
| 2 | Click Checkout | Information page opens. |
| 3 | Enter first name | Value is accepted. |
| 4 | Enter last name | Value is accepted. |
| 5 | Enter postal code | Value is accepted. |
| 6 | Click Continue | Order overview opens. |
| 7 | Review order | Product and price details are correct. |
| 8 | Click Finish | Order is completed. |
| 9 | Observe confirmation page | Order confirmation is displayed. |

## 6. Test Execution Report

**Important:** The following figures are simulated for learning purposes. They are not actual SauceDemo execution results.

| Test Case | Description | Example Status |
|---|---|---|
| TC-001 | Successful login | Passed |
| TC-002 | Invalid login | Passed |
| TC-003 | Product display | Passed |
| TC-004 | Add product to cart | Passed |
| TC-005 | Remove product | Passed |
| TC-006 | Checkout validation | Passed |
| TC-007 | Successful checkout | Failed |

### Example Metrics

Total test cases: 7

Passed: 6

Failed: 1

Blocked: 0

Not Run: 0

Execution rate = 7 / 7 × 100 = 100%

Pass rate = 6 / 7 × 100 = 85.71%

Failure rate = 1 / 7 × 100 = 14.29%

## 7. Example Defect Report

**Defect ID:** BUG-001

**Title:** Order confirmation is not displayed after clicking Finish.

**Related Test Case:** TC-007

**Severity:** High — provisional, subject to impact assessment.

**Priority:** To be determined.

**Preconditions:**
- User is authenticated.
- A product has been added to the cart.
- Valid checkout information has been entered.
- User is on the Checkout Overview page.

**Steps to Reproduce:**
1. Log in to SauceDemo.
2. Add a product to the cart.
3. Open the cart.
4. Click Checkout.
5. Enter valid checkout information.
6. Click Continue.
7. Click Finish.

**Expected Result:** Order confirmation page should be displayed.

**Actual Result:** Order confirmation page is not displayed.

**Evidence Required:**
- Screenshot before clicking Finish.
- Screenshot after clicking Finish.
- Screen recording of the reproduction steps.
- Relevant browser console or network logs.

**Status:** Open in the illustrative example, pending investigation.

This is a simulated defect report and must not be presented as a defect discovered in actual live execution.

## 8. Regression Testing

Following the simulated checkout fix, the following regression tests were considered.

| Test ID | Regression Test | Example Result |
|---|---|---|
| REG-001 | Login | Passed |
| REG-002 | Product display | Passed |
| REG-003 | Add product to cart | Passed |
| REG-004 | Remove product | Passed |
| REG-005 | Checkout validation | Passed |
| REG-006 | Order overview | Passed |
| REG-007 | Order completion | Passed |

These are illustrative results only.

## 9. Test Summary

The example execution recorded:

- Total test cases: 7.
- Passed: 6.
- Failed: 1.
- Execution rate: 100%.
- Pass rate: 85.71%.
- Failure rate: 14.29%.

The simulated regression exercise recorded seven passing tests.

The example demonstrates how QA communicates execution results, defect information and regression outcomes.

It does not establish that the live application was tested or that it is ready for release.

## 10. Lessons Learned

1. Define testing scope before execution.
2. Identify scenarios before writing detailed test cases.
3. Include positive and negative test coverage.
4. Record actual results rather than assuming expected behaviour occurred.
5. Investigate failures before reporting defects.
6. Use evidence to support defect reports.
7. Understand the difference between retesting and regression testing.
8. Communicate outstanding risks.
9. Maintain traceability between scenarios, test cases and defects.
10. Keep project documentation accurate and reproducible.

## 11. Project Closure

The learning activities covered:

- Scope definition.
- Test scenario identification.
- Test case design.
- Test execution concepts.
- Defect reporting.
- Evidence collection.
- Regression testing.
- Test summary reporting.
- Lessons learned.

**Learning status:** Completed.

**Practical execution status:** Pending independent live execution and evidence collection.

**Next step:** Execute the test cases against SauceDemo and replace all illustrative results with verified findings.
