# Day 63 Project — Test Case Management

## Project Objective

Demonstrate a structured approach to maintaining a test suite as application requirements change.

**Project type:** QA documentation and simulated practice  
**Focus:** Test case organization, maintenance, prioritization, traceability, and execution status management.

> This document records learning exercises. It does not claim that the scenarios below were executed against a live application.

## 1. Example Test Suite Structure

| Suite | Purpose | Example coverage |
|---|---|---|
| Authentication | Verify account access | Valid login, invalid credentials, empty fields |
| Product Search | Verify product discovery | Search terms, no results, filtering |
| Shopping Cart | Verify cart behavior | Add item, update quantity, remove item |
| Checkout | Verify order completion | Required fields, payment, order confirmation |

## 2. Example Test Case Register

| Test Case ID | Title | Priority | Status |
|---|---|---|---|
| TC-AUTH-001 | Verify login with valid credentials | High | Not Run |
| TC-AUTH-002 | Verify login rejects invalid credentials | High | Not Run |
| TC-CART-001 | Verify a selected product can be added to the cart | High | Not Run |
| TC-CHECKOUT-001 | Verify checkout rejects missing required information | High | Not Run |
| TC-PAY-001 | Verify a customer can complete a payment | Critical | Blocked in the illustrative scenario |

The IDs and statuses above are illustrative examples, not recorded results from a live test run.

## 3. Test Case Maintenance Scenarios

### Scenario A: Duplicate Cases

Two cases verify the same behavior using the same preconditions, steps, and expected result.

**Action:** Compare coverage, identify the canonical case, consolidate or retire the duplicate according to team policy, and preserve relevant history and traceability.

### Scenario B: Changed Requirement

A checkout requirement changes, making two existing cases incomplete.

**Action:** Review the requirement mapping, revise affected steps and expected results, identify coverage gaps, and review the cases before approval.

### Scenario C: Unavailable Dependency

The payment service is unavailable during a payment test.

**Action:** Record the case as Blocked / Unable to Execute, document the dependency failure, attach available evidence, and schedule a retest when the service becomes available.

### Scenario D: Previous Pass on an Older Build

A test passed in an earlier build but has not been executed after a change.

**Action:** Treat the old result as historical evidence and execute the test against the current build when relevant.

### Scenario E: Removed Feature

A feature is removed from the application.

**Action:** Review the related cases and requirement links, retire obsolete cases through the agreed process, and preserve useful execution history.

## 4. Risk-Based Prioritization Example

| Workflow | Example priority | Reason |
|---|---|---|
| Payment | Critical | A failure can prevent purchase completion |
| Login | High | A failure can prevent account access |
| Add to Cart | High | A failure can interrupt the purchase journey |
| Informational page formatting | Lower, depending on impact | May not prevent core transactions |

These are illustrative priorities. Actual priority should reflect the product's risks, requirements, and business context.

## 5. Review Checklist

- [ ] Each test case has a unique, meaningful ID.
- [ ] Titles describe the behavior being verified.
- [ ] Steps and expected results are clear and testable.
- [ ] Test cases reflect current requirements.
- [ ] Requirement links and coverage have been reviewed.
- [ ] Duplicates have been assessed without losing unique coverage.
- [ ] Execution status accurately reflects the outcome.
- [ ] Blockers include a reason and available evidence.
- [ ] Previous results are associated with their actual executions.
- [ ] Obsolete cases are retired according to team policy.
- [ ] Sensitive or client-specific information is excluded from public documentation.

## Project Outcome

This exercise demonstrates an organized method for maintaining test cases, tracking coverage, prioritizing important workflows, and preserving reliable execution history as requirements and application behavior change.
