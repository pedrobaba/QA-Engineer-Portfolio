# JSONPlaceholder API Testing Project

## Project Overview

This project demonstrates practical API testing using Postman and JSONPlaceholder, a public fake REST API.

The purpose is to practise API test planning, test case design, request execution, response validation, negative testing, and test documentation.

## Project Objectives

- Validate API endpoints using Postman.
- Test different HTTP methods.
- Verify HTTP status codes.
- Validate response bodies and data types.
- Perform positive and negative API testing.
- Create Postman assertions.
- Document expected and actual results.
- Maintain clear and reliable QA evidence.

## Application Under Test

**API:** JSONPlaceholder

**Base URL:**

`https://jsonplaceholder.typicode.com`

**Primary resource:** Posts

## Tools Used

- Postman
- JSONPlaceholder
- Visual Studio Code
- Git and GitHub

## Scope of Testing

### In Scope

- GET requests
- POST requests
- PUT requests
- PATCH requests
- DELETE requests
- Response validation
- Status code validation
- Required field validation
- Data type validation
- Negative testing
- Postman assertions

### Out of Scope

- Production payment processing
- Real user authentication
- Production database modifications
- Load and stress testing
- Security penetration testing

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/posts` | Retrieve all posts |
| GET | `/posts/1` | Retrieve one post |
| GET | `/posts/99999` | Request a nonexistent post |
| POST | `/posts` | Create a simulated post |
| PUT | `/posts/1` | Simulate a full update |
| PATCH | `/posts/1` | Simulate a partial update |
| DELETE | `/posts/1` | Simulate deletion |
| GET | `/users/1` | Retrieve user details |

## Test Coverage

The project includes:

1. Positive API testing
2. Negative API testing
3. HTTP method validation
4. Status code validation
5. Response body validation
6. Required field validation
7. Data type validation
8. Postman assertions

## Important API Behaviour

JSONPlaceholder is a mock API intended for testing and learning.

Its POST, PUT, PATCH, and DELETE operations simulate changes. They do not permanently modify the underlying dataset.

A request for a nonexistent post such as `/posts/99999` returns HTTP 200 with an empty JSON object. This is specific to JSONPlaceholder and should not be treated as a universal API standard.

## Execution Integrity

**Current documentation status:** Test design and model examples prepared; live execution pending verification.

Any model-generated execution outcomes are illustrative only. They must be replaced with actual Postman results before being reported as completed execution.

No actual screenshots or verified API defects are claimed in this project at this stage.

## Project Deliverables

- API test plan
- API test scenarios
- API test cases
- Postman collection
- API execution report
- Screenshots and evidence
- Bug reports, if verified defects are identified
- Final test summary report

## Learning Outcome

This project helps demonstrate foundational API testing knowledge, practical Postman usage, response validation, and professional QA documentation.
