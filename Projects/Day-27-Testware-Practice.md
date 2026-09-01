# Day 27 — Testware Practice

**Date:** September 1, 2026  
**Day:** 27 / 90  
**Project:** SauceDemo  
**Topic:** Testware

---

# 🎯 Objective

The objective of this exercise was to understand how different test work products are created and connected during software testing.

---

# 🧪 Test Scenario

### Scenario

Verify that a logged-in user can successfully complete the SauceDemo checkout process using valid required information.

---

# 🔍 Test Conditions

1. Valid shipping information
2. Missing first name
3. Missing last name
4. Missing postal code
5. Successful checkout with valid information

---

# 🧪 Test Case

## TC-CHECKOUT-001

**Title:** Complete checkout with valid information

**Precondition:**

User is logged in and has a product in the cart.

**Steps**:

Open the SauceDemo cart.
Click Checkout.
Enter the first name.
Enter the last name.
Enter the postal code.
Click Continue.
Review the order.
Click Finish.

**Expected Result**:

The checkout should be completed successfully and an order confirmation should be displayed.

**Test Data:**

```text
First Name: Pedro
Last Name: QA
Postal Code: 230001
Product: Any available SauceDemo product
```
# 📚 Checkout Test Suite
```TC-001 → Complete checkout with valid information

TC-002 → Checkout with missing first name

TC-003 → Checkout with missing last name

TC-004 → Checkout with missing postal code

TC-005 → Cancel checkout before completing the order
```

# 🧪 Test Execution Example
| Test Case | Result |
| --------- | ------ |
| TC-001    | PASS   |
| TC-002    | PASS   |
| TC-003    | PASS   |
| TC-004    | PASS   |
| TC-005    | PASS   |

> Note: These are practice results demonstrating testware organization and are not presented as evidence of an actual SauceDemo execution.
