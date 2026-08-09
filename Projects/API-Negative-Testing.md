# Day 18 – Negative API Testing

## What is Negative Testing?

Negative API testing verifies how an API handles invalid,
unexpected, or incomplete requests.

## Common Negative Scenarios

- Invalid credentials
- Missing required fields
- Invalid data types
- Invalid endpoint
- Missing authentication
- Invalid authentication
- Non-existent resources
- Unsupported HTTP methods

## Important Status Codes

| Code | Meaning |
|---|---|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 405 | Method Not Allowed |
| 422 | Unprocessable Content |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

## Key QA Principle

A successful HTTP status code does not always mean
the business operation was successful.

The response body and business rules must also be validated.
