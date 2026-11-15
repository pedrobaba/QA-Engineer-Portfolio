# Day 72 — QA Portfolio Project: Test Execution

## Overview

Day 72 focused on understanding manual test execution, recording actual results, assigning test statuses, handling failed and blocked tests, and reporting testing progress through execution metrics.

The goal was to understand how documented test cases are used to verify an application's actual behaviour.

## 1. What Is Test Execution?

Test execution is the process of carrying out documented test cases against an application to determine whether its actual behaviour matches the expected result.

The process involves:

1. Selecting a test case.
2. Reviewing its preconditions and test data.
3. Following the documented steps.
4. Observing the application's behaviour.
5. Comparing actual results with expected results.
6. Recording the execution status.
7. Capturing evidence where necessary.
8. Reporting defects when unexpected behaviour is confirmed.

## 2. Test Execution Statuses

| Status | Meaning |
|---|---|
| Pass | Actual result matches expected result |
| Fail | Actual result differs from expected result |
| Blocked | An obstacle prevents the test from being completed |
| Not Run | The test has not yet been executed |

A blocked test is not automatically a failed test. The test could not be completed because of an external obstacle or unmet prerequisite.

## 3. Expected Result vs Actual Result

**Expected Result:** The behaviour the application should demonstrate.

**Actual Result:** The behaviour observed when the test is executed.

Example:

- Test Case: TC-001 — Valid Login
- Expected: User successfully accesses the inventory page.
- Actual: Inventory page loads successfully.
- Status: Pass.

This is an illustrative example, not a recorded live execution result.

## 4. Handling Failed Test Cases

When a test fails:

1. Compare the actual result with the expected result.
2. Check whether the test steps were followed correctly.
3. Verify the test data.
4. Check whether the environment caused the issue.
5. Attempt to reproduce the unexpected behaviour.
6. Capture screenshots or recordings.
7. Document a defect if the issue is confirmed.
8. Link the defect to the failed test case.

A failed test does not automatically prove that a software defect exists. Investigation is necessary.

## 5. Test Execution Report

A test execution report communicates the progress and results of testing.

It commonly contains:

- Project name
- Application under test
- Testing environment
- Browser and operating system
- Execution date
- Total test cases
- Executed test cases
- Passed test cases
- Failed test cases
- Blocked test cases
- Not-run test cases
- Defect summary
- Observations and conclusion

## 6. Test Execution Metrics

### Execution Rate

Measures the percentage of planned test cases that have been executed.

Execution Rate = (Executed Test Cases / Total Test Cases) × 100

### Pass Rate

Measures the percentage of executed test cases that passed.

Pass Rate = (Passed Test Cases / Executed Test Cases) × 100

### Failure Rate

Measures the percentage of executed test cases that failed.

Failure Rate = (Failed Test Cases / Executed Test Cases) × 100

### Blocked Rate

Measures the percentage of executed test cases that were blocked.

Blocked Rate = (Blocked Test Cases / Executed Test Cases) × 100

### Example

For an illustrative execution of 15 test cases:

- Passed: 11
- Failed: 3
- Blocked: 1

Pass Rate = 11 / 15 × 100 = 73.33%

Failure Rate = 3 / 15 × 100 = 20%

Blocked Rate = 1 / 15 × 100 = 6.67%

The three percentages add up to 100%.

## 7. Important QA Reporting Principles

- Never record a test as passed without executing it.
- Never invent actual results.
- Keep evidence linked to the relevant test case.
- Investigate failures before confirming defects.
- Report blocked tests and explain why they could not be completed.
- A high pass rate does not automatically mean an application is ready for release.
- Critical failures and unresolved defects must be communicated.

## Key Takeaways

1. Test execution validates documented test cases against actual application behaviour.
2. Expected and actual results must be compared.
3. Pass, Fail, Blocked and Not Run have different meanings.
4. Failed tests require investigation.
5. Execution reports communicate testing progress.
6. Metrics help measure execution progress and test outcomes.
7. Evidence strengthens defect reports.
8. Test results must reflect what actually happened.
