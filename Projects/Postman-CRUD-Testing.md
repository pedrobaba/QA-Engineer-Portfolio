# Postman CRUD Testing

## Project

API Testing using JSONPlaceholder

Website:

https://jsonplaceholder.typicode.com/

---

## Objective

To verify CRUD operations using Postman.

---

## Test Results

| HTTP Method | Endpoint | Expected Status | Actual Status | Result |
|-------------|----------|----------------:|--------------:|:------:|
| GET | /posts/1 | 200 | 200 | ✅ |
| POST | /posts | 201 | 201 | ✅ |
| PUT | /posts/1 | 200 | 200 | ✅ |
| PATCH | /posts/1 | 200 | 200 | ✅ |
| DELETE | /posts/1 | 200 | 200 | ✅ |

---

## Observations

- Successfully performed all CRUD operations.
- API returned expected status codes.
- JSON responses matched the request payload.
- Response times were within acceptable limits.

---

## Skills Demonstrated

- API Testing
- Postman
- CRUD Operations
- JSON Validation
- HTTP Status Code Validation
- REST API Fundamentals

---

## Conclusion

The CRUD operations were successfully executed using Postman. All requests returned the expected responses, demonstrating a solid understanding of REST API testing fundamentals.
