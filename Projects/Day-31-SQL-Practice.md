# Day 31 — SQL Fundamentals Practice

**Date:** September 10, 2026  
**Project Type:** SQL / Database Testing Practice  
**QA Roadmap:** Day 31  
**Status:** ✅ Completed

---

# 🎯 Objective

This exercise aimed to practice basic SQL concepts useful for Software QA and database testing.

The practice focused on:

- Understanding database tables
- Identifying rows and columns
- Understanding Primary Keys
- Understanding Foreign Keys
- Writing basic `SELECT` queries
- Filtering records using `WHERE`
- Applying SQL to a QA testing scenario

---

# 🗄️ Practice Database

## Users Table

| id | name | email | age | country |
|---|---|---|---|---|
| 1 | Pedro | pedro@example.com | 30 | Nigeria |
| 2 | John | john@example.com | 25 | USA |
| 3 | Mary | mary@example.com | 28 | UK |
| 4 | David | david@example.com | 35 | Nigeria |
| 5 | Sarah | sarah@example.com | 22 | Canada |

---

# Task 1 — Retrieve All Users

### SQL

```sql
SELECT * FROM users;
Expected Result

The query should return all 5 users and all columns.
```
### QA Purpose

This verifies that the expected records exist in the database.

# Task 2 — Retrieve Names and Emails
SQL
SELECT name, email FROM users;
Expected Result

The query should return only the name and email columns for all users.

QA Purpose

This demonstrates how to retrieve only the required fields instead of the entire record.

# Task 3 — Find Pedro
SQL
SELECT * FROM users
WHERE name = 'Pedro';
Expected Result

The query should return Pedro's complete record.

QA Purpose

This demonstrates filtering a database record using the WHERE clause.

# Task 4 — Find Nigerian Users
SQL
SELECT * FROM users
WHERE country = 'Nigeria';
Expected Result

The query should return:

Pedro
David
QA Purpose

This can be used to verify whether users belonging to a particular country are correctly stored.

# Task 5 — Find User with ID 3
SQL
SELECT * FROM users
WHERE id = 3;
Expected Result

The query should return:

Mary
QA Purpose

This demonstrates retrieving a specific record using its Primary Key.

# Task 6 — Retrieve Sarah's Email
SQL
SELECT email FROM users
WHERE name = 'Sarah';
Expected Result
sarah@example.com
QA Purpose

This demonstrates retrieving a specific field from a specific database record.

# Task 7 — Registration Verification Scenario
Scenario

A user registers on a web application with:

Name: Alex
Email: alex@example.com

The QA Engineer wants to verify whether the email was stored in the database.

SQL
SELECT * FROM users
WHERE email = 'alex@example.com';
Expected Result

If the registration was successful, the database should contain a matching record.

If no record is returned, this may indicate a problem with the registration or data persistence process.

🔑 Primary Key Practice

The Primary Key in the users table is:

id

Reason:

Each user has a unique ID.

Example:

1
2
3
4
5
🔗 Foreign Key Practice

A Foreign Key connects a record in one table to a record in another table.

Example:

users

id
1
2
3
orders

id | user_id
101 | 2

Here:

users.id = 2
orders.user_id = 2

The user_id identifies the user associated with the order.
