# Day 40 — API Testing Project

## Overview

Day 40 focused on combining the API testing skills learned in Days 36–39 into a structured API testing project using Postman.

The project covered:

- API exploration
- HTTP status code validation
- JSON response inspection
- Automated Postman assertions
- Positive and negative API testing
- API test case design
- Expected vs. actual result comparison
- Defect reporting
- Test execution summaries
- Authentication and security testing concepts

> **Important:** JSONPlaceholder is a public practice API. It is useful for learning API testing and Postman, but it is not a real production user-management system. Security and authorization scenarios used during the lesson were therefore treated as test-design exercises rather than verified production vulnerabilities.

---

## 1. API Exploration

### Endpoint

```text
GET https://jsonplaceholder.typicode.com/users/1
```

### Observed response

- HTTP status: `200 OK`
- Username: `Bret`
- Email: `Sincere@april.biz`
- Additional fields observed: `address`, `company`

### Important correction

The response's `username` value is `Bret`.

The `name` field is `Leanne Graham`.

This reinforced the importance of checking the **correct JSON property**, rather than assuming that a visible value belongs to a particular field.

---

## 2. Postman Response Validation

Automated post-response tests were added in Postman to validate:

- HTTP status code
- User ID
- User name
- Username
- Email
- Presence of `address`
- Presence of `company`

### Execution result

**6/6 tests passed.**

This demonstrated how API testers can use automated assertions instead of relying only on manual response inspection.

---

## 3. Negative API Testing

The following scenarios were tested:

### Existing user

```text
GET /users/1
```

Observed:

```text
200 OK
```

### Nonexistent user

```text
GET /users/9999
```

Observed:

```text
404 Not Found
```

### Invalid user ID

```text
GET /users/abc
```

During the project, the final recorded execution returned:

```text
400 Bad Request
```

The important QA principle was to compare the actual API response against a clearly defined expected result rather than automatically assuming that every response is correct.

---

## 4. API Test Case Design

The project included five test cases:

| ID | Test scenario | Expected result |
|---|---|---|
| API-001 | Retrieve an existing user | `200 OK` with expected user data |
| API-002 | Retrieve a nonexistent user | `404 Not Found` |
| API-003 | Retrieve a user using a non-numeric ID | Defined according to API validation requirements |
| API-004 | Verify required user fields | Required fields exist and contain appropriate values |
| API-005 | Verify response status codes | Actual status matches the defined expected status |

### Key QA distinction

**Expected result** describes what should happen.

**Actual result** describes what actually happened during execution.

**Result** determines whether the test passed or failed.

---

## 5. Test Execution

Final recorded results:

| Test | Expected | Actual | Result |
|---|---|---|---|
| API-001 | `200 OK` | `200 OK` | PASS |
| API-002 | `404 Not Found` | `404 Not Found` | PASS |
| API-003 | `400 Bad Request` | `400 Bad Request` | PASS |

### Test execution lesson

A test passes when the actual behavior matches the defined expected behavior.

---

## 6. Defect Reporting Practice

A practice defect was created for this scenario:

```text
GET /users/18
```

Requirement:

```text
The API should return 200 OK with the user's data.
```

Practice actual result:

```text
500 Internal Server Error
```

The defect report included:

- Title
- Environment/tool
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Evidence requirement

### Important QA principle

A `500 Internal Server Error` indicates a server-side error response, but the status code alone does not prove the underlying technical cause.

Further investigation would be required.

---

## 7. Test Execution Summary

A sample execution was reviewed:

- Total test cases: 10
- Passed: 7
- Failed: 2
- Blocked: 1

### Pass rate

```text
Pass Rate = Passed Tests / Total Tests × 100

Pass Rate = 7 / 10 × 100

Pass Rate = 70%
```

### Result definitions

**Passed:** Actual result matched expected result.

**Failed:** Actual result differed from expected result.

**Blocked:** The test could not be completed because a prerequisite, environment, dependency, or other blocker prevented execution.

A blocked test should not automatically be classified as a defect.

---

## 8. Authentication Security Scenario

A final security scenario was reviewed:

### Requirement

An invalid password should not authenticate a user.

### Expected

```text
401 Unauthorized
```

### Actual

```text
200 OK
```

### Outcome

```text
FAIL
```

### Potential risk

Authentication bypass.

If invalid credentials result in a valid authentication token, an attacker may potentially gain access to protected resources.

Further testing would be required to determine the actual scope of access.

---

## Key Lessons From Day 40

1. A `200 OK` response does not automatically mean an API is fully correct.
2. JSON fields must be validated against the API contract.
3. Automated Postman assertions make API testing repeatable.
4. Negative testing checks how an API handles invalid or unexpected input.
5. Expected and actual results must be clearly separated.
6. A defect report should contain enough information for another tester to reproduce the issue.
7. Severity should be based on business and user impact.
8. `401`, `403`, and `500` have different meanings and should not be treated interchangeably.
9. Security findings should not be claimed without sufficient evidence.
10. Practice APIs such as JSONPlaceholder should not be represented as production systems.
