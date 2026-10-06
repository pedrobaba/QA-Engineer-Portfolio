# Day 42 — API Test Documentation & Reporting

## Topic

API Test Documentation & Reporting

## Objective

Learn how to professionally document API testing activities, record test cases and execution results, calculate QA metrics, analyze test failures, document defects, maintain evidence, and provide a clear final QA assessment.

---

## 1. API Test Documentation

API test documentation defines:

* What is being tested
* Why it is being tested
* Testing scope
* Test objectives
* Endpoints under test
* Validation areas
* Test environment
* Test data
* Expected results
* Completion criteria

A good API test document provides structure before test execution begins.

---

## 2. API Test Cases

Test cases convert testing requirements and scenarios into traceable checks.

Each test case should have a unique identifier.

Example:

```text
API-DOC-001
API-DOC-002
API-DOC-003
```

Unique IDs make it possible to trace a test from planning through execution, reporting, and defect management.

---

## 3. API Test Execution

During execution, QA compares:

**Expected Result vs Actual Result**

Example:

```text
Expected: HTTP 200
Actual: HTTP 200
Result: PASS
```

The execution report should record actual observations rather than assumptions.

---

## 4. Test Execution Metrics

Important API testing metrics include:

* Total test cases
* Passed
* Failed
* Blocked
* Pass rate
* Execution status

### Day 42 Execution Results

| Metric           | Result |
| ---------------- | -----: |
| Total Test Cases |      8 |
| Passed           |      8 |
| Failed           |      0 |
| Blocked          |      0 |
| Pass Rate        |   100% |

Pass rate calculation:

```text
Pass Rate = (Passed Tests / Total Tests) × 100
```

For Day 42:

```text
(8 / 8) × 100 = 100%
```

---

## 5. API Validation Areas

The Day 42 testing covered:

* HTTP status codes
* Response body
* Required fields
* Data types
* Content-Type
* Response time
* Negative request behavior
* Empty JSON response handling

---

## 6. Test Failure vs Defect

A critical QA distinction:

> A failed test does not automatically mean there is a product defect.

A test failure must be investigated.

Possible causes include:

* Incorrect test assertion
* Incorrect test data
* Environment problem
* Configuration problem
* Actual product/API defect

During Day 42, a controlled test failure was created by expecting user ID `999` while the API actually returned user ID `1`.

```text
Expected: 999
Actual: 1
HTTP Status: 200 OK
Result: FAIL
```

The API was not considered defective because the test expectation was deliberately incorrect.

---

## 7. API Defect Reporting

A professional API defect report should contain:

* Defect ID
* Title
* Environment
* Endpoint
* Method
* Preconditions
* Steps to reproduce
* Expected result
* Actual result
* Severity
* Priority
* Status
* Evidence
* Notes

Day 42 included a controlled/hypothetical defect scenario to practice this reporting structure.

The hypothetical scenario was clearly labeled and was not presented as an actual JSONPlaceholder defect.

---

## 8. Evidence and Traceability

API test results should be supported by evidence where appropriate.

Useful evidence includes:

* Postman request screenshots
* Postman response screenshots
* Test assertion results
* Response headers
* Response timing
* Environment configuration
* Test execution reports

Sensitive credentials, API keys, bearer tokens, passwords, and private information should never be included in public portfolio evidence.

---

## 9. Test Traceability

Example:

```text
API-DOC-007
    ↓
Response-time validation
    ↓
Observed: 923 ms
    ↓
Threshold: < 1000 ms
    ↓
PASS
```

Traceability makes QA results easier to verify and audit.

---

## 10. Day 42 Key Lessons

* Test documentation establishes the testing plan and scope.
* Test cases should have unique, traceable IDs.
* Expected and actual results must be recorded separately.
* Test execution results must be based on actual observations.
* Pass rate provides a quick view of test execution health.
* A failed test is not automatically a defect.
* Defects should only be reported after appropriate investigation.
* Evidence strengthens the credibility of QA results.
* Test cases, execution results, defects, and evidence should be traceable.

---

## Day 42 Result

**Status:** Completed

**Final Score:** 45/45 — 100%

**Test Execution:** 8/8 passed

**Confirmed Defects:** 0

**Observed API Response Time:** 923 ms

**Primary Skill Developed:** API Test Documentation & Reporting
