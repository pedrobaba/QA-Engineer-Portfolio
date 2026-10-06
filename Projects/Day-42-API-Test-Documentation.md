# Day 42 — API Test Documentation & Reporting

## 1. Project Overview

This project documents the API testing activities performed against the JSONPlaceholder REST API.

The objective is to demonstrate how API testing activities can be documented, executed, evaluated, and reported using professional QA practices.

## 2. API Under Test

**API:** JSONPlaceholder  
**Base URL:** https://jsonplaceholder.typicode.com  
**Tool:** Postman

## 3. Testing Objectives

The objectives of this testing activity are to:

- Verify API response status codes.
- Validate response body content.
- Verify required response fields.
- Validate data types.
- Validate response headers.
- Validate response time.
- Test valid and invalid API requests.
- Identify and document unexpected API behavior.
- Record test execution results.

## 4. Scope of Testing

### In Scope

- GET requests
- Positive API testing
- Negative API testing
- Response status validation
- Response body validation
- Response schema/field validation
- Data type validation
- Header validation
- Response-time validation
- Basic authentication/security test scenarios
- API test automation using Postman assertions

### Out of Scope

- Load testing
- Stress testing
- Production security testing
- Penetration testing
- Infrastructure testing

## 5. Endpoints Covered

| Endpoint | Method | Purpose |
|---|---|---|
| `/users/1` | GET | Retrieve an existing user |
| `/users/9999` | GET | Test nonexistent user handling |
| `/users/abc` | GET | Test invalid user ID handling |

## 6. Validation Areas

The following API characteristics are validated:

- HTTP status code
- Response body
- Required fields
- Data types
- Exact field values
- Response headers
- Content-Type
- Response time
- Empty response handling
- Negative request behavior

## 7. Test Environment

| Item | Details |
|---|---|
| API Tool | Postman |
| API | JSONPlaceholder |
| Environment | Day 41 - API Environment |
| Operating System | Windows |
| Test Type | Manual + Automated Assertions |

## 8. Test Data

The following test data is used during API testing:

| Test Data | Purpose |
|---|---|
| User ID `1` | Valid existing user |
| User ID `9999` | Nonexistent user |
| User ID `abc` | Invalid/non-numeric user ID |

## 9. Expected Results

API responses should:

- Return the appropriate HTTP status code.
- Return the expected response structure.
- Contain required fields where applicable.
- Return values using the expected data types.
- Return appropriate Content-Type headers.
- Meet the defined response-time threshold.
- Handle invalid requests according to the API's behavior.

## 10. Test Execution

Detailed execution results will be recorded separately as testing activities are completed.

## 11. Defect Reporting

Any unexpected behavior identified during testing will be documented with:

- Defect ID
- Title
- Environment
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Evidence
- Status

## 12. Test Completion Criteria

API testing will be considered complete when:

- Planned test cases have been executed.
- Test results have been recorded.
- Failed tests have been investigated.
- Confirmed defects have been documented.
- Test execution metrics have been calculated.
- Final API test results have been summarized.

## 13. API Test Cases

| Test Case ID | Test Scenario | Endpoint | Method | Expected Result |
|---|---|---|---|---|
| API-DOC-001 | Retrieve an existing user | `/users/1` | GET | HTTP 200 and valid user data returned |
| API-DOC-002 | Retrieve a nonexistent user | `/users/9999` | GET | HTTP 404 and empty response object returned |
| API-DOC-003 | Submit a non-numeric user ID | `/users/abc` | GET | API returns the appropriate error status |
| API-DOC-004 | Validate required user fields | `/users/1` | GET | Required fields are present |
| API-DOC-005 | Validate user field data types | `/users/1` | GET | Fields contain expected data types |
| API-DOC-006 | Validate Content-Type header | `/users/1` | GET | Content-Type indicates JSON |
| API-DOC-007 | Validate response time | `/users/1` | GET | Response is returned within defined threshold |
| API-DOC-008 | Validate nonexistent-user response body | `/users/9999` | GET | Response body is an empty JSON object |

## 14. Test Execution Report

### Execution Summary

