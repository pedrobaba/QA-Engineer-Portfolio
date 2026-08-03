# Day 14 - DELETE Request

## What is DELETE?

DELETE removes an existing resource from the server.

Example:

DELETE /posts/1

---

## Expected Status Codes

- 200 OK
- 204 No Content

---

## QA Validation Checklist

- Resource is deleted successfully
- Correct status code is returned
- Deleted resource cannot be retrieved again (if supported by the API)
