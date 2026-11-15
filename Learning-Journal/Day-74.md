# Day 74 — Learning Journal

## Topic
QA Portfolio Project — API Testing

## What I Learned

Today, I focused on applying API testing concepts to a practical portfolio project using Postman and JSONPlaceholder.

I reviewed how to test different HTTP methods, identify API test scenarios, validate response bodies, and write Postman assertions.

I also learned that receiving HTTP 200 does not automatically mean an API response is correct. A QA tester must verify the returned data against the expected result.

## Practical Areas Covered

- API test planning and scenario identification
- API test case design
- GET, POST, PUT, PATCH, and DELETE requests
- Negative API testing
- Response validation
- Postman assertions
- Expected versus actual results
- API execution documentation

## Important Lessons

One important lesson was understanding that API behaviour depends on the specific service and its requirements.

For example, JSONPlaceholder returns HTTP 200 with an empty object when requesting a nonexistent post. This differs from APIs that return HTTP 404 for the same type of request.

I also learned that JSONPlaceholder simulates write operations and does not permanently save changes.

## Execution and Evidence Status

The execution outcomes discussed during this lesson were model examples, not results collected from a live Postman session.

- API test cases: Prepared.
- Postman assertions: Prepared.
- Live API execution: Pending verification.
- Screenshots and execution evidence: Pending.
- Verified API defects: None documented.

## Challenges

The main challenge was distinguishing the expected behaviour of a practice API from the behaviour expected of a production application.

I learned that QA testers must avoid reporting defects without clear requirements and verified results.

## Next Steps

- Complete the actual Postman requests.
- Save the Postman collection.
- Capture genuine response and assertion screenshots.
- Update the execution report using actual results.
- Continue to the API test summary report on Day 75.

## Personal Reflection

Day 74 helped me understand how API testing fits into a complete QA project. I am becoming more familiar with validating not only whether an endpoint responds, but also whether the returned information is correct and useful.
