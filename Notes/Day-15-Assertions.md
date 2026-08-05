# Day 15 - Assertions

## What is an Assertion?

An assertion is a condition used to verify whether an API response meets the expected result.

If the condition is true:

✅ Test Passes

If the condition is false:

❌ Test Fails

---

## Why Assertions Matter

Assertions help QA Engineers automate response verification and quickly identify unexpected behavior.

---

## Common Assertions

### Status Code

```javascript
pm.response.to.have.status(200);
```

Checks whether the response status code is 200.

---

### Response Time

```javascript
pm.expect(pm.response.responseTime).to.be.below(1000);
```

Checks that the response time is less than one second.

---

### JSON Field

```javascript
let jsonData = pm.response.json();

pm.expect(jsonData.userId).to.eql(1);
```

Verifies that the userId equals 1.

---

### Content-Type

```javascript
pm.response.to.have.header("Content-Type");
```

Checks that the response contains the Content-Type header.

---

## Benefits of Assertions

- Reduce manual verification
- Improve test reliability
- Catch API issues early
- Enable automated testing

---

## Key Takeaways

Assertions are the foundation of API test automation and help ensure responses meet expected requirements.
