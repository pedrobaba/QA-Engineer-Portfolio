# SauceDemo — Test Cases

## Test Case 1: Valid Login

| Field | Details |
|---|---|
| Test Case ID | TC-001 |
| Scenario ID | TS-001 |
| Title | Verify login with valid credentials |
| Priority | High |
| Preconditions | User is on the SauceDemo login page |
| Test Data | Username: `standard_user` Password: `secret_sauce` |
| Status | Not Run |

**Steps**
1. Open the SauceDemo login page.
2. Enter `standard_user` in the username field.
3. Enter `secret_sauce` in the password field.
4. Click the Login button.

**Expected Result**
- The user should log in successfully.
- The inventory page should be displayed.
- No error message should appear.

---

## Test Case 2: Invalid Username

| Field | Details |
|---|---|
| Test Case ID | TC-002 |
| Scenario ID | TS-002 |
| Title | Verify login with an invalid username |
| Priority | High |
| Preconditions | User is on the SauceDemo login page |
| Test Data | Username: `invalid_user` Password: `secret_sauce` |
| Status | Not Run |

**Steps**
1. Open the login page.
2. Enter `invalid_user` as the username.
3. Enter `secret_sauce` as the password.
4. Click Login.

**Expected Result**
- Login should be rejected.
- The user should remain on the login page.
- An appropriate authentication error should be displayed.

---

## Test Case 3: Invalid Password

| Field | Details |
|---|---|
| Test Case ID | TC-003 |
| Scenario ID | TS-003 |
| Title | Verify login with an invalid password |
| Priority | High |
| Preconditions | User is on the SauceDemo login page |
| Test Data | Username: `standard_user` Password: `wrong_password` |
| Status | Not Run |

**Steps**
1. Open the login page.
2. Enter `standard_user`.
3. Enter `wrong_password`.
4. Click Login.

**Expected Result**
- Login should be rejected.
- The user should remain on the login page.
- An appropriate authentication error should be displayed.

---

## Test Case 4: Empty Login Fields

| Field | Details |
|---|---|
| Test Case ID | TC-004 |
| Scenario ID | TS-004 |
| Title | Verify login with empty username and password |
| Priority | High |
| Preconditions | User is on the SauceDemo login page |
| Test Data | Username: Empty; Password: Empty |
| Status | Not Run |

**Steps**
1. Open the login page.
2. Leave the username field empty.
3. Leave the password field empty.
4. Click Login.

**Expected Result**
- Login should be rejected.
- An appropriate required-field validation message should appear.
- The inventory page should not be displayed.

---

## Test Case 5: Locked-Out User Login

| Field | Details |
|---|---|
| Test Case ID | TC-005 |
| Scenario ID | TS-005 |
| Title | Verify login using a locked-out account |
| Priority | High |
| Preconditions | User is on the SauceDemo login page |
| Test Data | Username: `locked_out_user` Password: `secret_sauce` |
| Status | Not Run |

**Steps**
1. Open the login page.
2. Enter `locked_out_user`.
3. Enter `secret_sauce`.
4. Click Login.

**Expected Result**
- Access should be denied.
- The user should remain on the login page.
- A message explaining that the user has been locked out should appear.
