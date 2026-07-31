# Day 12 - Network Tab

## Purpose

The Network tab monitors every request made between the browser and the server.

---

## Information Available

- Request URL
- Request Method (GET, POST, PUT, DELETE)
- HTTP Status Codes
- Response Time
- Request Headers
- Response Headers
- Response Body

---

## Common HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## Why QA Engineers Use the Network Tab

- Verify API requests
- Detect failed requests
- Measure response times
- Confirm correct status codes
- Capture evidence for bug reports

---

## SauceDemo Investigation

During testing, I observed a request returning an HTTP **404 (Not Found)** response while attempting to access `/inventory.html` directly.

---

## Key Takeaways

The Network tab is one of the most valuable tools for investigating backend communication and validating API behavior during manual testing.
