# Day 58 — Exploratory Testing Practice

## Project Overview

This practice project demonstrates how to approach exploratory testing using simulated shopping website scenarios. The exercises focus on investigating cart calculations, cart persistence, and possible duplicate order submissions.

**Important:** These are simulated practice scenarios. No live application execution or confirmed defect discovery is claimed.

## Objectives

- Apply goal-oriented exploratory testing.
- Investigate unexpected behavior.
- Compare expected and actual results.
- Identify information required to report a potential defect.
- Document observations and follow-up actions.

## Scenario 1: Cart Total Does Not Update

### Goal
Investigate whether changing a product's quantity updates the cart total.

### Steps
1. Add a product to the cart.
2. Record its unit price and quantity.
3. Change the quantity from 1 to 3.
4. Observe the displayed total.
5. Repeat the action and record the results.

### Expected Result
The cart total reflects the correct quantity and applicable pricing rules.

### Potential Finding
The total sometimes fails to update after a quantity change.

### Follow-up
Repeat the steps, capture evidence, check the requirements, and determine whether the behavior is reproducible.

**Status:** Practice scenario; not executed against a live application.

## Scenario 2: Cart Becomes Empty After Refresh

### Goal
Investigate whether cart contents persist after a page refresh.

### Steps
1. Add a product to the cart.
2. Record the displayed contents.
3. Refresh the page.
4. Inspect the cart.
5. Compare the result with the expected persistence behavior.

### Expected Result
The cart behaves according to the application's documented requirements.

### Follow-up
Determine whether the cart is intended to persist across refreshes before classifying an empty cart as a defect.

**Status:** Practice scenario; not executed against a live application.

## Scenario 3: Possible Duplicate Orders

### Goal
Investigate whether submitting an order twice quickly can create duplicate orders.

### Steps
1. Use a controlled test environment and test account.
2. Follow the normal checkout process.
3. Investigate the result of two rapid submissions.
4. Check the order confirmation and order history.
5. Record the outcome and evidence.
6. Compare the behavior with the requirements.

### Expected Result
The application should handle repeated submissions according to its checkout requirements and prevent unintended duplicate orders.

### Follow-up
Verify whether more than one order was actually created. Do not report a confirmed defect without supporting evidence.

**Status:** Practice scenario; not executed against a live application.

## Exploratory Testing Checklist

- [ ] Define a clear testing goal.
- [ ] Explore behavior relevant to the goal.
- [ ] Record actions and observations.
- [ ] Investigate unexpected results.
- [ ] Compare actual behavior with requirements.
- [ ] Capture evidence when available.
- [ ] Document unresolved questions and follow-up work.
- [ ] Avoid unsupported conclusions about root causes.

## Conclusion

This practice reinforced the importance of focused exploration, observation, verification, and documentation. Exploratory testing can uncover potential risks, but a potential issue must be investigated against expected behavior before it is reported as a confirmed defect.
