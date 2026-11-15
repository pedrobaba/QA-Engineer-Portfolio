# Day 74 — API Testing

## Overview

Day 74 focused on applying API testing knowledge to a structured QA portfolio project using Postman and JSONPlaceholder.

The objective was to understand how to plan API tests, create test cases, validate API responses, perform negative testing, and document execution results.

## Learning Objectives

By the end of this lesson, I learned how to:

- Explain the purpose of API testing.
- Identify API test scenarios.
- Create API test cases.
- Test GET, POST, PUT, PATCH, and DELETE requests.
- Perform negative API testing.
- Validate HTTP status codes and response bodies.
- Check required fields and data types.
- Write Postman test assertions.
- Record expected and actual API behaviour.

## 1. What Is API Testing?

API testing verifies that an application's Application Programming Interface behaves according to its requirements.

It checks how systems communicate and exchange data without necessarily interacting with the user interface.

Important areas to validate include:

- HTTP status codes
- Response body
- Response structure
- Required fields
- Data types
- Headers
- Authentication and authorization
- Response time
- Error handling

## 2. API Testing Tools

**Postman:** Used to send API requests, inspect responses, and write automated assertions.

**JSONPlaceholder:** A public fake REST API used for learning and practice.

Base URL:

`https://jsonplaceholder.typicode.com`

## 3. HTTP Methods Practised

| Method | Purpose |
|---|---|
| GET | Retrieve data |
| POST | Create a resource |
| PUT | Replace or update a resource |
| PATCH | Partially update a resource |
| DELETE | Delete a resource |

JSONPlaceholder simulates write operations. Its changes are not permanently saved to its underlying data.

## 4. API Test Scenarios

The project covers these scenarios:

1. Retrieve all posts.
2. Retrieve a single post.
3. Request a post with a nonexistent ID.
4. Create a post.
5. Update an existing post.
6. Partially update a post.
7. Delete a post.
8. Retrieve a user's details.
9. Submit a request with an empty body.
10. Submit data with unexpected types.
11. Request an invalid endpoint.

## 5. API Response Validation

A successful HTTP status code alone does not prove that an API response is correct.

For example, when requesting:

`GET https://jsonplaceholder.typicode.com/posts/1`

The tester should validate:

- Status code is 200.
- Response is valid JSON.
- Required fields are present.
- `id` equals 1.
- `userId` is a number.
- `title` is a string.
- `body` is a string.

## 6. Postman Assertions

Postman supports JavaScript-based assertions in the **Scripts → Post-response** section.

Example:

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});

const response = pm.response.json();

pm.test("Post ID is 1", function () {
    pm.expect(response.id).to.eql(1);
});

pm.test("Title is a string", function () {
    pm.expect(response.title).to.be.a("string");
});
```

Assertions automatically check whether actual responses meet the defined expectations.

## 7. Negative API Testing

Negative testing checks how an API responds to invalid, missing, or unexpected input.

Examples:

- Requesting a nonexistent resource.
- Sending an empty request body.
- Sending unexpected data types.
- Requesting an invalid endpoint.

A negative test can pass when the API handles invalid input according to its defined requirements.

An error response does not automatically mean that the test failed.

## 8. Important QA Considerations

- Do not assume all APIs return the same status code for nonexistent resources.
- JSONPlaceholder returns an empty JSON object with HTTP 200 for a nonexistent post ID.
- JSONPlaceholder may accept data that a production API would reject.
- Write operations on JSONPlaceholder are simulated rather than permanently persisted.
- A defect should only be reported when actual behaviour violates an established requirement.
- Simulated test results must never be presented as genuine execution evidence.

## Key Takeaways

1. API testing validates communication between software components.
2. Postman can be used for manual API requests and automated assertions.
3. HTTP methods have different purposes.
4. Response validation goes beyond checking status codes.
5. Negative testing verifies how APIs handle unexpected input.
6. Expected and actual results must be compared.
7. API test evidence should reflect genuine execution.
8. Test results must be documented accurately.
