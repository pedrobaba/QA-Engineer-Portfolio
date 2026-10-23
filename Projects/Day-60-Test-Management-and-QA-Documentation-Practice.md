
# Day 60 — Test Management & QA Documentation Practice

## Project Overview

This practice exercise applies test management and QA documentation concepts to a hypothetical registration feature.

The objective is to organize test results, calculate the pass rate, identify documentation needs, and prepare a professional status update.

**Exercise type:** Simulated QA documentation exercise  
**Application tested live:** No

## 1. Test Results

| Metric | Result |
|---|---:|
| Total test cases | 20 |
| Passed | 16 |
| Failed | 3 |
| Blocked | 1 |
| Open defects | 2 |
| Untested area | Email verification |

The email-verification test was blocked because the test email service was unavailable.

## 2. Pass Rate Calculation

Formula:

Pass Rate = (Passed Tests / Total Test Cases) × 100

Calculation:

(16 / 20) × 100 = 80%

| Status | Count | Percentage |
|---|---:|---:|
| Passed | 16 | 80% |
| Failed | 3 | 15% |
| Blocked | 1 | 5% |
| Total | 20 | 100% |

## 3. Documentation Selection Exercise

| Situation | Appropriate Document | Reason |
|---|---|---|
| Define testing scope, approach, resources, and risks | Test Plan | Establishes the overall testing approach |
| Document steps and expected results | Test Case | Defines how a behavior will be verified |
| Record passed, failed, and blocked tests | Test Execution Report | Records execution outcomes |
| Communicate overall results and outstanding risks | Test Summary Report | Summarizes testing status |
| Link requirements to test cases | Requirements Traceability Matrix | Helps identify coverage gaps |
| Document an observed defect | Bug Report | Supports reproduction and investigation |

## 4. QA Status Update

The registration feature was tested using 20 test cases, with 16 passed (80%), 3 failed (15%), and 1 blocked (5%). Two defects remain open and require further investigation. The email-verification test was blocked because the test email service was unavailable. Email verification remains untested, and the blocked test should be rerun when the service is restored. The open defects and remaining risk should be reviewed before a release decision is made.

## 5. Risks and Next Steps

### Identified concerns

- Two defects remain open.
- Email verification has not been tested.
- The unavailable test email service prevents completion of the blocked test.

### Recommended next steps

1. Investigate and track the two open defects.
2. Restore or obtain access to the test email service.
3. Rerun the blocked email-verification test.
4. Update the execution records with the actual result.
5. Update the test summary report after the outstanding work is completed.
6. Communicate unresolved risks to the appropriate stakeholders.

## 6. Learning Outcomes

Through this exercise, I practiced:

- Selecting the appropriate QA document for different situations.
- Calculating test pass, fail, and blocked percentages.
- Distinguishing execution results from overall summaries.
- Reporting blockers without changing their actual cause.
- Identifying untested areas and remaining risks.
- Preparing a professional QA status update.

## Conclusion

Effective QA documentation makes testing activities traceable and results understandable. A complete status report should include accurate test outcomes, open defects, blockers, untested areas, and recommended next steps.

This project records a simulated learning exercise and does not claim that a live application was tested.
