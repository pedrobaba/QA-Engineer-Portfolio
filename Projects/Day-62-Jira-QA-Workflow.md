# Day 62 Practical Project — Jira QA Workflow

## Objective

Practice documenting and tracking a defect through investigation, retesting, regression testing, and status reporting.

## Scenario

During login testing, valid credentials produce an error instead of opening the dashboard. A bug is created and linked to the login story.

## Practical Checklist

- [ ] Record the defect using a clear title.
- [ ] Document the environment and preconditions.
- [ ] Add numbered reproduction steps.
- [ ] Record expected and actual results.
- [ ] Attach relevant evidence.
- [ ] Link the defect to the related story.
- [ ] Assign severity and priority using team guidelines.
- [ ] Track the issue through the configured workflow.
- [ ] Retest after a fix is provided.
- [ ] Run appropriate regression tests.
- [ ] Record any remaining failures or blockers.
- [ ] Update the issue based on verified results.

## Example Bug Report

**Title:** Valid login displays an error instead of opening the dashboard.

**Environment:** Record the browser, device, operating system, and test environment used.

**Preconditions:**
- A registered user account exists.
- The account has valid login credentials.
- The application is accessible.

**Steps to reproduce:**
1. Open the login page.
2. Enter valid credentials.
3. Click Login.
4. Observe the resulting page and message.

**Expected result:** The user is authenticated and redirected to the dashboard.

**Actual result:** An error message appears instead of the dashboard.

**Evidence:** Attach a screenshot or recording captured during the actual test.

**Status:** Use the appropriate status from the configured Jira workflow.

**Note:** This is a practice example. Replace the illustrative result with evidence from an actual test before reporting it as a real defect.

## Retest and Regression Checklist

- [ ] Reproduce the original failure before the fix, if possible.
- [ ] Retest the original scenario after the fix.
- [ ] Record the actual result.
- [ ] Test related functionality that may be affected.
- [ ] Document any regression failures.
- [ ] Update the Jira ticket accurately.

## Expected Outcome

The defect is documented clearly, linked to the relevant requirement, and tracked using verified test results. Any outstanding failures or blockers remain visible to the team.

## Evidence

If the exercise is performed in an actual Jira project, capture:

- The bug ticket
- Reproduction steps and expected/actual results
- The linked story
- Retest comments and evidence
- The final issue status

Do not present simulated results as evidence from a live Jira project.

## Reflection

Accurate Jira issue management improves communication and traceability. A defect should only be considered resolved according to verified results and the team's agreed workflow.
