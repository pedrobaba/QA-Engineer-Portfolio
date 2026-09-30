# Day 38 — API Authentication Practice

## Project

### Project Title

**Advanced API Authentication Testing**

### Objective

Practice testing authentication and authorization behavior for protected API endpoints using Postman.

---

## Authentication Test Matrix

| # | Scenario                        | Expected Status |
| - | ------------------------------- | --------------: |
| 1 | Valid Admin Bearer Token        |             200 |
| 2 | Valid Regular User Bearer Token |             403 |
| 3 | Invalid Bearer Token            |             401 |
| 4 | Expired Bearer Token            |             401 |
| 5 | No Authentication               |             401 |
| 6 | Basic Auth instead of Bearer    |             401 |

---

## Example Test Case

### Verify API rejects Basic Authentication when Bearer Token is required

**Precondition:**

The `/profile` endpoint is protected and requires Bearer Token authentication.

**Test Data:**

```text
Endpoint: GET /profile
Authentication: Basic Auth
Username: test_user
Password: test_password
```

**Steps:**

1. Open Postman.
2. Create a GET request.
3. Enter the `/profile` endpoint.
4. Open the Authorization tab.
5. Select Basic Auth.
6. Enter username and password.
7. Send the request.

**Expected Result:**

```text
401 Unauthorized
```

---

# Defect Report

## Bug Title

Expired Bearer token returns HTTP 403 Forbidden instead of 401 Unauthorized

### Environment

Postman

### Precondition

An expired Bearer token is available for testing.

### Steps to Reproduce

1. Open Postman.
2. Create a GET request.
3. Enter the affected endpoint.
4. Open Authorization.
5. Select Bearer Token.
6. Enter an expired token.
7. Send the request.

### Expected Result

The API should return:

```text
401 Unauthorized
```

because the authentication token has expired.

### Actual Result

The API returned:

```text
403 Forbidden
```

### Severity

High

### QA Observation

The API appears to distinguish incorrectly between authentication failure and authorization failure for expired tokens. Further investigation should confirm the intended API specification and how clients are expected to handle expired credentials.

---

# Evidence to Capture

For the GitHub portfolio, capture screenshots showing:

* Postman Authorization → Bearer Token configuration
* Request with invalid token and `401`
* Request with expired token and `401` expected behavior
* Request showing the `403` defect
* Response status and response body
* Authentication test matrix
* Bug report

Keep the evidence with the relevant **API/Postman or bug-report project structure** rather than creating an unnecessary generic evidence folder.

---

# Learning Journal

## Day 38 — API Authentication: Advanced Practice

### What I Learned

Today I learned how to test API authentication more deeply using Postman.

I practiced the difference between authentication and authorization and learned why `401 Unauthorized` and `403 Forbidden` represent different situations.

I also practiced testing valid, invalid, expired, and missing Bearer tokens as well as role-based access to protected endpoints.

### What I Practiced

* Bearer Token authentication
* Authentication vs authorization
* 401 vs 403
* Invalid token testing
* Expired token testing
* Missing token testing
* Role-based access testing
* Basic Auth rejection
* Authentication test matrices
* API bug reporting

### Mistakes I Corrected

I initially mixed up authentication and authorization in several scenarios.

I also initially confused the expected behavior of `401` and `403`.

Through the exercises, I learned:

```text
401 → Authentication problem
403 → Permission/authorization problem
```

### Most Important Lesson

One of the most important lessons from today was that a negative test can still **PASS**.

For example:

```text
Invalid Token
Expected: 401
Actual: 401
Result: PASS
```

The API returning an error is not automatically a failure. The QA tester must compare the actual result with the expected behavior.

### Portfolio Value

Today's work demonstrates practical experience with:

* API authentication testing
* Postman
* Negative testing
* Authorization testing
* HTTP status-code validation
* Test case design
* Defect reporting

### Day 38 Status

**Learning:** Completed
**Practical exercises:** Completed
**Documentation:** Completed
**Final assessment:** Pending

**Overall Day 38 status: Almost Complete — final assessment pending.**
