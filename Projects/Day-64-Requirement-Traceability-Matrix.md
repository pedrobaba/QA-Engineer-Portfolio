# Day 64 — Practical RTM Project

## Project Overview

**Project:** Requirement Traceability Matrix Practice  
**Focus:** Requirement-to-test mapping, coverage gaps, execution status, and change impact analysis  
**Project type:** Illustrative QA portfolio exercise

This exercise demonstrates how a QA tester can organize requirement coverage and report testing gaps. The sample requirements, test case IDs, and results are illustrative.

## 1. Sample Requirements

| Requirement ID | Requirement |
|---|---|
| REQ-031 | Users can log in with valid credentials |
| REQ-032 | Invalid login attempts are handled correctly |
| REQ-033 | Users can reset a forgotten password |
| REQ-034 | Checkout validates payment details |

## 2. Requirement Traceability Matrix

| Requirement ID | Test Case ID | Test Coverage | Execution Status | Follow-up |
|---|---|---|---|---|
| REQ-031 | TC-101 | Login with valid credentials | Passed | No immediate follow-up |
| REQ-032 | TC-102 | Invalid login behavior | Failed | Investigate the failure |
| REQ-033 | — | Password-reset workflow | Not linked | Identify or create appropriate test cases |
| REQ-034 | TC-104 | Payment validation | Not Run | Execute the test and record the result |

## 3. Findings

### Finding 1: Failed test

TC-102 is linked to REQ-032 but has a failed result. The failure must be investigated against the expected behavior. A defect should be recorded if the observed behavior violates the requirement.

### Finding 2: Missing test linkage

REQ-033 has no linked test case. This is a traceability gap that requires investigation and appropriate test coverage.

### Finding 3: Unexecuted test

TC-104 is linked to REQ-034 but has not been executed. Its outcome is unknown and must not be reported as passed.

### Finding 4: Passing test

TC-101 is linked to REQ-031 and has a passing result in this illustrative example.

## 4. Coverage Calculation

The example contains four requirements. Three have at least one linked test case.

Requirement-to-test linkage coverage:

(3 / 4) × 100 = 75%

**Interpretation:** Linkage coverage is 75%. This does not mean that 75% of requirements have passed. One linked test failed and another has not been executed.

## 5. Change Impact Scenario

Suppose REQ-034 changes to require an additional payment-validation rule.

QA should:

1. Review the changed requirement.
2. Inspect TC-104 and any other relevant checkout tests.
3. Update expected results and test data where necessary.
4. Identify additional tests affected by the change.
5. Select regression tests based on risk.
6. Execute the relevant tests.
7. Update the RTM with the latest test links and results.

## 6. Release-Readiness Summary

Based on the illustrative matrix:

- One linked test passed.
- One linked test failed.
- One requirement has no linked test case.
- One linked test has not been executed.

These findings should be investigated before the team makes a release decision. This matrix alone is not sufficient to declare a release ready or unready; release criteria and risk acceptance must also be considered.

## 7. What This Exercise Demonstrates

- Mapping requirements to test cases.
- Identifying missing traceability.
- Separating test linkage from execution status.
- Calculating linkage coverage.
- Reporting failures and unexecuted tests.
- Using an RTM to support change impact and regression planning.

## Conclusion

An RTM helps QA teams understand what is tested, what remains untested, and which test results require attention. Maintaining accurate links and status information supports clearer test reporting and more informed release decisions.
