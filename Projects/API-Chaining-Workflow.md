# API Chaining Workflow — Day 39

## 📌 Project Overview

This project demonstrates how API requests can be chained together when one request depends on data returned by a previous request.

The workflow simulates a real-world API testing scenario where a resource is created, retrieved, updated, and deleted.

---

## 🎯 Objective

To practice:

* API request chaining
* Extracting values from API responses
* Using variables between requests
* Testing dependent API requests
* Validating response data
* Verifying complete API workflows

---

## 🧰 Tools Used

* Postman
* REST API
* JSON
* JavaScript/Postman Tests
* GitHub

---

## 🔗 API Workflow

```text
Create Resource
      ↓
Extract Resource ID
      ↓
Get Resource
      ↓
Update Resource
      ↓
Delete Resource
      ↓
Verify Deletion
```

---

## 🧪 Test Scenario

### Scenario

Verify that a resource can be successfully created and that the returned resource ID can be used to perform subsequent API operations.

### Expected Workflow

1. Send a request to create a resource.
2. Verify that the resource is successfully created.
3. Extract the generated resource ID.
4. Store the ID as a Postman variable.
5. Use the ID in a GET request.
6. Verify that the correct resource is returned.
7. Update the resource using the stored ID.
8. Verify that the update was successful.
9. Delete the resource.
10. Verify that the resource can no longer be retrieved.

---

# 1. Create Resource

### Method

`POST`

### Endpoint

```text
[Add endpoint used during the practical exercise]
```

### Request Body

```json
{
  "name": "QA Day 39 Test",
  "job": "Software Tester"
}
```

### Expected Result

* Request is successfully processed.
* Appropriate success status code is returned.
* Response contains a unique resource ID.
* Response contains the created resource information.

### Evidence

*Add Postman screenshot here.*

---

# 2. Extract Resource ID

The resource ID returned from the create request will be stored as a Postman variable.

### Example Response

```json
{
  "id": "123",
  "name": "QA Day 39 Test",
  "job": "Software Tester"
}
```

### Variable

```text
resourceId = 123
```

The variable will then be reused in subsequent requests.

---

# 3. Retrieve Resource

### Method

`GET`

### Endpoint

```text
[Add endpoint]/{{resourceId}}
```

### Expected Result

* Request succeeds.
* The resource corresponding to `{{resourceId}}` is returned.
* Returned data matches the resource created earlier.

### Validation

Verify:

* Status code
* Resource ID
* Resource name
* Resource/job data
* Response structure

### Evidence

*Add Postman screenshot here.*

---

# 4. Update Resource

### Method

`PUT` / `PATCH`

### Endpoint

```text
[Add endpoint]/{{resourceId}}
```

### Request Body

```json
{
  "name": "QA Day 39 Updated",
  "job": "Manual QA Tester"
}
```

### Expected Result

* Resource is successfully updated.
* Response confirms the updated data.
* The resource ID remains associated with the same resource.

### Evidence

*Add Postman screenshot here.*

---

# 5. Delete Resource

### Method

`DELETE`

### Endpoint

```text
[Add endpoint]/{{resourceId}}
```

### Expected Result

* Resource is successfully deleted.
* Appropriate deletion status code is returned.

### Evidence

*Add Postman screenshot here.*

---

# 6. Verify Deletion

Send another GET request using the same resource ID.

### Method

`GET`

### Endpoint

```text
[Add endpoint]/{{resourceId}}
```

### Expected Result

The API should indicate that the resource no longer exists.

Possible response:

```text
404 Not Found
```

### Evidence

*Add Postman screenshot here.*

---

# 📊 Test Execution Summary

| Step | Request         | Expected Result           | Actual Result | Status |
| ---- | --------------- | ------------------------- | ------------- | ------ |
| 1    | Create Resource | Resource created          | TBD           | ⬜      |
| 2    | Extract ID      | ID stored successfully    | TBD           | ⬜      |
| 3    | Get Resource    | Correct resource returned | TBD           | ⬜      |
| 4    | Update Resource | Resource updated          | TBD           | ⬜      |
| 5    | Delete Resource | Resource deleted          | TBD           | ⬜      |
| 6    | Verify Deletion | Resource unavailable      | TBD           | ⬜      |

---

# 🔍 QA Observations

During execution, pay attention to:

* Whether the resource ID is generated correctly.
* Whether the ID can be passed between requests.
* Whether variables resolve correctly in Postman.
* Whether the correct resource is returned.
* Whether updates persist.
* Whether deletion is properly handled.
* Whether the API returns appropriate status codes.
* Whether error responses are meaningful.

---

# 🐛 Defects Found

Record any defects discovered during testing below.

| ID      | Description | Severity | Expected | Actual | Status |
| ------- | ----------- | -------- | -------- | ------ | ------ |
| BUG-001 | TBD         | TBD      | TBD      | TBD    | TBD    |

If no defect is found:

```text
No defects identified during this workflow execution.
```

---

# 📸 Evidence

Evidence collected during testing:

* [ ] Create Resource response
* [ ] Extracted resource ID
* [ ] GET Resource response
* [ ] Update response
* [ ] Delete response
* [ ] Verification after deletion

Screenshots should be stored with the appropriate API testing evidence in the QA portfolio.

---

# 💡 QA Skills Demonstrated

This project demonstrates practical knowledge of:

* REST API testing
* HTTP methods
* JSON responses
* API request dependencies
* Postman variables
* API chaining
* Response validation
* Positive testing
* Negative testing
* CRUD workflow testing
* Test evidence documentation
* Defect reporting

---

# 📝 Conclusion

This exercise demonstrated how individual API requests can be connected to form a complete testing workflow.

Instead of testing each endpoint independently, the workflow validated how data moves between requests and whether each operation behaves correctly when dependent on the previous operation.

This is an important API testing technique because real applications frequently require multiple API calls to complete a single user workflow.
