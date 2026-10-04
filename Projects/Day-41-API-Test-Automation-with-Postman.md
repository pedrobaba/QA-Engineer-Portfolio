# Day 41 — API Test Automation Project

## Project Title

**API Response Validation and Automation with Postman**

## Objective

Build a reusable Postman collection that automatically validates API responses using assertions, environment variables, response-body checks, header validation, data-type validation, negative testing, and response-time checks.

---

## API Used

**JSONPlaceholder**

Base URL:

```text
https://jsonplaceholder.typicode.com
```

Environment:

```text
Day 41 - API Environment
```

Variable:

```text
baseUrl
```

Value:

```text
https://jsonplaceholder.typicode.com
```

---

## Collection

```text
Day 41 - API Response Validation
```

### Request 1

```text
Get User 1
GET {{baseUrl}}/users/1
```

Expected status:

```text
200 OK
```

### Request 2

```text
Get Nonexistent User
GET {{baseUrl}}/users/9999
```

Expected status:

```text
404 Not Found
```

---

## Automated Validation Implemented

### Status Validation

Validated expected HTTP response codes.

### Response Body Validation

Validated:

- Required fields
- Exact values
- Empty JSON object
- Nested properties

### Data-Type Validation

Validated:

- Numbers
- Strings
- Objects

### Header Validation

Validated:

```text
Content-Type
```

and confirmed that it contains:

```text
application/json
```

### Performance Validation

Implemented:

```javascript
pm.response.responseTime < 1000
```

### Environment Variables

Used:

```text
{{baseUrl}}
```

instead of hardcoded API URLs.

### Negative Testing

Validated that requesting a nonexistent user produces:

```text
404 Not Found
{}
```

---

## Test Failure Investigation

A deliberately incorrect assertion was introduced:

```javascript
pm.expect(user.id).to.eql(999);
```

The actual value was:

```text
1
```

The test therefore failed.

The assertion was corrected to:

```javascript
pm.expect(user.id).to.eql(1);
```

The test then passed.

This demonstrated the difference between:

```text
Test failure
```

and:

```text
Product defect
```

---

## Collection Execution

A full collection run was successfully executed.

Verified result:

```text
Requests executed: 2
Collection tests passed: 2/2
Collection tests failed: 0
```

Request results:

```text
Get User 1
HTTP status: 200 OK
Tests: 3/3
Result: PASS
```

```text
Get Nonexistent User
HTTP status: 404 Not Found
Tests: 3/3
Result: PASS
```

---

## Test Traceability

Test IDs were introduced for the successful-user validation:

```text
API-USER-001
API-USER-002
API-USER-003
API-USER-004
API-USER-005
API-USER-006
```

The IDs make individual automated checks easier to identify in test results.

---

## Skills Demonstrated

- Postman test scripts
- JavaScript assertions
- API response validation
- JSON parsing
- Nested JSON validation
- Exact-value assertions
- Data-type assertions
- HTTP status validation
- Negative testing
- Environment variables
- Collection execution
- Header validation
- Content-Type validation
- Response-time validation
- Test failure investigation
- Test traceability

---

## QA Outcome

The project demonstrates the ability to create repeatable API checks in Postman rather than relying solely on manual inspection of API responses.

The automation validates both successful and negative API scenarios and demonstrates how multiple assertions can be executed repeatedly through a Postman collection.

---

## Status

**Day 41 project work completed through Task 22.**

Task 23 remains pending verification.
