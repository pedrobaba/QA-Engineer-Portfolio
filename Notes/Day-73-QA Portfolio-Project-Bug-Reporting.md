# Day 73 — QA Portfolio Project: Bug Reporting

## Overview

Day 73 focused on documenting software defects professionally using the SauceDemo QA portfolio project.

The goal was to understand how to write clear, reproducible bug reports, assess severity and priority, understand the defect life cycle, maintain a bug report log, and avoid common reporting mistakes.

**Important:** The SauceDemo bug examples created during this learning exercise are simulated practice records. They have not been verified through a live execution session.

## Learning Objectives

By the end of Day 73, I learned how to:

- Understand software defects and their impact.
- Distinguish errors, defects, and failures.
- Identify the required fields in a bug report.
- Write clear bug titles and reproduction steps.
- Separate expected results from actual results.
- Distinguish severity from priority.
- Understand the bug life cycle.
- Document defects professionally.
- Maintain a bug report log.
- Link defects to related test cases.
- Identify common bug reporting mistakes.
- Use evidence to support defect reports.

## 1. What Is a Bug Report?

A bug report is a structured document that describes unexpected software behaviour so that a developer or other team member can investigate and resolve it.

A good bug report should be clear, factual, reproducible, and supported by relevant evidence.

## 2. Essential Bug Report Fields

A professional bug report commonly contains:

| Field | Purpose |
|---|---|
| Bug ID | Unique defect reference |
| Title | Short description of the issue |
| Environment | Browser, device, OS or application version |
| Preconditions | Conditions required before testing |
| Steps to reproduce | Actions needed to observe the issue |
| Test data | Values used during testing |
| Expected result | Correct expected behaviour |
| Actual result | Behaviour actually observed |
| Severity | Impact of the defect |
| Priority | Urgency of fixing the defect |
| Evidence | Screenshot, recording, logs or other proof |
| Related test case | Test case associated with the defect |
| Status | Current state in the defect life cycle |

## 3. Severity vs Priority

**Severity** describes how seriously a defect affects the application or its users.

**Priority** describes how urgently the defect should be addressed.

Examples:

- High severity, high priority: A critical checkout failure affecting customers.
- Low severity, high priority: A visible spelling mistake on a major campaign page immediately before launch.
- High severity, lower priority: A serious issue in a rarely used feature with a temporary workaround, depending on business impact.

Severity and priority should be assigned using the team's agreed criteria.

## 4. Bug Life Cycle

A common defect workflow is:

New → Assigned → Open → Fixed → Retest → Verified → Closed

Other possible statuses include:

- Reopened
- Rejected
- Duplicate
- Deferred
- Cannot Reproduce

The exact workflow depends on the organisation and its defect-tracking tool.

## 5. Retesting vs Regression Testing

**Retesting:** Re-executing a failed test case to confirm that a reported defect has been fixed.

**Regression testing:** Testing related or existing functionality to check that a code change has not introduced new defects.

## 6. Bug Report Log and Traceability

A bug report log provides a central overview of reported defects.

Useful columns include:

- Bug ID
- Title
- Module
- Related test case
- Severity
- Priority
- Status
- Evidence

Traceability connects test cases to defects. For this practice project:

| Test Case | Example Bug |
|---|---|
| TC-008 | BUG-002 |
| TC-016 | BUG-003 |
| TC-019 | BUG-001 |

These links are illustrative and do not represent verified live test failures.

## 7. Bug Reporting Best Practices

1. Use clear and descriptive titles.
2. Provide numbered reproduction steps.
3. State expected and actual results separately.
4. Include relevant test data.
5. Attach useful evidence.
6. Link defects to related test cases.
7. Check for duplicate reports.
8. Avoid assumptions about the root cause.
9. Use consistent severity and priority criteria.
10. Protect confidential information and credentials.

## 8. Common Bug Reporting Mistakes

| Mistake | Better practice |
|---|---|
| Vague title | Describe the feature and unexpected behaviour |
| Missing steps | Write numbered reproduction steps |
| No expected result | State the correct behaviour |
| No actual result | Describe what happened |
| Missing evidence | Attach relevant proof where available |
| Incorrect severity | Assess functional and user impact |
| Confusing severity and priority | Assess impact and urgency separately |
| Duplicate report | Search existing defects first |
| Guessing the root cause | Report observable behaviour |
| Reporting intended behaviour | Check requirements before reporting |

## 9. Tools Used in Bug Tracking

Examples of defect and issue tracking tools include:

- Jira
- Bugzilla
- GitHub Issues

For this portfolio exercise, bug reports are documented in Markdown files and organised in GitHub.

## Key Takeaways

- A bug report must help another person understand and reproduce the issue.
- Expected and actual results must be clearly separated.
- Severity and priority describe different things.
- Retesting confirms a fix; regression testing checks for unintended side effects.
- Evidence improves the quality of a defect report.
- Traceability connects test cases, defects, and test results.
- QA engineers should report observations rather than assume root causes.
- Simulated examples must never be presented as verified live defects.
