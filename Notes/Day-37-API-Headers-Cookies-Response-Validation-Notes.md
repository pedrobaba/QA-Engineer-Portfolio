# Day 37 — API Headers, Cookies & Response Validation

## Overview

Day 37 focused on API headers, cookies, and response validation using Postman.

The main goal was to understand how a QA tester validates not only the HTTP status code, but also headers, response body, authentication information, cookies, and response time against the expected requirements.

---

## 1. HTTP Headers

HTTP headers contain additional information about an HTTP request or response.

They provide instructions or metadata that help the client and server understand how the request or response should be handled.

### Request Headers

Request headers are sent from the client to the server.

Common examples include:

* `Content-Type`
* `Accept`
* `Authorization`

---

## 2. Content-Type

`Content-Type` indicates the format of the data being sent in the request body.

Example:

```http
Content-Type: application/json
```

This means the request body is being sent as JSON.

### QA validation

The response can also contain a `Content-Type` header.

For example:

```http
Content-Type: application/json; charset=utf-8
```

This indicates that the response is JSON.

### Important distinction

**Request Content-Type:**

> What format am I sending?

**Response Content-Type:**

> What format did the server return?

---

## 3. Accept Header

The `Accept` header tells the server what response format the client wants.

Example:

```http
Accept: application/json
```

This means:

> The client wants the server to return JSON.

### Easy way to remember

```text
Content-Type = What I send
Accept       = What I want back
```

---

## 4. Authorization Header

The `Authorization` header is commonly used to send authentication credentials to the server.

Example:

```http
Authorization: Bearer abc123xyz
```

The Bearer token allows the server to determine whether the client is authorized to access a protected resource.

### QA authentication tests

A QA tester can test:

* Valid token
* Invalid token
* Missing token
* Expired token
* Malformed token
* Incorrect authorization scheme

A common response for failed authentication is:

```text
401 Unauthorized
```

---

## 5. Cookies

Cookies are small pieces of information stored by the client/browser and sent back to the server when required.

They are commonly used for session management.

Example:

```http
Set-Cookie: sessionId=abc123
```

The server is telling the client to store the cookie.

A simplified session flow:

```text
User logs in
     ↓
Server verifies credentials
     ↓
Server creates session
     ↓
Server sends Set-Cookie
     ↓
Browser stores cookie
     ↓
Future requests send the cookie
     ↓
Server recognizes the session
```

### QA Cookie Validation

A QA tester can verify:

* Whether a session cookie is created after login
* Whether the cookie is present
* Whether logout invalidates the session
* Whether an expired cookie is rejected
* Whether a missing cookie causes the expected behavior

---

## 6. Response Validation

A successful HTTP status code does not automatically mean that an API test has passed.

A QA tester should validate several aspects of the response.

### Common validation points

1. Status code
2. Response headers
3. Response body
4. Required fields
5. Data values
6. Response time
7. Authentication information
8. Cookies

---

## 7. Expected vs Actual Result

QA testing compares the expected behavior with the actual behavior.

Example:

### Requirement

The API must return JSON.

### Expected

```text
Content-Type: application/json
```

### Actual

```text
Content-Type: text/html
```

### Result

```text
FAIL
```

The test fails because the actual response does not satisfy the requirement.

---

## 8. Response Body Validation

Suppose the API requirement says the response must contain:

* `id`
* `name`
* `username`
* `email`

Example valid response:

```json
{
  "id": 10,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.biz"
}
```

All required fields are present.

Result:

```text
PASS
```

If the response is:

```json
{
  "id": 10,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton"
}
```

The `email` field is missing.

Result:

```text
FAIL
```

---

## 9. Response Time Validation

API requirements can also contain performance expectations.

Example:

> The API must respond within 2 seconds.

If Postman shows:

```text
Time: 1.2 seconds
```

Result:

```text
PASS
```

If Postman shows:

```text
Time: 3.4 seconds
```

Result:

```text
FAIL
```

The status code could still be `200 OK`, but the test can fail because the response-time requirement was not met.

---

## 10. HTTP 200 Does Not Automatically Mean PASS

Example:

```text
Status: 200 OK
Content-Type: application/json
```

This does not automatically mean the test passed.

The response could still:

* Contain incorrect data
* Be missing required fields
* Return the wrong format
* Exceed the required response time
* Fail another documented requirement

Therefore:

> A QA tester must validate the complete requirement, not just the HTTP status code.

---

## 11. Practical Postman Validation

During Day 37, Postman was used to inspect an API response.

The response returned:

```text
Content-Type: application/json; charset=utf-8
```

The response body contained:

```json
{
  "id": 10,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.biz",
  "address": {
    "street": "Kattie Turnpike",
    "suite": "Suite 198",
    "city": "Lebsackbury",
    "zipcode": "31428-2261",
    "geo": {
      "lat": "-38.2386",
      "lng": "57.2232"
    }
  }
}
```

The response was validated against the required fields.

---

## 12. QA Validation Example

Requirement:

* Status code = 200
* Response format = JSON
* Response contains `id`, `name`, and `email`
* Response time ≤ 2 seconds

Actual:

```text
Status: 200
Content-Type: application/json
Response contains id: Yes
Response contains name: Yes
Response contains email: No
Response time: 1.2 seconds
```

Validation:

```text
Status code     → PASS
Content-Type    → PASS
Response body   → FAIL
Response time   → PASS
Overall test    → FAIL
```

The overall test fails because one required condition failed.

---

## 13. Key QA Lessons

### Lesson 1

Do not rely only on status codes.

### Lesson 2

Always compare expected behavior with actual behavior.

### Lesson 3

Validate required response fields.

### Lesson 4

Headers can contain important information needed for API validation.

### Lesson 5

Cookies can be important for authentication and session management.

### Lesson 6

A response can return `200 OK` and still fail a QA test.

### Lesson 7

API testing should validate the complete requirement.

---

## Day 37 Summary

Day 37 introduced practical validation of:

* HTTP request headers
* HTTP response headers
* Content-Type
* Accept
* Authorization
* Bearer tokens
* Cookies
* Set-Cookie
* Response body
* Response time
* Expected vs actual results
* API pass/fail decisions

These skills help a QA tester move beyond simply checking whether an API responds and instead verify whether the API behaves according to its requirements.
