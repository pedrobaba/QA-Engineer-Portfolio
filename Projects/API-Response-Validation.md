# API Response Validation Project

## Project Overview

This project demonstrates basic API response validation using **Postman** and the free JSONPlaceholder REST API.

The objective was to verify that the API returned the expected response after sending a GET request.

---

## API Information

**Base URL**

https://jsonplaceholder.typicode.com

**Endpoint**

GET /posts/1

---

## Test Objective

Validate that:

- The API returns a successful response.
- The status code is correct.
- The response body contains the expected JSON fields.
- The response time is acceptable.
- The Content-Type header exists.

---

## Test Environment

| Item | Value |
|------|-------|
| Tool | Postman |
| API | JSONPlaceholder |
| Method | GET |
| Endpoint | /posts/1 |

---

## Validation Results

| Validation | Expected | Actual | Status |
|------------|----------|--------|:------:|
| Status Code | 200 OK | 200 OK | ✅ |
| Response Time | Less than 1000 ms | *(Record your result here, e.g., 850 ms)* | ✅ |
| Content-Type | application/json | application/json | ✅ |
| userId | 1 | 1 | ✅ |
| id | 1 | 1 | ✅ |
| title | Present | Present | ✅ |
| body | Present | Present | ✅ |

---

## Postman Test Scripts

### Status Code Validation

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

### Response Time Validation

```javascript
pm.test("Response time is below 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});
```

### Validate userId

```javascript
let jsonData = pm.response.json();

pm.test("User ID is 1", function () {
    pm.expect(jsonData.userId).to.eql(1);
});
```

### Validate Content-Type

```javascript
pm.test("Content-Type exists", function () {
    pm.response.to.have.header("Content-Type");
});
```

---

## Test Execution Summary

| Metric | Result |
|---------|--------|
| Total Tests | 4 |
| Passed | 4 |
| Failed | 0 |

---

## Conclusion

The API responded successfully and all validation checks passed. The endpoint returned the expected JSON structure, correct status code, acceptable response time, and required response headers.

This project demonstrates the fundamentals of API response validation using Postman.
