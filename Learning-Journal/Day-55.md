Day 55 — Learning Journal

Topic

Security Testing Fundamentals for Manual QA

What I Learned

Today, I studied how security testing helps identify potential weaknesses in authentication, authorization, and access control.

I learned that authentication verifies a user’s identity, while authorization determines which resources the user can access.

I also practiced distinguishing HTTP 401 Unauthorized from HTTP 403 Forbidden and learned that the expected response should follow the API contract.

Practical Work Completed

* Reviewed fundamental security-testing concepts.
* Designed test cases for unauthorized order access.
* Practiced role-based access-control test design.
* Designed a test case for a protected endpoint without authentication.
* Reviewed the importance of checking both HTTP status codes and response bodies.
* Drafted a simulated security bug report involving potential Broken Object-Level Authorization.

Challenges and Corrections

One challenge was identifying the correct expected status code for an authorization scenario.

I learned that a regular user who is already authenticated but lacks permission will typically receive HTTP 403, whereas a request without valid authentication credentials will typically receive HTTP 401.

I also learned that testing unauthorized access requires remaining authenticated as the account whose permissions are being evaluated. Switching to the resource owner’s account would not test the same security condition.

Important Takeaways

1. An HTTP 200 response does not automatically mean an API behaved correctly.
2. Authorization testing must verify that users cannot access another user’s protected resources.
3. A regular user must not gain administrative access without permission.
4. Security evidence must be captured safely, with credentials and sensitive information redacted.
5. Bug reports must separate observed behavior from suspected root causes.
6. Simulated findings must be clearly identified as practice rather than real defects.

Areas for Further Practice

* Execute security test cases against an authorized test application.
* Compare actual API behavior against documented requirements.
* Improve confidence in identifying access-control weaknesses.
* Practice writing concise, evidence-based security bug reports.

Day 55 Reflection

This lesson improved my understanding of how manual QA can contribute to application security. I practiced designing security test cases and documenting a hypothetical authorization defect.

The scenarios and bug report remain practice exercises until independently executed and verified in an authorized environment.