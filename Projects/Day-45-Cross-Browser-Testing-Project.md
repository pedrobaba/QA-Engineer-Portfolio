# Day 45 — Cross-Browser Testing Project

## 1. Project Overview

**Project:** Cross-Browser Testing Practice
**Focus:** Login compatibility across supported browsers
**Type:** Hypothetical QA exercise

The purpose of this exercise was to practice documenting browser-specific failures, comparing test outcomes, inspecting diagnostic evidence, and making a release recommendation.

No live application was executed as part of this exercise.

## 2. Test Scenario

**Scenario ID:** TS-CB-001

Verify that a user can log in with valid credentials using each supported browser.

### Expected Result

The user successfully logs in and is redirected to the Dashboard.

## 3. Browser Compatibility Matrix

| Browser | Version | Expected result   | Actual result                             | Status |
| ------- | ------- | ----------------- | ----------------------------------------- | ------ |
| Chrome  | 154     | Login → Dashboard | Login successful → Dashboard              | PASS   |
| Firefox | 154     | Login → Dashboard | Login fails; JavaScript TypeError appears | FAIL   |
| Edge    | 154     | Login → Dashboard | Login successful → Dashboard              | PASS   |
| Safari  | 18      | Login → Dashboard | Login successful → Dashboard              | PASS   |

**Data note:** These are the hypothetical results used during the learning exercise, not verified results from a live browser test.

## 4. Test Execution Summary

* Browsers represented: 4
* Passing results: 3
* Failing results: 1
* Total hypothetical executions: 4
* Pass rate: 75%
* Failure rate: 25%

Calculations:

* Pass rate = (3 ÷ 4) × 100 = 75%
* Failure rate = (1 ÷ 4) × 100 = 25%

These figures summarize the exercise only.

## 5. Defect Investigation

### Defect A — Firefox Login Failure

**Proposed title:** Login fails on Firefox due to JavaScript TypeError

**Environment:** Firefox 154, Windows 11 (hypothetical exercise environment)

**Precondition:** A valid username and password are available.

**Steps to reproduce:**

1. Open the website in Firefox.
2. Navigate to the Login page.
3. Enter valid credentials.
4. Click Login.
5. Observe the login result and browser Console.

**Expected result:** The user logs in successfully and is redirected to the Dashboard.

**Actual result:** Login fails and the Console displays `TypeError: Cannot read properties of undefined`.

**Network evidence:** The `POST /api/login` request is not sent in the exercise scenario.

**Initial investigation direction:** Client-side/browser compatibility.

**Evidence to capture during real testing:**

* Login page after clicking Login.
* Full Console error.
* Network panel showing that the login request was not sent.
* Actual browser version and operating system.
* Comparison with the same test passing in other supported browsers.

**Severity:** Proposed High for discussion because Login is a core function. The final severity requires an impact assessment and confirmation of supported-browser requirements.

## 6. Additional Diagnostic Comparison

### Firefox

* JavaScript TypeError observed.
* Login request not sent.
* Investigate the client-side execution path and browser compatibility.

### Safari — Separate Hypothetical Example

* `POST /api/checkout` is sent.
* Response: `500 Internal Server Error`.
* Investigate the API/server behavior and associated logs.

The Safari example illustrates a separate diagnostic scenario; it is not an additional failure in the Login compatibility matrix.

## 7. Release Recommendation

**Recommendation for the exercise: Do not approve release yet.**

The hypothetical Login failure occurs in Firefox while the other three browsers pass. If Firefox is a supported browser, the team should investigate and fix the defect, then retest Login across all supported browsers before making the release decision.

The final decision should follow the project's release criteria and the confirmed business impact.

## 8. Lessons Learned

* Test the same functionality across all supported browsers.
* Record actual results separately from expected results.
* Use Console and Network evidence to investigate failures.
* Avoid declaring a root cause before sufficient investigation.
* Write reproduction steps another tester can follow.
* Make release recommendations based on evidence and impact.

## 9. Project Status

**Day 45 learning exercise:** Completed.

**Live cross-browser execution:** Not yet performed.

**Next step:** Perform the practical checks on a real application, record the actual browser versions, and replace hypothetical results with verified evidence.
