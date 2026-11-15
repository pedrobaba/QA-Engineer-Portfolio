# Day 69 — End-to-End Manual Testing

## Overview

Day 69 focused on understanding the complete end-to-end manual testing process using SauceDemo as a practice application.

The objective was to understand how QA engineers plan, execute, document and close a testing project.

## Learning Objectives

By the end of this lesson, I learned how to:

- Define testing scope and objectives.
- Identify end-to-end test scenarios.
- Convert test scenarios into detailed test cases.
- Execute test cases and record results.
- Understand Passed, Failed, Blocked and Not Run statuses.
- Calculate test execution and pass rates.
- Report defects professionally.
- Collect screenshots, recordings and logs as test evidence.
- Distinguish retesting from regression testing.
- Prepare a test summary report.
- Document lessons learned and close a testing project.

## 1. Testing Scope

Testing scope defines what will and will not be tested in a project.

### In Scope

- User authentication.
- Product inventory display.
- Shopping cart management.
- Checkout information validation.
- Order overview.
- Order completion and confirmation.

### Out of Scope

- Real payment gateway integration.
- Performance and load testing.
- Advanced security and penetration testing.

## 2. End-to-End Test Scenarios

A test scenario describes a high-level functionality or user journey that needs to be tested.

Examples:

- Verify successful login.
- Verify unsuccessful login.
- Verify product information display.
- Verify adding products to the cart.
- Verify removing products from the cart.
- Verify checkout validation.
- Verify successful order completion.

## 3. Test Cases

A test case provides detailed instructions for verifying a particular functionality.

A good test case contains:

- Test Case ID.
- Test scenario reference.
- Preconditions.
- Test data.
- Test steps.
- Expected results.
- Actual results.
- Execution status.

### Test Scenario vs Test Case

A test scenario describes what to test, while a test case explains how to test it.

One test scenario can have multiple test cases.

## 4. Test Execution

Test execution involves running test cases and comparing actual results with expected results.

### Test Execution Statuses

| Status | Meaning |
|---|---|
| Passed | Actual result matches expected result. |
| Failed | Actual result differs from expected result. |
| Blocked | Testing cannot continue because of a dependency or issue. |
| Not Run | Test case has not been executed. |

### Test Execution Metrics

Execution rate:

Execution Rate = (Executed Test Cases / Total Test Cases) × 100

Pass rate:

Pass Rate = (Passed Test Cases / Executed Test Cases) × 100

Failure rate:

Failure Rate = (Failed Test Cases / Executed Test Cases) × 100

Example:

- Total test cases: 7
- Passed: 6
- Failed: 1
- Blocked: 0
- Not Run: 0

Execution rate = 7 / 7 × 100 = 100%

Pass rate = 6 / 7 × 100 = 85.71%

Failure rate = 1 / 7 × 100 = 14.29%

## 5. Bug Reporting

A bug report documents an identified problem in an application.

Important fields include:

- Bug ID.
- Bug title.
- Environment.
- Preconditions.
- Steps to reproduce.
- Expected result.
- Actual result.
- Severity.
- Priority.
- Evidence.
- Related test case.

### Severity vs Priority

Severity measures the impact of a defect on the application.

Priority determines how urgently the defect should be fixed.

They are related but not interchangeable.

## 6. Test Evidence

Test evidence supports test execution results and defect reports.

Examples include:

- Screenshots.
- Screen recordings.
- Browser console logs.
- Network logs.
- Relevant application responses.

Evidence should be clear, relevant and organised.

## 7. Retesting vs Regression Testing

### Retesting

Retesting verifies whether a previously reported defect has been fixed.

### Regression Testing

Regression testing checks whether existing functionality still works after changes have been made to the application.

Example:

After a checkout defect is fixed, QA should retest checkout and run relevant regression tests on the cart, checkout validation and order calculations.

## 8. Test Summary Report

A Test Summary Report communicates the overall testing outcome.

It typically includes:

- Project overview.
- Testing scope.
- Test environment.
- Test execution metrics.
- Defect summary.
- Regression testing results.
- Outstanding risks.
- Conclusion and recommendation.

QA communicates test results and risks. Final release decisions may involve other stakeholders.

## 9. Test Closure and Lessons Learned

Test closure involves reviewing whether testing objectives and exit criteria have been met, documenting results, reviewing outstanding defects, organising test artefacts and recording lessons learned.

### Key Takeaways

1. Testing begins with understanding the scope.
2. Test scenarios establish what needs to be tested.
3. Test cases provide detailed execution instructions.
4. Actual results must be compared with expected results.
5. Test failures should be investigated before reporting defects.
6. Defect reports must be clear and reproducible.
7. Retesting and regression testing serve different purposes.
8. Test metrics help communicate testing progress and outcomes.
9. Test summary reports document the overall testing outcome.
10. Test closure helps improve future testing activities.

## Practical Application

Application: SauceDemo

Website: https://www.saucedemo.com/

This lesson used illustrative examples to demonstrate the end-to-end testing workflow. Actual execution, screenshots and defect evidence must be collected during independent practical testing.
