# 🛂 Day 17 – API Authorization

## What is Authorization?

Authorization is the process of determining what an authenticated user or application is allowed to access or perform.

Authorization answers:

> **What are you allowed to do?**

---

## Example

A system may have:

### Admin

- View users
- Create users
- Edit users
- Delete users

### Regular User

- View own profile
- Edit own profile

But:

- Cannot delete another user
- Cannot access admin functions

---

## Authentication vs Authorization

| Authentication | Authorization |
|---|---|
| Who are you? | What can you access? |
| Verifies identity | Determines permissions |
| Uses credentials/tokens | Uses roles/permissions |
| Happens before authorization | Happens after authentication |

---

## Common Status Codes

### 401 Unauthorized

Usually means the request does not contain valid authentication credentials.

### 403 Forbidden

The user may be authenticated but does not have permission to access the requested resource.

---

## QA Testing Examples

### Positive Tests

- Authenticated user accesses allowed resource
- Admin accesses admin endpoint

### Negative Tests

- Unauthenticated user accesses protected endpoint
- Regular user attempts admin operation
- User attempts to access another user's restricted data

---

## Key Takeaway

Authentication:

> **Who are you?**

Authorization:

> **What are you allowed to do?**
