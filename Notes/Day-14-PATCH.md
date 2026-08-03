# Day 14 - PATCH Request

## What is PATCH?

PATCH updates only specific fields of an existing resource.

Example:

PATCH /posts/1

```json
{
  "title":"Updated Title"
}
```

---

## Expected Response

Status Code:

200 OK

---

## QA Validation Checklist

- Only requested fields are updated
- Other fields remain unchanged
- Response is successful
- Data integrity is maintained
