# First API Test Using Postman

## Objective

To verify that the API endpoint returns the expected response successfully.

---

## API Endpoint

https://jsonplaceholder.typicode.com/posts/1

---

## HTTP Method

GET

---

## Test Tool

Postman

---

## Test Results

| Item | Result |
|------|--------|
| Status Code | 200 OK |
| Response Time | 1.22 seconds |
| Content Type | application/json |

---

## JSON Response

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
}
```

---

## Validation Performed

- Response status is **200 OK**
- Response format is **JSON**
- Required fields are present:
  - userId
  - id
  - title
  - body
- API returned data successfully.

---

## Conclusion

The API request executed successfully. The endpoint returned the expected JSON response with a 200 OK status, indicating that the service is functioning correctly.
