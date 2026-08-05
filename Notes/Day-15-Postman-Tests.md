# Day 15 - Postman Tests

## What are Postman Tests?

Postman Tests are JavaScript-based scripts that automatically validate API responses after a request is executed.

Instead of manually checking every response, Postman can verify expected conditions automatically.

---

## Example Test

### Validate Status Code

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

---

### Validate Response Time

```javascript
pm.test("Response time is below 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});
```

---

### Validate JSON Data

```javascript
let jsonData = pm.response.json();

pm.test("User ID is 1", function () {
    pm.expect(jsonData.userId).to.eql(1);
});
```

---

### Validate Content-Type

```javascript
pm.test("Content-Type exists", function () {
    pm.response.to.have.header("Content-Type");
});
```

---

## Advantages of Postman Tests

- Faster API validation
- Reduced manual effort
- Consistent testing
- Easier regression testing
- Improved test coverage

---

## Real-World Workflow

1. Send an API request.
2. Execute Postman tests.
3. Review passed or failed assertions.
4. Investigate failures.
5. Report defects if necessary.

---

## Summary

Postman Tests allow QA Engineers to automate API response validation, making testing faster, more accurate, and more reliable.
