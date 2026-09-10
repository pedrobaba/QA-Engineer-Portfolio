# Day 31 — SQL Fundamentals

**Date:** September 10, 2026  
**Roadmap:** 90-Day QA Engineering Roadmap  
**Topic:** SQL Fundamentals  
**Status:** ✅ Completed

---

## 🎯 Learning Objectives

By the end of Day 31, I learned:

- What SQL is
- What a database is
- What a database table is
- What rows and columns represent
- What a Primary Key is
- What a Foreign Key is
- Basic SQL `SELECT` queries
- Using `WHERE` to filter database records
- Why SQL is important for QA Engineers
- How QA Engineers can verify frontend data against backend database data

---

# 1. What is SQL?

SQL stands for:

**Structured Query Language**

SQL is a language used to communicate with and manage data stored in relational databases.

QA Engineers can use SQL to:

- Retrieve data
- Verify stored data
- Search for specific records
- Check whether application actions correctly update the database
- Validate frontend data against backend data

---

# 2. What is a Database?

A database is an organized collection of data stored electronically.

For example, an application may store:

- User information
- Orders
- Products
- Payments
- Transactions
- Account information

A database allows applications to store and retrieve this information efficiently.

---

# 3. What is a Table?

A table is a structured way of organizing data inside a relational database.

For example:

| id | name | email | age | country |
|---|---|---|---|---|
| 1 | Pedro | pedro@example.com | 30 | Nigeria |
| 2 | John | john@example.com | 25 | USA |
| 3 | Mary | mary@example.com | 28 | UK |
| 4 | David | david@example.com | 35 | Nigeria |
| 5 | Sarah | sarah@example.com | 22 | Canada |

The table is called:

`users`

---

# 4. Rows

A row represents one complete record in a table.

Example:

```text
1 | Pedro | pedro@example.com | 30 | Nigeria
```
This entire line represents one user record.

Therefore, the users table contains 5 rows.

# 5. Columns

A column represents one type or category of information.

The columns in the users table are:

id
name
email
age
country

Therefore, the table contains 5 columns.

A simple way to remember:

Row = one complete record
Column = one type/category of information

# 6. Primary Key

A Primary Key uniquely identifies each record in a table.

In the users table:

id

is the Primary Key.

Example:

id
1
2
3
4
5

Each user has a unique ID.

Remember:

Primary Key = "Who am I?"

# 7. Foreign Key

A Foreign Key is a column used to connect a record in one table to a record in another table.

For example:

users
----------------
id
1
2
3

and:

orders
----------------
id | user_id
101 | 2

The user_id in the orders table can reference users.id.

This tells us that Order 101 belongs to the user whose ID is 2.

Remember:

Foreign Key = "Who am I connected to?"

# 8. Basic SELECT Statement

The SELECT statement is used to retrieve data from a database.

Retrieve all users
SELECT * FROM users;

The * means all columns.

# 9. Selecting Specific Columns

To retrieve only specific information:

SELECT name, email FROM users;

This returns only:

name
email
# 10. Using WHERE

The WHERE clause filters records based on a condition.

Find Pedro
SELECT * FROM users
WHERE name = 'Pedro';
Find users from Nigeria
SELECT * FROM users
WHERE country = 'Nigeria';
Find the user with ID 3
SELECT * FROM users
WHERE id = 3;
# 11. Selecting Specific Data

If I only need Sarah's email address:

SELECT email FROM users
WHERE name = 'Sarah';

This is better than selecting the entire record because it retrieves only the required field.

# 12. QA Testing Scenario

Imagine a registration page allows a user to register with:

Name: Alex
Email: alex@example.com

After registration, the QA Engineer can verify whether the email was actually stored in the database.

Example:

SELECT * FROM users
WHERE email = 'alex@example.com';

If the record exists, the QA Engineer can confirm that the registration data reached the database.

# 13. Why QA Engineers Need SQL

SQL is useful to QA Engineers because it allows them to verify backend data.

For example:

User enters data
        ↓
Frontend
        ↓
Backend/API
        ↓
Database

A QA Engineer can verify that the data entered through the frontend was correctly stored in the database.

SQL can help identify:

Missing records
Incorrect data
Duplicate data
Incorrect updates
Incorrect relationships between records
Data persistence problems

# 14. Key SQL Concepts Learned
Concept	Meaning
SQL	Structured Query Language
Database	Organized collection of data
Table	Structured collection of records
Row	One complete record
Column	One category/type of information
Primary Key	Unique identifier for a record
Foreign Key	Connects records between tables
SELECT	Retrieves data
WHERE	Filters data

# 15. Day 31 Key Takeaways

The most important concepts I learned today are:

SQL means Structured Query Language.
Databases store application data.
Tables organize database data.
Rows represent complete records.
Columns represent categories of information.
Primary Keys uniquely identify records.
Foreign Keys connect records between tables.
SELECT retrieves data.
WHERE filters data.

QA Engineers can use SQL to verify backend data.
🧠 Interview Question
Why should a QA Engineer learn SQL?

Answer:

A QA Engineer should learn SQL because it allows them to verify whether data entered or modified through an application is correctly stored and updated in the backend database. SQL also helps QA Engineers identify data-related defects that may not be visible through the user interface.
