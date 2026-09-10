# 📘 Day 31 Learning Journal — SQL Fundamentals

**Date:** September 10, 2026  
**Day:** 31 of 90  
**Topic:** SQL Fundamentals  
**Status:** ✅ Completed

---

# 🎯 What I Learned Today

Today I started the SQL and database section of my QA Engineering roadmap.

I learned the basic concepts behind relational databases and how SQL can be used by QA Engineers to verify application data.

---

# 🧠 Key Concepts

## SQL

SQL means:

**Structured Query Language**

It is used to communicate with and retrieve data from relational databases.

---

## Database

A database is an organized collection of data used by applications to store and retrieve information.

---

## Table

A table organizes related data into rows and columns.

---

## Row

A row represents one complete record.

For example:

```text
1 | Pedro | pedro@example.com | 30 | Nigeria
Column

A column represents one category of information.

Examples:

id
name
email
age
country
Primary Key

A Primary Key uniquely identifies a record.

Example:

id

In the practice users table, id was the Primary Key.

Foreign Key

A Foreign Key connects a record to a record in another table.

Example:

orders.user_id

can reference:

users.id
💻 SQL Queries Practiced
Retrieve all users
SELECT * FROM users;
Retrieve names and emails
SELECT name, email FROM users;
Find Pedro
SELECT * FROM users
WHERE name = 'Pedro';
Find Nigerian users
SELECT * FROM users
WHERE country = 'Nigeria';
Find user ID 3
SELECT * FROM users
WHERE id = 3;
Retrieve Sarah's email
SELECT email FROM users
WHERE name = 'Sarah';
🧪 QA Testing Application

One of the most important things I learned today is how SQL connects to real QA work.

A user may enter information through a frontend application.

The information then travels through:

Frontend
   ↓
Backend/API
   ↓
Database

A QA Engineer can use SQL to verify that the information was correctly stored in the database.

📝 Practical Scenario

I practiced a registration verification scenario.

A user registers with:

Email: alex@example.com

The QA Engineer can verify whether the email exists in the database using:

SELECT * FROM users
WHERE email = 'alex@example.com';

This helps verify data persistence.

❌ Mistakes I Made

During the assessment, I initially needed clarification on:

The difference between a row and a column.
The meaning of a Foreign Key.
Identifying the correct number of rows and columns.
Retrieving only a specific field instead of the entire record.

After reviewing the concepts, I understood the differences.

📊 Assessment Result

Score: 20/25

Percentage: 80%

Result:

✅ Passed
