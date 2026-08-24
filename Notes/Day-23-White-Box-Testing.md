# Day 23 — White Box Testing

## What is White Box Testing?

White Box Testing is a testing approach where the tester has knowledge of the internal code, structure, or logic of the software and uses that knowledge to design tests.

The focus is on:

> How does the software work internally?

White Box Testing can examine:

- Code structure
- Conditions
- Branches
- Loops
- Statements
- Execution paths

## Key Characteristics

- Requires knowledge of the internal code or logic.
- Focuses on the internal structure of the software.
- Tests different execution paths and decision outcomes.
- Often performed by developers or technically skilled testers.

## White Box Testing Techniques

### Statement Coverage

Statement Coverage checks whether every executable statement in the code has been executed by at least one test.

### Branch Coverage

Branch Coverage checks whether every possible decision outcome, such as TRUE and FALSE outcomes, has been executed by tests.

### Path Testing

Path Testing focuses on testing different possible execution paths through the code.

## Example

Consider the following logic:

```text
IF age >= 18
    Allow access
ELSE
    Deny access
