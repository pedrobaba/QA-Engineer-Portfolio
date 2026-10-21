# Day 58 — Exploratory Testing

## Overview

Day 58 focused on understanding and practicing exploratory testing. Exploratory testing combines learning about an application, designing tests, and executing them. The tester uses observations from each action to decide what to investigate next.

The goal is not to click randomly. Effective exploratory testing has a clear objective, follows relevant observations, and records results and unexpected behavior.

## Learning Objectives

By the end of Day 58, I learned how to:

- Explain exploratory testing.
- Distinguish exploratory testing from scripted testing.
- Explore application behavior based on observations.
- Investigate unexpected results before concluding that a defect exists.
- Check expected behavior against actual behavior.
- Record exploratory testing steps, observations, and evidence.
- Identify potential risks such as incorrect cart totals and duplicate orders.
- Prepare a useful exploratory testing report.

## 1. What Is Exploratory Testing?

Exploratory testing is a testing approach in which the tester learns about the application, designs tests, and executes them at the same time.

Rather than following only a predefined list of steps, the tester uses information discovered during testing to guide further investigation.

### Example

While exploring an online shopping cart, a tester might:

1. Add a product to the cart.
2. Change its quantity.
3. Check whether the total updates.
4. Remove the product.
5. Refresh the page to investigate cart persistence.
6. Record any unexpected behavior.

Each observation can guide the next test.

## 2. Exploratory Testing vs Scripted Testing

| Exploratory Testing | Scripted Testing |
|---|---|
| Test design and execution happen together. | Steps are defined before execution. |
| The next action can change based on observations. | The tester generally follows predefined steps. |
| Useful for discovering unexpected behavior. | Useful for repeatable checks and planned coverage. |
| Requires careful observation and documentation. | Requires clear test steps and expected results. |

Both approaches are useful and can complement each other.

## 3. Effective Exploratory Testing

Effective exploratory testing should include:

- **A clear goal:** Identify the feature or risk to investigate.
- **Focused exploration:** Test relevant behavior rather than clicking randomly.
- **Observation:** Pay attention to changes, errors, and unexpected results.
- **Investigation:** Repeat important actions and gather more information.
- **Documentation:** Record the steps performed and the results observed.
- **Evidence:** Capture screenshots, recordings, or other useful evidence when available.

Intuition can help generate test ideas, but findings should be supported by observations and evidence.

## 4. Practice Scenario: Shopping Cart Total

### Testing Goal

Investigate whether the cart total updates correctly when a product's quantity changes.

### Practice Steps

1. Add a product to the cart.
2. Record the displayed unit price and quantity.
3. Change the quantity.
4. Check the displayed total.
5. Repeat the action to see whether the behavior is consistent.
6. Record the expected and actual results.

### Expected Result

The cart total should reflect the applicable product price, quantity, and any relevant discounts or charges.

### Potential Observation

The displayed total sometimes fails to update after the quantity changes.

This is a **potential defect requiring further investigation**, not a confirmed finding from a live application.

## 5. Practice Scenario: Cart Persistence

### Testing Goal

Investigate whether cart contents remain available after refreshing the page.

### Practice Steps

1. Add a product to the cart.
2. Record the cart contents.
3. Refresh the page.
4. Check whether the product remains in the cart.
5. Compare the observed behavior with the application's requirements.

### Important QA Principle

An empty cart after refreshing is not automatically a defect. First establish the expected behavior from the requirements or application design.

## 6. Practice Scenario: Duplicate Orders

### Testing Goal

Investigate whether submitting an order twice quickly can create duplicate orders.

### Practice Steps

1. Use a controlled test environment and test account.
2. Follow the normal checkout process.
3. Investigate the behavior when the Place Order action is submitted twice quickly.
4. Check the confirmation page and order history.
5. Record the results and supporting evidence.
6. Compare the behavior with the expected checkout requirements.

Duplicate orders could have serious consequences, including duplicate charges or fulfilment. Testing should avoid unnecessary real purchases and must not affect real customers.

## 7. Investigating Unexpected Behavior

When something unexpected occurs:

1. Repeat the steps carefully.
2. Check the requirements or expected behavior.
3. Record the actual result.
4. Capture evidence where possible.
5. Investigate whether the result is consistent.
6. Report a defect if the behavior violates the requirements.

Do not invent a root cause or label an issue confirmed before gathering enough evidence.

## 8. Exploratory Testing Report

A useful exploratory testing report should include:

| Field | Description |
|---|---|
| Testing goal | What the tester intended to investigate |
| Test environment | Application, browser, device, and relevant configuration |
| Actions performed | Steps taken during exploration |
| Expected result | Behavior required by the specification |
| Actual result | What happened during testing |
| Evidence | Screenshots, recordings, or other supporting information |
| Follow-up | Additional investigation needed |

## Key Takeaways

1. Exploratory testing combines learning, test design, and execution.
2. It is focused investigation, not random clicking.
3. Observations help determine what to test next.
4. Unexpected behavior must be investigated before being classified as a defect.
5. Expected and actual results should be compared.
6. Evidence and clear documentation improve the usefulness of findings.
7. Exploratory testing can reveal risks that predefined test cases may not cover.
8. Practice scenarios must not be presented as completed tests on a live application.

## Day 58 Status

**Topic:** Exploratory Testing  
**Learning status:** Completed practice questions and review  
**Practical application execution:** Not claimed  
**Confirmed defects discovered:** None claimed
