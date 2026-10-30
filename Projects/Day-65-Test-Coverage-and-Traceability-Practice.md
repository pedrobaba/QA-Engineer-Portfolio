# Day 65 Project — Test Coverage & Traceability Practice

## Project Overview

This practice project demonstrates how a QA engineer can use a Requirement Traceability Matrix (RTM) to evaluate requirement coverage, identify gaps, and recommend additional testing.

**Project type:** Simulated QA exercise  
**Testing approach:** Requirements-based test coverage analysis  
**Evidence status:** Learning exercise; not a live-client or production application test.

---

## 1. Scenario

A team is preparing a shopping application for release. The product owner has documented five requirements.

The QA engineer must review the requirements and determine whether each one has an associated test case.

## 2. Requirement Traceability Review

| Requirement ID | Requirement | Linked test case | Coverage status |
|---|---|---|---|
| REQ-001 | User login | TC-001 | Covered |
| REQ-002 | Product search | TC-002 | Covered |
| REQ-003 | Add product to cart | TC-003 | Covered |
| REQ-004 | Checkout | None | Not covered |
| REQ-005 | Password reset | TC-004 | Covered |

### Finding

REQ-004 — Checkout has no linked test case.

This represents a requirement-to-test linkage gap.

## 3. Coverage Calculation

Total requirements: 5

Requirements with at least one linked test case: 4

Requirement linkage coverage:

(4 ÷ 5) × 100 = **80%**

The remaining 20% represents the requirement that has no linked test case.

This calculation measures linkage coverage. It does not establish that every linked requirement has complete behavioral coverage.

## 4. Partial Coverage Scenario

A separate requirement states:

> Users must be able to log in using either their email address or phone number.

Available test cases:

| Test case | Description |
|---|---|
| TC-001 | Verify login with a valid email address |
| TC-002 | Verify login with an invalid password using an email address |

### Finding

Email login has been tested, but phone-number login has not.

**Coverage status: Partial**

### Recommended action

Create test cases to verify:

- Successful login using a valid phone number.
- Login using an invalid phone number.
- Login using a valid phone number with an incorrect password.

The new test cases should be linked to the same requirement in the RTM.

## 5. Test Execution Coverage Exercise

A project contains 20 test cases:

| Execution result | Number |
|---|---:|
| Passed | 15 |
| Failed | 3 |
| Not executed | 2 |
| Total | 20 |

Executed test cases = 15 + 3 = 18

Execution coverage:

(18 ÷ 20) × 100 = **90%**

The three failed test cases count as executed because they were run.

## 6. Test Pass Rate Exercise

A separate execution scenario contains:

| Execution result | Number |
|---|---:|
| Passed | 16 |
| Failed | 4 |
| Total executed | 20 |

Pass rate:

(16 ÷ 20) × 100 = **80%**

This demonstrates that execution coverage and pass rate are different metrics.

## 7. Traceability Direction

### Forward Traceability

Requirement → Test Case

Used to verify that requirements have corresponding test cases.

### Backward Traceability

Test Case → Requirement

Used to verify that test cases can be traced back to documented requirements.

Both directions help maintain alignment between requirements and testing activities.

## 8. Release Coverage Review

A payment feature has three requirements:

| Requirement | Coverage status |
|---|---|
| Successful payment | Covered |
| Declined payment | Covered |
| Payment timeout | Not covered |

### QA Recommendation

The QA engineer should:

1. Report the missing payment-timeout coverage.
2. Review the expected timeout behavior.
3. Create a suitable test case.
4. Execute the test case.
5. Update the RTM.
6. Communicate any remaining risk to the relevant stakeholders.

The release decision should consider the impact of the uncovered requirement, not just the overall coverage percentage.

---

## 9. Project Findings

| Finding | QA observation |
|---|---|
| Missing coverage | Checkout had no linked test case |
| Partial coverage | Phone-number login was not tested |
| Execution coverage | Failed tests still count as executed |
| Pass rate | Only passed tests count in the numerator |
| Traceability | Requirements and test cases should be linked in both directions |
| Release risk | Important uncovered functionality should be reported |

## 10. Conclusion

This exercise strengthened my understanding of requirement coverage, test execution coverage, pass rate, and traceability.

I practiced identifying missing and partial coverage, calculating percentages, and recommending additional test cases to close coverage gaps.

**Project outcome:** Completed a simulated requirement coverage and traceability analysis.
