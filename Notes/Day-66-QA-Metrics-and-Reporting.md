# Day 66 — QA Metrics & Reporting

## Overview

Day 66 focused on understanding QA metrics and how testing results are communicated through reports.

The goal was to learn how to calculate common testing metrics, interpret defect trends, monitor testing progress, and communicate quality risks to project stakeholders.

## Learning Objectives

By the end of Day 66, I practiced how to:

- Calculate test pass rate.
- Calculate test execution coverage.
- Understand defect distribution by severity.
- Calculate defect reopen rate.
- Calculate defect fix rate.
- Calculate defect rejection rate.
- Interpret defect trends across testing cycles.
- Understand test execution summary reports.
- Communicate testing progress and outstanding risks.

---

## 1. What Are QA Metrics?

QA metrics are measurable indicators used to evaluate testing activities, track defects, monitor progress, and communicate information about software quality.

They help QA engineers and stakeholders understand:

- How much testing has been completed.
- How many test cases passed or failed.
- How many defects have been discovered.
- How serious reported defects are.
- How many defects remain unresolved.
- Whether testing is progressing as expected.

Metrics provide useful information, but they do not independently guarantee software quality.

---

## 2. Test Pass Rate

Test pass rate measures the percentage of executed test cases that passed.

**Formula:**

`Test Pass Rate = (Passed Test Cases / Executed Test Cases) × 100`

### Example

A QA team has:

- 40 passed test cases.
- 10 failed test cases.
- 50 executed test cases.

Calculation:

`(40 / 50) × 100 = 80%`

**Test pass rate = 80%**

Important: Blocked and not-executed test cases are not included in the executed-test denominator.

---

## 3. Test Execution Coverage

Test execution coverage measures the percentage of the total test cases that have actually been executed.

**Formula:**

`Execution Coverage = (Executed Test Cases / Total Test Cases) × 100`

### Example

- Total test cases: 80
- Executed test cases: 60
- Not executed: 20

Calculation:

`(60 / 80) × 100 = 75%`

**Execution coverage = 75%**

Both passed and failed test cases count as executed.

### Difference Between Pass Rate and Execution Coverage

| Metric | What it measures |
|---|---|
| Test pass rate | Percentage of executed tests that passed |
| Execution coverage | Percentage of total tests that were executed |

A project can have 100% execution coverage while still having failed test cases.

---

## 4. Defect Distribution by Severity

Defect distribution by severity shows how reported defects are grouped according to their severity.

Common severity levels include:

| Severity | Description |
|---|---|
| Critical | A serious defect that prevents essential functionality or creates major risk |
| High | A significant defect affecting important functionality |
| Medium | A defect with a moderate impact or available workaround |
| Low | A minor defect with limited impact |

### Example

A testing team reports:

| Severity | Number of defects |
|---|---:|
| Critical | 3 |
| High | 7 |
| Medium | 12 |
| Low | 8 |
| Total | 30 |

This report helps the team understand the severity profile of discovered defects.

---

## 5. Defect Reopen Rate

Defect reopen rate measures the percentage of previously closed defects that were reopened.

A defect may be reopened when:

- The fix does not resolve the original problem.
- The defect still occurs during retesting.
- The fix introduces another problem affecting the original functionality.
- The reported issue was not properly addressed.

**Formula:**

`Defect Reopen Rate = (Reopened Defects / Closed Defects) × 100`

### Example

- Closed defects: 40
- Reopened defects: 6

Calculation:

`(6 / 40) × 100 = 15%`

**Defect reopen rate = 15%**

---

## 6. Defect Fix Rate

Defect fix rate measures the percentage of reported defects that have been fixed and verified.

**Formula used in this exercise:**

`Defect Fix Rate = (Fixed and Verified Defects / Reported Defects) × 100`

### Example

- Reported defects: 50
- Fixed and verified defects: 35

Calculation:

`(35 / 50) × 100 = 70%`

**Defect fix rate = 70%**

A defect should not be considered successfully resolved simply because a developer says it has been fixed. QA should verify the fix.

