# Day 54 — Performance Testing Fundamentals

## Overview

Day 54 introduced performance testing fundamentals, focusing on response time, throughput, load testing, stress testing, performance baselines, and interpreting performance test results.

The practical exercises used an online shopping application scenario to understand how QA engineers evaluate performance against measurable requirements.

**Status:** Partially completed — Tasks 1–4 completed; Task 5 skipped.

## Learning Objectives

- Understand response time and throughput.
- Calculate requests per second.
- Convert milliseconds into seconds.
- Distinguish load testing from stress testing.
- Understand the purpose of a performance baseline.
- Interpret average and 95th-percentile (p95) response times.
- Compare performance measurements with acceptance criteria.

## 1. Response Time

Response time measures how long a request takes to receive a response.

Example:

An API request takes 800 milliseconds.

800 ms ÷ 1,000 = 0.8 seconds.

Response time should be interpreted against the application's performance requirements.

## 2. Throughput

Throughput measures the number of requests or transactions processed over a period of time.

**Formula:**

Throughput = Total requests ÷ Total time in seconds

Example:

600 requests are processed over 20 seconds.

600 ÷ 20 = 30 requests per second (RPS).

## 3. Load Testing vs. Stress Testing

### Load Testing

Load testing evaluates application performance under an expected or anticipated workload.

Example: Testing an online shopping application with 500 concurrent users when that is its expected busy-period workload.

### Stress Testing

Stress testing pushes an application beyond normal or expected operating conditions to investigate its limits and how it behaves under excessive demand.

## 4. Performance Baseline

A performance baseline is a reference measurement used to compare performance over time.

A baseline can help QA identify performance improvements or degradation after application changes.

It does not guarantee that future performance will remain unchanged.

## 5. Average Response Time and p95

Average response time represents the arithmetic mean of measured response times.

The 95th percentile (p95) indicates the response-time value at or below which approximately 95% of measured requests completed.

An average below the required limit does not automatically prove that all performance requirements have been met.

## 6. Performance Acceptance Criteria

Performance requirements should define measurable limits.

Example requirements:

- 500 concurrent users.
- Product listing page p95 response time no greater than 2 seconds.
- Failed-request rate below 1%.

Actual measurements must be compared with the applicable acceptance criteria before deciding whether a performance test passed.

## 7. Performance Test Results Exercise

Scenario: An online shopping application's product listing page was tested with 500 concurrent users.

| Metric | Result |
|---|---:|
| Concurrent users | 500 |
| Average response time | 1.6 seconds |
| p95 response time | 2.8 seconds |
| Failed requests | 3% |
| Required p95 | ≤ 2 seconds |
| Required failed-request rate | < 1% |

### Interpretation

- The average response time of 1.6 seconds is below 2 seconds.
- The p95 response time of 2.8 seconds exceeds the 2-second requirement.
- The failed-request rate of 3% exceeds the requirement of below 1%.

**Conclusion:** The reported measurements violate the stated p95 and failed-request acceptance criteria. The overall performance test does not meet those criteria.

## Key Takeaways

1. Response time measures how long a request takes to receive a response.
2. Throughput measures requests processed per unit of time.
3. Load testing uses an expected workload.
4. Stress testing investigates behavior beyond normal operating conditions.
5. Performance baselines provide reference measurements for comparison.
6. Average response time alone is not sufficient to establish that all performance requirements pass.
7. QA should evaluate percentiles and failed-request rates when they are part of the acceptance criteria.
8. Performance conclusions should be based on measured evidence and defined requirements.
