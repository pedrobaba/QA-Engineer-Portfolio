
# Day 59 — Test Estimation & Test Scheduling

## Overview

Day 59 focused on understanding how QA engineers estimate testing effort and schedule testing activities. I practiced calculating estimated effort, distinguishing effort from duration, considering risks, and handling schedule delays.

## Learning Objectives

By the end of this lesson, I practiced how to:

- Explain test estimation and test scheduling.
- Calculate total estimated testing effort.
- Distinguish effort from calendar duration.
- Calculate testing duration using team availability.
- Identify factors that can make estimates unrealistic.
- Respond to blockers that affect a test schedule.
- Understand the importance of communicating schedule changes.

## 1. Test Estimation

Test estimation is the process of predicting the effort, time, and resources required to complete testing activities.

Activities to consider include:

- Reviewing requirements.
- Designing test cases.
- Executing test cases.
- Reporting defects.
- Retesting fixes.
- Performing regression testing.

### Example

| Testing activity | Estimated effort |
|---|---:|
| Review requirements | 1 hour |
| Design test cases | 2 hours |
| Execute test cases | 3 hours |
| Report defects | 1 hour |
| Retest fixes | 2 hours |
| **Total estimated effort** | **9 hours** |

Calculation:

`1 + 2 + 3 + 1 + 2 = 9 hours`

This is an estimate, not a guarantee that the work will finish in exactly nine calendar hours.

## 2. Test Scheduling

Test scheduling determines when testing activities will take place and how they are arranged over time.

Example:

| Day | Activity |
|---|---|
| Monday | Review requirements and design test cases |
| Tuesday | Execute test cases |
| Wednesday | Retest fixes |

A schedule should account for dependencies, deadlines, tester availability, and possible blockers.

## 3. Estimation vs. Scheduling

| Test estimation | Test scheduling |
|---|---|
| Predicts required effort | Assigns activities to dates and times |
| Considers scope, complexity, and risks | Considers deadlines, dependencies, and availability |
| Produces an effort estimate | Produces a testing timetable |
| Answers: How much work? | Answers: When will the work happen? |

## 4. Effort vs. Duration

Effort measures the amount of work required. Duration measures how long the work takes across the calendar.

Example:

- Estimated testing effort: 6 hours.
- Tester availability: 2 hours per working day.
- Required duration: `6 ÷ 2 = 3 working days`.

Effort and duration are not necessarily the same.

## 5. Team Capacity Calculation

When testers can work in parallel without dependencies, calculate their combined daily capacity.

Example:

- Total estimated effort: 12 hours.
- Number of testers: 2.
- Availability per tester: 3 hours per day.
- Combined capacity: `2 × 3 = 6 hours per day`.
- Duration: `12 ÷ 6 = 2 working days`.

This calculation assumes both testers can divide and complete the work in parallel without interruptions.

## 6. Factors Affecting Test Estimates

A realistic estimate should consider:

- **Scope:** Number of features and scenarios to test.
- **Complexity:** Difficulty of the application or workflow.
- **Risks:** Potential problems and uncertainty.
- **Defect handling:** Time required to investigate and report defects.
- **Retesting:** Time required to verify fixes.
- **Regression testing:** Time required to check existing functionality.
- **Availability:** Time testers can dedicate to the task.
- **Dependencies:** Access to environments, test data, and other teams.

Ignoring important activities or risks can make an estimate unrealistic.

## 7. Handling Schedule Blockers

When a test environment becomes unavailable:

1. Document the blocker.
2. Communicate the impact to the relevant team.
3. Identify affected testing activities.
4. Update the schedule when necessary.
5. Resume testing when the environment is available.
6. Record any resulting delays or changes.

Tests that could not be executed must not be marked as passed.

## 8. Day 59 Key Takeaways

1. Estimation predicts the effort required for testing.
2. Scheduling determines when testing activities occur.
3. Effort is different from calendar duration.
4. Team availability affects the duration of testing.
5. Scope, complexity, risks, and retesting should be considered during estimation.
6. Schedule changes and blockers should be communicated.
7. Estimates should be reviewed when significant assumptions change.
8. Test results must accurately reflect what was executed.

## Conclusion

Test estimation and scheduling help QA teams plan realistic testing activities, allocate available resources, manage risks, and communicate delivery expectations. Accurate estimates and transparent scheduling support better testing decisions.
