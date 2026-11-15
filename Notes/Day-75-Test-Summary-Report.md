# Day 75 — Test Summary Report

## Overview

Day 75 focused on understanding, preparing and interpreting a Test Summary Report (TSR).

A Test Summary Report communicates the overall outcome of a testing cycle. It helps stakeholders understand what was tested, the execution results, discovered defects, outstanding tests, risks and recommendations.

## 1. Purpose of a Test Summary Report

A TSR is prepared to:

- Communicate the overall testing outcome.
- Summarise test execution statistics.
- Highlight defects and their severity.
- Identify blocked and unexecuted test cases.
- Communicate testing risks and limitations.
- Support informed release decisions.

## 2. Main Sections of a TSR

1. Project overview
2. Testing objectives
3. Testing scope
4. Test environment and tools
5. Test execution summary
6. Test metrics
7. Defect summary
8. Outstanding tests
9. Risks and limitations
10. Conclusion and recommendations

## 3. Test Metrics

### Execution Rate

Measures the percentage of planned test cases that were executed.

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

Not Run test cases are excluded from the executed-test denominator.

## 4. Severity vs Priority

**Severity** describes the impact of a defect on the application.

**Priority** describes how urgently the defect should be fixed.

Examples:

- Critical: essential application functionality is unusable.
- High: major functionality is affected.
- Medium: functionality is affected but a workaround may exist.
- Low: minor issue with limited impact.

## 5. Testing Risks

Examples of testing risks include:

- Unavailable test environment.
- Incomplete test execution.
- Unresolved critical defects.
- Insufficient test data.
- Fixes that have not been retested.

QA should document these risks and communicate their potential impact.

## 6. Release Readiness

A high pass rate alone does not establish release readiness.

QA should consider:

- Critical and high-severity defects.
- Important failed test cases.
- Blocked and unexecuted tests.
- Completion of critical workflows.
- Retesting of fixed defects.
- Outstanding business and technical risks.

The authorised stakeholders make the final release decision.

## 7. SauceDemo Portfolio Application

The Day 75 exercise used the SauceDemo QA portfolio project.

The last recorded execution status was:

| Status | Count |
|---|---:|
| Total | 22 |
| Passed | 0 |
| Failed | 0 |
| Blocked | 0 |
| Not Run | 22 |
| Executed | 0 |

Execution rate = 0%.

Pass, failure and blocked rates are N/A because no tests were recorded as executed.

Three simulated bug-report examples from Day 73 remain unverified and must not be presented as confirmed defects.

## Key Takeaways

1. A TSR communicates the overall testing outcome.
2. Execution rate and pass rate measure different things.
3. Pass, failure and blocked rates use executed test cases as their denominator.
4. Severity and priority are different concepts.
5. QA must communicate risks and outstanding tests.
6. A high pass rate does not automatically mean an application is ready for release.
7. Test reports must reflect actual evidence, not assumed results.
