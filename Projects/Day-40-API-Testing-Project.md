# Day 40 — API Testing Project

## Project Overview

This project demonstrates practical API testing using Postman against the JSONPlaceholder practice API.

### Objective

To combine API testing techniques learned during Days 36–39 into a structured testing workflow covering:

- Request execution
- Response validation
- Positive testing
- Negative testing
- Automated assertions
- Test case design
- Defect reporting
- Test execution reporting
- Authentication/security test design

---

# API Under Test

**Base URL:**

```text
https://jsonplaceholder.typicode.com
```

**Primary endpoint:**

```text
GET /users/1
```

---

# Test Execution Evidence

## API-001 — Retrieve Existing User

**Request:**

```text
GET /users/1
```

**Expected:**

```text
200 OK
```

**Actual:**

```text
200 OK
```

**Result:** PASS

---

## API-002 — Retrieve Nonexistent User

**Request:**

```text
GET /users/9999
```

**Expected:**

```text
404 Not Found
```

**Actual:**

```text
404 Not Found
```

**Result:** PASS

---

## API-003 — Invalid User ID

**Request:**

```text
GET /users/abc
```

**Expected:**

```text
400 Bad Request
```

**Actual:**

```text
400 Bad Request
```

**Result:** PASS

---

# Automated Postman Validation

Post-response assertions were created to verify:

```text
Status code = 200
User ID = 1
Name = Leanne Graham
Username = Bret
Email = Sincere@april.biz
Address property exists
Company property exists
```

### Result

```text
6/6 tests passed
```

This demonstrated automated API response validation using Postman.

---

# Practice Defect Report

## Title

Valid User GET Request Returns 500 Internal Server Error

## Environment

Postman on Windows 10.

## Steps

1. Open Postman.
2. Create a GET request.
3. Enter the API endpoint for `/users/18`.
4. Send the request.
5. Observe the HTTP response.

## Expected Result

The API should return:

```text
200 OK
```

with the expected user data.

## Actual Result

The API returns:

```text
500 Internal Server Error
```

## Severity

High — provisional, if the issue is reproducible and prevents an important user-data retrieval workflow.

## Evidence

A screenshot of the Postman request and response should be attached to the defect report.

> This was a **practice defect scenario** used to demonstrate defect reporting. It should not be presented as a verified production defect in JSONPlaceholder.

---

# Authentication Security Test Design

## Scenario

A user submits an invalid password to a login endpoint.

### Expected

```text
401 Unauthorized
```

### Actual

```text
200 OK
```

### Result

```text
FAIL
```

### Potential Security Risk

Authentication bypass.

An API that issues a valid authentication token after invalid credentials could potentially allow unauthorized access to protected resources.

Further testing is required to determine the actual scope and impact.

---

# Skills Demonstrated

- Postman
- HTTP methods
- HTTP status codes
- JSON response validation
- Postman assertions
- Positive testing
- Negative testing
- API test case design
- Expected vs. actual analysis
- Defect reporting
- Severity assessment
- Test execution reporting
- Authentication testing
- Security test design

---

# Portfolio Evidence Checklist

Add screenshots where available:

- [ ] GET `/users/1` request and `200 OK` response
- [ ] JSON response showing validated fields
- [ ] Postman Scripts/Post-response assertions
- [ ] Postman result showing `6/6` tests passed
- [ ] GET `/users/9999` showing `404`
- [ ] GET `/users/abc` showing the final `400`
- [ ] API test case table
- [ ] Practice bug report
- [ ] Test execution summary

## Portfolio Note

JSONPlaceholder is a practice API. The project demonstrates testing methodology and Postman skills; it should not be described as testing a real production user-management application.
