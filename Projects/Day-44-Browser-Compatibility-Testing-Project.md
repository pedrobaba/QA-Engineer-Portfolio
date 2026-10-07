# Day 44 — Browser Compatibility Testing Project

## Project Overview

This project focused on validating an e-commerce web application across four supported browsers:

* Chrome
* Firefox
* Edge
* Safari

The project covered functional compatibility, browser-specific defect investigation, DevTools analysis, evidence collection, and release-readiness assessment.

---

## Supported Browsers

| Browser | Engine |
| ------- | ------ |
| Chrome  | Blink  |
| Firefox | Gecko  |
| Edge    | Blink  |
| Safari  | WebKit |

---

## Features Tested

* Login
* Product Search
* Add to Cart
* Checkout
* Logout

---

## Compatibility Test Matrix

| Feature        | Chrome | Firefox | Edge | Safari |
| -------------- | ------ | ------- | ---- | ------ |
| Login          | PASS   | FAIL    | PASS | PASS   |
| Product Search | PASS   | PASS    | PASS | PASS   |
| Add to Cart    | PASS   | FAIL    | PASS | PASS   |
| Checkout       | PASS   | PASS    | PASS | FAIL   |
| Logout         | PASS   | PASS    | PASS | PASS   |

---

## Execution Summary

| Metric                | Result |
| --------------------- | -----: |
| Total test executions |     20 |
| Passed                |     17 |
| Failed                |      3 |
| Pass rate             |    85% |
| Failed rate           |    15% |

### Calculation

```text
17 / 20 × 100 = 85%
```

---

## Failed Compatibility Tests

### 1. Firefox — Login

**Result:** FAIL

Evidence:

```text
Console:
TypeError: Cannot read properties of undefined
at login.js:27

Network:
POST /api/login
Request not sent
```

Likely investigation area:

> Frontend/client-side + browser compatibility

---

### 2. Firefox — Add to Cart

**Result:** FAIL

Evidence:

```text
Console:
TypeError: Cannot read properties of undefined
at addToCart.js:42

Network:
POST /api/cart
Request not sent
```

Likely investigation area:

> Frontend/client-side + browser compatibility

---

### 3. Safari — Checkout

**Result:** FAIL

Evidence:

```text
Console:
No JavaScript error

Network:
POST /api/checkout
Status: 500 Internal Server Error
```

Likely investigation area:

> Backend/API

---

## Detailed Defect Report

### Defect Title

**Add to Cart fails in Firefox and product is not added to cart**

### Environment

```text
Browser: Firefox
Application: E-commerce web application
```

### Precondition

A valid user account exists.

### Steps to Reproduce

1. Open the application in Firefox.
2. Log in with a valid account.
3. Navigate to the product listing page.
4. Select a product.
5. Click **Add to Cart**.

### Expected Result

The selected product is added to the cart and the cart count is updated.

### Actual Result

The product is not added to the cart.

### Evidence

* Cart screenshot
* Firefox Console error screenshot
* Network evidence showing no `/api/cart` request

### Severity

**High**

### Likely Area

Frontend/client-side browser compatibility issue.

---

## QA Release Assessment

### Recommendation

**Do not release the application in its current state.**

### Reason

A core e-commerce function, Add to Cart, fails in Firefox, which is a supported browser.

The defect should be investigated and fixed before release, followed by:

* Retesting
* Cross-browser regression testing
* Verification of the affected functionality

The Safari checkout failure should also be investigated because the API returned HTTP 500.

---

## Project Skills Demonstrated

This project demonstrates practical experience with:

* Cross-browser testing
* Compatibility matrices
* Functional verification
* Test execution
* Browser-specific defect identification
* Chrome DevTools
* Firefox DevTools
* Console investigation
* Network investigation
* HTTP status analysis
* Frontend/API defect isolation
* Evidence collection
* Bug reporting
* Severity assessment
* Release-readiness assessment

---

## Project Outcome

**20 test executions**

**17 passed**

**3 failed**

**85% pass rate**

The project demonstrated the ability to investigate browser-specific failures using evidence rather than assuming the root cause.
