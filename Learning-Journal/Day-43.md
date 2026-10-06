# Day 43 — Learning Journal

## Date

October 6, 2026

## Topic

API Testing Portfolio Project

## Study Focus

Postman API automation, test design, execution reporting, traceability, evidence, and QA risk assessment.

---

## What I Worked On

Today I built a complete API testing portfolio project using JSONPlaceholder and Postman.

I combined the API testing skills I had previously learned into one structured project instead of testing isolated requests.

I created:

* API testing scope
* Test scenarios
* API test cases
* Positive test coverage
* Negative test coverage
* Postman automated assertions
* Collection structure
* Execution reporting
* Traceability
* Evidence
* Coverage summary
* Defect and risk assessment

---

## Postman Collection

I created:

```text
Day 43 - API Testing Portfolio
```

with:

```text
01 - Positive Testing
    ├── Get All Users
    └── Get User 1

02 - Negative Testing
    ├── Get Nonexistent User
    └── Get Invalid User ID
```

---

## Final Automation Result

The final collection execution produced:

* 4 requests
* 17 automated tests
* 17 passed
* 0 failed
* 100% pass rate

The collection was executed again after the project documentation was completed, and the same 17/17 result was reproduced.

---

## Important Lessons

### 1. Request execution is different from test execution

My first collection run showed that all requests could execute while Postman reported:

```text
No tests found
```

This taught me that a successful HTTP request does not automatically mean that automated QA validation has taken place.

### 2. Actual API behavior must control assertions

I initially expected the nonexistent-user response to be an empty array:

```json
[]
```

After inspecting the response, I found that the API returned:

```json
{}
```

The assertion was changed to match the verified behavior.

### 3. Test-script location matters

I experienced a situation where an assertion was placed in the wrong Postman script section.

The API was returning the expected response, but the test did not execute correctly.

I learned to verify that response assertions are placed in the Post-response/Tests section.

### 4. Passing tests do not prove an API is defect-free

My final result was:

```text
17/17 passed
```

However, this only proves that the tested scenarios passed.

It does not prove that untested functionality, security, load behavior, infrastructure, or production performance are defect-free.

### 5. Performance observations need context

I recorded different response times for the same API during different executions.

Because there was no production SLA, I documented the slower result as an observation instead of incorrectly reporting it as a confirmed defect.

---

## What I Improved Today

Before today, I had mainly practiced API requests and individual Postman assertions.

Today I learned how to connect those individual skills into a complete QA project.

I now have experience with:

* Structured API test planning
* Scenario-to-test-case traceability
* Postman collection organization
* Automated assertions
* Collection execution
* Test execution reporting
* Evidence capture
* QA risk assessment

---

## Final Assessment

Day 43 final assessment:

**5/5 — 100%**

All five assessment questions were answered correctly.

---

## Day 43 Reflection

Today's project helped me understand that QA is not simply about sending requests and checking whether they return `200 OK`.

A professional QA workflow involves understanding the expected behavior, designing appropriate tests, automating repeatable checks, recording evidence, identifying observations versus confirmed defects, and communicating the final results clearly.

The most valuable lesson today was that **passing tests are evidence of tested behavior, not proof that the entire product is defect-free.**

---

## Day 43 Status

**COMPLETED ✅**

Final project automation result:

**17/17 tests passed — 100%**
