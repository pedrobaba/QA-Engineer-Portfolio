# API Parameterization Practice

## Objective

To practice using query parameters, path parameters,
and Postman variables for reusable API testing.

## API

https://jsonplaceholder.typicode.com

---

## Path Parameter Testing

The same API request was tested with different Post IDs
using a path parameter.

| Post ID | Status Code | Response Time | Result |
|---|---:|---:|---|
| 1 | 200 OK | 275 ms | Request returned post ID 1 successfully |
| 2 | — | — | Not recorded |
| 5 | — | — | Not recorded |

### Example Request

```text
GET https://jsonplaceholder.typicode.com/posts/1
```
## Response

The API returned:

ID: 1
Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit

Query Parameter Testing

The same endpoint was tested using different userId
query parameter values.

|User ID |	Status | Code	Number of Posts	Result |
|--------|---------| ---------------|
| 1	| 200 | OK	| 8	Successfully returned 8 posts |
| 2	| 200 | OK	| 10	Successfully returned 10 posts |


## Example Requests
` GET https://jsonplaceholder.typicode.com/posts?userId=1 `
` GET https://jsonplaceholder.typicode.com/posts?userId=2 `

This demonstrated how query parameters can be used to
filter API results.

## POST Parameterization

The POST request was tested using variables for:

- title
- body
- userId
- Test Data

```
title: QA Journey
body: Learning API Testing
userId: 1
```

## Request
` POST https://jsonplaceholder.typicode.com/posts `

## Actual Result 
`
Status Code: 404 Not Found
Response Time: 1.52s
Response Body: {}
Returned ID: Not returned
`
## Result

Failed

The expected result was for the API to successfully process the POST request and return the created resource. Instead,
the request returned a `404 Not Found` response.

> Note: The actual result has been documented as observed during testing. Further investigation is required to determine whether the issue was caused by the request configuration, endpoint, or another factor.
---
## Key Learnings

During this exercise, I learned:

- Path parameters can be used to identify specific resources.
- Query parameters can be used to filter API results.
- Postman variables can make API requests reusable.
- The same request can be tested with different data values.
- Actual results should always be recorded based on what was observed.
- A failed API request should be investigated rather than changing the actual result to match the expected result.
---
## Conclusion

This exercise improved my understanding of API parameters
and reusable test data in Postman.

I successfully tested path parameters and query parameters
using different values and recorded the API responses.

The POST parameterization test returned a 404 Not Found,
which will require further investigation before the test can
be considered successful.
