# Day 37 — Learning Journal

## Topic

**API Headers, Cookies & Response Validation**

## Date

September 25, 2026

---

## What I Learned Today

Today I learned how QA testers validate API headers, cookies, and API responses using Postman.

I learned that API testing is not only about checking whether an API returns `200 OK`. A response can return a successful status code and still fail because the response body, headers, required fields, or response time do not meet the requirements.

---

## Key Concepts Learned

### HTTP Headers

I learned that HTTP headers provide additional information about API requests and responses.

Some important headers include:

* `Content-Type`
* `Accept`
* `Authorization`

### Content-Type

I learned that `Content-Type` tells the server the format of the data being sent.

For example:

```http
Content-Type: application/json
```

I also learned that the response can contain its own `Content-Type`, which can be used to verify the response format.

---

### Accept

I learned that the `Accept` header tells the server what response format the client wants.

For example:

```http
Accept: application/json
```

A simple way I learned to remember this is:

> Content-Type = What I send
> Accept = What I want back

---

### Authorization

I learned that the `Authorization` header is commonly used to send authentication credentials such as a Bearer token.

Example:

```http
Authorization: Bearer abc123
```

I also learned that QA testers should test invalid, missing, expired, and malformed authentication credentials.

---

### Cookies

I learned that cookies can be used to maintain sessions between a client and a server.

For example:

```http
Set-Cookie: sessionId=abc123
```

The server uses `Set-Cookie` to tell the client/browser to store a cookie.

I learned that QA testers can verify whether a session cookie is created after successful login and whether sessions behave correctly during logout and subsequent requests.

---

## Practical Postman Work

I used Postman to inspect a real API response.

The response returned:

```text
application/json; charset=utf-8
```

I identified this as a JSON response.

The response also contained:

* ID
* Name
* Username
* Email
* Address
* Geo information

I compared the actual response against hypothetical API requirements and determined whether each requirement passed or failed.

---

## Important QA Lesson

One of the most important things I learned today was:

> **200 OK does not automatically mean the API test passed.**

For example:

```text
Status code     → PASS
Content-Type    → PASS
Response body   → FAIL
Response time   → PASS
Overall result  → FAIL
```

If one required condition fails, the overall test can fail.

---

## Challenges I Had

I initially confused:

* `Content-Type`
* `Accept`
* `Authorization`
* Cookies

I also initially misunderstood the purpose of `Set-Cookie`.

Through examples and practical scenarios, I now understand their basic purposes.

---

## What I Can Do Now

After today's lesson, I can:

* Explain common API headers
* Identify `Content-Type`
* Explain the purpose of `Accept`
* Explain Bearer authorization
* Understand basic session cookies
* Inspect response headers in Postman
* Validate response body fields
* Validate response time
* Compare expected and actual results
* Decide whether an API test passes or fails
* Write a concise Actual Result for an API defect

---

## QA Mindset

Today reinforced that QA testing is about comparing:

**Requirement → Expected Result → Actual Result → Pass/Fail**

Instead of simply asking:

> "Did the API respond?"

I should ask:

> "Did the API respond correctly according to the requirement?"

---

## Day 37 Reflection

I am becoming more comfortable with API testing and Postman.

I still need more practice with headers, authentication, cookies, and response validation, but I now understand the basic QA validation process.

My next goal is to become more confident in writing Postman assertions and documenting API test results.

---

## Status

**Day 37 — Completed**
