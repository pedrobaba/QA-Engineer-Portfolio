# Day 66 Project — QA Metrics & Test Execution Reporting

## Project Overview

This project demonstrates how a QA engineer can calculate common testing metrics and prepare a test execution summary report.

**Project type:** Simulated QA reporting exercise  
**Testing approach:** Test execution analysis and defect metrics  
**Evidence status:** Learning exercise using illustrative data, not a live-client or production application test.

---

## 1. Project Scenario

A QA team has completed a testing cycle for a shopping application.

The project manager requests a report showing testing progress, test results, defect information and outstanding risks.

The QA engineer must calculate the relevant metrics and communicate the results.

## 2. Test Execution Results

The test team has 100 documented test cases.

| Test result | Number |
|---|---:|
| Passed | 85 |
| Failed | 10 |
| Blocked | 5 |
| Not executed | 0 |
| Total | 100 |

### Execution Coverage

Executed test cases:

`85 + 10 = 95`

Execution coverage:

`(95 / 100) × 100 = 95%`

**Execution coverage: 95%**

### Test Pass Rate

Pass rate:

`(85 / 95) × 100 = 89.47%`

**Test pass rate: 89.47%**

### Test Failure Rate

Failure rate:

`(10 / 95) × 100 = 10.53%`

**Test failure rate: 10.53%**

The five blocked test cases are not included in the executed-test denominator.

---

## 3. Defect Distribution by Severity

The team identifies the following defects:

| Severity | Number of defects |
|---|---:|
| Critical | 3 |
| High | 5 |
| Medium | 8 |
| Low | 4 |
| Total | 20 |

### Observation

- 3 Critical defects require urgent attention.
- 5 High-severity defects affect important functionality.
- 8 Medium defects have a moderate impact.
- 4 Low defects have a relatively limited impact.

The team should prioritize defect investigation and resolution based on impact, risk and project priorities.

---

## 4. Defect Reopen Rate

The development team closed 40 defects.

During retesting, 6 defects were reopened because their fixes were not effective.

Calculation:

`(6 / 40) × 100 = 15%`

**Defect reopen rate: 15%**

### QA Observation

The reopened defects should be investigated to understand why the original fixes did not resolve the reported problems.

---

## 5. Defect Fix Rate

The team received 50 defect reports and successfully fixed and verified 35.

Calculation:

`(35 / 50) × 100 = 70%`

**Defect fix rate: 70%**

### QA Observation

Fifteen reported defects have not yet reached the fixed-and-verified state.

The team should review their current statuses and agree on the next actions.

---

## 6. Defect Rejection Rate

The QA team submitted 30 defect reports.

Six were rejected after review.

Calculation:

`(6 / 30) × 100 = 20%`

**Defect rejection rate: 20%**

### QA Observation

The QA engineer should review the rejection reasons, especially where defects were marked as duplicates, invalid or unreproducible.

This can help improve future defect reports.

---

## 7. Defect Trend Analysis

The team compares two testing cycles:

| Metric | Cycle 1 | Cycle 2 |
|---|---:|---:|
| Total defects | 25 | 40 |
| Critical defects | 5 | 2 |
| High defects | 8 | 6 |

### Analysis

The total number of reported defects increased by 15.

However:

- Critical defects decreased by 3.
- High defects decreased by 2.

This suggests a change in the distribution of discovered defects.

It does not independently establish that the application's quality improved. The team should compare testing scope, functionality and defect impact before making that conclusion.

---

## 8. QA Test Execution Summary

### Project: Shopping Application

**Testing status:** Testing cycle completed, with outstanding issues.

| Metric | Result |
|---|---:|
| Total test cases | 100 |
| Passed | 85 |
| Failed | 10 |
| Blocked | 5 |
| Executed | 95 |
| Execution coverage | 95% |
| Test pass rate | 89.47% |
| Test failure rate | 10.53% |
| Open Critical defects | 3 |

### Key Findings

1. Ninety-five of the 100 documented test cases were executed.
2. Eighty-five executed test cases passed.
3. Ten executed test cases failed.
4. Five test cases were blocked.
5. Three Critical defects remain open.

### QA Recommendation

The testing results should be reviewed with the relevant stakeholders before release.

The three open Critical defects require investigation and risk assessment. The ten failed tests should be analyzed, and the five blocked tests should be unblocked and executed where possible.

The final release decision should consider the impact of unresolved defects, remaining testing gaps and agreed acceptance criteria.

---

## 9. Conclusion

This project demonstrates how QA metrics can be used to summarize test execution, evaluate defect information and communicate testing risks.

I practiced calculating execution coverage, pass rate, failure rate, defect reopen rate, defect fix rate and defect rejection rate.

I also analyzed defect trends and prepared a simulated QA execution summary.

**Project outcome:** Completed a simulated QA metrics and reporting exercise.
