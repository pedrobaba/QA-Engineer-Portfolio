# Day 57 — Smoke & Sanity Testing

## Overview

Day 57 focused on smoke testing and sanity testing, including their purposes, differences, and practical applications in software quality assurance.

The exercises used simulated e-commerce and banking application scenarios to practice selecting the appropriate testing approach, deciding when a build needs further investigation, and documenting test failures.

## Learning Objectives

By the end of Day 57, I practiced how to:

- Explain smoke testing and sanity testing.
- Distinguish broad build-readiness checks from focused checks after a change.
- Identify appropriate smoke and sanity test scenarios.
- Recognize critical failures that may prevent further testing.
- Document expected and actual results.
- Understand the importance of test evidence and environment details.

## 1. Smoke Testing

Smoke testing is a preliminary check of critical application functionality to determine whether a new build is stable enough for further testing.

It is generally broad in scope but does not examine every feature in depth.

### Example

A new e-commerce build is delivered. The tester checks whether:

1. The application launches.
2. Users can log in.
3. Products load.
4. Products can be added to the cart.
5. The checkout page opens.

These checks help identify major problems before more detailed testing begins.

### When Smoke Testing Is Useful

- After receiving a new build.
- After a deployment or major integration.
- Before starting a detailed testing cycle.
- When deciding whether critical application functions are usable enough for further testing.

A failed smoke test should be reported promptly. The team then decides whether to block the build, investigate, or continue with independent tests that remain possible.

## 2. Sanity Testing

Sanity testing is a focused check of a specific change or affected functionality to determine whether it behaves as expected.

### Example

A developer fixes a bug in the password-reset feature. The tester checks whether:

1. The password-reset request works.
2. The reset link is received through the application's supported flow.
3. The link allows the user to set a new password.
4. The relevant password-reset process completes as expected.

The tester focuses on the affected functionality rather than broadly checking the entire application.

## 3. Smoke Testing vs Sanity Testing

| Smoke Testing | Sanity Testing |
|---|---|
| Checks critical functions across a new build. | Focuses on a specific change or affected functionality. |
| Helps assess whether further testing can begin. | Helps assess whether the targeted change behaves as expected. |
| Generally broad and shallow. | Generally narrow and focused. |
| May cover login, product loading, cart, and checkout. | May cover a fixed discount calculation or password-reset flow. |

Teams may use these terms differently, so QA testers should follow the definitions established by their organization.

## 4. Choosing the Appropriate Testing Type

### Scenario A: New Build

A new banking application build is delivered. The tester checks application launch, login, account information, and access to transfers before beginning detailed testing.

**Appropriate approach:** Smoke testing.

**Reason:** The tester is checking critical functions to assess whether the build is ready for further testing.

### Scenario B: Bug Fix

A developer fixes a defect in the Add to Cart function. The tester checks the button, cart quantity, and cart total.

**Appropriate approach:** Sanity testing for the focused check of the fix.

**Reason:** The tester is concentrating on the affected functionality.

### Scenario C: Password Reset Fix

A developer fixes a password-reset defect. The tester verifies the reset link and the process for setting a new password.

**Appropriate approach:** Sanity testing.

**Reason:** The checks focus on the specific functionality changed.

## 5. Handling a Failed Smoke Test

### Simulated Scenario

A new build is delivered. The login page loads, but submitting valid credentials produces an error.

### Expected Result

The user should log in successfully and reach the appropriate page when the credentials and account state are valid.

### Actual Result

An error occurs after the credentials are submitted.

### QA Response

The tester should:

1. Mark the login test as failed.
2. Record the expected and actual results.
3. Capture the error message, screenshot, or relevant logs when available.
4. Record the build version, browser or device, and other relevant environment details.
5. Report the failure to the appropriate team.
6. Follow the team's process for deciding whether the build should be blocked or other independent tests can continue.

A login failure may prevent testing of protected functionality, but it does not automatically make every other test impossible.

## 6. Writing a Useful Test Report

A test report should contain enough information for another person to understand what was tested and investigate the result.

| Field | Example |
|---|---|
| Test Case ID | SMK-LOGIN-01 |
| Test Scenario | Login using valid credentials |
| Expected Result | Successful login |
| Actual Result | An error occurs after submission |
| Status | Failed |
| Environment | Build version and browser or device |
| Evidence | Screenshot, error message, or relevant logs, if available |

The example above is simulated practice, not a defect discovered in a real application.

## 7. Key Takeaways

1. Smoke testing checks critical functions of a new build.
2. Sanity testing focuses on a specific change or affected functionality.
3. Both approaches help guide decisions about further testing.
4. Critical smoke test failures should be reported promptly.
5. QA reports should distinguish expected results from actual results.
6. Evidence and environment information improve reproducibility.
7. A failed smoke test requires investigation and a decision based on the team's testing process.
8. Testing terminology and workflows may vary between teams.

## Practice Status

- Learning exercises: Completed.
- Scenario analysis: Completed.
- Test-reporting practice: Completed.
- Testing against a real application: Not performed during these exercises.
- Real defects discovered: None claimed.