| Metric | Result |
|---|---:|
| Total Test Cases | 8 |
| Passed | 8 |
| Failed | 0 |
| Blocked | 0 |
| Pass Rate | 100% |

### Detailed Execution Results

| Test Case ID | Test Scenario | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| API-DOC-001 | Retrieve an existing user | HTTP 200 and valid user data | HTTP 200 and expected user returned | PASS |
| API-DOC-002 | Retrieve a nonexistent user | HTTP 404 and empty JSON object | HTTP 404 and `{}` returned | PASS |
| API-DOC-003 | Submit a non-numeric user ID | API returns appropriate error status | HTTP 404 returned | PASS |
| API-DOC-004 | Validate required user fields | Required fields are present | Required fields present | PASS |
| API-DOC-005 | Validate user field data types | Fields contain expected data types | Data types correct | PASS |
| API-DOC-006 | Validate Content-Type header | Content-Type indicates JSON | JSON Content-Type returned | PASS |
| API-DOC-007 | Validate response time | Response below 1000 ms | 923 ms | PASS |
| API-DOC-008 | Validate nonexistent-user response body | Empty JSON object returned | `{}` returned | PASS |

### Execution Status

**Overall Result: PASS**

All 8 planned API test cases passed during this execution cycle. No failed or blocked test cases were recorded.

## 15. API Defect Report

### Defect ID

API-BUG-001

### Title

API returns HTTP 200 instead of HTTP 404 for a nonexistent user

### Environment

- Tool: Postman
- API: JSONPlaceholder
- Endpoint: `/users/9999`
- Method: GET

### Preconditions

The API is available and the test environment is configured correctly.

### Steps to Reproduce

1. Open Postman.
2. Send a GET request to `/users/9999`.
3. Observe the HTTP response status code.

### Expected Result

The API should return:

```text
404 Not Found

### Very important

Notice the final **Notes** section.

We are explicitly saying this is a **controlled documentation scenario**, because your actual test returned 404.

We must never put a hypothetical defect into your portfolio as if you discovered it in a real execution.

That's the kind of accuracy I want you to maintain throughout your QA portfolio.
```



```text
Defect report added: YES/NO
Defect ID:
Actual execution was 404: YES/NO
Hypothetical scenario clearly labeled: YES/NO
```

## 16. Test Execution Summary

### Overall Result

The API test execution covered 8 documented test cases.

| Metric | Result |
|---|---:|
| Total Test Cases | 8 |
| Passed | 8 |
| Failed | 0 |
| Blocked | 0 |
| Pass Rate | 100% |
| Execution Status | PASS |

### Key Findings

- All planned API test cases passed during the execution cycle.
- Existing-user retrieval returned HTTP 200 as expected.
- Nonexistent-user handling returned HTTP 404 as expected.
- Required response fields were present.
- Response data types matched expectations.
- The API returned a JSON Content-Type.
- The observed response time was 923 ms, which was below the defined 1000 ms threshold.
- No confirmed API defects were identified during this execution cycle.

### QA Assessment

Based on the executed test cases, the tested API functionality met the defined validation criteria for this test cycle.

No confirmed defects were raised from the actual execution results.

## 17. Test Evidence & Traceability

### Evidence Sources

The following evidence can be used to support the API test results:

| Evidence | Purpose |
|---|---|
| Postman request screenshot | Shows endpoint, method, and request configuration |
| Postman response screenshot | Shows HTTP status and response body |
| Postman test results | Shows automated assertion results |
| Environment configuration | Shows the API base URL and test environment |
| Test execution report | Provides the documented pass/fail results |

### Traceability

| Test Case | Evidence | Execution Result |
|---|---|---|
| API-DOC-001 | Postman response | PASS |
| API-DOC-002 | Postman response | PASS |
| API-DOC-003 | Postman response | PASS |
| API-DOC-004 | Postman test results | PASS |
| API-DOC-005 | Postman test results | PASS |
| API-DOC-006 | Postman response headers | PASS |
| API-DOC-007 | Postman response timing | PASS |
| API-DOC-008 | Postman response body | PASS |

### Evidence Notes

Screenshots should clearly show the relevant request, response, status code, or test result. Sensitive credentials, tokens, API keys, and personal information must not be included in portfolio evidence.
