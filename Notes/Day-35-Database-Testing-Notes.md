# Database Testing Notes

## 📚 Day 35 — Database Testing

### What is Database Testing?

Database testing is the process of verifying that data stored in a database is **accurate, complete, consistent, secure, and correctly handled by an application**.

As a QA Engineer, I can use SQL to check whether the application is storing and retrieving data correctly.

For example:

A user creates an account on a website.

The application may display:

```text
Name: John
Email: john@example.com
Age: 30
Country: Nigeria
```

A QA Engineer can query the database to verify that the information was actually stored correctly.

```sql
SELECT *
FROM users
WHERE email = 'john@example.com';
```

---

# 🧪 Why Database Testing Matters in QA

A test can pass on the frontend while the database contains incorrect information.

For example:

1. User changes their email.
2. Application displays the new email.
3. Database still contains the old email.

The UI may appear to work correctly, but the data is incorrect.

Database testing helps QA identify this type of defect.

---

# 🔍 What QA Engineers Check in a Database

When testing a database, I can verify:

* Data accuracy
* Data completeness
* Data consistency
* Data integrity
* Correct data insertion
* Correct data updates
* Correct data deletion
* Relationships between tables
* Missing or unexpected values
* Duplicate records
* Invalid data
* Application-to-database behavior

---

# 1. Data Accuracy

Data accuracy means the information stored in the database matches what the application is expected to store.

Example:

If a user enters:

```text
Age: 30
Country: Nigeria
```

I can verify the stored record:

```sql
SELECT age, country
FROM users
WHERE email = 'john@example.com';
```

I would check that the returned values match the expected values.

---

# 2. Data Completeness

Data completeness means required information has not been lost or left empty.

For example, if email is required:

```sql
SELECT *
FROM users
WHERE email IS NULL;
```

If the query returns records, I would investigate whether those users are allowed to have an empty email.

---

# 3. Data Consistency

Data consistency means the same information should remain consistent across related parts of the system.

For example:

A user's country might appear in:

* User profile
* Orders
* Customer information

If one part says `Nigeria` while another incorrectly says `Canada`, this may indicate a data consistency problem.

---

# 4. Data Integrity

Data integrity means data remains correct and reliable throughout its lifecycle.

Examples include:

* Correct data types
* Required fields
* Valid relationships
* No unexpected duplicates
* Correct updates
* Correct deletions

Database constraints can help maintain data integrity.

---

# 🧱 Common Database Constraints

Some common constraints include:

| Constraint    | Purpose                               |
| ------------- | ------------------------------------- |
| `PRIMARY KEY` | Uniquely identifies a record          |
| `FOREIGN KEY` | Creates a relationship between tables |
| `NOT NULL`    | Prevents missing values               |
| `UNIQUE`      | Prevents duplicate values             |
| `CHECK`       | Restricts values based on a condition |
| `DEFAULT`     | Provides a default value              |

---

# 🔑 Primary Key

A primary key uniquely identifies each record in a table.

Example:

```text
users

id | name | email
1  | John | john@example.com
2  | Mary | mary@example.com
```

The `id` can be the primary key.

A primary key should uniquely identify each row.

---

# 🔗 Foreign Key

A foreign key connects one table to another.

For example:

```text
users
-----
id
name

orders
------
id
user_id
amount
```

The `user_id` in the `orders` table can reference the `id` in the `users` table.

This allows related data to be connected.

---

# 🚫 NOT NULL

`NOT NULL` means a column must contain a value.

