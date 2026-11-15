# API Test Cases — JSONPlaceholder

## Test Case Execution Status

All test cases below are initially marked **Not Run**. Update each status only after executing the corresponding request in Postman.

## API-TC-001 — Retrieve All Posts

- **Scenario:** API-TS-001
- **Method:** GET
- **Endpoint:** `/posts`
- **URL:** `https://jsonplaceholder.typicode.com/posts`
- **Precondition:** API is accessible.
- **Steps:**
  1. Open Postman.
  2. Create a GET request.
  3. Enter the endpoint URL.
  4. Click Send.
- **Expected result:**
  - HTTP 200.
  - Response is a JSON array.
  - Array contains 100 posts.
  - First post ID is 1.
- **Status:** Not Run

## API-TC-002 — Retrieve a Single Post

- **Scenario:** API-TS-002
- **Method:** GET
- **Endpoint:** `/posts/1`
- **URL:** `https://jsonplaceholder.typicode.com/posts/1`
- **Precondition:** API is accessible.
- **Steps:**
  1. Create a GET request.
  2. Enter the endpoint URL.
  3. Click Send.
- **Expected result:**
  - HTTP 200.
  - Response contains `userId`, `id`, `title`, and `body`.
  - Post ID equals 1.
  - Fields have the expected data types.
- **Status:** Not Run

## API-TC-003 — Retrieve a Nonexistent Post

- **Scenario:** API-TS-003
- **Method:** GET
- **Endpoint:** `/posts/99999`
- **URL:** `https://jsonplaceholder.typicode.com/posts/99999`
- **Steps:**
  1. Create a GET request.
  2. Enter the endpoint URL.
  3. Click Send.
- **Expected result:**
  - HTTP 200.
  - Response body is an empty JSON object `{}`.
- **Status:** Not Run

## API-TC-004 — Create a Post

- **Scenario:** API-TS-004
- **Method:** POST
- **Endpoint:** `/posts`
- **URL:** `https://jsonplaceholder.typicode.com/posts`
- **Request body:**
```json
{
  "title": "API Testing Practice",
  "body": "Testing POST requests with Postman",
  "userId": 1
}
```
- **Steps:**
  1. Select POST.
  2. Enter the endpoint URL.
  3. Select Body → raw → JSON.
  4. Enter the request body.
  5. Click Send.
- **Expected result:**
  - HTTP 201.
  - Response contains the submitted values.
  - Response includes a generated ID.
- **Status:** Not Run

## API-TC-005 — Update a Post

- **Scenario:** API-TS-005
- **Method:** PUT
- **Endpoint:** `/posts/1`
- **URL:** `https://jsonplaceholder.typicode.com/posts/1`
- **Request body:**
```json
{
  "id": 1,
  "title": "Updated API Testing Practice",
  "body": "Testing PUT requests with Postman",
  "userId": 1
}
```
- **Steps:**
  1. Select PUT.
  2. Enter the endpoint URL.
  3. Set the body type to raw JSON.
  4. Enter the request body.
  5. Click Send.
- **Expected result:**
  - HTTP 200.
  - Response contains the submitted updated values.
- **Status:** Not Run

## API-TC-006 — Partially Update a Post

- **Scenario:** API-TS-006
- **Method:** PATCH
- **Endpoint:** `/posts/1`
- **URL:** `https://jsonplaceholder.typicode.com/posts/1`
- **Request body:**
```json
{
  "title": "Partially Updated Post"
}
```
- **Steps:**
  1. Select PATCH.
  2. Enter the endpoint URL.
  3. Set the body type to raw JSON.
  4. Enter the updated title.
  5. Click Send.
- **Expected result:**
  - HTTP 200.
  - Response contains the updated title.
- **Status:** Not Run

## API-TC-007 — Delete a Post

- **Scenario:** API-TS-007
- **Method:** DELETE
- **Endpoint:** `/posts/1`
- **URL:** `https://jsonplaceholder.typicode.com/posts/1`
- **Steps:**
  1. Select DELETE.
  2. Enter the endpoint URL.
  3. Click Send.
- **Expected result:**
  - HTTP 200.
  - JSONPlaceholder returns its simulated deletion response, typically an empty object.
- **Status:** Not Run

## API-TC-008 — Retrieve User Details

- **Scenario:** API-TS-008
- **Method:** GET
- **Endpoint:** `/users/1`
- **URL:** `https://jsonplaceholder.typicode.com/users/1`
- **Steps:**
  1. Select GET.
  2. Enter the endpoint URL.
  3. Click Send.
- **Expected result:**
  - HTTP 200.
  - Response contains user details such as `id`, `name`, `username`, and `email`.
  - User ID equals 1.
- **Status:** Not Run

---

## Execution Record

| Test ID | Actual Result | Response Time | Status | Evidence |
|---|---|---|---|---|
| API-TC-001 | Pending | Pending | Not Run | Pending |
| API-TC-002 | Pending | Pending | Not Run | Pending |
| API-TC-003 | Pending | Pending | Not Run | Pending |
| API-TC-004 | Pending | Pending | Not Run | Pending |
| API-TC-005 | Pending | Pending | Not Run | Pending |
| API-TC-006 | Pending | Pending | Not Run | Pending |
| API-TC-007 | Pending | Pending | Not Run | Pending |
| API-TC-008 | Pending | Pending | Not Run | Pending |

## Execution Notes

JSONPlaceholder simulates POST, PUT, PATCH, and DELETE operations. Changes are not permanently persisted.

The expected results in this document describe the practice API's expected behaviour. Actual results must be recorded after live execution in Postman.
