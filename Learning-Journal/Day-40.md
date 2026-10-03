# Day 40 — Learning Journal

## Day 40 — API Testing Project

Today I brought together the API testing skills I have been learning and applied them in a structured Postman project.

I started by exploring a user endpoint and inspecting the HTTP status code and JSON response.

I then created automated Postman assertions to validate the response. All 6 of my tests passed, which helped me understand how automated API checks can make testing more repeatable instead of relying only on manually reading the response.

I also practised negative API testing by testing a nonexistent user and an invalid user ID.

Another important lesson today was the difference between an expected result and an actual result. I initially mixed execution results with expected results when designing my test cases. After correction, I understood that a test case should define what should happen, while test execution records what actually happened.

I also created a practice defect report for a valid user request returning a 500 Internal Server Error. This helped me practise writing a title, environment, reproduction steps, expected result, actual result and severity.

Finally, I reviewed an authentication security scenario where invalid credentials resulted in a 200 OK response instead of 401 Unauthorized. I identified authentication bypass as the potential security risk.

## What I Learned

- How to explore an API using Postman.
- How to inspect JSON responses.
- How to create automated Postman assertions.
- How to perform negative API testing.
- How to design API test cases.
- How to distinguish expected results from actual results.
- How to write an API defect report.
- How to calculate a test pass rate.
- How to identify authentication-related security risks.
- Why security findings should be supported by sufficient evidence.

## What I Need to Improve

I need to become more precise when defining expected results and avoid confusing expected behavior with actual execution results.

I also need to become better at determining severity based on verified business and user impact rather than assuming severity from an HTTP status code alone.

## Day 40 Reflection

Today felt more like real QA work because I was not only sending API requests. I was thinking about requirements, expected behavior, test cases, evidence, defects and risk.

The biggest lesson for me was that API testing is more than checking whether a request returns 200. I need to verify the response against what the API is actually supposed to do.

---

# 90-Day QA Roadmap README Update

## Day 40 — API Testing Project

**Status:** Completed

### Completed

- API exploration with Postman
- JSON response inspection
- Automated response assertions
- Positive API testing
- Negative API testing
- API test-case design
- Expected vs. actual validation
- API defect reporting
- Test execution summary
- Authentication/security test design

### Evidence

- Postman API requests
- 6/6 automated assertions passed
- API test cases
- API execution results
- Practice defect report
- Security test scenario

### Key Outcome

Completed a structured API testing project combining the API testing concepts covered in Days 36–39.

---

# LinkedIn Post

Day 40 of my 90-Day QA Engineering journey is complete.

Today I worked on an API Testing Project using Postman and combined several skills I've been building:

- API exploration
- HTTP status validation
- JSON response validation
- Automated Postman assertions
- Positive and negative testing
- API test case design
- Expected vs. actual result analysis
- Defect reporting
- Authentication/security test design

One important lesson today:

**A 200 OK response does not automatically mean an API is correct.**

QA requires validating the response against the expected behavior, data requirements and security expectations.

I also created automated Postman assertions and achieved **6/6 passing tests**.

I'm continuing to build practical QA evidence rather than only studying theory.

#QA #SoftwareTesting #API #Postman #QualityAssurance #100DaysOfCode #LearningInPublic
