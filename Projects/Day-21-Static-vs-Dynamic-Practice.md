# Day 21 — Static vs Dynamic Testing Practice

## Task 1 — Classification

| Activity | Classification |
|---|---|
| Reviewing a requirement document for missing information | Static |
| Logging into an application with valid credentials | Dynamic |
| Reviewing source code without executing it | Static |
| Testing whether a user can add a product to a cart | Dynamic |
| Reviewing acceptance criteria before development begins | Static |
| Sending a POST request and validating the API response | Dynamic |
| Reviewing a test case for missing expected results | Static |
| Testing a password reset feature | Dynamic |

---

## Task 2 — Review Types

### A. Walkthrough

The author presents a document to the team and explains it step by step to collect feedback.

### B. Informal Review

A simple review performed without a formal process or defined roles.

### C. Technical Review

A structured review performed by technical experts to evaluate a technical work product.

### D. Inspection

A formal and systematic review process with defined roles used to identify defects.

---

## Task 3 — SauceDemo Scenarios

| Scenario | Classification |
|---|---|
| Reading login requirements before testing begins | Static |
| Entering invalid login credentials and checking the error message | Dynamic |
| Reviewing a test case for the checkout feature | Static |
| Adding a product to the cart and verifying the cart quantity | Dynamic |
| Reviewing acceptance criteria for the product sorting feature | Static |

---

## Task 4 — Requirement Analysis

### Requirement

> Users should be able to complete checkout quickly.

### Is this requirement clear?

No. The requirement is unclear because the word "quickly" is subjective and does not define a measurable expectation.

### Questions to Ask

1. What does "quickly" mean in measurable terms?
2. What is the expected maximum time for checkout?
3. Does this refer to page loading time or the complete checkout process?
4. How many steps should the checkout process contain?
5. What should happen if the process takes longer than expected?

### Testing Type

Reviewing this requirement is Static Testing because the application is not being executed.

### Potential Problems if Not Clarified

1. Developers may interpret "quickly" differently and implement different performance expectations.
2. QA testers may not know the measurable criteria required to determine whether the feature passes or fails.

### Improved Requirement

> The checkout page should load within 3 seconds under defined test conditions.

---

## Key Learning

Static Testing helps identify problems without executing the software.

Dynamic Testing requires executing the software and validating its actual behaviour.

Both are important parts of the software testing process.
