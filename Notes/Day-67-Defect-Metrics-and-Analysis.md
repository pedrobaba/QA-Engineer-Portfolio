# Day 67 — Defect Metrics & Analysis

## Overview

Day 67 focused on understanding how QA teams use defect metrics to evaluate software quality, monitor testing outcomes, identify recurring problems, and communicate release risks.

The goal was to move beyond simply counting bugs and learn how to interpret defect data to support better QA decisions.

## Learning Objectives

By the end of this lesson, I practiced how to:

- Understand defect density and calculate it.
- Distinguish defect severity from defect priority.
- Calculate defect leakage.
- Calculate defect age.
- Understand root cause analysis.
- Interpret defect trends across builds.
- Calculate defect reopen rate.
- Analyse defect reports.
- Communicate unresolved defects and release risks.

---

## 1. Defect Metrics

Defect metrics are measurements used to understand defects discovered during software testing and after release.

They help QA teams monitor software quality, identify patterns, evaluate testing effectiveness, and support release decisions.

Common defect metrics include:

- Defect density
- Defect leakage
- Defect age
- Defect reopen rate
- Defect resolution time
- Defect distribution by severity
- Defect trends across builds

A metric should always be interpreted in context. One number alone does not prove that an application is defect-free or ready for release.

## 2. Defect Density

Defect density measures the number of identified defects relative to the size of a software product or component.

**Formula:**

```text
Defect Density = Number of Defects / Software Size
```

When software size is measured in thousands of lines of code:

```text
Defect Density = Number of Defects / KLOC
```

KLOC means one thousand lines of code.

### Example

An application contains 40 identified defects across 10,000 lines of code.

```text
10,000 LOC = 10 KLOC

Defect Density = 40 / 10

Defect Density = 4 defects per KLOC
```

**Interpretation:** Four identified defects were found for every 1,000 lines of code.

Defect density can help compare components of similar scope, but differences in code complexity, testing effort, and defect discovery practices must also be considered.

## 3. Defect Severity vs Priority

Severity describes the impact of a defect on the application.

Priority describes how urgently the defect should be fixed.

| Severity | Priority |
|---|---|
| Measures the impact of a defect | Measures the urgency of fixing it |
| Usually assessed from a technical or user-impact perspective | Usually determined by business needs and release considerations |
| Examples include Critical, High, Medium and Low | Examples include High, Medium and Low |

### Example

A payment feature fails for all users.

- Severity: High or Critical, depending on the team's classification system.
- Priority: High because the payment functionality is essential and requires urgent attention.

Severity and priority are related, but they are not interchangeable.

## 4. Defect Leakage

Defect leakage refers to defects that escape the testing process and are discovered later, commonly in production.

A useful way to calculate defect leakage is:

```text
Defect Leakage (%) =
(Production Defects / (Testing Defects + Production Defects)) × 100
```

### Example

- Defects found during testing: 80
- Defects found in production: 20

```text
Defect Leakage = (20 / (80 + 20)) × 100

Defect Leakage = 20%
```

**Interpretation:** 20% of the defects counted across testing and production were discovered after release.

The reporting period and defect-counting rules should be consistent when comparing leakage between releases.

## 5. Defect Age

Defect age measures how long a defect remains unresolved.

```text
Defect Age = Resolution Date - Reported Date
```

### Example

A defect is reported on 1 October and resolved on 6 October.

If the reporting date is treated as Day 0:

```text
Defect Age = 6 - 1

Defect Age = 5 days
```

Defect age helps teams identify defects that remain open for a long time and may require attention.

## 6. Root Cause Analysis (RCA)

Root Cause Analysis is the process of investigating the underlying reason a defect occurred.

The objective is not only to fix the visible problem but also to understand why it happened and reduce the likelihood of recurrence.

### Example

Several screens contain date-validation defects.

Investigation reveals that they all use the same incorrect date-validation function.

The appropriate action is to investigate and correct the shared function, then retest the affected screens.

This is more effective than treating every symptom as an unrelated problem.

## 7. Defect Trend Analysis

Defect trend analysis examines how the number or nature of defects changes over time or across builds.

### Example

| Build | Defects Found |
|---|---:|
| Build 1 | 30 |
| Build 2 | 20 |
| Build 3 | 8 |

The number of discovered defects is decreasing across the three builds.

However, this does not automatically mean the application is defect-free.

QA should also consider:

- Whether the same level of testing was performed.
- Whether test coverage changed.
- Whether important areas were tested.
- Whether unresolved defects remain.
- Whether new defects were introduced.

## 8. Defect Reopen Rate

A defect is reopened when it was marked as resolved or closed but fails verification, or the issue is found to persist.

**Formula:**

```text
Defect Reopen Rate (%) =
(Reopened Defects / Resolved Defects) × 100
```

### Example

- Resolved defects: 50
- Reopened defects: 5

```text
Reopen Rate = (5 / 50) × 100

Reopen Rate = 10%
```

**Interpretation:** 10% of the resolved defects were reopened.

A high reopen rate may indicate incomplete fixes, inadequate investigation, or insufficient verification. The actual cause should be investigated rather than assumed.

## 9. Interpreting Defect Reports

A defect report should communicate more than the total number of defects.

Important information includes:

- Total defects identified.
- Defects grouped by severity.
- Open and resolved defects.
- Reopened defects.
- Critical defects still unresolved.
- Defect trends.
- Potential impact on users and business operations.
- Recommended next actions.

### Example

A QA report contains:

| Metric | Result |
|---|---:|
| Total defects | 100 |
| Critical defects | 5 |
| High-severity defects | 15 |
| Medium-severity defects | 50 |
| Low-severity defects | 30 |
| Open critical defects | 2 |

The two open critical defects should be highlighted because they may pose significant release risks.

The QA team should investigate their impact and communicate whether they need to be resolved before release.

## 10. Defect Metrics and Release Readiness

Defect metrics help inform release decisions, but they do not independently determine whether a product is ready.

A QA recommendation should consider:

- The severity and impact of unresolved defects.
- The number of critical defects still open.
- Whether agreed exit criteria have been met.
- Whether important functionality has been tested.
- Whether known risks have been communicated and accepted by the appropriate stakeholders.

### Practical Scenario

An e-commerce application has:

- 60 defects discovered during testing.
- 45 defects resolved.
- 10 defects still open.
- 5 defects rejected as duplicates.
- 3 critical defects among the 10 open defects.

The appropriate QA recommendation is to raise the three open critical defects as release risks, recommend delaying release until they are investigated and addressed, and then reassess readiness against the agreed release criteria.

---

## Key Takeaways

1. Defect metrics help QA teams understand and communicate software quality.
2. Defect density measures defects relative to software size.
3. Severity measures impact, while priority measures urgency.
4. Defect leakage measures defects discovered outside the testing process.
5. Defect age measures how long a defect remains unresolved.
6. Root Cause Analysis investigates the underlying reason defects occur.
7. Defect trends help teams monitor changes across builds.
8. Defect reopen rate measures how often resolved defects are reopened.
9. Open critical defects should be clearly communicated as potential release risks.
10. QA metrics support release decisions but should not be interpreted in isolation.

## Assessment Result

- Topic: Defect Metrics & Analysis
- Questions answered: 10
- Correct answers: 10
- Incorrect answers: 0
- Score: 10/10
- Percentage: 100%

**Status: Completed**
