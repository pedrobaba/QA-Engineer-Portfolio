# Day 14 - POST Request

## What is POST?

The POST method is used to create a new resource on the server.

Example:

POST /posts

Request Body:

```json
{
  "title": "QA Journey",
  "body": "Learning API Testing",
  "userId": 1
}
```

---

## Expected Response

Status Code:

201 Created

Example Response:

```json
{
  "title":"QA Journey",
  "body":"Learning API Testing",
  "userId":1,
  "id":101
}
```

---

## What QA Engineers Verify

- Status code is 201
- Resource is created
- Response body contains expected fields
- Data matches the request
- Response time is acceptable
