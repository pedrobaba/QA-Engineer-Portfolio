# Day 65 — Learning Journal

## Topic: Test Coverage & Traceability Practice

Today, I practiced applying test coverage and traceability concepts to QA scenarios.

I learned how to review an RTM, identify requirements without linked test cases, recognize partial coverage, and calculate different testing metrics.

### What I Practiced

- Calculating requirement-to-test linkage coverage.
- Identifying requirements with missing test cases.
- Recognizing partial requirement coverage.
- Understanding forward and backward traceability.
- Calculating test execution coverage.
- Calculating test pass rates.
- Using coverage findings to recommend additional testing.

### What I Learned

One important lesson was that having a test case linked to a requirement does not automatically mean the requirement is fully covered.

For example, a login requirement that supports both email and phone-number authentication is only partially covered if the QA team tests email login alone.

I also learned the difference between execution coverage and pass rate. A failed test case still counts as executed, but it does not count as a passed test.

### Assessment Performance

- Valid questions: 9
- Correct answers: 9
- Incorrect answers: 0
- Score on valid questions: 100%

I initially confused forward traceability with test execution tracking. I reviewed the distinction:

- Forward traceability: Requirement → Test Case.
- Backward traceability: Test Case → Requirement.

The final assessment also contained an ambiguous coverage question, which I excluded from the valid-question score rather than treating an unsupported answer as correct.

### Challenges

My main challenge was distinguishing requirement linkage coverage from complete requirement coverage.

I now understand that a requirement can have a linked test case while still having untested conditions or behaviors.

### Key Takeaway

Coverage percentages are useful, but QA engineers must understand what each metric measures and whether the test cases actually verify the complete requirement.

### Next Learning Goal

Continue improving my ability to analyze test coverage, maintain traceability, and use testing metrics to communicate quality risks clearly.
