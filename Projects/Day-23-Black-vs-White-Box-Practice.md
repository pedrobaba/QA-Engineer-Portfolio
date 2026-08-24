
# Day 23 — Black Box vs White Box Testing Practice

## Task 1 — Multiple Choice

1. Black Box Testing mainly focuses on application functionality and behaviour. **Correct Answer: C**
2. White Box Testing requires knowledge of internal code or logic. **Correct Answer: A**
3. Boundary Value Analysis is a Black Box Testing technique. **Correct Answer: C**
4. Branch Coverage is a White Box Testing technique. **Correct Answer: D**
5. Testing an invalid password without looking at the code is Black Box Testing. **Correct Answer: B**
6. Testing TRUE and FALSE outcomes of an if statement is Branch Coverage. **Correct Answer: C**

---

## Task 2 — Classification

| Scenario | Testing Approach |
|---|---|
| Testing login with valid and invalid credentials without seeing source code | Black Box |
| Creating tests for every decision branch in a function | White Box |
| Testing whether a user can add a product to the cart based on requirements | Black Box |
| Examining a loop and testing whether it executes correctly | White Box |
| Using Boundary Value Analysis to test an age field | Black Box |
| Checking whether every executable statement has been tested | White Box |

---

## Task 3 — SauceDemo Practice

| Activity | Testing Approach |
|---|---|
| Testing valid credentials and access to the inventory page | Black Box |
| Examining login source code for branch coverage | White Box |
| Testing product sorting based on expected behaviour | Black Box |
| Testing execution paths inside checkout calculation code | White Box |
| Using Equivalence Partitioning for a discount field | Black Box |
| Checking statement execution in cart calculation code | White Box |

---

## Task 4 — QA Thinking

### Requirement

> A registered user should be able to log in using a valid username and password.

### 1. Black Box Approach

The feature can be tested using a Black Box Testing technique such as Decision Table Testing.

The tester focuses on different combinations of usernames and passwords and verifies whether the actual result matches the expected result.

### 2. Is Source Code Required?

No. Source code is not required because Black Box Testing focuses on expected behaviour and results rather than the internal implementation.

### 3. Test Scenarios

1. Valid username and valid password.
2. Invalid username and valid password.
3. Valid username and invalid password.
4. Invalid username and invalid password.

### 4. White Box Testing

If access to the internal login logic is available, White Box Testing techniques such as Branch Coverage can be used to ensure all decision outcomes are tested.

Statement Coverage can also be used to verify that every executable statement is executed by at least one test.

---

## Key Learning

Black Box Testing focuses on what the software does.

White Box Testing focuses on how the software works internally.

Both approaches contribute to software quality and can help identify different types of defects.
