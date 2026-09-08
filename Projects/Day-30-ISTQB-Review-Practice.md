# Day 30 — ISTQB Review Practice

**Date:** September 8, 2026  
**Status:** ✅ Completed

---

# 🎯 Project Objective

This practice project consolidated the ISTQB Foundation concepts studied during Days 22–29.

The exercise focused on applying testing principles, test techniques and defect management concepts to practical QA scenarios.

---

# 🧪 Practice Scenario

An e-commerce application allows users to:

1. Log in
2. Add products to a cart
3. Open checkout
4. Enter payment details
5. Complete payment

During testing, the application crashes when the user clicks **Pay Now** with valid payment information.

The issue occurs consistently.

---

# 🔎 QA Analysis

## Testing Approach

The primary testing approach is:

**Functional Testing**

Additional investigation may include:

- Exploratory Testing
- Browser DevTools
- Console inspection
- Network inspection
- API investigation where applicable

---

# 🐛 Example Defect Report

## Title

**Application crashes when user clicks Pay Now with valid payment details**

## Preconditions

- User has a valid account.
- Product is available.
- Product has been added to the cart.
- User has valid payment details.

## Steps to Reproduce

1. Open the e-commerce application.
2. Log in with a valid account.
3. Add a product to the cart.
4. Open checkout.
5. Enter valid payment details.
6. Click **Pay Now**.

## Expected Result

The payment should be processed successfully and the user should receive an order confirmation.

## Actual Result

The application crashes after clicking **Pay Now**.

## Severity

Critical/High depending on the project's severity definitions.

## Priority

High.

## Evidence

Potential evidence:

- Screenshot
- Screen recording
- Console error
- Network request/response
- Browser/device information
- Timestamp

---

# 🔄 Failed Retest Scenario

If the developer marks the defect as **Fixed** but QA retests the issue and it still occurs:

```text
Fixed
 ↓
Retest
 ↓
Failed
 ↓
Reopened
 ↓
Developer fixes
 ↓
Retest
 ↓
Passed
 ↓
Verified
 ↓
Closed
```

QA should normally reopen the existing defect instead of creating a duplicate.

### 🧠 Technique Application
Equivalence Partitioning

For a transfer amount of ₦1,000–₦500,000:
```
Invalid: < ₦1,000
Valid: ₦1,000–₦500,000
Invalid: > ₦500,000
```
Boundary Value Analysis
```
₦999
₦1,000
₦1,001
₦499,999
₦500,000
₦500,001
```
### 📋 Testware Identified
| Artifact            | Purpose                          |
| ------------------- | -------------------------------- |
| Test Plan           | Defines overall testing approach |
| Test Cases          | Defines individual tests         |
| Test Log            | Records execution results        |
| Defect Report       | Documents defects                |
| Test Summary Report | Summarizes testing               |

### 📌 Learning Outcome

This exercise reinforced the connection between:

Test Design → Test Execution → Defect Reporting → Retesting → Test Closure
