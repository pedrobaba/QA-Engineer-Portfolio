# 📅 Day 18 – Learning Journal

## Topic

API Negative Testing & Error Handling

---

## 🎯 Learning Objectives

Today I learned how to test APIs beyond successful requests by deliberately sending invalid or unexpected data.

The main objectives were:

- Understand negative API testing
- Test invalid requests
- Test invalid endpoints
- Test missing resources
- Understand API error status codes
- Validate API error responses
- Understand the difference between HTTP success and business success

---

# 🧠 What I Learned

## What is Negative API Testing?

Negative API testing is the process of testing how an API behaves when it receives invalid, incomplete, unexpected, or unauthorized requests.

Examples include:

- Invalid credentials
- Missing required fields
- Invalid data types
- Invalid authentication
- Expired tokens
- Invalid endpoints
- Non-existent resources
- Unsupported HTTP methods

---

# 🔢 Important HTTP Status Codes

| Status Code | Meaning |
|---|---|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 405 | Method Not Allowed |
| 422 | Unprocessable Content |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

---

# 🔐 401 vs 403

One of the most important concepts I learned today:

### 401 Unauthorized

Usually indicates an authentication problem.

> The server cannot verify the identity or credentials provided.

Example:

```text
Invalid Bearer Token
