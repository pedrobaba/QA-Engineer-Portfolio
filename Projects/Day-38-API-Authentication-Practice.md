# Day 38 — API Authentication Practice

## Project Overview

This project documents my practical API authentication testing exercises using **Postman**.

The focus was on testing authentication and authorization behavior, validating HTTP status codes, performing negative tests, and identifying authentication-related defects.

---

## Objective

To practice testing protected API endpoints using different authentication scenarios and verify that the API returns the expected response.

---

# Test Environment

**Tool:** Postman

**API Testing Type:** REST API

**Authentication Methods Practiced:**

* Bearer Token
* Basic Authentication
* No Authentication

---

# Test Scenario 1 — Valid Admin Bearer Token

### Requirement

Only authenticated administrators should be able to access the admin endpoint.

### Test Data

```text
Endpoint: GET /api/admin/users
Authentication: Bearer Token
User Role: Administrator
Token: Valid Admin Token
```

### Steps

1. Open Postman.
2. Create a GET request.
3. Enter the admin endpoint.
4. Open the Authorization tab.
5. Select Bearer Token.
6. Enter a valid administrator token.
7. Send the request.

### Expected Result

API should return:

```text
200 OK
```

### Test Result

**PASS**

---

# Test Scenario 2 — Regular User Accessing Admin Endpoint

### Requirement

Only administrators should be allowed to access the admin endpoint.

### Test Data

```text
Endpoint: GET /api/admin/users
Authentication: Bearer Token
User Role: Regular User
Token: Valid Regular User Token
```

### Steps

1. Open Postman.
2. Create a GET request.
3. Enter the admin endpoint.
4. Open the Authorization tab.
5. Select Bearer Token.
6. Enter a valid regular-user token.
7. Send the request.

### Expected Result

API should return:

```text
403 Forbidden
```

### Test Result

**PASS**

### QA Observation

The user is authenticated successfully but does not have the required administrator permission.

---

# Test Scenario 3 — Invalid Bearer Token

### Requirement

Invalid authentication tokens must not be accepted.

### Test Data

```text
Endpoint: GET /profile
Authentication: Bearer Token
Token: Invalid Token
```

### Steps

1. Open Postman.
2. Create a GET request.
3. Enter the `/profile` endpoint.
4. Open the Authorization tab.
5. Select Bearer Token.
6. Enter an invalid token.
7. Send the request.

### Expected Result

API should return:

```text
401 Unauthorized
```

### Test Result

**PASS**

---

# Test Scenario 4 — Expired Bearer Token

### Requirement

Expired authentication tokens must not be accepted.

### Test Data

```text
Endpoint: GET /profile
Authentication: Bearer Token
Token: Expired Token
```

### Steps

1. Open Postman.
2. Create a GET request.
3. Enter the `/profile` endpoint.
4. Open the Authorization tab.
5. Select Bearer Token.
6. Enter the expired token.
7. Send the request.

### Expected Result

API should return:

```text
401 Unauthorized
```

### Actual Result

API returned:

```text
403 Forbidden
```

### Test Result

**FAIL**

### QA Observation

The actual response did not match the expected authentication response.

---

# Test Scenario 5 — No Authentication

### Requirement

The protected endpoint requires authentication.

### Test Data

```text
Endpoint: GET /profile
Authentication: None
```

### Steps

1. Open Postman.
2. Create a GET request.
3. Enter the `/profile` endpoint.
4. Do not provide an Authorization header.
5. Send the request.

### Expected Result

API should return:

```text
401 Unauthorized
```

### Test Result

**PASS**

---

# Test Scenario 6 — Basic Authentication Instead of Bearer Token

### Requirement

The `/profile` endpoint accepts Bearer Token authentication.

### Test Data

```text
Endpoint: GET /profile
Authentication: Basic Auth
Username: test_user
Password: test_password
```

### Steps

1. Open Postman.
2. Create a GET request.
3. Enter the `/profile` endpoint.
4. Open the Authorization tab.
5. Select Basic Auth.
6. Enter username and password.
7. Send the request.

### Expected Result

API should reject the request and return:

```text
401 Unauthorized
```

### Test Result

**PASS**

### QA Observation

The test deliberately used an authentication method different from the required Bearer Token method.

---

# Authentication Test Matrix

| Test Scenario      | Expected | Actual | Result |
| ------------------ | -------: | -----: | ------ |
| Valid Admin Token  |      200 |    200 | PASS   |
| Regular User Token |      403 |    403 | PASS   |
| Invalid Token      |      401 |    401 | PASS   |
| Expired Token      |      401 |    403 | FAIL   |
| No Token           |      401 |    401 | PASS   |
| Basic Auth         |      401 |    401 | PASS   |

---

# Defect Report

## Bug Title

**Expired Bearer token returns HTTP 403 Forbidden instead of 401 Unauthorized**

### Environment

Postman

### Precondition

An expired Bearer token is available for testing.

### Steps to Reproduce

1. Open Postman.
2. Create a GET request.
3. Enter the affected endpoint.
4. Open the Authorization tab.
5. Select Bearer Token.
6. Enter an expired Bearer token.
7. Send the request.

### Expected Result

API should return:

```text
401 Unauthorized
```

### Actual Result

API returned:

```text
403 Forbidden
```

### Severity

**High**

### Reason

Incorrect handling of expired authentication may affect authentication flows and how client applications handle expired credentials.

---

# QA Findings

### Passed Tests

5 out of 6 authentication scenarios passed.

### Failed Test

The expired Bearer token scenario failed.

### Defect Identified

The API returned `403 Forbidden` instead of the expected `401 Unauthorized` for an expired authentication token.

---

# Key QA Lessons

* Authentication verifies the identity of a user or client.
* Authorization determines what an authenticated user is allowed to access.
* `401` generally indicates an authentication problem.
* `403` generally indicates insufficient permission.
* Invalid tokens should be rejected.
* Expired tokens should be treated as invalid authentication.
* Missing authentication should be rejected on protected endpoints.
* Negative tests can pass when the API correctly rejects invalid input.
* QA should compare expected and actual results rather than judging a response by its status code alone.
* Authentication testing should include both positive and negative scenarios.

---

# Project Status

**Day 38 — API Authentication Practice**

* [x] Authentication vs Authorization
* [x] 401 vs 403
* [x] Bearer Token configuration
* [x] Valid token testing
* [x] Invalid token testing
* [x] Expired token testing
* [x] Missing token testing
* [x] Role-based authorization testing
* [x] Basic Auth negative testing
* [x] Authentication test matrix
* [x] Authentication defect documentation
* [ ] Final Day 38 assessment
