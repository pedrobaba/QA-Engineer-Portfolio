# Day 09 - Requirement-Based Test Cases

## Project
SauceDemo QA Project

---

## Requirement ID: RQ-001

### Requirement
The system shall allow users to log in using valid credentials.

### Test Case ID
TC-001

### Test Scenario
Verify successful login with valid credentials.

### Preconditions
- User is on the SauceDemo login page.
- User has valid login credentials.

### Test Steps

1. Navigate to https://www.saucedemo.com/
2. Enter a valid username.
3. Enter a valid password.
4. Click the **Login** button.

### Expected Result

- User is successfully logged in.
- User is redirected to the Products page.

### Priority
High

### Status
Not Executed

---

## Requirement ID: RQ-002

### Requirement
The system shall display an error message for invalid login credentials.

### Test Case ID
TC-002

### Test Scenario
Verify login with invalid credentials.

### Preconditions

User is on the login page.

### Test Steps

1. Enter an invalid username.
2. Enter an invalid password.
3. Click **Login**.

### Expected Result

The application should display an appropriate error message and prevent login.

### Priority

High

### Status

Not Executed

---

## Requirement ID: RQ-003

### Requirement

The system shall allow users to add products to the shopping cart.

### Test Case ID

TC-003

### Test Scenario

Verify adding a product to the shopping cart.

### Preconditions

User is logged in.

### Test Steps

1. Log in with valid credentials.
2. Select any product.
3. Click **Add to Cart**.

### Expected Result

- The selected product is added to the cart.
- The shopping cart badge updates with the correct quantity.

### Priority

High

### Status

Not Executed

---

## Requirement ID: RQ-004

### Requirement

The system shall allow users to remove products from the shopping cart.

### Test Case ID

TC-004

### Test Scenario

Verify removing a product from the shopping cart.

### Preconditions

- User is logged in.
- At least one product has been added to the cart.

### Test Steps

1. Navigate to the shopping cart.
2. Click the **Remove** button for a product.

### Expected Result

- The selected product is removed from the cart.
- The shopping cart badge updates correctly.

### Priority

Medium

### Status

Not Executed

---

## Requirement ID: RQ-005

### Requirement

The system shall allow users to complete the checkout process.

### Test Case ID

TC-005

### Test Scenario

Verify successful checkout with valid information.

### Preconditions

- User is logged in.
- At least one product is in the cart.

### Test Steps

1. Open the shopping cart.
2. Click **Checkout**.
3. Enter valid shipping information.
4. Click **Continue**.
5. Click **Finish**.

### Expected Result

- Checkout completes successfully.
- A confirmation message is displayed.

### Priority

High

### Status

Not Executed
