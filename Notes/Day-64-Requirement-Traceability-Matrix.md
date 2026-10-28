# Day 64 — Requirement Traceability Matrix (RTM)

## Overview

A Requirement Traceability Matrix (RTM) is a QA document used to map requirements to their corresponding test cases. It helps teams track test coverage, identify gaps, assess the impact of requirement changes, and understand testing status.

## Learning Objectives

- Explain the purpose of an RTM.
- Map requirements to appropriate test cases.
- Identify missing and partial test coverage.
- Calculate requirement-to-test linkage coverage.
- Distinguish test coverage from execution status.
- Use traceability for change impact analysis and regression testing.
- Report coverage gaps, failures, and unexecuted tests accurately.

## 1. What Is an RTM?

An RTM links requirements to test cases and may also include execution results, defects, and release information.

A basic RTM contains:

| Field | Purpose |
|---|---|
| Requirement ID | Unique identifier for a requirement |
| Requirement description | What the system must do |
| Test Case ID | Test case linked to the requirement |
| Coverage status | Whether the requirement has appropriate test coverage |
| Execution status | Whether the linked test passed, failed, or has not run |
| Defect ID | Related defect, where applicable |

## 2. Why QA Uses an RTM

- Verify that requirements have corresponding test coverage.
- Identify requirements without linked test cases.
- Detect test cases that have no valid requirement link.
- Assess which tests may be affected by a requirement change.
- Support regression-test selection.
- Communicate testing progress and unresolved risks.
- Provide evidence of requirement coverage during reviews and audits.

## 3. Requirement Coverage vs. Execution Status

These are separate concepts.

**Requirement-to-test linkage coverage:** Measures how many requirements have at least one linked test case.

**Execution status:** Records the outcome of running a test case.

| Situation | Interpretation |
|---|---|
| Requirement has a linked test that passed | Linked and passed |
| Requirement has a linked test that failed | Linked, but failure needs investigation |
| Requirement has a linked test that has not run | Linked, but outcome is unknown |
| Requirement has no linked test | Potential coverage gap |
| Test case has no valid requirement link | Investigate whether a requirement is missing or the test is out of scope |

A linked test case does not automatically mean that the requirement has passed.

## 4. Calculating Requirement Coverage

A common linkage-coverage calculation is:

Requirement Coverage (%) = (Requirements with at least one linked test case / Total requirements) × 100

### Example

A project has 20 requirements. Sixteen have at least one linked test case.

Coverage = (16 / 20) × 100 = 80%

This measures linkage, not successful execution or product quality.

## 5. Identifying Partial Coverage

A test case may cover only part of a requirement.

Example:

- Requirement: A user can reset a password using a valid reset link.
- Test case: Verify that a user can request a password-reset email.
- Gap: The test does not verify that the link works or that the password changes successfully.

QA should add or update test cases to cover the missing behavior.

## 6. Change Impact Analysis

When a requirement changes:

1. Identify the changed requirement.
2. Find all linked test cases in the RTM.
3. Review the test steps, test data, and expected results.
4. Update outdated test cases.
5. Identify additional tests affected by the change.
6. Select appropriate regression tests based on impact and risk.
7. Update the RTM and record execution results after testing.

## 7. Practical Example

| Requirement ID | Requirement | Test Case ID | Execution Status |
|---|---|---|---|
| REQ-031 | User can log in with valid credentials | TC-101 | Passed |
| REQ-032 | Invalid login attempts are handled correctly | TC-102 | Failed |
| REQ-033 | User can reset a forgotten password | — | Not linked |
| REQ-034 | Checkout validates payment details | TC-104 | Not Run |

### Interpretation

- REQ-031 has a linked test that passed.
- REQ-032 has a linked test that failed and requires investigation.
- REQ-033 has no linked test case, so a coverage gap must be investigated.
- REQ-034 has a linked test, but its execution outcome is unknown.

## 8. Common RTM Mistakes

- Treating a linked test case as proof that a requirement passed.
- Assuming a requirement is covered when only part of its behavior is tested.
- Leaving the RTM unchanged after a requirement changes.
- Deleting unlinked test cases before investigating their purpose.
- Arbitrarily linking a test case to an unrelated requirement.
- Reporting unexecuted tests as passed.
- Confusing linkage coverage with pass rate.

## Key Takeaways

1. An RTM connects requirements to test cases.
2. Every requirement should have appropriate test coverage.
3. Coverage and execution results must be tracked separately.
4. Partial coverage requires additional test analysis.
5. Requirement changes should trigger impact analysis.
6. The RTM supports regression planning and clear release reporting.
7. QA must report actual results accurately and never assume an unknown outcome is a pass.
