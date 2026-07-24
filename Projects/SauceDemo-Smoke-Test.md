# SauceDemo Smoke Test

**Project:** SauceDemo  
**Application URL:** https://www.saucedemo.com  
**Testing Type:** Smoke Testing  
**Tester:** Pedro  
**Date:** July 2026  
**Browser:** Google Chrome (Latest Version)  
**Operating System:** Windows 10/11  

---

# Objective

The objective of this Smoke Test is to verify that the critical functionalities of the SauceDemo application are working correctly before proceeding with detailed testing.

---

# Scope

The following core features were tested:

- Login
- Product Listing
- Shopping Cart
- Checkout
- Logout

---

# Test Results

| Test ID | Test Scenario | Expected Result | Actual Result | Status |
|---------|---------------|-----------------|---------------|--------|
| ST-001 | Login with valid credentials | User should successfully log in and be redirected to the Products page | Login successful and Products page displayed | ✅ PASS |
| ST-002 | Verify Product Listing page | Product list should load correctly | Products displayed successfully | ✅ PASS |
| ST-003 | Add a product to the cart | Selected product should be added to the cart | Product added successfully | ✅ PASS |
| ST-004 | Open the Shopping Cart | Cart page should display selected products | Cart page opened successfully | ✅ PASS |
| ST-005 | Proceed to Checkout | User should be able to access the Checkout Information page | Checkout page displayed successfully | ✅ PASS |
| ST-006 | Logout | User should be logged out and redirected to the login page | Logout completed successfully | ✅ PASS |

---

# Summary

| Metric | Value |
|---------|------:|
| Total Test Cases | 6 |
| Passed | 6 |
| Failed | 0 |
| Blocked | 0 |

---

# Conclusion

All critical functionalities passed the Smoke Test.

The application build is considered **stable** and is ready for more detailed functional, regression, and exploratory testing.

---

# Observations

- Login functionality worked as expected.
- Product listing loaded without issues.
- Products could be added to the cart successfully.
- Checkout page was accessible.
- Logout function worked correctly.
- No critical defects were observed during the Smoke Test.

---

# Recommendation

Proceed with:

- Functional Testing
- Regression Testing
- Exploratory Testing
- Cross-browser Testing
- Negative Testing

The application is suitable for further QA activities.