---

## 7. Defect Rejection Rate

Defect rejection rate measures the percentage of submitted defect reports that are rejected after review.

Possible rejection reasons include:

- Duplicate defect.
- Invalid defect report.
- Expected application behavior.
- Issue cannot be reproduced.
- Insufficient evidence to confirm the problem.

**Formula:**

`Defect Rejection Rate = (Rejected Defects / Submitted Defects) × 100`

### Example

- Submitted defects: 30
- Rejected defects: 6

Calculation:

`(6 / 30) × 100 = 20%`

**Defect rejection rate = 20%**

A rejected defect does not automatically mean the QA engineer performed poorly. The rejection reason should be reviewed.

---

## 8. Defect Trend Analysis

Defect trend analysis involves comparing defect information across different testing cycles or periods.

### Example

| Metric | Cycle 1 | Cycle 2 |
|---|---:|---:|
| Total defects | 25 | 40 |
| Critical defects | 5 | 2 |
| High defects | 8 | 6 |

### Observation

- Total defects increased from 25 to 40.
- Critical defects decreased from 5 to 2.
- High defects decreased from 8 to 6.

This indicates that the overall defect count increased while the number of Critical and High defects decreased.

However, this information alone does not prove that software quality improved or worsened.

The QA engineer should also consider:

- Differences in testing scope.
- New functionality introduced.
- Number of test cases executed.
- Defect impact.
- Testing environment.
- Whether previously reported defects were fixed.

---

## 9. Test Execution Summary Report

A test execution summary report provides an overview of test progress and results during a testing cycle.

It commonly includes:

- Total test cases.
- Passed test cases.
- Failed test cases.
- Blocked test cases.
- Not-executed test cases.
- Execution coverage.
- Test pass rate.
- Important defects.
- Testing risks and observations.

### Example

A project has 100 test cases:

| Result | Number |
|---|---:|
| Passed | 85 |
| Failed | 10 |
| Blocked | 5 |
| Total | 100 |

Executed test cases:

`85 + 10 = 95`

Execution coverage:

`(95 / 100) × 100 = 95%`

Pass rate:

`(85 / 95) × 100 = 89.47%`

The pass rate uses executed test cases as its denominator, while execution coverage uses all documented test cases.

---

## 10. Communicating QA Results and Release Risks

A QA engineer must communicate testing results clearly and avoid making release recommendations based only on a high pass rate.

### Example

A test report shows:

- 85 passed test cases.
- 10 failed test cases.
- 5 blocked test cases.
- 3 open Critical defects.

An appropriate QA summary should communicate:

1. The number of passed, failed and blocked tests.
2. The execution coverage.
3. The test pass rate.
4. The open Critical defects.
5. The outstanding testing risks.
6. Any recommended next steps.

A high pass rate does not eliminate the risk created by unresolved Critical defects.

---

## 11. Important QA Metrics Summary

| Metric | Formula |
|---|---|
| Test pass rate | Passed / Executed × 100 |
| Test execution coverage | Executed / Total × 100 |
| Defect reopen rate | Reopened / Closed × 100 |
| Defect fix rate | Fixed and verified / Reported × 100 |
| Defect rejection rate | Rejected / Submitted × 100 |

Always confirm the metric definition, reporting period and denominator before interpreting a real QA report.

---

## Assessment Result

Day 66 assessment:

- Questions answered: 10
- Correct answers: 10
- Incorrect answers: 0
- Final score: 10/10
- Percentage: 100%

### Key Takeaways

1. QA metrics help measure testing progress and communicate results.
2. Test pass rate measures the percentage of executed tests that passed.
3. Execution coverage measures the percentage of total tests executed.
4. Failed tests count as executed.
5. Defect distribution helps communicate the severity of reported defects.
6. Defect reopen rate helps monitor the effectiveness of fixes.
7. Defect fix rate should account for defects that have been fixed and verified.
8. Defect rejection reasons should be reviewed.
9. Defect trends require context before conclusions are drawn.
10. QA reports should communicate both successful results and outstanding risks.
