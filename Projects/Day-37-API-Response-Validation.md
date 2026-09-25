# Day 37 — API Response Validation Project

## Objective

Validate API responses using Postman by checking:

* Status codes
* Response headers
* Content-Type
* Response body
* Required fields
* Response time
* Authentication information
* Cookies

---

## Test Scenario 1 — Response Format

### Requirement

The API must return JSON.

### Actual Result

```text
Content-Type: application/json; charset=utf-8
```

### Expected

```text
application/json
```

### Result

**PASS**

---

## Test Scenario 2 — Required User Fields

### Requirement

The user endpoint must return:

* ID
* Name
* Username
* Email

### Actual Response

```json
{
  "id": 10,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.biz"
}
```

### Result

**PASS**

All required fields were present.

---

## Test Scenario 3 — Missing Required Field

### Requirement

The API must return:

* ID
* Name
* Username
* Email

### Actual Response

```json
{
  "id": 10,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton"
}
```

### Result

**FAIL**

### Actual Result

The API response body does not contain the required `email` field.

---

## Test Scenario 4 — Response Time

### Requirement

The API must respond within 2 seconds.

### Actual Response Time

```text
1.2 seconds
```

### Result

**PASS**

---

## Test Scenario 5 — Session Cookie

### Requirement

A successful login must create a session cookie.

### Actual Result

No `Set-Cookie` header was returned.

### Result

**FAIL**

### Actual Result

No `Set-Cookie` header was returned after successful login, so the required session cookie was not created.

---

## Test Scenario 6 — Login Response Validation

### Requirements

After successful login:

1. Status code = 200
2. Response = JSON
3. Response contains token
4. Session cookie is created

### Actual Response

```text
Status: 200 OK
Content-Type: application/json

Response:
{
  "message": "Login successful"
}

Set-Cookie:
Not present
```

### Validation

| Requirement            | Result |
| ---------------------- | ------ |
| Status code = 200      | PASS   |
| Response is JSON       | PASS   |
| Token returned         | FAIL   |
| Session cookie created | FAIL   |
| Overall test           | FAIL   |

### Actual Result

The login response did not return the required token and no `Set-Cookie` header was returned to create the required session cookie.

---

## QA Conclusion

The Day 37 practical exercise demonstrated that API validation requires more than checking HTTP status codes.

A complete API validation should consider:

* Status code
* Headers
* Response body
* Required fields
* Response time
* Authentication
* Cookies

A `200 OK` response can still result in a failed test when other requirements are not satisfied.
