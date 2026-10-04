# Day 41 — API Test Automation with Postman

## Overview

Day 41 focused on API test automation using Postman.

The goal was to move beyond manually checking API responses and create reusable automated validations for:

- HTTP status codes
- Response body fields
- Nested JSON properties
- Exact values
- Data types
- Response structure
- Response headers
- Content-Type
- Response time
- Negative API scenarios
- Environment variables
- Collection-based execution
- Test failure investigation
- Test naming and traceability

Practice API:

```text
https://jsonplaceholder.typicode.com
```

Environment:

```text
Day 41 - API Environment
```

Environment variable:

```text
baseUrl = https://jsonplaceholder.typicode.com
```

---

## 1. Basic Response Assertions

Used Postman `pm.test()` and `pm.expect()` to validate API responses.

Example:

```javascript
const user = pm.response.json();

pm.test("User ID is a number", function () {
    pm.expect(user.id).to.be.a("number");
});
```

Validated:

- ID data type
- Name data type
- Email data type
- Address object
- Company object

---

## 2. Nested JSON Validation

Validated nested response properties such as:

```text
user.address.city
user.address.street
user.address.zipcode
user.company.name
```

Example:

```javascript
pm.test("Address contains a city", function () {
    pm.expect(user.address).to.have.property("city");
});
```

---

## 3. Exact-Value Assertions

Used `.eql()` to verify exact expected values.

Example:

```javascript
pm.test("User ID equals 1", function () {
    pm.expect(user.id).to.eql(1);
});
```

Also validated:

- Username = Bret
- Email = Sincere@april.biz
- City = Gwenborough
- Company name = Romaguera-Crona

---

## 4. Understanding Test Failures

A deliberately incorrect assertion was introduced:

```javascript
pm.expect(user.username).to.eql("WrongUsername");
```

Postman correctly reported a failed test because the actual value was `Bret`.

Important lesson:

> A failed automated test does not automatically mean there is a product defect. The test expectation itself may be incorrect.

---

## 5. Postman Collections

Created:

```text
Day 41 - API Response Validation
```

Requests:

1. Get User 1
2. Get Nonexistent User

Collection description:

```text
A collection for validating API response status codes, JSON field existence, data types, exact values, and basic response structure using Postman assertions.
```

---

## 6. Negative API Testing

Created:

```text
GET {{baseUrl}}/users/9999
```

Expected response:

```text
404 Not Found
```

The test passed because 404 was the expected behavior.

This reinforced the QA principle:

> A 4xx response is not automatically a failed test. The result depends on the expected behavior.

---

## 7. Environment Variables

Created:

```text
Day 41 - API Environment
```

Variable:

```text
baseUrl = https://jsonplaceholder.typicode.com
```

Requests were changed from hardcoded URLs such as:

```text
https://jsonplaceholder.typicode.com/users/1
```

to:

```text
{{baseUrl}}/users/1
```

and:

```text
{{baseUrl}}/users/9999
```

This makes requests reusable across environments.

---

## 8. Response-Time Validation

Added:

```javascript
pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});
```

Observed response times included:

```text
18ms
36ms
```

Both were below the 1000ms threshold.

Note: individual response-time results do not prove long-term API performance.

---

## 9. Response Header Validation

Validated that the response contained a `Content-Type` header.

```javascript
pm.test("Content-Type header is present", function () {
    pm.expect(pm.response.headers.has("Content-Type")).to.be.true;
});
```

Also validated that the header contained JSON:

```javascript
pm.test("Content-Type contains JSON", function () {
    pm.expect(pm.response.headers.get("Content-Type"))
        .to.include("application/json");
});
```

---

## 10. Response Structure Validation

Validated required fields:

```javascript
const user = pm.response.json();

pm.test("User response has required fields", function () {
    pm.expect(user).to.have.property("id");
    pm.expect(user).to.have.property("name");
    pm.expect(user).to.have.property("username");
    pm.expect(user).to.have.property("email");
    pm.expect(user).to.have.property("address");
    pm.expect(user).to.have.property("company");
});
```

---

## 11. Data-Type Validation

Validated that API fields contained the expected data types:

```javascript
pm.expect(user.id).to.be.a("number");
pm.expect(user.name).to.be.a("string");
pm.expect(user.username).to.be.a("string");
pm.expect(user.email).to.be.a("string");
pm.expect(user.address).to.be.an("object");
pm.expect(user.company).to.be.an("object");
```

---

## 12. Empty JSON Response Validation

For:

```text
GET {{baseUrl}}/users/9999
```

the response body was observed as:

```json
{}
```

The correct assertion was:

```javascript
pm.test("Response body is an empty object", function () {
    pm.expect(pm.response.json()).to.eql({});
});
```

This corrected an initial incorrect assumption that the response body would be an empty string.

---

## 13. Automated Failure Investigation

A deliberately incorrect assertion was created:

```javascript
pm.expect(user.id).to.eql(999);
```

The test failed.

The assertion was corrected to:

```javascript
pm.expect(user.id).to.eql(1);
```

The request was rerun successfully:

```text
HTTP 200 OK
Tests passed: 1/1
Tests failed: 0
```

QA workflow demonstrated:

```text
Create failure
      ↓
Investigate
      ↓
Identify cause
      ↓
Correct test
      ↓
Rerun
      ↓
PASS
```

---

## 14. Test IDs and Traceability

Improved test names by adding unique identifiers.

Example:

```javascript
pm.test("API-USER-001: User response returns HTTP 200", function () {
    pm.response.to.have.status(200);
});
```

Other tests:

```text
API-USER-002: User ID is a number
API-USER-003: User name is a non-empty string
API-USER-004: User email is a string
API-USER-005: Address is an object
API-USER-006: Company is an object
```

This makes automated results easier to identify and trace.

---

## Key Lessons

1. Automated tests validate expected behavior; they do not simply look for 2xx responses.
2. A failed test is not automatically a product defect.
3. API response validation should cover status, body, structure, types, headers, and other relevant conditions.
4. Environment variables make API collections reusable.
5. Negative tests are valid tests when error behavior is expected.
6. Collection runners allow multiple API checks to be executed repeatedly.
7. Test IDs improve traceability.
8. Assertions should be based on observed API behavior and defined expectations.
9. Test failures should be investigated before deciding whether a product defect exists.
10. Response-time checks are useful but a single run does not establish long-term performance.

---

## Day 41 Status

Completed and practiced through **Task 22**.

Task 23 requires verification before it can be marked complete.
