# Day 63 — Test Case Management

## Overview

Day 63 focused on managing test cases throughout the software testing lifecycle. The lesson covered test suite organization, duplicate and outdated cases, risk-based prioritization, blocked execution, requirement traceability, test result history, clear test case titles, and retiring obsolete tests.

## Learning Objectives

By the end of this lesson, I practiced how to:

- Distinguish test cases, test suites, test runs, and test results.
- Organize test cases by feature or functionality.
- Maintain unique test case IDs and traceability.
- Review duplicate and outdated test cases.
- Prioritize testing based on risk and business impact.
- Record blocked tests accurately.
- Understand why historical test results do not confirm current behavior.
- Write clear, specific test case titles.
- Review requirement coverage after changes.
- Retire obsolete test cases while preserving useful history.

## 1. Test Case, Test Suite, and Test Run

### Test Case

A test case contains the conditions, steps, test data, and expected result needed to verify a particular behavior.

### Test Suite

A test suite is an organized collection of related test cases. For example, a checkout suite may contain cases for payment, delivery information, order confirmation, and validation.

### Test Run

A test run is a particular execution of test cases against a specific build, environment, or release.

### Test Result

A test result records the outcome of an execution, such as Passed, Failed, or Blocked.

## 2. Organizing Test Cases

Test cases can be grouped by feature, module, workflow, or testing purpose.

Examples:

- Authentication
- Product Search
- Shopping Cart
- Checkout and Payment
- User Profile

Use unique IDs so each case can be referenced consistently in defect reports, test runs, and requirement traceability records.

## 3. Duplicate Test Cases

Duplicate cases can create unnecessary maintenance and execution effort.

When duplicates are discovered:

1. Compare their purpose, steps, expected results, and coverage.
2. Identify whether they are true duplicates or cover different conditions.
3. Consolidate or retire redundant cases according to the team's process.
4. Preserve relevant execution history and requirement links.
5. Check that no important coverage is lost.

## 4. Updating Outdated Test Cases

Test cases must remain aligned with current requirements.

When a requirement changes:

1. Review the affected test cases.
2. Update steps, data, and expected results where necessary.
3. Check requirement-to-test traceability.
4. Identify missing coverage.
5. Review the updated cases before approval.

Keep the existing ID when the test's purpose remains essentially the same, following the team's conventions. Create a new case when the purpose changes substantially.

## 5. Risk-Based Test Prioritization

When time is limited, prioritize cases using factors such as:

- Business impact if the feature fails.
- Likelihood of failure.
- Criticality of the user journey.
- Scope and complexity of recent changes.
- Dependencies and customer impact.

Critical workflows such as login, checkout, and payment may deserve early attention because failures can prevent users from completing important tasks.

## 6. Blocked Tests

A blocked test cannot be completed because a dependency, environment, service, or other prerequisite is unavailable.

Example:

- **Test:** Complete a customer payment.
- **Blocker:** Payment service unavailable.
- **Status:** Blocked / Unable to Execute.
- **Evidence:** Relevant error message or logs, where available.
- **Next step:** Retry when the service is restored.

A blocked test should not automatically be marked Passed or Failed. Record the actual situation and distinguish infrastructure problems from confirmed product defects.

## 7. Requirement Traceability and Coverage

Requirement traceability links requirements to the test cases that verify them.

After a requirement changes:

1. Identify all affected test cases.
2. Verify that each relevant requirement has appropriate coverage.
3. Update outdated cases.
4. Add new cases for uncovered conditions.
5. Review the mapping before approving the test suite.

This helps reduce gaps and prevents obsolete test steps from being mistaken for valid coverage.

## 8. Historical Results and Current Builds

A test case that passed last week has a historical pass result for that execution. It is not automatically Passed for a new build.

When application behavior changes, execute the relevant tests against the current build and record the new results.

## 9. Clear Test Case Titles

Titles should communicate the behavior or condition being verified.

| Unclear title | Clear title |
|---|---|
| Check button | Verify that Add to Cart adds the selected product to the cart |
| Test form | Verify that checkout displays a validation message when email is empty |
| Check login | Verify that a registered user can log in with valid credentials |

Clear titles improve discoverability, communication, and consistency between testers.

## 10. Retiring Obsolete Test Cases

When a feature is removed, review the related cases and retire obsolete ones according to the team's test management process.

Before retirement:

- Confirm that the feature or requirement is no longer applicable.
- Check for dependent cases and requirement links.
- Preserve historical results and useful traceability.
- Avoid deleting cases merely because they are difficult to maintain.

## Key Takeaways

1. Test cases, suites, runs, and results serve different purposes.
2. Test suites should be organized and maintainable.
3. Duplicate cases should be reviewed before consolidation.
4. Test cases must reflect current requirements.
5. Risk and business impact help determine execution priority.
6. Blocked tests require an accurate status and documented reason.
7. Historical passes do not guarantee current-build behavior.
8. Clear titles make test cases easier to understand and reuse.
9. Requirement traceability helps identify missing coverage.
10. Obsolete cases should be retired carefully, preserving useful history.
