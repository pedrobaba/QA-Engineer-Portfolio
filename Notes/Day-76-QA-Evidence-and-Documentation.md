# Day 76 — QA Evidence and Documentation

## Overview

Day 76 focused on understanding, organising and managing QA test evidence and improving portfolio documentation.

Test evidence provides supporting information that demonstrates what happened during testing.

## 1. Types of QA Evidence

- Screenshots: capture visible application behaviour and test results.
- Screen recordings: demonstrate sequences of actions and defects.
- API evidence: request details, response bodies, status codes and assertion results.
- Logs: provide technical information for investigating application behaviour.

## 2. Evidence Organisation

Evidence should be stored in an organised and accessible location.

My QA portfolio uses the existing `Screenshots-&-Recordings` folder for supporting evidence.

Evidence should have descriptive filenames, for example:

- `TC-001-valid-login.png`
- `TC-019-checkout-total.png`
- `BUG-001-checkout-total.png`
- `API-TC-001-get-all-posts.png`

## 3. Evidence Traceability

Evidence traceability means connecting evidence to the relevant test case, execution result or bug report.

A test case may reference a screenshot, while a bug report may reference the same screenshot as supporting evidence.

This helps developers and other QA engineers understand and investigate reported defects.

## 4. Evidence in Bug Reports

A professional bug report should contain:

- Bug ID and title
- Environment
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Severity and priority
- Supporting evidence

Evidence supports a bug report but does not replace the written reproduction steps.

## 5. API Testing Evidence

Useful API evidence includes:

- HTTP method
- Request URL
- Request body, where applicable
- Response status code
- Response body
- Assertion results

A successful HTTP status code does not automatically mean the response meets the requirements.

## 6. Documentation Quality

QA documentation should be:

- Clear and understandable
- Consistent in naming and formatting
- Traceable through test case and defect IDs
- Accurate and evidence-based
- Free from exposed credentials and sensitive information

## 7. Portfolio Documentation Review

I reviewed the documentation in my QA portfolio, including:

- SauceDemo README and Test Plan
- Test Scenarios and Test Cases
- Test Execution and Summary Reports
- Bug Reports
- Screenshots and Recordings
- JSONPlaceholder API Testing documentation
- uTest and Test IO reports

No issues were recorded during my review.

## Important QA Practice

I must distinguish between actual testing evidence and simulated practice examples.

My 22 SauceDemo test cases remain Not Run until actual execution is completed.

The three Day 73 bug-report examples remain simulated and unverified.

The JSONPlaceholder API test cases also remain Not Run until actual Postman execution is completed.

## Key Takeaways

1. Test evidence supports observed testing results.
2. Screenshots and recordings should be clear and relevant.
3. Evidence should be linked to the appropriate test case or defect.
4. API evidence should include request and response information.
5. A bug report needs clear reproduction steps and expected versus actual results.
6. Consistent documentation makes a QA portfolio easier to review.
7. QA engineers must never present simulated results as actual testing evidence.
