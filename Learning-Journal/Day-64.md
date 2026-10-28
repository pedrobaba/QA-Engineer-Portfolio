# Day 64 Learning Journal — Requirement Traceability Matrix

## What I Learned

Today, I learned how a Requirement Traceability Matrix (RTM) connects software requirements to their corresponding test cases.

I practiced identifying requirements without test coverage, recognizing test cases that cover only part of a requirement, calculating requirement-to-test linkage coverage, and assessing how requirement changes affect existing tests.

## Important Lessons

- A requirement should have appropriate test coverage.
- A linked test case does not automatically mean the requirement has passed.
- A failed test requires investigation.
- A test that has not run has an unknown outcome.
- An unlinked test case should be investigated before it is deleted or assigned to a requirement.
- Requirement changes should trigger impact analysis and may require test updates and regression testing.
- Coverage percentages must be interpreted carefully because linkage coverage is different from execution pass rate.

## Practical Scenario

I reviewed an illustrative RTM containing four requirements:

- REQ-031 had a linked test that passed.
- REQ-032 had a linked test that failed.
- REQ-033 had no linked test case.
- REQ-034 had a linked test that had not been executed.

Three out of four requirements had test-case links, producing 75% requirement-to-test linkage coverage. This did not mean that 75% of the requirements had passed.

## Challenges and Reflections

The key distinction I reinforced today was the difference between requirement coverage and test execution status. A requirement can have a linked test without having a successful result, and a test can cover only part of a requirement.

I also learned to avoid making unsupported release-readiness claims from an RTM alone.

## Day 64 Assessment

**Score:** 10/10 (100%)

I answered all ten practice questions correctly.

## Next Steps

- Practice building an RTM from a small set of requirements and test cases.
- Review test-case links when requirements change.
- Track missing coverage, failed tests, and unexecuted tests separately.
- Keep the RTM synchronized with test documentation and execution records.

## Summary

Day 64 improved my understanding of requirement traceability, coverage analysis, change impact analysis, and accurate QA reporting.
