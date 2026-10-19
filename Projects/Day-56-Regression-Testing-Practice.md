# Day 56 — Regression Testing Practice

## Project Overview

This practice demonstrates how to plan regression tests after fixing a defect in a simulated e-commerce shopping cart.

### Scenario

A discount code causes the shopping cart to display an incorrect total. A developer fixes the discount calculation.

The QA tester must retest the original defect and identify regression tests that help confirm related shopping and checkout functionality still behaves as expected.

**Environment:** Simulated scenario  
**Testing status:** Test design and scenario analysis completed; tests were not executed against a real application.

## Test Scenarios

### RT-01 — Retest the Original Discount Defect

**Objective:** Confirm that the original discount calculation issue has been fixed.

**Precondition:** A valid discount code and expected discount rules are available.

**Steps:**
1. Add an eligible product to the cart.
2. Record the original subtotal.
3. Apply the discount code that previously caused the issue.
4. Calculate the expected discount and final total using the stated discount rules.
5. Compare the expected total with the displayed total.

**Expected result:** The discount and final total match the applicable pricing rules.

**Test type:** Retesting.

### REG-01 — Verify Cart Total After Discount

**Objective:** Check that the cart total remains correct after the change.

**Steps:**
1. Add eligible products to the cart.
2. Apply a valid discount code.
3. Review the subtotal, discount, and final total.
4. Compare the displayed values with the expected calculation.

**Expected result:** All displayed amounts are consistent with the applicable pricing rules.

**Test type:** Regression testing.

### REG-02 — Verify Shipping Calculation

**Objective:** Check that the discount fix has not affected shipping calculations.

**Steps:**
1. Add products to the cart.
2. Enter a valid shipping address or select an available delivery option.
3. Apply a discount code.
4. Review the shipping fee and final total.

**Expected result:** The shipping fee follows the application's shipping rules and the final total is correct.

**Test type:** Regression testing.

### REG-03 — Complete Checkout After Applying a Discount

**Objective:** Check that checkout remains functional after the discount change.

**Steps:**
1. Add an eligible product to the cart.
2. Apply a valid discount code.
3. Proceed to checkout.
4. Complete the required checkout steps using an authorized test environment and test payment method.

**Expected result:** The checkout process completes successfully, subject to the application's requirements.

**Test type:** Regression testing.

### REG-04 — Verify Payment Amount

**Objective:** Check that the payment flow uses the expected amount after a discount is applied.

**Steps:**
1. Prepare a cart with an eligible discount.
2. Proceed to the payment step.
3. Compare the amount presented for payment with the expected order total.
4. Verify the resulting payment status in the test environment.

**Expected result:** The amount presented for payment matches the expected total, and the payment result follows the application's rules.

**Test type:** Regression testing.

### REG-05 — Verify Order Creation and Amount

**Objective:** Check that a successful discounted checkout creates an order with the correct amount.

**Steps:**
1. Complete a valid discounted checkout in the test environment.
2. Open the resulting order confirmation or order record.
3. Compare the recorded amount with the expected total.

**Expected result:** The order is created as specified and the recorded amount is correct.

**Test type:** Regression testing.

## Simulated Failure Analysis

### Scenario

The original discount retest passes, but checkout fails when the user attempts to place an order.

**Expected result:** Checkout should complete successfully when all valid conditions are met.

**Actual result in the scenario:** Checkout fails.

**QA response:**
- Record the checkout failure as a separate defect when appropriate.
- Include reproduction steps and evidence if the scenario is reproduced.
- Investigate whether the failure is connected to the discount fix.
- Do not claim the relationship is confirmed until supported by evidence.
- Keep the original defect's status aligned with the team's workflow and retest result.

This is a simulated analysis, not a report of a defect found in a real application.

## Regression Test Prioritization

| Priority | Area | Reason |
|---|---|---|
| High | Discount calculation | Directly affected by the change |
| High | Cart total | Directly dependent on pricing calculations |
| High | Checkout and payment | Critical purchase workflow |
| High | Order creation and amount | Important for order accuracy and records |
| Based on risk | Shipping calculation | Related total calculation that may be affected |
| Lower for this change | Unrelated visual elements | Less directly connected unless a dependency or risk is identified |

Priorities should be adjusted based on the actual code change, application architecture, requirements, and business risk.

## Completion Summary

- Distinguished retesting from regression testing.
- Designed test scenarios for a simulated discount fix.
- Identified critical related workflows for regression coverage.
- Practiced risk-based test prioritization.
- Analyzed how to handle a new failure after a fix.
- Did not execute the scenarios against a real application or claim real defects.
