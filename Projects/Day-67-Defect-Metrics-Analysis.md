# Day 67 — Practical Project: Defect Metrics & Analysis

## Project Overview

This project applies defect metrics and analysis techniques to sample QA data.

The purpose is to demonstrate how a QA tester can calculate defect metrics, interpret defect reports, identify patterns, and communicate potential release risks.

**Project type:** Learning exercise / simulated QA analysis

**Tools:** Markdown and manual calculations

## Objectives

- Calculate defect density.
- Calculate defect leakage.
- Calculate defect age.
- Calculate defect reopen rate.
- Interpret defect trends.
- Apply root cause analysis.
- Make a release recommendation using defect information.

---

## Exercise 1: Defect Density

### Scenario

An application contains:

- Identified defects: 40
- Software size: 10,000 LOC

### Calculation

```text
10,000 LOC = 10 KLOC

Defect Density = 40 / 10

Result = 4 defects per KLOC
```

### Result

The application has 4 identified defects per 1,000 lines of code.

---

## Exercise 2: Defect Leakage

### Scenario

A QA team discovers:

- 80 defects during testing.
- 20 defects after production release.

### Calculation

```text
Defect Leakage =
(Production Defects / Total Defects) × 100

= (20 / (80 + 20)) × 100

= 20%
```

### Result

The defect leakage percentage is 20%.

This indicates that 20% of the defects counted across testing and production were discovered after release.

---

## Exercise 3: Defect Age

### Scenario

A defect is reported on 1 October and resolved on 6 October.

The reporting date is treated as Day 0.

### Calculation

```text
Defect Age = Resolution Date - Reported Date

= 6 - 1

= 5 days
```

### Result

The defect remained unresolved for 5 days.

---

## Exercise 4: Defect Reopen Rate

### Scenario

- Resolved defects: 50
- Reopened defects: 5

### Calculation

```text
Reopen Rate =
(Reopened Defects / Resolved Defects) × 100

= (5 / 50) × 100

= 10%
```

### Result

The defect reopen rate is 10%.

---

## Exercise 5: Defect Trend Analysis

### Sample Data

| Build | Defects Found |
|---|---:|
| Build 1 | 30 |
| Build 2 | 20 |
| Build 3 | 8 |

### Analysis

The number of defects discovered decreases from 30 in Build 1 to 8 in Build 3.

This may indicate improvement across builds, but the trend must be interpreted alongside test coverage, testing effort, and the number of unresolved defects.

### Result

The defect count is decreasing across the three builds.

---

## Exercise 6: Root Cause Analysis

### Scenario

Several screens display incorrect date-validation behaviour.

During investigation, the team discovers that the affected screens use the same incorrect date-validation function.

### Analysis

The defects may share one underlying cause.

### Recommended Action

1. Investigate the shared date-validation function.
2. Correct the underlying issue.
3. Retest the affected screens.
4. Perform regression testing on related date fields.
5. Verify that the same issue does not persist elsewhere.

### Result

The appropriate response is to investigate and correct the shared cause rather than treating every symptom as unrelated.

---

## Exercise 7: Release Risk Analysis

### Scenario

An e-commerce application has the following defect report:

| Metric | Result |
|---|---:|
| Total defects discovered | 60 |
| Resolved defects | 45 |
| Open defects | 10 |
| Rejected as duplicates | 5 |
| Open critical defects | 3 |

### Analysis

Although 45 defects have been resolved, 10 remain open, including 3 critical defects.

The critical defects may significantly affect users or important business functionality.

### QA Recommendation

Recommend delaying release until the three open critical defects have been investigated and addressed. Afterward, reassess release readiness against the agreed exit criteria and communicate any remaining risks.

---

## Project Summary

| Metric / Activity | Result |
|---|---|
| Defect density | 4 defects per KLOC |
| Defect leakage | 20% |
| Defect age | 5 days |
| Defect reopen rate | 10% |
| Defect trend | Decreasing across the three sample builds |
| Root cause analysis | Shared date-validation function identified |
| Release recommendation | Reassess after addressing open critical defects |

## Skills Practiced

- Defect metric calculation.
- Defect report interpretation.
- Trend analysis.
- Root cause analysis.
- Risk-based release recommendation.
- QA reporting and communication.

## Project Outcome

This exercise strengthened my understanding of how defect data can be used to identify quality concerns and communicate risks.

It also reinforced the importance of interpreting metrics in context rather than relying on defect counts alone.

**Project status: Completed**

**Note:** This is a simulated learning exercise. The figures and scenarios are sample data, not results from a live client application.
