# Day 43 — API Testing Portfolio Project

## Overview

Day 43 focused on building a complete, portfolio-ready API testing project using Postman and JSONPlaceholder.

The goal was to combine the API testing skills developed throughout the previous API-focused days into one structured QA project covering test planning, test design, execution, automation, reporting, traceability, evidence, and risk assessment.

---

## API Under Test

**API:** JSONPlaceholder

**Base URL:**

`https://jsonplaceholder.typicode.com`

**Primary Resource:**

Users

---

## Project Objective

The objective was to validate the functionality, response behavior, data structure, headers, basic performance characteristics, and negative behavior of the Users API using Postman.

The project also demonstrated how to organize API tests into a reusable automated collection and report the results professionally.

---

## Testing Scope

### In Scope

* GET requests
* Positive testing
* Negative testing
* Status-code validation
* JSON response validation
* JSON structure validation
* Data-type validation
* Header validation
* Response-time validation
* Postman assertions
* Collection execution
* Test traceability
* Test reporting
* Evidence capture
* Defect and risk assessment

### Out of Scope

* Load testing
* Stress testing
* Penetration testing
* Infrastructure testing
* Production security assessment

---

## Test Scenarios

| ID         | Scenario                          |
| ---------- | --------------------------------- |
| API-SC-001 | Retrieve all users                |
| API-SC-002 | Retrieve a valid user             |
| API-SC-003 | Validate required user fields     |
| API-SC-004 | Validate user field data types    |
| API-SC-005 | Validate Content-Type header      |
| API-SC-006 | Validate response time            |
| API-SC-007 | Request nonexistent user          |
| API-SC-008 | Request invalid user ID           |
| API-SC-009 | Validate negative response status |
| API-SC-010 | Validate negative response body   |

---

## API Test Cases

| Test Case ID | Scenario ID | Test Case                         | Method | Endpoint    | Expected Result                                      |
| ------------ | ----------- | --------------------------------- | ------ | ----------- | ---------------------------------------------------- |
| API-TC-001   | API-SC-001  | Retrieve all users                | GET    | /users      | HTTP 200 and users returned                          |
| API-TC-002   | API-SC-002  | Retrieve valid user               | GET    | /users/1    | HTTP 200 and user ID 1 returned                      |
| API-TC-003   | API-SC-003  | Validate required user fields     | GET    | /users/1    | Required fields are present                          |
| API-TC-004   | API-SC-004  | Validate user field data types    | GET    | /users/1    | Fields have expected data types                      |
| API-TC-005   | API-SC-005  | Validate Content-Type             | GET    | /users/1    | Content-Type contains application/json               |
| API-TC-006   | API-SC-006  | Validate response time            | GET    | /users/1    | Response time is below 1000ms                        |
| API-TC-007   | API-SC-007  | Retrieve nonexistent user         | GET    | /users/9999 | HTTP 404 returned                                    |
| API-TC-008   | API-SC-008  | Request invalid user ID           | GET    | /users/abc  | Appropriate client-error response returned           |
| API-TC-009   | API-SC-009  | Validate negative response status | GET    | /users/9999 | Status code matches expected negative response       |
| API-TC-010   | API-SC-010  | Validate negative response body   | GET    | /users/9999 | Response body matches expected empty/error structure |

---

## Postman Collection Structure

```text
Day 43 - API Testing Portfolio
│
├── 01 - Positive Testing
│   ├── Get All Users
│   └── Get User 1
│
└── 02 - Negative Testing
    ├── Get Nonexistent User
    └── Get Invalid User ID
```

---

## Automated Test Coverage

The collection contains four requests and seventeen automated Postman tests.

### Get All Users

* HTTP 200 validation
* Response array validation
* Users returned validation
* JSON Content-Type validation
* Response-time validation

**Result: 5/5 passed**

### Get User 1

* HTTP 200 validation
* Required-field validation
* Data-type validation
* JSON Content-Type validation
* Response-time validation

**Result: 5/5 passed**

### Get Nonexistent User

