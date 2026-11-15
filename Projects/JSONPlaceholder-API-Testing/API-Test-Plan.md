# API Test Plan — JSONPlaceholder

## 1. Introduction

This test plan defines the approach for testing the JSONPlaceholder REST API using Postman.

The project focuses on validating API requests, responses, data structures, and error-handling behaviour.

## 2. Objectives

- Verify that selected API endpoints respond as expected.
- Validate supported HTTP methods.
- Check response status codes and response bodies.
- Verify required fields and data types.
- Perform positive and negative testing.
- Document actual results and evidence.

## 3. Scope

### In Scope

- Posts endpoint
- Users endpoint
- GET, POST, PUT, PATCH, DELETE
- Response validation
- Status code validation
- Required field validation
- Data type validation
- Negative testing
- Postman assertions

### Out of Scope

- Real payment processing
- Production database testing
- Load and stress testing
- Penetration testing
- Real user authentication and authorization

## 4. Test Environment

| Item | Details |
|---|---|
| API | JSONPlaceholder |
| Base URL | https://jsonplaceholder.typicode.com |
| Testing tool | Postman |
| Test type | Manual and assertion-based API testing |
| Environment | Public practice API |

## 5. Test Approach

Testing will follow these stages:

1. Identify the endpoints.
2. Define test scenarios.
3. Create detailed test cases.
4. Configure requests in Postman.
5. Execute requests.
6. Validate status codes and response bodies.
7. Record actual results.
8. Capture evidence.
9. Report verified defects, if any.
10. Prepare a test summary.

## 6. Entry Criteria

- API base URL is accessible.
- Postman is installed and available.
- Test scenarios and test cases are prepared.

## 7. Exit Criteria

- All planned test cases have been executed or their outstanding status explained.
- Actual results are recorded.
- Failed tests are investigated.
- Relevant evidence is captured.
- The test summary report is prepared.

## 8. Risks and Limitations

- JSONPlaceholder is a mock API.
- Write operations simulate changes and are not permanently persisted.
- Its behaviour may differ from production APIs.
- Public service availability may vary.
- No production business requirements are supplied.

## 9. Deliverables

- API test scenarios
- API test cases
- Postman collection
- Execution report
- Evidence
- Verified bug reports, if applicable
- Test summary report

## 10. Test Status

Test design is prepared. Live execution and evidence collection remain pending verification.
