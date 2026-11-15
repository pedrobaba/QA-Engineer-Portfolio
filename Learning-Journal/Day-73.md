# Day 73 — Learning Journal

## Topic
QA Portfolio Project — Bug Reporting

## What I Learned

Today I learned how to document software defects professionally and maintain a structured bug report log.

I practised identifying the information required in a bug report, writing clear reproduction steps, separating expected and actual results, and understanding how severity and priority differ.

I also learned how defects move through a typical bug life cycle and why retesting is different from regression testing.

## Practical Work

For the SauceDemo QA portfolio project, I prepared simulated examples covering:

- An incorrect checkout total.
- A product sorting issue.
- A postal code validation issue.

I also created a sample bug report log and linked each example to a related test case.

**Practice disclaimer:** These examples are simulated documentation exercises, not verified defects from a live SauceDemo execution session.

## Important Lessons

1. Bug titles should be specific and easy to understand.
2. Reproduction steps should be detailed enough for another person to follow.
3. Expected and actual results should be written separately.
4. Severity measures impact, while priority measures urgency.
5. Evidence should support the reported behaviour.
6. A bug report should not contain assumptions about the root cause.
7. Test cases and bug reports should be linked for traceability.

## Challenges and Improvements

One important area to keep improving is assigning severity and priority consistently. I need to consider the actual impact of a defect and the urgency of fixing it rather than automatically assigning high values.

I also need to ensure that every published portfolio example is clearly identified as either a real observed finding or a simulated practice example.



# SauceDemo — Bug Report Log

## Purpose

This log provides a central overview of the defect examples prepared for the SauceDemo QA portfolio project.

**Data status:** All records below are simulated practice examples. They are not verified live defects and must not be counted as actual test findings.

| Bug ID | Title | Module | Related Test Case | Severity | Priority | Status |
|---|---|---|---|---|---|---|
| BUG-001 | Checkout displays an incorrect order total | Checkout | TC-019 | High | P1 | Example — Not Verified |
| BUG-002 | Product sorting does not follow the selected order | Inventory | TC-008 | Medium | P2 | Example — Not Verified |
| BUG-003 | Checkout accepts an invalid postal code without the expected validation | Checkout | TC-016 | Medium | P2 | Example — Not Verified |

## Traceability

| Test Case | Related Bug | Description |
|---|---|---|
| TC-008 | BUG-002 | Product sorting |
| TC-016 | BUG-003 | Postal code validation |
| TC-019 | BUG-001 | Checkout total calculation |

## Notes

- These records are included to demonstrate bug-report structure and traceability.
- No live execution evidence is attached to these examples.
- Update a record only after the behaviour has been tested and verified.
- Replace simulated details with actual observations if a live test confirms a defect.
- Do not publish confidential information, credentials, or restricted client evidence.


# BUG-002 — Product Sorting Does Not Follow the Selected Order

**Record type:** Simulated practice example — Not a verified live defect

## Summary

The inventory page is used to illustrate a scenario in which the displayed product order does not match the sorting option selected by the user.

## Environment

- Application: SauceDemo
- Module: Inventory
- Testing type: Functional testing
- Browser/device: Not recorded for this simulated example

## Preconditions

- User is logged in.
- Inventory page is displayed.
- Products are available for sorting.

## Steps to Reproduce

1. Log in to SauceDemo using an available standard test account.
2. Open the inventory page.
3. Open the product sorting dropdown.
4. Select Name (A to Z).
5. Review the order of the displayed product names.

## Expected Result

Products should appear in alphabetical ascending order based on their displayed names.

## Illustrative Actual Result

For this simulated scenario, the displayed product order does not match alphabetical ascending order.

## Classification

- Severity: Medium — illustrative assessment
- Priority: P2 — illustrative assessment
- Related test case: TC-008
- Status: Example — Not Verified
- Evidence: None attached

## Notes

This is a practice scenario only. Before reporting it as a real defect, execute the test, record the actual product order, and capture evidence demonstrating the mismatch.

# BUG-003 — Checkout Postal Code Validation Does Not Match Expected Behaviour

**Record type:** Simulated practice example — Not a verified live defect

## Summary

This example describes a checkout validation scenario in which an invalid postal code is accepted when the expected behaviour is to reject it.

## Environment

- Application: SauceDemo
- Module: Checkout information
- Testing type: Negative validation testing
- Browser/device: Not recorded for this simulated example

## Preconditions

- User is logged in.
- At least one product is in the cart.
- User has opened the checkout information form.

## Steps to Reproduce

1. Log in to SauceDemo using an available standard test account.
2. Add a product to the cart.
3. Open the cart and select Checkout.
4. Enter a first name and last name.
5. Enter an invalid postal code.
6. Select Continue.
7. Observe the application's response.

## Test Data

- First name: Test
- Last name: User
- Postal code: `INVALID`

The values are illustrative practice data.

## Expected Result

The application should validate the postal code according to its defined requirements and display an appropriate validation message when the supplied value is invalid.

## Illustrative Actual Result

For this simulated scenario, the application accepts the invalid postal code and allows the user to proceed.

## Classification

- Severity: Medium — illustrative assessment
- Priority: P2 — illustrative assessment
- Related test case: TC-016
- Status: Example — Not Verified
- Evidence: None attached

## Notes

The accepted postal-code formats must be checked against the application's requirements before confirming a defect. This example should not be reported as a live finding without execution and evidence.

