# Day 15 - API Validation

## What is API Validation?

API Validation is the process of verifying that an API response matches the expected result after a request is sent.

Validation ensures that:

- The correct status code is returned.
- The response body contains the expected data.
- The response time is acceptable.
- The required headers are present.
- The returned data has the correct format and values.

---

## Why API Validation is Important

API validation helps ensure that:

- Users receive the correct information.
- Backend services work correctly.
- Bugs are detected early.
- Applications remain reliable after updates.

---

## Common API Validations

- Status Code Validation
- Response Time Validation
- JSON Body Validation
- Response Header Validation
- Required Field Validation
- Data Type Validation

---

## Example

### Request

GET https://jsonplaceholder.typicode.com/posts/1

### Expected Result

- Status Code: 200 OK
- Response format: JSON
- userId should equal 1
- Response time less than 1000 ms

---

## Key Takeaways

- API validation is an essential part of backend testing.
- A successful request should always be verified against expected results.
- Validation increases confidence in software quality.
