# Day 44 — Learning Journal

## Topic

**Web Testing: Browser & Compatibility Testing**

## What I Learned

Today I learned how to test web applications across different browsers and identify browser-specific problems.

I learned that browser compatibility testing is not simply checking whether a website opens in another browser. The goal is to verify that the application's functionality and presentation continue to work correctly across supported browser environments.

I practiced testing:

* Chrome
* Firefox
* Edge
* Safari

I also learned how to create a compatibility test matrix and calculate test coverage and pass rates.

---

## Practical Work Completed

I created browser compatibility test cases for:

* Login
* Product Search
* Add to Cart
* Checkout
* Logout

I worked with a 20-test compatibility matrix.

Final execution:

```text
20 total
17 passed
3 failed
85% pass rate
```

---

## DevTools Investigation

I practiced using the browser Console and Network tools to investigate compatibility defects.

One important scenario involved Firefox Add to Cart.

The Console showed:

```text
TypeError: Cannot read properties of undefined
at addToCart.js:42
```

The Network tab showed that the Add to Cart API request was not sent.

This helped me understand that the failure was likely occurring on the frontend/client side before the API request.

I also analyzed a Safari checkout failure where:

```text
POST /api/checkout
→ 500 Internal Server Error
```

This directed investigation toward the API/backend.

---

## Key QA Lesson

One of my biggest lessons today was:

> **Do not assume the root cause. Follow the evidence.**

My investigation process became:

```text
Observe
→ Reproduce
→ Compare
→ Inspect
→ Gather evidence
→ Classify
→ Report
```

---

## What I Need to Improve

I need more practice with:

* Browser versions
* Browser-specific JavaScript behavior
* CSS/rendering differences
* DevTools Console errors
* Network request analysis
* Cross-browser regression testing
* Writing concise compatibility bug reports

---

## Day 44 Result

**Practical score: 90%**

**Status: COMPLETED**

---

