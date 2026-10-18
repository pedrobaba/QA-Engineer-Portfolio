# Day 54 — Performance Testing Practice

## Objective

Practice calculating performance metrics, selecting an appropriate performance test type, interpreting test results, and documenting performance defects against defined acceptance criteria.

## Task 1 — Performance Metrics

### Questions and Results

| Question | Answer | Result |
|---|---|---|
| Identify what 800 ms represents | Response time | Correct |
| Calculate throughput for 500 requests in 10 seconds | 50 requests/second | Correct |
| Identify testing with expected busy-period users | Load testing | Incorrect — initially answered stress testing |
| Explain why a baseline is useful | Compare future measurements and identify performance changes | Incorrect — initially answered that it guarantees the application will never become slow |

**Initial result:** 2/4 correct.

### Review

The main concepts to reinforce were the difference between load testing and stress testing and the purpose of a performance baseline.

## Task 2 — Calculate and Interpret Metrics

### Scenario

- Total requests: 600
- Duration: 20 seconds
- Average response time: 250 milliseconds

| Question | Answer | Result |
|---|---|---|
| Calculate throughput | 600 ÷ 20 = 30 RPS | Correct |
| Convert 250 ms to seconds | 0.25 seconds | Correct |
| Identify possible causes of slower responses | Inefficient code/database queries and server resource constraints | Correct |

**Result:** 3/3 correct.

## Task 3 — Design a Performance Test Scenario

### Scenario

An online shopping application is expected to support 500 concurrent users. The product listing page should load within 2 seconds under that workload.

| Field | Answer |
|---|---|
| Test objective | Verify response time |
| Test type | Load testing |
| Expected result | Product page loads within 2 seconds |
| Failure condition | Application crashes or page takes longer than the expected time |

**Result:** All four responses were accepted.

### Review Note

In a real project, the objective should specify both the target workload and the response-time requirement. The response-time metric and measurement method should also be clarified.

## Task 4 — Interpret Performance Test Results

### Test Data

| Metric | Result |
|---|---:|
| Concurrent users | 500 |
| Average response time | 1.6 seconds |
| p95 response time | 2.8 seconds |
| Failed requests | 3% |
| Required p95 response time | ≤ 2 seconds |
| Required failed-request rate | < 1% |

### Answers and Review

1. Does the average meet the 2-second limit? **Yes.**
2. Does p95 meet the limit? **No.**
3. Can the entire test pass based only on the average? **No.**
4. What additional information is needed? **The acceptance criteria for p95 response time and failed-request percentage.**

**Result:** 4/4 correct.

### Conclusion

The p95 response time exceeds the 2-second requirement, and the failed-request rate exceeds the requirement of below 1%. The reported results therefore do not meet the stated performance acceptance criteria.

## Task 5 — Performance Bug Report

### Report Status

**Practice bug report drafted from the supplied learning scenario.**

This report uses the provided test results. The issue was not independently reproduced against a live application, and no application-specific environment or request details were supplied.

### Bug Title

Product listing page fails to meet p95 response-time and failed-request-rate requirements under 500 concurrent users

### Environment

- Application: Online shopping application (exercise scenario)
- Test type: Load testing
- Concurrent users: 500
- Test tool: Not specified
- Test date and build/version: Not provided

### Preconditions

1. The application is available for performance testing.
2. The product listing page can be accessed.
3. A load test can simulate 500 concurrent users.
4. The acceptance criteria specify:
   - p95 response time must be no more than 2 seconds.
   - Failed-request rate must remain below 1%.

### Steps to Reproduce

1. Configure a load test targeting the product listing page.
2. Set the workload to 500 concurrent users.
3. Execute the load test under the defined test conditions.
4. Collect response-time measurements and failed-request statistics.
5. Compare the results with the specified acceptance criteria.

### Expected Result

- The p95 response time should be no greater than 2 seconds.
- The failed-request rate should remain below 1%.

### Actual Result

The supplied exercise results show:

- Average response time: 1.6 seconds.
- p95 response time: 2.8 seconds.
- Failed-request rate: 3%.

The p95 response time exceeds the 2-second limit by 0.8 seconds. The failed-request rate exceeds the 1% threshold by 2 percentage points.

**Result:** Both stated performance acceptance criteria are violated.

### Severity

**Proposed severity: High — subject to impact assessment.**

### Reason for Severity

The measured performance does not meet the defined requirements under the expected busy-period workload. Slow responses and failed requests could affect customers attempting to browse products during a sales event.

The final severity should be confirmed after assessing the affected requests, customer impact, business criticality, frequency, and whether the results can be reproduced. The available information does not establish a Critical severity or a specific technical root cause.

### Evidence

- Performance test results supplied in the Day 54 exercise.
- No screenshots, exported test report, request logs, or recordings were provided.


### Recommended Follow-up

1. Repeat the test under controlled conditions to confirm the results.
2. Review failed-request details and response codes.
3. Examine response-time distributions and server/resource metrics.
4. Investigate slow requests and relevant application or database logs.
5. Retest after any corrective changes.

### QA Conclusion

The supplied performance results violate the p95 response-time and failed-request-rate requirements. Further investigation is required to confirm reproducibility, determine the impact, and identify the cause.

This is a practice report based on the exercise scenario, not a verified defect in a named production application.

## Day 54 — Overall Status

- Tasks 1–4: Completed.
- Task 5: Bug report drafted for the exercise scenario.
- Practical performance test execution: Not independently performed.
- Live application defect: Not independently verified.
- Root cause: Not determined.

## Key Takeaways

1. Response time measures how long a request takes to receive a response.
2. Throughput measures requests processed per unit of time.
3. Load testing evaluates performance under an expected workload.
4. Stress testing investigates behavior beyond normal operating conditions.
5. Average response time alone does not establish that all performance requirements pass.
6. p95 and failed-request rates must be checked against their respective acceptance criteria.
7. Bug reports should distinguish observed results from assumptions and unverified root causes.
8. Severity should reflect assessed impact rather than the response-time measurement alone.
