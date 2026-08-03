# Day 14 - PUT Request

## What is PUT?

PUT replaces an entire existing resource.

Example:

PUT /posts/1

```json
{
  "id":1,
  "title":"Updated QA",
  "body":"Learning PUT",
  "userId":1
}
```

---

## Expected Response

Status Code:

200 OK

---

## QA Validation Checklist

- Status code is 200
- Entire resource is updated
- Response matches submitted data
- No unexpected fields are removed or added
