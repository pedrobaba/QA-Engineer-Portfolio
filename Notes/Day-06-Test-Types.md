# Day 6 – Test Types

**Date:** July 2026  
**Topic:** Test Types in Software Testing  
**Estimated Study Time:** 4 Hours  
**Status:** ✅ Completed

---

# Objective

The objective of today's lesson is to understand the different types of software testing used during the Software Testing Life Cycle (STLC) and when each should be applied.

---

# What are Test Types?

Test types describe the **purpose** of a testing activity. Different test types help QA Engineers verify different aspects of an application, from checking whether a build is stable to ensuring that bug fixes do not introduce new defects.

---

# 1. Smoke Testing

## Definition

Smoke Testing is the initial testing performed on a new software build to verify that its **critical functionalities** are working correctly.

If the smoke test fails, detailed testing should not continue because the build is considered unstable.

## Purpose

- Verify build stability.
- Confirm that major features are functional.
- Decide whether to proceed with further testing.

## Example

For the SauceDemo application:

- Login → ✅
- Product Page → ✅
- Cart → ✅
- Checkout → ✅

Since all critical features work, the build passes the Smoke Test.

---

# 2. Sanity Testing

## Definition

Sanity Testing is performed after a bug fix or a small change to verify that the affected functionality works as expected.

Unlike Smoke Testing, Sanity Testing focuses only on the modified area.

## Purpose

- Verify a specific bug fix.
- Ensure recent changes behave correctly.
- Avoid unnecessary full regression testing.

## Example

A developer fixes the Checkout page.

QA verifies:

- Checkout process
- Continue button
- Order completion

If these work correctly, the sanity test passes.

---

# 3. Regression Testing

## Definition

Regression Testing ensures that recent changes or bug fixes have **not affected existing functionality**.

It involves testing both modified and related areas of the application.

## Purpose

- Detect unintended side effects.
- Ensure existing features continue to work.
- Maintain software stability after updates.

## Example

After fixing the Checkout page, QA tests:

- Login
- Product Listing
- Cart
- Checkout
- Logout

Everything should continue working correctly.

---

# 4. Retesting

## Definition

Retesting is the process of executing the **same failed test case again** after a developer has fixed a reported bug.

The goal is to verify that the defect has been resolved.

## Purpose

- Confirm that a reported bug has been fixed.
- Validate the developer's fix.

## Example

Original Bug:

Checkout button does not respond.

Developer fixes the issue.

QA reruns the original test case.

Expected Result:

Checkout proceeds successfully.

---

# 5. Exploratory Testing

## Definition

Exploratory Testing is an informal testing approach where testers simultaneously learn, design, and execute tests without predefined test cases.

It relies on the tester's experience, curiosity, and creativity to uncover unexpected defects.

## Purpose

- Discover hidden defects.
- Explore application behaviour.
- Improve overall software quality.

## Example

While testing SauceDemo, a QA Engineer:

- Rapidly clicks buttons.
- Refreshes pages repeatedly.
- Uses the browser Back button.
- Enters invalid URLs.
- Switches tabs during checkout.
- Attempts unexpected user actions.

Any unusual behaviour is documented as a potential defect.

---

# Comparison of Test Types

| Test Type | Purpose | Scope | Typical Performer |
|------------|---------|-------|-------------------|
| Smoke Testing | Verify build stability | Critical features only | QA Engineer |
| Sanity Testing | Verify a specific change or bug fix | Limited | QA Engineer |
| Regression Testing | Ensure existing functionality still works | Broad | QA Engineer |
| Retesting | Verify that a reported defect has been fixed | Single defect | QA Engineer |
| Exploratory Testing | Discover unknown defects | Flexible | QA Engineer |

---

# Smoke vs Sanity Testing

| Smoke Testing | Sanity Testing |
|----------------|----------------|
| Performed on a new build | Performed after a bug fix |
| Covers major functionalities | Covers only the affected functionality |
| Determines if the build is stable | Determines if the fix works correctly |
| Broader in scope | Narrower in scope |

---

# Regression Testing vs Retesting

| Regression Testing | Retesting |
|--------------------|-----------|
| Checks that existing functionality still works | Confirms a specific bug has been fixed |
| Covers multiple features | Covers only the original failed test case |
| Usually larger in scope | Very focused |
| Performed after changes | Performed after bug fixes |

---

# Key Takeaways

- Smoke Testing determines whether a build is stable enough for further testing.
- Sanity Testing validates a specific bug fix or minor change.
- Regression Testing ensures that recent changes have not introduced new defects.
- Retesting confirms that a reported bug has been successfully fixed.
- Exploratory Testing allows QA Engineers to discover defects through creative and unscripted testing.

---

# Summary

Understanding the purpose of each test type helps QA Engineers select the appropriate testing approach for different situations. In real-world software projects, these testing types are often used together to ensure that software is stable, reliable, and ready for release.
