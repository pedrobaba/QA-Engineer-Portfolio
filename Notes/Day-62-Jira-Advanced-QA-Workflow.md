# Day 62 — Jira Advanced QA Workflow

## Overview

Day 62 focused on using Jira to track QA progress, document defects, maintain traceability, manage retesting, and communicate blockers and release risks.

The goal was to understand how QA engineers keep Jira issues accurate throughout the testing lifecycle.

## Learning Objectives

By the end of this lesson, I practiced how to:

- Understand Jira workflow statuses
- Document actionable bug reports
- Distinguish severity from priority
- Link bugs to user stories
- Retest fixes and perform regression testing
- Record blocked tests accurately
- Communicate testing progress and risks
- Handle unresolved defects before closing tickets

## 1. Jira Workflow

A Jira workflow defines the statuses an issue can move through and the transitions permitted by the project configuration.

Common statuses include:

- **To Do:** Work has not started.
- **In Progress:** Work or investigation is underway.
- **In Review:** Work is awaiting review.
- **Ready for QA:** A change is ready for testing.
- **Blocked:** Work cannot proceed because of a dependency or obstacle.
- **Done:** The configured completion criteria have been met.

Actual statuses depend on the team's Jira configuration.

## 2. Writing a Useful Bug Report

A useful bug report helps developers reproduce and investigate a defect.

Important fields include:

- **Title:** A concise description of the problem.
- **Environment:** Browser, device, operating system, or test environment.
- **Preconditions:** Conditions required before testing.
- **Steps to reproduce:** Numbered, repeatable actions.
- **Expected result:** What should happen.
- **Actual result:** What happened instead.
- **Evidence:** Screenshots, recordings, logs, or relevant responses.

Example title:

> Valid login displays an error instead of opening the dashboard.

## 3. Severity vs Priority

**Severity** describes the impact of a defect on the system or users.

**Priority** describes how urgently the team should address it.

A checkout failure affecting all users could justify high severity and high priority, particularly when a release is imminent. Ratings should follow the team's guidelines and the evidence available.

## 4. Linking Jira Issues

Linking a bug to a user story or task improves traceability.

It helps the team understand:

- Which requirement is affected
- Which functionality needs investigation
- How the defect relates to the planned work
- Whether outstanding issues affect completion criteria

Creating a link does not automatically fix the defect or guarantee a release decision.

## 5. Retesting Fixes

When a developer provides a fix:

1. Review the defect and original reproduction steps.
2. Test the affected scenario.
3. Compare actual behavior with the expected result.
4. Record the retest result and evidence.
5. Update the ticket according to the team's workflow.

A bug should not be closed merely because the developer reports that it is fixed.

## 6. Regression Testing

Regression testing checks whether a change has unintentionally affected existing functionality.

For example, changing a shared authentication component may require retesting:

- Login
- Password reset
- Account verification

The scope should be based on the areas affected by the change and the team's risk assessment.

## 7. Recording Blocked Tests

A test may be blocked when a dependency or environment problem prevents execution.

Example: the payment sandbox is unavailable, so the payment flow cannot be completed.

The QA engineer should:

- Record the test as blocked or unable to execute, according to team conventions.
- Document the reason.
- Notify the relevant team.
- Retest when the blocker is resolved.

A blocked test is not automatically a pass or a confirmed product defect.

## 8. QA Status Reporting

A useful QA update reports:

- Tests passed
- Tests failed
- Tests blocked or not executed
- Open defects and their impact
- Outstanding risks
- Required follow-up actions

Example:

> 12 tests passed, 3 failed, and 2 were blocked by environment availability. One high-impact checkout defect remains open. The team should review the failures and blocker before deciding whether the release criteria have been met.

## 9. Handling Unresolved Regression Failures

If the original defect passes retesting but a related regression test fails:

1. Record both results.
2. Investigate whether the failure is related to the change.
3. Create or link a separate defect if appropriate.
4. Keep the relevant issue open or follow the team's linked-defect workflow.
5. Verify outstanding problems before declaring the work complete.

## Key Takeaways

1. Jira statuses should accurately reflect the current state of work.
2. Good bug reports contain reproducible steps and clear expected and actual results.
3. Severity measures impact; priority measures urgency.
4. Linking bugs to stories improves traceability.
5. Retesting verifies a fix, while regression testing checks for unintended side effects.
6. Blocked tests must be reported honestly.
7. QA updates should communicate progress, defects, blockers, and risks.
8. Issues should be closed according to verified results and the team's workflow.

## QA Relevance

Jira helps QA engineers coordinate testing, document defects, track fixes, maintain traceability, and communicate release risks. Accurate issue management makes testing progress easier for the entire team to understand.