For example:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(255) NOT NULL
);
```

The database should not allow a user record without an email.

As a QA Engineer, I can test whether required fields are actually being enforced.

---

# 🔄 CRUD Operations

CRUD represents four basic database operations:

| Operation | Meaning       | SQL      |
| --------- | ------------- | -------- |
| Create    | Add data      | `INSERT` |
| Read      | Retrieve data | `SELECT` |
| Update    | Modify data   | `UPDATE` |
| Delete    | Remove data   | `DELETE` |

---

## CREATE — INSERT

Example:

```sql
INSERT INTO users (name, email, age, country)
VALUES ('John', 'john@example.com', 30, 'Nigeria');
```

After inserting the record, I can verify it:

```sql
SELECT *
FROM users
WHERE email = 'john@example.com';
```

---

## READ — SELECT

`SELECT` retrieves information from the database.

```sql
SELECT *
FROM users;
```

Or I can retrieve specific columns:

```sql
SELECT name, email
FROM users;
```

---

## UPDATE

`UPDATE` changes existing data.

Example:

```sql
UPDATE users
SET age = 31
WHERE email = 'john@example.com';
```

I can then verify the change:

```sql
SELECT *
FROM users
WHERE email = 'john@example.com';
```

---

## DELETE

`DELETE` removes records.

Example:

```sql
DELETE FROM users
WHERE email = 'john@example.com';
```

I can verify that the record no longer exists:

```sql
SELECT *
FROM users
WHERE email = 'john@example.com';
```

If the query returns no record, the deletion may have worked as expected.

---

# 🔎 Duplicate Data

QA may need to identify unexpected duplicate records.

For example:

```sql
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

This can help identify email addresses appearing more than once.

If email addresses are supposed to be unique, duplicate results may indicate a defect or data-integrity issue.

---

# 🧮 COUNT()

`COUNT()` can be used to determine how many records exist.

```sql
SELECT COUNT(*)
FROM users;
```

This can be useful when checking whether the expected number of records were created.

For example:

If 10 users are created through the application, I can query the database to check whether the expected records exist.

---

# 📊 GROUP BY

`GROUP BY` groups records that have the same value.

Example:

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country;
```

This can show how many users belong to each country.

Example result:

```text
Nigeria   | 15
UK        | 8
Canada    | 5
```

---

# 🔍 HAVING

`HAVING` filters grouped results.

Example:

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country
HAVING COUNT(*) > 5;
```

This returns countries with more than five users.

### Important Difference

`WHERE` filters individual rows **before grouping**.

`HAVING` filters grouped results **after grouping**.

---

# 🔄 Database Validation Workflow for QA

A simple database validation process can be:

### Step 1 — Perform an action in the application

Example:

Create a new user.

### Step 2 — Identify the expected database result

Expected:

```text
A new user record should be created.
```

### Step 3 — Query the database

```sql
SELECT *
FROM users
WHERE email = 'john@example.com';
```

### Step 4 — Compare actual vs expected

Check:

* Name
* Email
* Age
* Country
* Other relevant fields

### Step 5 — Document discrepancies

If the database contains incorrect information, record the issue as a potential defect.

---

# 🐛 Example QA Scenario

### Test Scenario

Verify that updating a user's age in the application updates the database correctly.

### Expected Result

The database should contain the new age.

### SQL Validation

```sql
SELECT name, email, age
FROM users
WHERE email = 'john@example.com';
```

### QA Comparison

```text
Expected age: 31
Actual database age: 30
```

This would indicate that although the application may have displayed the update, the database did not contain the expected value.

---

# ⚠️ Important QA Considerations

When working with real databases, I should be careful with destructive queries.

For example:

```sql
DELETE FROM users;
```

could remove all users.

Similarly:

```sql
UPDATE users
SET age = 30;
```

could update every user.

A `WHERE` clause should normally be used when modifying specific records.

Example:

```sql
UPDATE users
SET age = 31
WHERE email = 'john@example.com';
```

---

# 🧠 Key Takeaways

* Database testing verifies the correctness and integrity of stored data.
* QA Engineers can use SQL to validate backend data.
* Frontend behavior does not always guarantee correct database behavior.
* `SELECT` can be used to investigate and validate records.
* `INSERT` creates records.
* `UPDATE` modifies records.
* `DELETE` removes records.
* `PRIMARY KEY` uniquely identifies records.
* `FOREIGN KEY` connects related tables.
* `NOT NULL` prevents missing values.
* `UNIQUE` helps prevent duplicates.
* `COUNT()` can help verify record quantities.
* `GROUP BY` groups records.
* `HAVING` filters grouped results.
* Careless `UPDATE` and `DELETE` statements can affect many records.
* Database testing can help identify defects that are not visible from the UI alone.

---

# 🔗 QA Connection

Database testing connects directly with my goal of becoming a QA Engineer.

Instead of only asking:

> "Does the application display the correct result?"

I should also learn to ask:

> "Was the correct information actually stored, updated, retrieved, and maintained in the database?"

This is an important step toward backend and database testing.
