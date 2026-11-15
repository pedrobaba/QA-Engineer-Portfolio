# API Test Execution Report — JSONPlaceholder

## 1. Report Overview

| Item | Details |
|---|---|
| Project | JSONPlaceholder API Testing |
| API | JSONPlaceholder |
| Tool | Postman |
| Test cases planned | 8 |
| Execution status | Pending live execution |
| Report status | Draft |

## 2. Execution Summary

The eight API test cases have been designed and documented.

Live execution has not yet been verified. Therefore, no actual pass, fail, or blocked results are reported in this document.

| Metric | Current value |
|---|---:|
| Total test cases | 8 |
| Executed | 0 |
| Passed | 0 |
| Failed | 0 |
| Blocked | 0 |
| Not Run | 8 |

## 3. Test Case Results

| Test ID | Scenario | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| API-TC-001 | Retrieve all posts | 200; 100 posts | Pending | Not Run |
| API-TC-002 | Retrieve a single post | 200; correct post data | Pending | Not Run |
| API-TC-003 | Retrieve nonexistent post | 200; empty object | Pending | Not Run |
| API-TC-004 | Create a post | 201; submitted data returned | Pending | Not Run |
| API-TC-005 | Update a post | 200; updated response | Pending | Not Run |
| API-TC-006 | Partially update a post | 200; updated field returned | Pending | Not Run |
| API-TC-007 | Delete a post | 200; simulated deletion response | Pending | Not Run |
| API-TC-008 | Retrieve user details | 200; user data returned | Pending | Not Run |

## 4. Defect Summary

No verified API defects have been identified or reported.

Any unexpected behaviour discovered during actual execution should be investigated against the API's documented behaviour before being classified as a defect.

## 5. Limitations

- JSONPlaceholder is a mock API.
- Write operations do not permanently modify the underlying dataset.
- The project does not validate a production application's business rules.
- Actual response times and assertion results must be collected during live execution.

## 6. Conclusion

API test planning and test case documentation have been completed.

Live execution, evidence collection, and final test assessment remain outstanding.

The report will be updated after the Postman collection has been executed and the actual results have been recorded.
