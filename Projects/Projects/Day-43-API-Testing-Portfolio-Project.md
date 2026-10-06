# Day 43 — API Testing Portfolio Project

## Project Title

API User Management Testing

## API Under Test

JSONPlaceholder

## Base URL

https://jsonplaceholder.typicode.com

## Primary Resource

Users

## Project Objective

Validate the functionality, response behavior, data structure, and basic performance characteristics of the Users API using Postman.

## Testing Scope

### In Scope

- GET requests
- Positive testing
- Negative testing
- Response validation
- JSON structure validation
- Data-type validation
- Status-code validation
- Header validation
- Response-time validation
- Postman assertions
- Test reporting

### Out of Scope

- Load testing
- Stress testing
- Penetration testing
- Infrastructure testing
- Production security assessment

## Test Scenarios

### Positive Scenarios

- Retrieve all users successfully.
- Retrieve a valid user by ID.
- Validate required user fields.
- Validate user field data types.
- Validate response Content-Type.
- Validate response time for successful requests.

### Negative Scenarios

- Request a user ID that does not exist.
- Request a user using an invalid ID format.
- Validate the API response for invalid requests.
- Validate appropriate HTTP status codes for negative scenarios.

### Response Validation Scenarios

- Verify HTTP status codes.
- Verify JSON response structure.
- Verify required fields.
- Verify field data types.
- Verify response headers.
- Verify response time.

## Test Scenario IDs

| ID | Scenario |
|---|---|
| API-SC-001 | Retrieve all users |
| API-SC-002 | Retrieve a valid user |
| API-SC-003 | Validate required user fields |
| API-SC-004 | Validate user field data types |
| API-SC-005 | Validate Content-Type header |
| API-SC-006 | Validate response time |
| API-SC-007 | Request nonexistent user |
| API-SC-008 | Request invalid user ID |
| API-SC-009 | Validate negative response status |
| API-SC-010 | Validate negative response body |

## API Test Cases

| Test Case ID | Scenario ID | Test Case | Method | Endpoint | Expected Result |
|---|---|---|---|---|---|---|
| API-TC-001 | API-SC-001 | Retrieve all users | GET | /users | HTTP 200 and users returned |
| API-TC-002 | API-SC-002 | Retrieve valid user | GET | /users/1 | HTTP 200 and user ID 1 returned |
| API-TC-003 | API-SC-003 | Validate required user fields | GET | /users/1 | Required fields are present |
| API-TC-004 | API-SC-004 | Validate user field data types | GET | /users/1 | Fields have expected data types |
| API-TC-005 | API-SC-005 | Validate Content-Type | GET | /users/1 | Content-Type contains application/json |
| API-TC-006 | API-SC-006 | Validate response time | GET | /users/1 | Response time is below 1000ms |
| API-TC-007 | API-SC-007 | Retrieve nonexistent user | GET | /users/9999 | HTTP 404 returned |
| API-TC-008 | API-SC-008 | Request invalid user ID | GET | /users/abc | Appropriate client-error response returned |
| API-TC-009 | API-SC-009 | Validate negative response status | GET | /users/9999 | Status code matches expected negative response |
| API-TC-010 | API-SC-010 | Validate negative response body | GET | /users/9999 | Response body matches expected empty/error structure |

## Test Execution Report

### Execution Summary

| Metric | Result |
|---|---:|
| Total Test Cases | 10 |
| Passed | 10 |
| Failed | 0 |
| Blocked | 0 |
| Pass Rate | 100% |

### Detailed Results

| Test Case ID | Endpoint | Expected | Actual | Result | Evidence |
|---|---|---|---|---|
| API-TC-001 | GET /users | 200 OK | 200 OK | PASS | Postman collection run|
| API-TC-002 | GET /users/1 | 200 OK | 200 OK | PASS | Postman collection run|
| API-TC-003 | GET /users/1 | Required fields present | All present | PASS | Postman collection run|
| API-TC-004 | GET /users/1 | Correct data types | Types matched | PASS | Postman collection run|
| API-TC-005 | GET /users/1 | JSON Content-Type | application/json; charset=utf-8 | PASS | Postman collection run|
| API-TC-006 | GET /users/1 | Response <1000ms | 568ms | PASS | Postman collection run|
| API-TC-007 | GET /users/9999 | 404 Not Found | 404 Not Found | PASS | Postman collection run|
| API-TC-008 | GET /users/abc | Client-error response | 404 Not Found | PASS | Postman collection run|
| API-TC-009 | GET /users/9999 | 404 assertion | PASS | PASS | Postman collection run|
| API-TC-010 | GET /users/9999 | Empty response object | {} | PASS | Postman collection run|

### Performance Observations

- GET /users returned in 1.61 seconds during manual execution.
- GET /users/1 returned in 568ms during manual execution.
- GET /users/9999 returned in 768ms during manual execution.
- GET /users/abc returned in 655ms during manual execution.
- Automated negative test execution recorded 528ms for GET /users/9999.
- Automated invalid-ID test execution recorded 588ms for GET /users/abc.

### Key Findings

- Valid user retrieval returned HTTP 200.
- Required user fields were present.
- User fields matched the expected data types.
- API responses were returned as JSON.
- Nonexistent users returned HTTP 404.
- Invalid user IDs returned HTTP 404.
- Nonexistent-user responses returned an empty JSON object `{}` during execution.
- Automated assertions successfully validated positive and negative API behavior.
- One manual execution of GET /users exceeded the 1000ms benchmark at 1.61 seconds; this is recorded as an observation rather than a confirmed performance defect because the threshold was not established as a production requirement and only one manual measurement was captured.

## Test Coverage Summary

| Test Area | Test Cases | Automated Tests | Result |
|---|---:|---:|---|
| Positive API Testing | 6 | 10 | PASS |
| Negative API Testing | 4 | 7 | PASS |
| Response Validation | Covered | Included | PASS |
| Status Code Validation | Covered | Included | PASS |
| JSON Structure Validation | Covered | Included | PASS |
| Data-Type Validation | Covered | Included | PASS |
| Header Validation | Covered | Included | PASS |
| Response-Time Validation | Covered | Included | PASS |

### Automation Summary

- Total API test cases: 10
- Automated Postman tests: 17
- Automated tests passed: 17
- Automated tests failed: 0
- Automation pass rate: 100%
- Collection requests: 4

## Defect & Risk Assessment

### Confirmed Defects

No confirmed functional defects were identified during the executed test scenarios.

### Performance Observation

During an earlier manual execution, `GET /users` returned a response time of approximately 1.61 seconds.

A later execution returned approximately 517ms.

Because response time varied between executions and no production performance requirement was provided, this is recorded as a performance observation rather than a confirmed defect.

### Test Automation Issues Resolved

During test automation, the following issues were identified and resolved:

1. Postman tests were initially placed incorrectly, resulting in no tests being detected during collection execution.
2. The nonexistent-user response was initially assumed to be an empty array (`[]`), but the actual response was an empty JSON object (`{}`).
3. Assertions were corrected to match the observed API behavior.

### Risk Assessment

The tested API behavior matched the defined expectations for the executed scenarios.

Further testing would be required before making conclusions about:

- Load handling
- Stress behavior
- Security vulnerabilities
- Production performance
- Infrastructure reliability
