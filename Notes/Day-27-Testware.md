# Day 27 — ISTQB Foundation: Testware

**Date:** September 1, 2026  
**Day:** 27 / 90  
**Topic:** Testware and Test Work Products

---

## 🎯 Learning Objectives

Today I learned about testware and the different work products created and used throughout the software testing process.

I learned how to:

- Define testware.
- Understand test plans.
- Understand test scenarios.
- Identify test conditions.
- Create test cases.
- Understand test procedures.
- Prepare test data.
- Organize test suites.
- Understand test logs.
- Create defect reports.
- Understand test summary reports.

---

# 🧪 What Is Testware?

Testware refers to the work products created and used during the software testing process.

Examples include:

- Test Plans
- Test Scenarios
- Test Conditions
- Test Cases
- Test Procedures
- Test Data
- Test Suites
- Test Logs
- Defect Reports
- Test Summary Reports

Testware helps QA teams plan, execute, document, and report testing activities.

---

# 📋 Test Plan

A Test Plan describes how testing will be performed for a project or test level.

It may contain:

- Testing scope
- Testing objectives
- Testing approach
- Resources
- Schedule
- Risks
- Entry criteria
- Exit criteria
- Test environment
- Deliverables

---

# 🔎 Test Scenario

A Test Scenario is a high-level description of a functionality or situation that needs to be tested.

Example:

> Verify that a logged-in user can complete the checkout process.

A scenario does not necessarily contain detailed execution steps.

---

# 🔍 Test Condition

A Test Condition is an aspect of the system that can be tested.

Example:

For a checkout feature:

- Valid shipping information
- Missing first name
- Missing last name
- Missing postal code
- Valid checkout
- Empty cart checkout attempt

---

# 🧪 Test Case

A Test Case contains the information required to verify a particular test condition.

A test case can include:

- Test Case ID
- Title
- Preconditions
- Test Data
- Steps
- Expected Result
- Actual Result
- Status

### Example

```text
Test Case ID: TC-CHECKOUT-001

Title:
Complete checkout with valid information

Precondition:
User is logged in and has a product in the cart.

Test Data:
First Name: Pedro
Last Name: QA
Postal Code: 230001

Steps:
1. Open the cart.
2. Click Checkout.
3. Enter first name.
4. Enter last name.
5. Enter postal code.
6. Click Continue.
7. Review the order.
8. Click Finish.

Expected Result:
The checkout should be completed successfully and an order confirmation should be displayed.
```
# 📝 Test Procedure

A Test Procedure describes the sequence of actions required to perform a test.

### Example: 
```
1. Open the SauceDemo cart.
2. Click Checkout.
3. Enter valid customer information.
4. Click Continue.
5. Review the order.
6. Click Finish.
```
### Difference
```
Test Case
→ What are we testing?
→ What should happen?

Test Procedure
→ What steps do we perform?
```
# 🗃️ Test Data

Test Data is the information used as input during testing.

### Examples:
```
Username
Password
Email
First Name
Last Name
Postal Code
Product ID
Payment Information
```
### Test data can be:
- Valid
- Invalid
- Boundary values
- Empty
- Duplicate
- Special characters

# 📚 Test Suite

A Test Suite is a collection of related test cases grouped together for easier organization and execution.

### Example:
```
CHECKOUT TEST SUITE

TC-001 → Complete checkout with valid information
TC-002 → Checkout with missing first name
TC-003 → Checkout with missing last name
TC-004 → Checkout with missing postal code
TC-005 → Cancel checkout
```
# 📝 Test Log

A Test Log records information about test execution.

### Example:
```
Test Case: TC-001
Environment: Chrome / Windows
Result: PASS

### For a failed test:
Test Case: TC-005
Result: FAIL
Evidence: Screenshot attached
Bug ID: BUG-004
```
# 🐞 Defect Report

A Defect Report documents a problem discovered during testing.

A defect report can contain:

Bug ID
Title
Environment
Preconditions
Steps to reproduce
Expected Result
Actual Result
Severity
Priority
Evidence

### Example: 
```
Bug ID: BUG-001

Title:
Checkout button causes application to crash

Steps:
1. Login
2. Add a product to the cart
3. Open the cart
4. Click Checkout

Expected Result:
Checkout page should open.

Actual Result:
The application crashes and reloads.

Severity:
High
```
# 📊 Test Summary Report

A Test Summary Report provides an overall summary of testing activities and results.

It may include:

- Testing period
- Scope
- Total test cases
- Passed tests
- Failed tests
- Blocked tests
- Defects
- Risks
- Recommendations
- Testing conclusion

### Example:
```
Testing Period: 2 hours

Total Test Cases: 50
Passed: 44
Failed: 4
Blocked: 2

Critical Bugs: 1
Major Bugs: 2
Minor Bugs: 3

Recommendation:
Resolve critical defects before release.
```
# 🔄 Testware Relationship

The different test work products are connected throughout the testing process.

Requirement
```
Requirement
     ↓
Test Scenario
     ↓
Test Condition
     ↓
Test Case
     ↓
Test Data
     ↓
Test Procedure
     ↓
Test Execution
     ↓
Test Log
     ↓
Defect Report
     ↓
Test Summary Report
```
# Important Difference

| Term                | Meaning                                       |
| ------------------- | --------------------------------------------- |
| Test Scenario       | High-level functionality or situation to test |
| Test Condition      | Specific aspect that can be tested            |
| Test Case           | Detailed specification of a test              |
| Test Procedure      | Steps used to execute a test                  |
| Test Data           | Data used during testing                      |
| Test Suite          | Collection of related test cases              |
| Test Log            | Record of test execution                      |
| Defect Report       | Documentation of a discovered defect          |
| Test Summary Report | Overall testing results                       |


