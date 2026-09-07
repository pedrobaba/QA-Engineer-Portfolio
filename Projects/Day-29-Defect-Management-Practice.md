# Day 29 — Defect Management Practice

**Date:** September 7, 2026

---

## 🎯 Objective

The objective of this exercise was to practice identifying, documenting, prioritizing, and managing software defects.

---

# Exercise 1 — Error, Defect and Failure

### Scenario 1

A developer accidentally uses `<` instead of `<=`.

**Classification:** Error

### Scenario 2

The software contains incorrect logic that rejects valid users.

**Classification:** Defect

### Scenario 3

A valid user enters age 18 but receives an error saying the age must be greater than 18.

**Classification:** Failure

### Scenario 4

A tester accidentally enters incorrect test data.

**Classification:** Error

---

# Exercise 2 — Severity vs Priority

### Severity

Severity describes how badly a defect affects the application.

### Priority

Priority describes how urgently the defect should be fixed.

### Memory Aid

```text
Severity = Impact
Priority = Urgency

```

# Exercise 3 — Defect Severity
| Defect                                              | Severity |
| --------------------------------------------------- | -------- |
| Payment application crashes when Pay Now is clicked | Critical |
| Logo is slightly misaligned                         | Low      |
| Search displays incorrect product descriptions      | Medium   |
| Small spacing problem between buttons               | Low      |

# Exercise 4 — Defect Report
**Scenario**

Valid users should be redirected to the dashboard after login.

**Observed Behavior**

The user enters valid credentials, clicks Login, but remains on the login page.

**Defect Report**

**Title**:
Valid users remain on the Login page after clicking Login


**Environment**:
iPhone XS Max, iOS 18.7.10, Chrome


**Steps to Reproduce**:

Navigate to the application's Login page.
Enter a valid username and password.
Click Login.


**Expected Result**:
User should be successfully authenticated and redirected to the dashboard.


**Actual Result**:
User remains on the Login page and is not redirected to the dashboard.

**Severity**:
Critical

**Priority**:
High

**Evidence**:
Screenshot and screen recording

# Exercise 5 — Defect Life Cycle

Correct defect workflow:
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
If the fix fails:
Fixed
 ↓
Retest
 ↓
Failed
 ↓
Reopened
 ↓
In Progress


# Exercise 6 — Defect Clustering

**Test Results**
| Module        | Defects |
| ------------- | ------: |
| Login         |       2 |
| Search        |       3 |
| Checkout      |      14 |
| Profile       |       1 |
| Notifications |       2 |

Finding

The Checkout module contains the largest concentration of defects.

QA Action

The QA team should consider increasing testing and investigation of the Checkout module because the high number of defects suggests that it may be a defect-prone or higher-risk area.

# Exercise 7 — Failed Retest

Scenario

A developer marks a payment defect as Fixed.

During retesting, QA discovers that the same problem still occurs.

Correct Action

The existing defect should be reopened rather than creating a duplicate defect.

Status

Reopened

Reason

The original defect still exists and requires further development work and another retest.
