# Day 57 — Smoke & Sanity Testing Practice

## Project Overview

This practice demonstrates how to select smoke and sanity tests for simulated software changes and new builds.

**Scenario:** A QA tester receives an e-commerce build and must check critical functionality. The tester also practices focused testing after fixes to the Add to Cart and password-reset features.

**Practice status:** Scenario analysis and test design completed. The scenarios below were not executed against a real application.

## Test Scenario 1 — Smoke Testing a New E-commerce Build

**Test Case ID:** SMK-01

**Objective:** Check whether the critical shopping workflow is accessible enough for further testing.

**Preconditions:**
- A test build is available.
- Test credentials and test data are available where required.

**Steps:**
1. Launch the application.
2. Navigate to the login page and sign in with valid test credentials.
3. Open the product listing.
4. Add a product to the cart.
5. Open the checkout page.

**Expected Result:** The application launches, login succeeds, products load, the product can be added to the cart, and checkout opens as expected.

**Test Type:** Smoke testing.

**Status:** Not executed.

## Test Scenario 2 — Sanity Testing an Add to Cart Fix

**Test Case ID:** SAN-01

**Objective:** Verify that the specific Add to Cart defect has been addressed.

**Preconditions:**
- The defect and its original reproduction steps are available.
- The updated build is available for testing.

**Steps:**
1. Open the product listing.
2. Select an available product.
3. Click Add to Cart.
4. Open the cart.
5. Check the cart quantity and total.

**Expected Result:** The product is added successfully, the quantity updates correctly, and the total reflects the cart contents and applicable pricing rules.

**Test Type:** Sanity testing for the focused check of the fix.

**Status:** Not executed.

## Test Scenario 3 — Sanity Testing a Password-Reset Fix

**Test Case ID:** SAN-02

**Objective:** Verify that the affected password-reset flow works as expected.

**Preconditions:**
- An authorized test account is available.
- The password-reset mechanism is configured in the test environment.

**Steps:**
1. Open the password-reset page.
2. Submit the registered test account's email address.
3. Follow the supported reset-link process.
4. Set a new password that meets the application's requirements.
5. Verify the outcome using the application's supported confirmation process.

**Expected Result:** The password-reset flow completes successfully according to the application's requirements.

**Test Type:** Sanity testing.

**Status:** Not executed.

## Test Scenario 4 — Documenting a Failed Smoke Test

**Test Case ID:** SMK-LOGIN-01

### Simulated Situation

The login page loads, but submitting valid credentials produces an error.

| Field | Details |
|---|---|
| Test objective | Verify login with valid credentials |
| Expected result | Successful login |
| Actual result | An error occurs after submission |
| Status | Failed in the simulated scenario |
| Evidence | Not collected; scenario only |
| Environment | To be recorded during actual execution |

### Recommended QA Actions

1. Record the failure clearly.
2. Capture the exact error and supporting evidence if reproduced.
3. Record the environment and build version.
4. Report the issue to the responsible team.
5. Follow the team's decision on blocking the build or continuing with independent tests.

This example illustrates how a failure should be documented. It is not evidence of a real application defect.

## Test Scenario 5 — Selecting the Appropriate Testing Type

| Situation | Appropriate Approach | Reason |
|---|---|---|
| Checking login, product loading, cart, and checkout on a new build | Smoke testing | Checks critical functions across the build |
| Checking a discount calculation after a fix | Sanity testing | Focuses on the affected functionality |
| Checking password reset after a fix | Sanity testing | Focuses on the changed workflow |
| Testing every relevant feature after a change | May require regression testing | Checks for unintended effects beyond the specific fix |

## Completion Summary

- Practiced identifying smoke and sanity testing scenarios.
- Designed test steps and expected results.
- Analyzed a simulated login failure.
- Practiced recording test status and identifying required evidence.
- No real application execution or defect discovery is claimed.
