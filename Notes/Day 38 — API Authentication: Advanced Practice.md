# Day 38 — API Authentication: Advanced Practice

## Overview

Day 38 focused on advanced API authentication testing using Postman.

The main goal was to understand how APIs authenticate users, distinguish authentication from authorization, test different authentication failures, and validate whether protected endpoints return the correct HTTP status codes.

---

## Learning Objectives

By the end of Day 38, I practiced how to:

* Distinguish Authentication from Authorization
* Understand HTTP `401 Unauthorized` and `403 Forbidden`
* Test Bearer Token authentication
* Test valid, invalid, expired, and missing tokens
* Test role-based authorization
* Configure Bearer Token authentication in Postman
* Perform negative authentication testing
* Build an authentication test matrix
* Validate expected vs actual API behavior
* Report authentication defects professionally

---

## 1. Authentication vs Authorization

### Authentication

Authentication answers:

> **Who are you?**

It verifies the identity of the user or client.

Examples:

* Username and password
* API key
* Bearer token
* Session cookie

### Authorization

Authorization answers:

> **What are you allowed to access or do?**

It determines whether an authenticated user has permission to access a resource.

Example:

A regular user may be authenticated successfully but still be forbidden from accessing an admin endpoint.

---

## 2. HTTP 401 vs 403

### 401 Unauthorized

Typically indicates an authentication problem.

Common causes:

* No token
* Invalid token
* Expired token
* Unsupported authentication credentials
* Invalid authentication scheme

Examples:

```text
No token → 401
Invalid token → 401
Expired token → 401
```

### 403 Forbidden

Typically indicates that authentication succeeded but the authenticated user does not have sufficient permission.

Example:

```text
Valid Regular User Token
        ↓
Admin Endpoint
        ↓
403 Forbidden
```

---

## 3. Bearer Token Authentication

A Bearer token is commonly sent through the `Authorization` request header:

```http
Authorization: Bearer <token>
```

In Postman:

1. Open the request.
2. Go to **Authorization**.
3. Select **Bearer Token**.
4. Enter the token.
5. Send the request.

---

## 4. Authentication Test Coverage

Important authentication scenarios include:

| Scenario                                   | Expected Result |
| ------------------------------------------ | --------------: |
| Valid token                                |             200 |
| Invalid token                              |             401 |
| Expired token                              |             401 |
| No token                                   |             401 |
| Valid regular-user token on admin endpoint |             403 |
| Valid admin token on admin endpoint        |             200 |
| Basic Auth when Bearer is required         |             401 |

---

## 5. Negative Authentication Testing

A negative test checks how an API behaves when invalid or unexpected input is supplied.

Examples:

```text
Invalid Bearer token → 401
Expired Bearer token → 401
No authentication → 401
Basic Auth instead of Bearer → 401
Regular user accessing admin endpoint → 403
```

A negative test can **PASS** when the API correctly rejects the invalid request.

The fact that an API returns an error does not automatically mean the test failed.

The expected behavior determines whether the test passes or fails.

---

## 6. Important QA Distinction

If a test case requires:

```text
Authorization: Bearer <valid-token>
```

but the tester accidentally uses:

```text
Basic Authentication
```

the original test has **not been executed correctly**.

However, if the purpose of the test is specifically:

> Verify that the API rejects Basic Authentication when Bearer Token authentication is required.

then receiving:

```text
401 Unauthorized
```

is the expected result and the negative test passes.

---

## 7. Authentication Test Matrix

| Test Scenario                | Expected |
| ---------------------------- | -------: |
| Valid Admin Bearer Token     |      200 |
| Valid Regular User Token     |      403 |
| Invalid Bearer Token         |      401 |
| Expired Bearer Token         |      401 |
| No Token                     |      401 |
| Basic Auth instead of Bearer |      401 |

This matrix provides a simple way to check authentication and authorization coverage.

---

## 8. Authentication Bug Identified

During practice, an expired Bearer token was expected to return:

```text
401 Unauthorized
```

but the API returned:

```text
403 Forbidden
```

### Expected

```text
401 Unauthorized
```

### Actual

```text
403 Forbidden
```

### Bug Title

> Expired Bearer token returns HTTP 403 Forbidden instead of 401 Unauthorized

### Environment

```text
Postman
```

### Severity

High was assigned during the exercise because incorrect handling of expired authentication can affect authentication flows and client-side error handling.

Severity should ultimately be based on the actual impact of the defect.

---

## Key Takeaways

1. Authentication verifies identity.
2. Authorization determines permissions.
3. `401` generally indicates an authentication problem.
4. `403` generally indicates insufficient permission after authentication.
5. Expired tokens normally belong to the authentication-failure category.
6. Negative tests can pass when the API correctly rejects invalid input.
7. QA must compare expected behavior with actual behavior.
8. Authentication testing should cover positive, negative, expired, missing, and role-based scenarios.
9. A `200 OK` response does not automatically mean the entire API response is correct.
10. Authentication defects should be documented with clear reproduction steps and expected/actual results.
