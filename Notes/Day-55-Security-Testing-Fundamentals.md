Day 55 — Security Testing Fundamentals

Overview

Day 55 focused on the fundamentals of security testing from a manual QA perspective. The practice covered authentication, authorization, access-control testing, protected resources, and security bug reporting.

The objective was to learn how to identify potential unauthorized access and document security-related findings clearly and responsibly.

Learning Objectives

By the end of this lesson, I practiced how to:

* Explain the purpose of security testing.
* Distinguish authentication from authorization.
* Understand the typical differences between HTTP 401 and 403 responses.
* Design test cases for object-level authorization.
* Test role-based access restrictions.
* Check whether protected API endpoints reject unauthenticated requests.
* Verify that unauthorized responses do not expose protected data.
* Document potential security defects using expected and actual results.
* Capture evidence while protecting credentials and sensitive information.

1. What Is Security Testing?

Security testing evaluates whether an application protects its data, resources, and functionality from unauthorized access or actions.

Examples include:

* Attempting to access another user’s order using an authorized test account.
* Checking whether a regular user can access an administrator-only resource.
* Sending a request to a protected endpoint without authentication.
* Verifying that an API does not disclose protected information when access is denied.

Security testing must be conducted only within an authorized environment and scope.

2. Authentication vs Authorization

Authentication

Authentication verifies the identity of a user or client.

Examples:

* Username and password.
* Session cookies.
* API keys.
* Bearer tokens.

Authorization

Authorization determines which resources or actions an authenticated user is permitted to access.

Example: A regular user may successfully log in but still be prohibited from accessing an administrator dashboard.

3. HTTP 401 vs 403

HTTP 401 — Unauthorized

Typically indicates that valid authentication credentials are missing or unavailable.

Examples:

* Missing authentication token.
* Invalid token.
* Expired token.

HTTP 403 — Forbidden

Typically indicates that the user is authenticated but does not have permission to access the requested resource.

Example: A regular user attempts to access an administrator-only endpoint.

Important: Expected status codes depend on the API contract and security design. Some applications use HTTP 404 to avoid disclosing the existence of another user’s resource.

4. Object-Level Authorization

Object-level authorization determines whether a user may access a specific resource, such as an order belonging to a particular customer.

Practice scenario

* Account A is a regular user.
* Account B is another regular user.
* Each account has separate orders.
* Account A attempts to retrieve an order belonging to Account B.

The application should verify that Account A has permission to access the requested order before returning its contents.

A failure may indicate Broken Object-Level Authorization (BOLA). This kind of behavior is also commonly associated with Insecure Direct Object Reference (IDOR), although the precise underlying cause must be investigated before it can be confirmed.

5. Role-Based Access Control

Role-based access control restricts access according to assigned permissions or roles.

Example:

Role	Expected access
Regular user	Own orders and permitted user features
Administrator	Authorized administrative features

A regular user should not gain administrative privileges merely by navigating directly to an admin URL or calling a protected endpoint.

6. Testing Missing Authentication

A protected API endpoint should reject requests that lack valid authentication credentials.

Example test:

1. Open Postman.
2. Select a protected orders endpoint.
3. Configure a GET request.
4. Remove the Authorization header and any other credentials required by the API.
5. Send the request.
6. Check the status code and response body.

Expected result: The API rejects the request according to its contract, typically with HTTP 401, and does not disclose protected order data.

7. Security Test Case Design

A security test case should include:

* Test case title.
* Preconditions.
* Test steps.
* Expected result.
* Actual result, when executed.
* Status, when executed.

Security test cases should verify both the access decision and the information returned. An error status alone does not prove that protected information was handled safely.

8. Security Bug Reporting

A security bug report should contain:

* Clear bug title.
* Environment.
* Preconditions.
* Reproducible steps.
* Expected result.
* Actual result.
* Impact assessment.
* Safe evidence.
* Severity justification.

Severity should be assigned based on the actual impact, exploitability, affected data, and scope. It should not be selected solely because a response code is unexpected.

9. Evidence and Data Protection

Useful evidence may include:

* Request method and endpoint.
* HTTP status code.
* Sanitized response body.
* Reproduction steps.
* Test account role.
* Environment and timestamp.

Passwords, access tokens, personal information, and unnecessary sensitive values must be redacted.

Key Takeaways

1. Authentication verifies identity.
2. Authorization controls access to resources and actions.
3. HTTP 401 generally concerns authentication; HTTP 403 generally concerns permissions.
4. HTTP 200 does not guarantee that the application behaved securely.
5. Object-level authorization must be checked for individual resources.
6. A regular user must not gain administrator access without permission.
7. Protected API responses must not disclose data to unauthorized users.
8. Security bug reports should distinguish observed behavior from assumptions about root cause.
9. Security testing must remain within the authorized scope.
10. Practice scenarios must not be presented as independently verified real-world defects.

Completion Summary

Day 55 covered security testing fundamentals, security test case design, authorization scenarios, and security bug reporting.

The security defect described in the practice report is simulated and has not been independently reproduced against an application.