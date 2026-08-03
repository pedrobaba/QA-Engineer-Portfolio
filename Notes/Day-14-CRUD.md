# Day 14 - CRUD Operations

## What is CRUD?

CRUD represents the four basic operations performed on data in an application.

| Operation | HTTP Method | Description |
|-----------|-------------|-------------|
| Create | POST | Creates a new resource |
| Read | GET | Retrieves existing data |
| Update | PUT / PATCH | Updates existing data |
| Delete | DELETE | Removes a resource |

---

## CRUD Workflow

Client → API → Database → Response → Client

---

## Why QA Engineers Test CRUD Operations

- Verify data creation
- Validate retrieved data
- Confirm updates are applied correctly
- Ensure records are deleted successfully
- Validate HTTP status codes
- Check API response time
- Verify response structure

---

## Key Takeaways

- CRUD forms the foundation of REST API testing.
- Every operation should return the appropriate status code.
- API testing helps verify backend functionality without relying on the UI.
