# Day 44 — Web Testing: Browser & Compatibility Testing

## Overview

Day 44 focused on browser compatibility testing for web applications.

The main goal was to understand how a web application can behave differently across browsers, build browser compatibility test matrices, investigate browser-specific defects using DevTools, and document compatibility issues with evidence.

---

## Learning Objectives

By the end of Day 44, I practiced how to:

* Understand browser compatibility testing
* Distinguish functional testing from compatibility testing
* Understand browser-specific defects
* Compare Chrome, Firefox, Edge, and Safari
* Build a browser compatibility test matrix
* Design cross-browser test cases
* Use browser DevTools Console for investigation
* Use DevTools Network for API/request investigation
* Determine whether an API request was sent
* Distinguish frontend/client-side issues from API/backend issues
* Collect browser compatibility evidence
* Write compatibility bug reports
* Make release decisions based on defect impact

---

## 1. What Is Browser Compatibility Testing?

Browser compatibility testing is testing performed to determine how a web application behaves across different supported browsers and browser environments.

The goal is to verify that the application:

* Functions correctly
* Displays correctly
* Maintains expected behavior
* Does not introduce browser-specific defects

Example:

```text
Chrome → PASS
Firefox → FAIL
Edge → PASS
Safari → PASS
```

This may indicate a browser-specific compatibility issue.

---

## 2. Common Supported Browsers

The four browsers practiced during Day 44 were:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Apple Safari

Different browsers can use different rendering engines and browser technologies.

Examples:

```text
Chrome → Blink
Edge → Blink
Firefox → Gecko
Safari → WebKit
```

Differences in rendering engines, JavaScript behavior, CSS support, browser APIs, and browser versions can result in different application behavior.

---

## 3. Functional Testing vs Browser Compatibility Testing

### Functional Testing

Functional testing verifies whether an application feature performs the function it is designed to perform.

Example:

> Verify that a user can add a product to the cart.

### Browser Compatibility Testing

Browser compatibility testing verifies whether that functionality continues to work correctly across supported browsers.

Example:

```text
Chrome → Add to Cart works
Firefox → Add to Cart fails
Edge → Add to Cart works
Safari → Add to Cart works
```

The feature is functional in some environments but has a browser-specific compatibility problem.

---

## 4. Browser Compatibility Test Matrix

A compatibility matrix helps QA track feature behavior across supported browsers.

For five features and four browsers:

```text
5 features × 4 browsers = 20 test executions
```

Example:

| Feature        | Chrome | Firefox | Edge | Safari |
| -------------- | ------ | ------- | ---- | ------ |
| Login          | PASS   | FAIL    | PASS | PASS   |
| Product Search | PASS   | PASS    | PASS | PASS   |
| Add to Cart    | PASS   | FAIL    | PASS | PASS   |
| Checkout       | PASS   | PASS    | PASS | FAIL   |
| Logout         | PASS   | PASS    | PASS | PASS   |

Final results:

* Total executions: 20
* Passed: 17
* Failed: 3
* Pass rate: 85%

Calculation:

```text
17 / 20 × 100 = 85%
```

---

## 5. Browser Compatibility Test Cases

Five test cases were designed around:

1. Login
2. Product Search
3. Add to Cart
4. Checkout
5. Logout

Example:

```text
Test Case ID: TC-COMP-001
Title: Verify user can log in successfully
Browser: Chrome
Precondition: Valid user account exists

Steps:
1. Open the website in Chrome.
2. Navigate to the Login page.
3. Enter valid credentials.
4. Click Login.

Expected Result:
User is successfully logged in and redirected to the appropriate page.
```

Important QA principle:

> The title, steps, and expected result must describe the same feature.

---

## 6. Browser-Specific Defect Investigation

A scenario was investigated where:

```text
Chrome → Add to Cart works
Firefox → Add to Cart fails
```

Firefox produced:

```text
TypeError: Cannot read properties of undefined
at addToCart.js:42
```

The Network tab showed:

```text
No POST /api/cart request
```

This provided important evidence.

The failure occurred before the API request was sent.

---

## 7. Console + Network Investigation

The investigation process practiced was:

```text
Reproduce defect
      ↓
Check Console
      ↓
Check Network
      ↓
Determine whether request was sent
      ↓
Inspect status/response if request exists
      ↓
Identify likely defect area
      ↓
Collect evidence
      ↓
Report defect
```

### If no API request is sent

Investigate:

* Frontend/client-side code
* JavaScript errors
* Browser-specific behavior
* DOM/event handling
* Browser compatibility

### If the request is sent

Investigate:

* HTTP method
* Request URL
* Request headers
* Request payload
* HTTP status
* Response body
* API/backend behavior

---

## 8. Important QA Investigation Rule

Do not assume the root cause.

For example:

```text
Firefox feature fails
```

does not automatically mean:

> Firefox is broken.

Instead:

```text
Observe
→ Reproduce
→ Compare
→ Inspect
→ Gather evidence
→ Classify
→ Report
```

Evidence should drive the investigation.

---

## 9. Frontend vs Backend/API Investigation

### Firefox Add to Cart

```text
Click Add to Cart
      ↓
JavaScript error
      ↓
No API request
```

Likely area:

> Frontend/client-side + browser compatibility

### Safari Checkout

```text
Click Checkout
      ↓
POST /api/checkout
      ↓
500 Internal Server Error
```

Likely area:

> Backend/API

This distinction is important when determining which component should be investigated by developers.

---

## 10. Evidence Collection

Useful compatibility-testing evidence includes:

* Browser name
* Browser version
* Operating system
* Test environment
* Test steps
* Expected result
* Actual result
* Console errors
* Network request/response
* HTTP status code
* Screenshots
* Screen recordings where useful

For browser-specific defects, evidence should clearly show the difference between the working and failing environments where possible.

---

## 11. Bug Report Practice

### Bug Title

> Add to Cart fails in Firefox and product is not added to cart

### Environment

```text
Browser: Firefox
```

### Precondition

```text
Valid user account exists
```

### Steps to Reproduce

```text
1. Open the e-commerce website in Firefox.
2. Log in with a valid account.
3. Navigate to the product listing page.
4. Select a product.
5. Click Add to Cart.
```

### Expected Result

```text
Selected product is added to the cart.
```

### Actual Result

```text
Product is not added to the cart.
```

### Evidence

```text
- Cart screenshot
- Console error screenshot
- Network evidence showing no POST /api/cart request
```

### Severity

```text
High
```

Severity should ultimately be determined by actual business impact.

---

## 12. Release Decision

The application was **not recommended for production release** in the scenario because Add to Cart failed in a supported browser.

Add to Cart is a core e-commerce function.

The defect should be:

```text
Investigated
→ Fixed
→ Retested
→ Regression tested
→ Then considered for release
```

---

## Key Takeaways

1. Browser compatibility testing verifies application behavior across supported browsers.
2. Functional testing checks whether a feature performs its intended function.
3. Compatibility testing checks whether that functionality remains reliable across supported environments.
4. Five features across four browsers produce 20 feature/browser combinations.
5. DevTools Console helps identify browser-side errors.
6. DevTools Network helps determine whether requests are sent and how APIs respond.
7. No API request generally directs investigation toward the client-side/browser.
8. A request returning an HTTP 4xx/5xx requires investigation of the request and API/backend behavior.
9. QA should not assume the root cause before collecting evidence.
10. Browser-specific defects should include clear environment and reproduction information.
11. A critical functional defect in a supported browser can block a production release.
12. Evidence should support every important QA conclusion.
