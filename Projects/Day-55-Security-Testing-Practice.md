Day 55 — Security Testing Practice

Project Overview

This project documents manual QA practice involving authentication, authorization, and access control in a hypothetical shopping application.

Project type: Security testing exercise
Tool: Postman for API request practice
Data: Synthetic test data
Execution status: Scenario-based practice; no live application vulnerability independently verified.

Scenario

The shopping application has two regular-user accounts and an administrator role.

* Account A can view its own orders.
* Account B can view its own orders.
* An administrator can access authorized administrative features.

The tests assess whether the application prevents users from accessing resources or functionality outside their permissions.

Test Case 1 — Unauthorized Order Access

Test Case ID: SEC-TC-001

Objective: Verify that Account A cannot retrieve an order belonging to Account B.

Preconditions:

* Account A is authenticated.
* Account B has an existing order.
* The test order ID is available within the authorized test environment.

Steps:

1. Authenticate as Account A.
2. Send a GET request for Account B’s order using Account A’s valid token and the test order ID.
3. Inspect the response status and body.

Expected result:

* Access is denied according to the API contract.
* The response may be 403 Forbidden or 404 Not Found, depending on the documented design.
* Account B’s protected order details are not disclosed.

Actual result: Not independently executed. The expected behavior was reviewed as a learning exercise.

Execution status: Not run.

Test Case 2 — Admin Access Control

Test Case ID: SEC-TC-002

Objective: Verify that a regular user cannot access administrator-only features.

Preconditions:

* The tester is authenticated as a regular user.
* The user does not have administrator permissions.

Steps:

1. Log in using regular-user credentials.
2. Navigate directly to the admin dashboard or call the corresponding protected endpoint.
3. Inspect the response and verify whether admin-only content or actions are available.

Expected result:

* Access is denied according to the application’s access-control rules.
* Admin-only information is not disclosed.
* Administrative actions cannot be performed.

Actual result: Not independently executed.

Execution status: Not run.

Test Case 3 — Missing Authentication

Test Case ID: SEC-TC-003

Objective: Verify that an unauthenticated request cannot retrieve protected order data.

Preconditions:

* The protected endpoint is available in the authorized test environment.
* The request contains no valid authentication credentials.

Steps:

1. Open Postman.
2. Select the protected orders endpoint and configure a GET request.
3. Remove the Authorization header and any other required authentication credentials.
4. Send the request.
5. Inspect the response status and body.

Expected result:

* The API rejects the request, typically with HTTP 401.
* No protected order data is returned.

Actual result: Not independently executed.

Execution status: Not run.

Practice Bug Report — Potential Broken Object-Level Authorization

Bug ID: SEC-001

Title: Authenticated Regular User Can Access Another User’s Order Details

Category: Security — Object-Level Authorization

Severity: High (provisional; subject to impact assessment)

Environment: Postman; hypothetical authorized test environment.

Description

In the supplied exercise scenario, Account A requests an order belonging to Account B. The API returns HTTP 200 OK and displays Account B’s order details.

This behavior suggests a potential Broken Object-Level Authorization (BOLA) vulnerability.

Preconditions

* Account A and Account B are authorized test accounts.
* Each account has separate orders containing synthetic data.
* Account A has a valid authentication token.

Steps to Reproduce

1. Authenticate as Account A.
2. Use Account A’s token to request Account B’s test order by its ID.
3. Inspect the response status and body.

Expected Result

The API denies unauthorized access and does not disclose Account B’s order details.

Actual Result

In the supplied scenario, the API returns HTTP 200 OK and displays Account B’s order details.

Potential Impact

If reproduced in a real application, this behavior could expose other users’ order information. The actual severity depends on the data exposed, exploitability, and scope.

Evidence to Capture

* Sanitized request method and endpoint.
* HTTP status code.
* Redacted response showing the unexpected data exposure.
* Reproduction steps and test account role.

No real credentials or personal data should be included.

Verification Limitation

This is a simulated bug report based on an exercise scenario. The defect has not been independently reproduced against a live or test application, and its underlying cause has not been confirmed.

Learning Outcomes

* Distinguished authentication from authorization.
* Practiced test case design for object-level access, role-based access, and missing authentication.
* Learned to validate response content as well as HTTP status codes.
* Practiced documenting security findings with expected and actual results.
* Learned to protect sensitive information in evidence.

Project Conclusion

The exercise demonstrates how manual QA can help assess whether an application enforces access controls and protects user data. Further testing in an authorized environment would be required to verify the behavior of an actual application.