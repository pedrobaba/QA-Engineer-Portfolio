# Day 11 – Learning Journal

**Date:** 30 July 2026  
**Topic:** Test Execution, Test Evidence & Test Summary Report (TSR)  
**Estimated Study Time:** 4 Hours  
**Status:** ✅ Completed

---

# Topics Covered

Today I learned how QA Engineers execute test cases, record testing outcomes, collect evidence, and prepare Test Summary Reports after testing is complete.

## Main Topics

- Test Execution
- Test Execution Statuses
- Test Evidence
- Test Summary Report (TSR)

---

# Key Concepts Learned

## Test Execution

Test Execution is the process of running test cases and comparing the actual results with the expected results to determine whether a feature works correctly.

---

## Test Execution Statuses

I learned the four common execution statuses:

- **Pass** – The feature works as expected.
- **Fail** – The feature does not work as expected.
- **Blocked** – Testing cannot continue because another issue prevents it.
- **Not Executed** – The test case has not been run.

One important lesson today was understanding the difference between **Blocked** and **Not Executed**.

---

## Test Evidence

Test evidence helps developers understand and reproduce defects.

Examples include:

- Screenshots
- Screen recordings
- Browser Console Logs
- Network Logs
- Error Messages

I also learned that different bugs require different types of evidence. For example, a visual bug is best supported with screenshots, while a JavaScript error is best supported with browser console logs.

---

## Test Summary Report (TSR)

A Test Summary Report is prepared after testing is completed.

It summarizes:

- Total test cases executed
- Passed test cases
- Failed test cases
- Blocked test cases
- Critical defects
- Major findings
- Recommendation for release

---

# Practical Exercise

Today I completed the following practical tasks:

- Identified different test execution statuses.
- Selected the most appropriate evidence for different defect scenarios.
- Created a mini Test Summary Report for the SauceDemo application.

Sample Test Results:

- Total Test Cases: 25
- Passed: 22
- Failed: 2
- Blocked: 1
- Critical Bugs: 1

Recommendation:

The application should not be released until the critical defect has been resolved and successfully retested.

---

# Biggest Lesson

I learned that testing is not complete after finding bugs.

A QA Engineer must clearly communicate testing results through professional documentation such as a Test Summary Report so stakeholders can make informed release decisions.

---

# Challenges Faced

Initially, I confused **Blocked** and **Not Executed** test statuses.

After reviewing examples, I now understand that:

- **Blocked** means testing cannot continue because another issue prevents it.
- **Not Executed** means the test has simply not been run yet.

---

# Reflection

Today's lesson helped me understand that executing test cases is only one part of a QA Engineer's responsibility.

Documenting results accurately and providing clear recommendations are equally important because they help the team understand the overall quality of the application.

---

# Skills Gained

- Executing test cases
- Recording test results
- Identifying execution statuses
- Collecting test evidence
- Writing Test Summary Reports
- Communicating testing outcomes professionally

---

# Next Goal

On Day 12, I will learn about browser developer tools in more depth, including how QA Engineers use the **Elements**, **Console**, and **Network** tabs to investigate defects and support bug reporting.
