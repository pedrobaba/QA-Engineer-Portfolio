# Day 6 – Test Levels

**Date:** July 2026  
**Topic:** Test Levels in Software Testing  
**Estimated Study Time:** 4 Hours  
**Status:** ✅ Completed

---

# Objective

The objective of today's lesson was to understand the different levels of software testing and the role each level plays in ensuring software quality.

Test levels help teams verify that software works correctly from individual components to the complete application before it reaches end users.

---

# What are Test Levels?

Test Levels are different stages of testing performed throughout the Software Development Life Cycle (SDLC). Each level has a specific purpose and focuses on different parts of the application.

The four primary test levels are:

1. Unit Testing
2. Integration Testing
3. System Testing
4. User Acceptance Testing (UAT)

---

# 1. Unit Testing

## Definition

Unit Testing is the process of testing individual units or components of an application in isolation to ensure they work correctly.

A "unit" is usually the smallest testable part of a program, such as a function or method.

## Performed By

- Software Developers

## Example

A developer writes a function that calculates the total price of products in a shopping cart.

Unit Testing verifies that the function returns the correct total for different inputs.

## Advantages

- Finds bugs early.
- Makes debugging easier.
- Improves code quality.
- Reduces development costs.

---

# 2. Integration Testing

## Definition

Integration Testing verifies that different modules or components of an application work correctly together.

Instead of testing individual functions, Integration Testing focuses on how modules communicate.

## Performed By

- Developers
- QA Engineers

## Example

After a user logs in successfully:

- The Login module communicates with the Database.
- User information is retrieved correctly.
- The Products page is displayed.

Integration Testing ensures these modules interact correctly.

## Advantages

- Detects interface issues.
- Verifies communication between modules.
- Identifies integration defects early.

---

# 3. System Testing

## Definition

System Testing evaluates the complete and integrated application to ensure it meets functional and non-functional requirements.

The entire application is tested as a whole.

## Performed By

- QA Engineers

## Example

Testing the entire SauceDemo application:

- Login
- Product Listing
- Add to Cart
- Checkout
- Logout

The goal is to verify that all features work together correctly.

## Advantages

- Validates complete system functionality.
- Simulates real user interactions.
- Identifies defects before release.

---

# 4. User Acceptance Testing (UAT)

## Definition

User Acceptance Testing (UAT) is the final phase of testing where business users or clients verify that the application meets business requirements.

The objective is to confirm that the software is ready for production.

## Performed By

- Customers
- Business Users
- Product Owners

## Example

An online store owner verifies that:

- Customers can place orders.
- Payments are processed successfully.
- Order confirmations are received.

If everything works as expected, the application is approved for release.

## Advantages

- Confirms business requirements are met.
- Builds stakeholder confidence.
- Reduces the risk of releasing unsuitable software.

---

# Comparison of Test Levels

| Test Level | Purpose | Performed By |
|------------|---------|--------------|
| Unit Testing | Test individual functions or components | Developers |
| Integration Testing | Verify interaction between modules | Developers & QA Engineers |
| System Testing | Test the complete application | QA Engineers |
| User Acceptance Testing (UAT) | Validate business requirements before release | Customers / Business Users |

---

# Key Differences

| Unit | Integration | System | UAT |
|------|-------------|--------|-----|
| Tests individual components | Tests connected modules | Tests the entire application | Tests business requirements |
| Earliest testing level | After Unit Testing | After Integration Testing | Final testing phase |
| Mostly automated | Manual or Automated | Mostly Manual | Mostly Manual |

---

# Key Takeaways

- Testing begins with the smallest units of code and progresses to the complete application.
- Each test level has a specific purpose.
- Unit Testing focuses on individual components.
- Integration Testing verifies communication between modules.
- System Testing validates the complete application.
- UAT ensures the software satisfies customer expectations before deployment.

---

# Summary

Understanding Test Levels helps QA Engineers determine **what should be tested**, **when testing should occur**, and **who is responsible for each stage**.

Each level contributes to delivering reliable, high-quality software by identifying defects at different stages of development.
