
# Day 60 — Test Management & QA Documentation

## Overview

Day 60 focused on understanding test management and the role of QA documentation in organizing, tracking, and communicating testing activities.

The lesson covered the purpose of common QA documents, requirements traceability, test execution results, defect reporting, and professional QA status updates.

## Learning Objectives

By the end of this lesson, I practiced how to:

- Explain test management and its purpose.
- Distinguish a test plan from a test scenario and test case.
- Explain the purpose of bug reports, test execution reports, and test summary reports.
- Understand Requirements Traceability Matrices (RTMs).
- Calculate test pass rates.
- Communicate testing results, blockers, defects, and risks.
- Write a professional QA status update.

## 1. What Is Test Management?

Test management is the process of planning, organizing, monitoring, and controlling testing activities to help a team assess product quality and communicate testing progress.

Typical activities include:

- Defining testing objectives and scope.
- Planning test activities and resources.
- Assigning responsibilities.
- Monitoring test execution.
- Tracking defects and blockers.
- Managing risks.
- Maintaining QA documentation.
- Reporting testing progress and outcomes.

## 2. Essential QA Documents

### Test Plan

A Test Plan describes the overall testing approach.

It commonly includes:

- Testing objectives and scope.
- Features to be tested and excluded.
- Testing approach and environment.
- Resources and responsibilities.
- Schedule and milestones.
- Risks and dependencies.

### Test Scenario

A Test Scenario describes a high-level area or situation to test.

Example:

Verify that a registered user can log in successfully.

### Test Case

A Test Case provides specific instructions for verifying a behavior.

It may contain:

- Test Case ID and title.
- Preconditions.
- Test data.
- Execution steps.
- Expected results.
- Actual results and status when executed.

Example:

1. Open the login page.
2. Enter valid credentials.
3. Click Login.
4. Verify that the dashboard appears.

### Bug Report

A Bug Report documents an observed defect so it can be investigated and reproduced.

It commonly includes:

- Bug title and description.
- Environment.
- Preconditions and reproduction steps.
- Test data.
- Expected result.
- Actual result.
- Severity and priority, where applicable.
- Supporting evidence.

### Test Execution Report

A Test Execution Report records the outcomes of running test cases.

Typical statuses include:

- Passed.
- Failed.
- Blocked.
- Not Run.

It helps the team understand which tests were executed and what happened during execution.

### Test Summary Report

A Test Summary Report communicates the overall testing results.

It may include:

- Total test cases.
- Passed, failed, and blocked tests.
- Test coverage.
- Open defects.
- Outstanding risks.
- Testing limitations.
- Overall completion status.
- Release-related observations or recommendations.

### Requirements Traceability Matrix (RTM)

An RTM links requirements to their corresponding test cases and may also link defects.

It helps the team identify:

- Requirements without test coverage.
- Test cases associated with each requirement.
- Coverage gaps.
- Relationships between requirements, tests, and defects.

## 3. Understanding the Differences

| Document | Main Purpose |
|---|---|
| Test Plan | Defines the testing approach |
| Test Scenario | Identifies a high-level situation to test |
| Test Case | Defines steps and expected results |
| Bug Report | Documents an observed defect |
| Test Execution Report | Records individual test outcomes |
| Test Summary Report | Summarizes overall testing results and risks |
| RTM | Maps requirements to tests and helps identify coverage gaps |

These documents support one another; they do not all serve the same purpose.

## 4. Calculating the Test Pass Rate

The pass rate is calculated as:

Pass Rate = (Number of Passed Tests / Total Number of Test Cases) × 100

For the Day 60 registration exercise:

- Total test cases: 20
- Passed: 16
- Failed: 3
- Blocked: 1

Calculation:

Pass Rate = (16 / 20) × 100 = 80%

The results are:

- Passed: 80%
- Failed: 15%
- Blocked: 5%

The percentages add up to 100%.

A high pass rate does not automatically mean a feature is ready for release. Open defects, severity, untested areas, and remaining risks must also be considered.

## 5. Registration Testing Exercise

The following results were used in the Day 60 learning exercise.

| Metric | Result |
|---|---:|
| Total test cases | 20 |
| Passed | 16 |
| Failed | 3 |
| Blocked | 1 |
| Pass rate | 80% |
| Open defects | 2 |
| Untested area | Email verification |

The email-verification test was blocked because the test email service was unavailable.

This was a learning exercise. These figures describe the exercise scenario and should not be presented as results from a live production application.

## 6. Professional QA Status Reporting

A useful QA status update should communicate:

1. The scope of testing performed.
2. Total tests and their outcomes.
3. Pass rate.
4. Outstanding defects.
5. Blockers and their actual causes.
6. Untested areas and remaining risks.
7. Recommended next steps.

Example:

The registration feature was tested using 20 test cases, with 16 passed (80%), 3 failed (15%), and 1 blocked (5%). Two defects remain open and require further investigation. The email-verification test was blocked because the test email service was unavailable. Email verification remains untested, and the blocked test should be rerun when the service is restored. The open defects and remaining risk should be reviewed before a release decision is made.

## 7. QA Reporting Principles

- Report actual results honestly.
- Do not mark a blocked test as passed.
- Do not hide failed tests.
- Distinguish observed facts from assumptions.
- Record the actual cause of a blocker when known.
- Include enough detail for others to investigate defects.
- Communicate untested areas and risks.
- Avoid recommending release based only on the pass rate.

## Key Takeaways

1. Test management organizes and monitors testing activities.
2. A Test Plan defines the testing approach.
3. A Test Case defines the steps and expected results.
4. A Test Execution Report records test outcomes.
5. A Test Summary Report communicates overall results and remaining risks.
6. An RTM links requirements to tests and helps identify coverage gaps.
7. A Bug Report documents an observed defect for investigation.
8. QA documentation improves traceability, communication, and accountability.
9. Testing percentages must be calculated accurately.
10. QA should communicate evidence and risk honestly to support informed release decisions.
