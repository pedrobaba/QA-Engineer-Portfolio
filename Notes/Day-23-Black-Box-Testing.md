# Day 23 — Black Box Testing

## What is Black Box Testing?

Black Box Testing is a testing approach where the tester verifies the functionality and expected behaviour of a software component or application without needing knowledge of its internal source code or implementation.

The focus is on:

> What does the software do?

The tester provides inputs, performs actions, and verifies whether the actual result matches the expected result.

## Key Characteristics

- Knowledge of source code is not required.
- Focuses on functionality and behaviour.
- Tests are designed from requirements and specifications.
- Actual results are compared with expected results.
- Commonly used by Manual QA Testers.

## Examples

Examples of Black Box Testing include:

- Testing login functionality.
- Testing registration forms.
- Testing a shopping cart.
- Testing checkout functionality.
- Testing API requests and responses.
- Testing error messages and validation.

## Black Box Testing Techniques

### Equivalence Partitioning

Inputs are divided into groups that are expected to behave similarly.

### Boundary Value Analysis

Tests are designed around the boundaries of valid and invalid input ranges.

### Decision Table Testing

Tests are created based on combinations of conditions and their expected actions or results.

### State Transition Testing

Tests are designed based on changes between different states of a system.

## Example

Requirement:

> A registered user should be able to log in using a valid username and password.

Possible tests include:

1. Valid username + valid password.
2. Invalid username + valid password.
3. Valid username + invalid password.
4. Invalid username + invalid password.
5. Empty username.
6. Empty password.

The tester does not need to know how the login code works internally.

## Key Takeaway

Black Box Testing focuses on testing what the software does without requiring knowledge of how it works internally.
