# Day 29 — ISTQB Foundation: Defect Management

**Date:** September 7, 2026  
**Roadmap:** 90-Day QA Engineering Roadmap  
**Topic:** ISTQB Foundation — Defect Management

---

## 🎯 Learning Objectives

Today I studied defect management from an ISTQB Foundation perspective.

By the end of the session, I learned how to:

- Understand errors, defects, and failures.
- Create and maintain effective defect reports.
- Understand defect severity.
- Understand defect priority.
- Differentiate severity from priority.
- Understand the defect life cycle.
- Understand defect states and transitions.
- Understand defect clustering.
- Understand how failed retesting affects the defect life cycle.
- Apply defect management concepts to practical QA scenarios.

---

# 1. Error, Defect and Failure

An important ISTQB concept is the relationship between human mistakes, defects in software, and failures observed during execution.

The basic relationship is:

```text
Human Error
     ↓
Defect in Software
     ↓
Failure During Execution

Error

An error is a human mistake.

Example:

A developer accidentally uses < instead of <= in a condition.

Defect

A defect is a flaw or problem introduced into the software.

Example:

The application contains incorrect logic that rejects users who should be accepted.

Failure

A failure occurs when the software executes and produces an incorrect result or behavior.

Example:

A user enters a valid age of 18, but the application displays:

"Age must be greater than 18."

Key Difference
Error   = Human mistake
Defect  = Problem in the software
Failure = Incorrect behavior observed during execution

2. Defect Reporting

A defect report communicates a discovered problem to the development team.

A good defect report should contain enough information for the defect to be:

Understood
Reproduced
Investigated
Fixed
Retested
Verified
Common Defect Report Fields
Field	Purpose
Defect ID	Unique identifier
Title	Short description of the problem
Environment	Browser, OS, device, application version, etc.
Preconditions	Required conditions before testing
Steps to Reproduce	Steps needed to reproduce the defect
Expected Result	What should happen
Actual Result	What actually happens
Severity	Impact of the defect
Priority	Urgency of fixing the defect
Evidence	Screenshots, videos, logs, etc.
Status	Current position in the defect life cycle
Assignee	Person/team responsible

3. Severity

Severity describes the impact of a defect on the software or its functionality.

A simple model is:

Severity	Description
Critical	Extremely serious impact; major/core functionality may be unavailable
High	Major functionality is significantly affected
Medium	Functionality is affected but the system remains usable
Low	Minor functional, content, or cosmetic issue

Severity classifications can vary between organizations and projects.

The project's defined severity guidelines should always be followed.

4. Priority

Priority describes how urgently a defect should be fixed.

A common model is:

Priority	Meaning
P1	Fix immediately
P2	Fix soon
P3	Can be fixed later

Priority can depend on:

Business impact
Release deadlines
Number of affected users
Customer visibility
Regulatory requirements
Product importance


5. Severity vs Priority

One of the most important QA interview concepts is the difference between severity and priority.

Severity = How badly does the defect affect the system?

Priority = How urgently should the defect be fixed?
Example

A payment system crashes whenever users attempt to pay.

Possible classification:

Severity: Critical
Priority: High

Another example:

A spelling mistake appears on the company's homepage.

Possible classification:

Severity: Low
Priority: High

The second defect has low technical impact but may require urgent attention because the homepage is highly visible.

6. Defect Life Cycle

A typical defect life cycle is:

New
 ↓
Assigned
 ↓
In Progress
 ↓
Fixed
 ↓
Retest
 ↓
Verified
 ↓
Closed
New

The tester discovers and reports the defect.

Assigned

The defect is assigned to the appropriate developer or team.

In Progress

The developer/team begins investigating or fixing the defect.

Fixed

The developer reports that the defect has been corrected.

Retest

QA tests the application again to determine whether the defect has actually been fixed.

Verified

QA confirms that the defect has been successfully fixed.

Closed

The defect is completed and requires no further action.

7. Reopened Defects

A defect does not always move directly from Fixed to Closed.

For example:

Fixed
 ↓
Retest
 ↓
Failed
 ↓
Reopened
 ↓
In Progress
 ↓
Fixed
 ↓
Retest

If the original problem still exists after the developer's fix, the existing defect should normally be reopened rather than creating a duplicate defect.

Important Rule
Failed Retest → Reopen the existing defect

A defect should not be closed while the original problem still exists.

```


8. Defect Clustering

Defect clustering is the observation that a relatively small number of components or modules may contain a large proportion of the defects.

  Example
| Module |	Defects |
| ----- | -------- |
| Login	| 2 |
| Search |	3 |
| Checkout | 14 |
| Profile |	1 |
| Notifications |	2 |

The Checkout module contains significantly more defects than the other modules.

This suggests that Checkout may require:

Additional testing
Further investigation
Greater testing effort
Increased risk assessment

Defect clustering can help QA teams identify areas that may require more attention.

9. Practical Defect Report
Scenario

Requirement:

Users with valid credentials should be successfully logged in and redirected to the dashboard.

Observed behavior:

A valid user enters the correct email and password, clicks Login, but remains on the login page.

Defect Report
Title:
Valid users remain on the Login page after clicking Login

Environment:
iPhone XS Max, iOS 18.7.10, Chrome

Steps to Reproduce:
1. Navigate to the application's Login page.
2. Enter valid username and password.
3. Click Login.

Expected Result:
User should be successfully authenticated and redirected to the dashboard.

Actual Result:
User remains on the Login page and is not redirected to the dashboard.

Severity:
Critical

Priority:
High

Evidence:
Screenshot and screen recording
