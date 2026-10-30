# Day 65 — Test Coverage & Traceability Practice

## Overview

Day 65 focused on applying requirement coverage and traceability concepts to practical QA scenarios.

The goal was to understand how QA engineers determine whether requirements are covered by test cases, identify missing or partial coverage, calculate coverage percentages, and use traceability findings to guide further testing.

## Learning Objectives

By the end of this lesson, I practiced how to:

- Evaluate requirement-to-test-case coverage.
- Identify requirements with no linked test cases.
- Recognize partial requirement coverage.
- Calculate requirement coverage and test execution coverage.
- Calculate test pass rates.
- Understand forward and backward traceability.
- Use coverage gaps to recommend additional testing.
- Interpret traceability information when assessing release readiness.

---

## 1. What Is Test Coverage?

Test coverage describes how much of the application, requirements, or specified functionality has been tested.

In requirements-based testing, requirement coverage measures how many documented requirements have corresponding test coverage.

A requirement is not necessarily fully covered just because a test case is linked to it. The test case must verify the relevant parts of the requirement.

### Example

A login requirement states:

> Users must be able to log in using either their email address or phone number.

If the QA team tests email login but does not test phone-number login, the requirement has only partial coverage.

---

## 2. Requirement Coverage Calculation

When each requirement counts equally:

**Requirement linkage coverage**

Coverage = (Requirements with at least one linked test case ÷ Total requirements) × 100

Example:

- Total requirements: 5
- Requirements with linked test cases: 4

Coverage = (4 ÷ 5) × 100 = **80%**

Important: This measures linkage coverage. It does not automatically prove that every linked requirement is fully tested.

### Complete Requirement Coverage

When complete coverage is required, count only requirements whose specified behavior has been fully covered by appropriate test cases.

Example:

- Total requirements: 4
- Fully covered requirements: 3

Complete coverage = (3 ÷ 4) × 100 = **75%**

---

## 3. Missing and Partial Coverage

### Missing Coverage

A requirement has missing coverage when no test case is linked to it.

Example:

| Requirement | Linked test case |
|---|---|
| User login | TC-001 |
| Product search | TC-002 |
| Checkout | None |

The checkout requirement has a coverage gap.

### Partial Coverage

A requirement has partial coverage when existing test cases verify only some of its expected behavior.

Example:

| Requirement | Test coverage |
|---|---|
| Login using email or phone number | Email login only |

The phone-number login path remains untested.

### QA Action

When a coverage gap is identified:

1. Review the requirement.
2. Identify the missing behavior.
3. Create appropriate test cases.
4. Execute the new test cases.
5. Record the results.
6. Update the traceability matrix.

---

## 4. Forward and Backward Traceability

### Forward Traceability

Forward traceability follows a requirement to its corresponding test cases.

**Direction:**

Requirement → Test Case

It helps QA determine whether documented requirements have been translated into test cases.

### Backward Traceability

Backward traceability follows a test case back to the requirement it is intended to verify.

**Direction:**

Test Case → Requirement

It helps QA identify test cases that are not supported by documented requirements and check whether testing remains aligned with the project scope.

---

## 5. Test Execution Coverage

Test execution coverage measures the proportion of documented test cases that have actually been executed.

**Formula:**

Execution Coverage = (Executed test cases ÷ Total test cases) × 100

Example:

- Total test cases: 20
- Passed: 15
- Failed: 3
- Not executed: 2

Executed test cases = 15 + 3 = 18

Execution coverage = (18 ÷ 20) × 100 = **90%**

Both passed and failed test cases count as executed.

---

## 6. Test Pass Rate

Test pass rate measures the proportion of executed test cases that passed.

**Formula:**

Pass Rate = (Passed test cases ÷ Executed test cases) × 100

Example:

- Passed: 16
- Failed: 4
- Executed: 20

Pass rate = (16 ÷ 20) × 100 = **80%**

### Important Difference

| Metric | What it measures |
|---|---|
| Requirement linkage coverage | Requirements with linked test cases |
| Complete requirement coverage | Requirements whose specified behavior is fully tested |
| Test execution coverage | Test cases actually executed |
| Test pass rate | Executed test cases that passed |

A project can have 100% execution coverage but a pass rate below 100%.

---

## 7. Using Coverage to Support Release Decisions

Coverage information helps QA communicate testing gaps and risks before release.

Example:

A payment feature has these requirements:

- Successful payment — covered.
- Declined payment — covered.
- Payment timeout — not covered.

The QA engineer should report the missing timeout coverage, recommend creating and executing an appropriate test case, and communicate any remaining risk.

A high coverage percentage alone does not guarantee software quality. The importance of the requirements and the quality of the test cases also matter.

---

## 8. Day 65 Practical Assessment

The exercises covered:

- Requirement linkage coverage.
- Identifying missing test cases.
- Calculating test execution coverage.
- Forward traceability.
- Partial requirement coverage.
- Responding to coverage gaps.
- Calculating test pass rates.
- Backward traceability.
- Coverage decisions before release.

### Assessment Result

- Correct answers: 9
- Incorrect answers: 1
- Valid questions: 9
- Task 4 was answered incorrectly; the correct concept was forward traceability.

Task 10 was excluded from the valid-question score because its wording did not establish whether the partially covered requirement was included among the nine requirements with linked test cases. The intended answer could not be established unambiguously.

**Result: 9/9 valid questions correct.**

---

## Key Takeaways

1. Test coverage helps determine how much of the required functionality has been tested.
2. A linked test case does not automatically mean a requirement is fully covered.
3. Missing coverage means a requirement has no linked test case.
4. Partial coverage means only some expected behavior has been tested.
5. Forward traceability follows Requirement → Test Case.
6. Backward traceability follows Test Case → Requirement.
7. Failed test cases still count as executed.
8. Execution coverage and pass rate measure different things.
9. Coverage gaps should be documented and addressed.
10. Coverage metrics should support risk-based testing and release decisions.