* HTTP 404 validation
* JSON response validation
* Empty JSON object validation
* Response-time validation

**Result: 4/4 passed**

### Get Invalid User ID

* HTTP 404 validation
* JSON response validation
* Response-time validation

**Result: 3/3 passed**

---

## Final Automated Execution

| Metric              | Result |
| ------------------- | -----: |
| Collection requests |      4 |
| Automated tests     |     17 |
| Passed              |     17 |
| Failed              |      0 |
| Blocked             |      0 |
| Pass Rate           |   100% |

The collection was executed successfully twice after automation was configured, with the final execution producing:

**17/17 tests passed.**

---

## Performance Observations

During manual execution:

| Endpoint        | Observed Response Time |
| --------------- | ---------------------: |
| GET /users      |           1.61 seconds |
| GET /users/1    |                  568ms |
| GET /users/9999 |                  768ms |
| GET /users/abc  |                  655ms |

Later automated executions recorded:

| Endpoint        | Observed Response Time |
| --------------- | ---------------------: |
| GET /users      |                  517ms |
| GET /users/9999 |                  528ms |
| GET /users/abc  |                  588ms |

The earlier 1.61-second measurement was retained as an observation rather than rewritten because it was a legitimate execution result.

No production performance SLA was provided, so the 1.61-second observation was not classified as a confirmed performance defect.

---

## Automation Issues Identified and Resolved

### Issue 1 — Postman Tests Not Detected

The first collection run showed:

```text
4 requests
0 passed
0 failed
No tests found
```

The requests executed, but the saved collection requests did not have their post-response assertions attached correctly.

The assertions were subsequently attached to the correct requests and verified individually.

### Issue 2 — Incorrect Empty Response Assumption

The nonexistent-user response was initially assumed to be:

```json
[]
```

After inspecting the actual response, it was confirmed to be:

```json
{}
```

The assertion was corrected to validate the actual empty JSON object.

### Issue 3 — Test Script Placement

One assertion initially produced an error because the test code had been placed in the Pre-request Script section instead of the Post-response/Tests section.

The script was moved to the correct location and executed successfully.

---

## Defect & Risk Assessment

### Confirmed Functional Defects

No confirmed functional defects were identified during the executed scenarios.

### Performance Observation

An earlier manual execution of `GET /users` returned approximately 1.61 seconds.

A later execution returned approximately 517ms.

Because response times varied and no production performance SLA was defined, this remains a performance observation requiring further testing rather than a confirmed defect.

### Risk Areas Not Tested

Further testing would be required before making conclusions about:

* Load handling
* Stress behavior
* Security vulnerabilities
* Production performance
* Infrastructure reliability

---

## Evidence

A Postman Collection Runner screenshot was captured showing:

```text
17 automated tests
17 passed
0 failed
100% pass rate
```

Evidence filename:

`day-43-postman-collection-17-17-pass.png`

---

## QA Assessment

The Users API matched the defined expectations for all executed Day 43 scenarios.

The final automated collection execution produced:

**17/17 passed — 100%**

No confirmed functional defects were identified.

The project demonstrates practical experience with:

* API test planning
* Test scenario design
* Test case design
* Positive testing
* Negative testing
* Postman automation
* Assertions
* Status-code validation
* JSON validation
* Data-type validation
* Header validation
* Response-time validation
* Test traceability
* Evidence collection
* Test reporting
* Risk assessment

---

## Key Takeaways

1. A complete QA project should combine planning, test design, execution, automation, evidence, and reporting.
2. Passing automated tests only proves that the tested scenarios passed.
3. HTTP 200 does not automatically mean the complete response is correct.
4. JSON objects `{}` and arrays `[]` are different data structures.
5. Postman assertions must be attached to the correct post-response test section.
6. Test execution and API execution are not the same thing.
7. Performance observations should not automatically be classified as defects without a defined requirement.
8. Traceability connects scenarios to test cases and execution results.
9. Evidence should accurately represent what was actually tested.
10. Professional QA reporting clearly distinguishes confirmed defects, observations, risks, and untested areas.
