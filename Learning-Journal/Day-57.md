# Day 57 — Learning Journal

## Topic
Smoke & Sanity Testing Practice

## What I Learned

Today, I learned how to distinguish smoke testing from sanity testing and how to choose the appropriate approach for different QA situations.

Smoke testing checks critical application functions on a new build to help determine whether further testing can begin. Sanity testing focuses on a specific change or affected functionality, such as an Add to Cart or password-reset fix.

I also practiced analyzing a failed login smoke test. I learned that a useful QA report should include the test scenario, expected result, actual result, status, environment, and supporting evidence when available.

## Tasks Completed

- Identified smoke testing scenarios.
- Identified sanity testing scenarios.
- Distinguished broad build-readiness checks from focused checks after a fix.
- Analyzed a simulated login failure.
- Practiced writing expected and actual results.
- Reviewed the importance of evidence and environment details.

## Challenge and Reflection

One important lesson is that identifying a failure is only part of the QA process. The tester must document the failure clearly enough for the team to reproduce and investigate it.

I also learned that a failed smoke test does not automatically mean every other test must stop. The team should assess the impact and follow its established process.

## How I Can Apply This

When receiving a new build, I will begin by identifying the critical functions that should be checked. After a specific fix, I will focus on the affected functionality and choose additional testing when the risk or scope requires it.

I will also record expected and actual results separately and avoid claiming that a simulated scenario represents a real defect.

## Practice Status

All six learning tasks were completed. The exercises involved simulated scenarios; no application was tested during this session.

## Key Takeaway

**Smoke testing checks whether critical parts of a new build are ready for further testing; sanity testing focuses on whether a specific change behaves as expected.**
