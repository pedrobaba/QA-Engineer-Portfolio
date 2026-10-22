
# Day 59 — Test Estimation & Test Scheduling Practice

## Project Overview

This document records practice exercises completed while learning test estimation and test scheduling.

**Practice type:** Simulated QA planning exercises  
**Application tested:** None; these were planning scenarios, not live application tests.

## Exercise 1: Calculate Testing Effort

### Scenario

A QA engineer estimates the following activities for a registration feature:

| Activity | Estimated effort |
|---|---:|
| Design test cases | 2 hours |
| Execute test cases | 3 hours |
| Retest fixes | 1 hour |
| **Total** | **6 hours** |

### Calculation

`2 + 3 + 1 = 6 hours`

**Result:** 6 hours of estimated effort.

**Lesson:** Predicting the amount of effort required is test estimation.

## Exercise 2: Create a Testing Schedule

### Scenario

Testing a payment feature is estimated to require eight hours of effort.

| Day | Planned activity |
|---|---|
| Monday | Review requirements and design test cases |
| Tuesday | Execute test cases |
| Wednesday | Retest fixes |

**Lesson:** Assigning activities to specific days is test scheduling.

## Exercise 3: Calculate Duration from Availability

### Scenario

Regression testing requires six hours of effort. The tester is available for two hours per working day.

### Calculation

`6 hours ÷ 2 hours per day = 3 working days`

**Result:** Three working days, assuming no interruptions.

**Lesson:** Effort describes the work required; duration describes how long it takes given the available capacity.

## Exercise 4: Review Estimate Quality

### Scenario

A QA engineer estimates that a payment feature can be tested in two hours but ignores multiple payment methods, failed payments, refunds, and regression testing.

### Finding

The estimate may be unrealistic because it does not account for the full testing scope, complexity, and risks.

### Improvement

List the required testing activities and scenarios, estimate each activity separately, and review the assumptions before calculating the total.

## Exercise 5: Calculate Total Estimated Effort

| Activity | Estimated effort |
|---|---:|
| Review requirements | 1 hour |
| Design test cases | 2 hours |
| Execute test cases | 3 hours |
| Report defects | 1 hour |
| Retest fixes | 2 hours |
| **Total** | **9 hours** |

### Calculation

`1 + 2 + 3 + 1 + 2 = 9 hours`

**Result:** Nine hours of estimated testing effort.

## Exercise 6: Handle a Schedule Blocker

### Scenario

Payment testing is scheduled for Tuesday, but the test environment becomes unavailable. The team expects it to be restored on Wednesday.

### Appropriate response

1. Record the environment issue.
2. Notify the relevant team members.
3. Identify which tests are blocked.
4. Review and update the schedule.
5. Resume testing when the environment becomes available.

**Lesson:** Blocked tests must not be marked as passed. Communicate delays and update the schedule transparently.

## Exercise 7: Calculate Team Capacity

### Scenario

Testing requires 12 hours of effort. Two testers are each available for three hours per day.

### Calculation

Combined daily capacity:

`2 testers × 3 hours = 6 hours per day`

Estimated duration:

`12 hours ÷ 6 hours per day = 2 working days`

**Result:** Two working days, assuming the work can be divided evenly and performed in parallel without dependencies or interruptions.

## Summary

Through these exercises, I practiced:

- Calculating total testing effort.
- Distinguishing estimation from scheduling.
- Converting effort into duration using availability.
- Identifying missing scope and risks.
- Handling schedule blockers.
- Calculating team testing capacity.

## QA Reflection

The main lesson from Day 59 is that an estimate should reflect the testing work required, while a schedule should reflect when that work can realistically be completed. Both should be reviewed when scope, availability, dependencies, or risks change.
