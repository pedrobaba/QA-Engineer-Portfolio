# Day 56 — Regression Testing Strategy

## Overview

Day 56 focused on understanding regression testing, distinguishing it from retesting, selecting relevant regression tests after a code change, and prioritizing tests based on risk and business impact.

The practice used a simulated shopping-cart scenario in which a developer fixed an incorrect total caused by a discount code.

## Learning Objectives

By the end of Day 56, I practiced how to:

- Explain regression testing and retesting.
- Identify suitable regression tests after a defect fix.
- Select tests related to changed functionality and dependent features.
- Prioritize regression tests based on risk and impact.
- Distinguish confirmation of a fix from checking for unintended side effects.
- Document a newly observed failure separately from the original defect.
- Avoid assuming that a new failure was caused by a fix without investigating.

## 1. What Is Regression Testing?

Regression testing checks whether a software change has unintentionally affected existing functionality that previously worked.

A change may fix one defect but introduce another problem in a related feature. Regression testing helps identify these unintended effects.

**Example:**

A developer fixes a discount calculation issue in an online shopping cart. Regression testing may include checking that:

- The cart total remains correct after applying a discount.
- Shipping fees are calculated correctly.
- The checkout process still completes.
- The payment flow continues to work as expected.
- The order is created with the correct amount.

The exact tests selected depend on the change, affected components, dependencies, risks, and application requirements.

## 2. Regression Testing vs Retesting

### Retesting

Retesting checks whether a previously reported defect has been fixed by repeating the relevant failed test.

**Example:** Apply the discount code that originally caused the incorrect cart total and verify that the total is now correct.

### Regression Testing

Regression testing checks whether existing functionality still works after a change.

**Example:** After the discount fix, check the cart total, shipping calculation, checkout, payment flow, and order creation.

| Retesting | Regression Testing |
|---|---|
| Focuses on the original defect. | Focuses on possible unintended effects of a change. |
| Repeats the relevant test that previously failed. | Checks relevant existing functionality, including related features. |
| Confirms whether the reported issue is fixed. | Provides confidence that the change has not broken other functionality. |

Both activities may be needed after a defect fix.

## 3. Selecting Regression Tests

When a discount calculation defect is fixed, relevant tests include:

1. Apply a valid discount code and verify the discount amount.
2. Verify that the final cart total is correct.
3. Verify that shipping fees remain correct.
4. Complete checkout after applying the discount.
5. Verify that the payment flow uses the expected amount.
6. Verify that the order is created with the correct total.

Tests unrelated to the change, such as checking the colour of the company logo, would usually have lower priority for this particular change unless there is a specific reason to include them.

## 4. Risk-Based Regression Prioritization

Regression testing time may be limited, so test cases should be prioritized according to factors such as:

- The functionality directly changed.
- The likelihood of affecting related features.
- The business impact of a failure.
- The criticality of the user journey.
- Dependencies between components.
- Previous defect history and known risk areas.

For the simulated checkout-total fix, high-priority areas include:

1. Discount calculation.
2. Cart total and other price calculations.
3. Checkout and payment flow.
4. Order creation and stored order amount.

Incorrect totals can affect customers and financial records, while a checkout failure can prevent users from completing purchases.

## 5. Handling a New Failure After a Fix

Consider this simulated scenario:

- The original discount calculation issue is fixed.
- Retesting confirms that the same discount code now produces the correct total.
- Checkout then fails when the user attempts to place the order.

The original discount test may pass, while the checkout scenario fails.

The QA tester should:

1. Record the checkout failure with clear reproduction steps.
2. Capture the expected and actual results.
3. Collect relevant evidence, such as screenshots, logs, or a response message when available.
4. Report the checkout failure as a separate defect when appropriate.
5. Investigate whether it is related to the recent change rather than assuming causation.
6. Follow the team's defect workflow for the original issue and the new issue.

The original defect and a new defect can coexist. Passing the original retest does not mean the whole application is ready for release.

## 6. Key Takeaways

1. Retesting checks whether a specific defect has been fixed.
2. Regression testing checks for unintended effects on existing functionality.
3. A single change may require both retesting and regression testing.
4. Regression tests should be selected based on changed functionality, dependencies, risk, and business impact.
5. Critical workflows such as checkout, payment, and order creation deserve careful consideration when price calculations change.
6. A newly observed failure should be documented and investigated without assuming its cause.
7. A passing retest does not automatically mean the release is ready.

