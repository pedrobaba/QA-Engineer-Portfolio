# SauceDemo QA Portfolio Project — Planning

## Project Information

| Field | Details |
|---|---|
| Project Name | SauceDemo QA Portfolio Project |
| Application | SauceDemo |
| Project Type | Manual QA Testing |
| Testing Approach | Black-box testing |
| Project Phase | Planning |
| Status | Planning completed |
| Planned Automation | Playwright |

## 1. Project Overview

This project aims to evaluate the functionality of the SauceDemo e-commerce application through structured manual testing.

The project will cover authentication, product inventory, shopping cart operations, checkout validation and order completion.

The goal is to demonstrate practical QA skills through test planning, test case design, execution, defect reporting, evidence collection and test reporting.

## 2. Project Objectives

- Validate important user journeys.
- Identify functional defects.
- Verify positive and negative application behaviour.
- Assess checkout validation.
- Verify order calculations.
- Document defects professionally.
- Produce reproducible test evidence.
- Prepare manual test cases for future automation.

## 3. Scope

### In Scope

- Authentication
- Inventory display
- Product sorting
- Shopping cart
- Checkout validation
- Order summary
- Order completion
- Logout

### Out of Scope

- Real payment processing
- Bank transactions
- Production database testing
- Advanced performance testing
- Penetration testing
- Unsupported third-party integrations

## 4. Users and Workflows

Account types considered:

- Standard user
- Locked-out user
- Problem user
- Performance glitch user

Critical workflows:

1. Login
2. Browse and sort products
3. Add products to cart
4. Remove products from cart
5. Complete checkout
6. Logout

## 5. Testing Strategy

Testing types:

- Functional
- Positive
- Negative
- Boundary
- Exploratory
- UI
- Regression
- End-to-end
- Compatibility

Approaches:

- Risk-based testing
- Scenario-based testing
- Black-box testing
- Manual testing

## 6. Scenario Coverage

The initial plan contains 22 scenarios covering authentication, inventory, cart operations, checkout and session management.

Scenario IDs range from `TS-001` to `TS-022`.

Detailed scenarios will be maintained in `Test-Scenarios.md`.

## 7. Test Case Design

Test cases will use the following fields:

- Test Case ID
- Scenario ID
- Title
- Preconditions
- Test Data
- Test Steps
- Expected Result
- Actual Result
- Priority
- Status
- Evidence

Detailed test cases will be maintained in `Test-Cases.md`.

## 8. Test Data

Planned data includes:

- Valid and invalid login credentials
- Locked-out user account
- Product names and prices
- Valid checkout information
- Missing checkout fields
- Product sorting options

No real customer information will be used.

## 9. Tools

| Tool | Purpose |
|---|---|
| SauceDemo | Application under test |
| Chrome | Primary browser |
| Firefox | Compatibility checks |
| VS Code | Documentation and future automation |
| GitHub | Version control and portfolio |
| Excel / Google Sheets | Test management |
| Snipping Tool | Evidence collection |
| Playwright | Planned browser automation |

## 10. Environment

The environment details will be recorded during actual execution.

Required details:

- Operating system and version
- Browser and version
- Screen resolution
- Application URL
- Test account
- Date of execution

## 11. Deliverables

- Project Overview
- Test Plan
- Test Scenarios
- Test Cases
- Test Execution Report
- Bug Reports
- Test Evidence
- Test Summary Report
- Lessons Learned

## 12. Exit Criteria

- Critical test cases executed.
- High-priority test coverage completed or blockers documented.
- Failed tests investigated.
- Defects recorded.
- Relevant regression tests completed.
- Outstanding risks communicated.
- Test summary prepared.

## 13. Assumptions and Limitations

- Testing will use the publicly accessible SauceDemo demonstration application.
- Testing is limited to functionality available through its user interface and supported test accounts.
- No production database or payment infrastructure access is assumed.
- Test results will be recorded only after actual execution.
- The demonstration environment may change independently of this portfolio project.

## 14. Future Automation

Selected manual test cases will provide the basis for future Playwright automation.

Potential automation targets:

- Login
- Product browsing
- Shopping cart
- Checkout
- Order confirmation

## Project Status

**Planning phase completed — Day 70.**

The project will continue with test case development on Day 71.

**Testing integrity statement:** This document represents the project plan. It does not represent completed test execution or verified defect findings.
