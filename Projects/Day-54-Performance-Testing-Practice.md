# Day 54 — Performance Testing Practice

## Objective

Practice calculating performance metrics, selecting an appropriate performance test type, and interpreting test results against acceptance criteria.

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

Given:
- 600 requests over 20 seconds.
- Average response time of 250 milliseconds.

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

### Answers and Review

1. Does the average meet the 2-second limit? **Yes.**
2. Does p95 meet the limit, assuming the limit applies to p95? **No.**
3. Can the entire test pass based only on the average? **No.** Other acceptance criteria must be evaluated.
4. What additional information is needed? **The acceptance criteria for p95 response time and failed-request percentage.**

**Result:** 4/4 correct.

### Conclusion

The p95 result exceeds the 2-second limit, and the failed-request rate exceeds the requirement of below 1%. The measurements do not meet the specified performance criteria.

## Task 5 — Performance Bug Report

**Status:** Skipped by choice.

No bug report was written or submitted during this exercise. Therefore, this project does not claim a completed performance defect report.

## Overall Day 54 Status

- Tasks 1–4: Completed.
- Task 5: Skipped.
- Practical performance test execution: Not performed.
- Performance bug report: Not submitted.
- Confirmed real-world defects: None established through this learning exercise.

## Next Learning Focus

Continue reinforcing performance test types, metric interpretation, and documenting measurable performance requirements before moving to practical performance testing tools.
