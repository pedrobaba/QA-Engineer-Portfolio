# SQL Filtering Notes

## Day 32 — SQL WHERE Clause & Filtering

### 📅 Day

Day 32

### 🎯 Topic

SQL Filtering — `WHERE`, comparison operators, `NULL`, `IN`, `BETWEEN`, `LIKE`, and `ORDER BY`

---

## 1. What is SQL Filtering?

SQL filtering means asking the database to return only the records that match a specific condition.

For example, instead of getting every user:

```sql
SELECT * FROM users;
```

We can ask for only users older than 28:

```sql
SELECT *
FROM users
WHERE age > 28;
```

The `WHERE` clause is used to filter records.

---

# 2. The WHERE Clause

### Syntax

```sql
SELECT column_name
FROM table_name
WHERE condition;
```

Example:

```sql
SELECT *
FROM users
WHERE age > 28;
```

This means:

> Get all users whose age is greater than 28.

### QA relevance

As a QA Engineer, `WHERE` can help me find specific records when validating application data.

For example:

* Find a specific user
* Find users with missing information
* Find users from a particular country
* Find orders above a certain amount
* Find records that match a test condition

---

# 3. Comparison Operators

SQL provides operators that allow us to compare values.

| Operator | Meaning                  |
| -------- | ------------------------ |
| `=`      | Equal to                 |
| `<>`     | Not equal to             |
| `>`      | Greater than             |
| `<`      | Less than                |
| `>=`     | Greater than or equal to |
| `<=`     | Less than or equal to    |

### Examples

```sql
SELECT *
FROM users
WHERE age = 30;
```

Find users exactly 30 years old.

```sql
SELECT *
FROM users
WHERE age > 28;
```

Find users older than 28.

```sql
SELECT *
FROM users
WHERE age >= 30;
```

Find users who are 30 or older.

```sql
SELECT *
FROM users
WHERE age < 18;
```

Find users younger than 18.

```sql
SELECT *
FROM users
WHERE country <> 'Nigeria';
```

Find users whose country is not Nigeria.

---

# 4. Using AND

`AND` allows me to combine multiple conditions.

Both conditions must be true.

Example:

```sql
SELECT *
FROM users
WHERE country = 'Nigeria'
AND age >= 30;
```

This means:

> Find users who are from Nigeria AND are at least 30 years old.

Another example:

```sql
SELECT *
FROM users
WHERE age < 18
AND email IS NOT NULL;
```

This means:

> Find users younger than 18 who also have an email address.

---

# 5. NULL Values

`NULL` means that a value is missing or unknown.

It is important to understand that:

```sql
email = NULL
```

is not the correct way to check for NULL.

Instead, use:

```sql
IS NULL
```

or:

```sql
IS NOT NULL
```

---

## IS NULL

Used to find records where a value is missing.

```sql
SELECT *
FROM users
WHERE email IS NULL;
```

Meaning:

> Find users who do not have an email.

---

## IS NOT NULL

Used to find records where a value exists.

```sql
SELECT *
FROM users
WHERE email IS NOT NULL;
```

Meaning:

> Find users who have an email.

### QA relevance

This is useful when checking whether required fields were correctly stored in the database.

For example:

If email is required during registration, I can check:

```sql
SELECT *
FROM users
WHERE email IS NULL;
```

If records are returned, I may have discovered a data validation issue.

---

# 6. IN

`IN` is used when I want to match a value against several possible values.

Instead of writing:

```sql
SELECT *
FROM users
WHERE country = 'Nigeria'
OR country = 'UK'
OR country = 'Canada';
```

I can write:

```sql
SELECT *
FROM users
WHERE country IN ('Nigeria', 'UK', 'Canada');
```

This is shorter and easier to read.

Meaning:

> Find users from Nigeria, UK, or Canada.

---

# 7. NOT IN

`NOT IN` does the opposite of `IN`.

Example:

```sql
SELECT *
FROM users
WHERE country NOT IN ('Nigeria', 'Canada');
```

Meaning:

> Find users who are not from Nigeria or Canada.

---

# 8. BETWEEN

`BETWEEN` is used to find values within a range.

Example:

```sql
SELECT *
FROM users
WHERE age BETWEEN 22 AND 30;
```

Meaning:

> Find users whose age is between 22 and 30.

### Important

`BETWEEN` includes both starting and ending values.

So:

```sql
BETWEEN 22 AND 30
```

includes:

* 22
* 23
* 24
* ...
* 30

---

# 9. LIKE

`LIKE` is used for pattern matching.

It is useful when I do not want an exact match but want to find text containing a particular pattern.

Example:

```sql
SELECT *
FROM users
WHERE email LIKE '%@%';
```

This searches for emails containing `@`.

---

## The `%` Wildcard

`%` means:

> Any number of characters.

For example:

```sql
LIKE '%@%'
```

means:

> Anything before `@` and anything after `@`.

Another example:

```sql
SELECT *
FROM users
WHERE country LIKE 'N%';
```

This finds countries beginning with `N`.

---

# 10. ORDER BY

`ORDER BY` is used to sort results.

Example:

```sql
SELECT *
FROM users
ORDER BY age;
```

This sorts users by age in ascending order by default.

---

## ASC

`ASC` means ascending order.

```sql
SELECT *
FROM users
ORDER BY age ASC;
```

Example:

18 → 20 → 25 → 30 → 40

---

## DESC

`DESC` means descending order.

```sql
SELECT *
FROM users
ORDER BY age DESC;
```

Example:

40 → 30 → 25 → 20 → 18

### Important lesson

`DESC` belongs with `ORDER BY`, not `WHERE`.

Incorrect:

```sql
SELECT *
FROM users
WHERE age > 18 DESC;
```

Correct:

```sql
SELECT *
FROM users
WHERE age > 18
ORDER BY age DESC;
```

This means:

> Find users older than 18 and sort them from oldest to youngest.

---

# 11. Combining Multiple Conditions

SQL allows several conditions to be combined.

Example:

```sql
SELECT *
FROM users
WHERE age < 18
AND country NOT IN ('Nigeria', 'Canada')
AND email IS NOT NULL;
```

This means:

> Find users who are under 18, are not from Nigeria or Canada, and have an email address.

This type of query is useful for QA because real-world database checks often require multiple conditions.

---

# 12. Day 32 Practice Questions

### Question 1

Find users who have an email.

```sql
SELECT *
FROM users
WHERE email IS NOT NULL;
```

### Question 2

Find users older than 28.

```sql
SELECT *
FROM users
WHERE age > 28;
```

### Question 3

Find users who are not from Nigeria.

```sql
SELECT *
FROM users
WHERE country <> 'Nigeria';
```

### Question 4

Find Nigerian users aged 30 or older.

```sql
SELECT *
FROM users
WHERE country = 'Nigeria'
AND age >= 30;
```

### Question 5

Find users from Nigeria, UK, or Canada.

```sql
SELECT *
FROM users
WHERE country IN ('Nigeria', 'UK', 'Canada');
```

### Question 6

Find users aged between 22 and 30.

```sql
SELECT *
FROM users
WHERE age BETWEEN 22 AND 30;
```

### Question 7

Find users without an email.

```sql
SELECT *
FROM users
WHERE email IS NULL;
```

### Question 8

Find users whose email contains `@`.

```sql
SELECT *
FROM users
WHERE email LIKE '%@%';
```

### Question 9

Find users older than 18 and sort them from oldest to youngest.

```sql
SELECT *
FROM users
WHERE age > 18
ORDER BY age DESC;
```

### Question 10

Find users under 18 who are not from Nigeria or Canada and have an email.

```sql
SELECT *
FROM users
WHERE age < 18
AND country NOT IN ('Nigeria', 'Canada')
AND email IS NOT NULL;
```

---

# 13. Mistakes I Made

During the Day 32 exercise, I made two important syntax mistakes.

### Mistake 1 — Using HAS

I initially wrote:

```sql
WHERE email HAS /%@%/;
```

The correct SQL syntax is:

```sql
WHERE email LIKE '%@%';
```

### What I learned

SQL uses `LIKE` for pattern matching.

---

### Mistake 2 — Putting DESC after WHERE

I initially wrote:

```sql
WHERE age > 18 DESC;
```

The correct syntax is:

```sql
WHERE age > 18
ORDER BY age DESC;
```

### What I learned

`WHERE` filters the data.

`ORDER BY` sorts the data.

---

# 14. SQL Concepts I Learned Today

By the end of Day 32, I practiced:

* `SELECT`
* `WHERE`
* `=`
* `<>`
* `>`
* `<`
* `>=`
* `<=`
* `AND`
* `IN`
* `NOT IN`
* `BETWEEN`
* `IS NULL`
* `IS NOT NULL`
* `LIKE`
* `%` wildcard
* `ORDER BY`
* `ASC`
* `DESC`

---

# 15. Why This Matters for QA

SQL filtering is useful for database testing and data validation.

As a QA Engineer, I may need to:

1. Create a user through the application.
2. Open the database.
3. Search for the user using SQL.
4. Confirm the correct information was stored.
5. Check whether required fields are missing.
6. Verify that application actions produced the expected database changes.

Example:

If I register a user with the application, I could check:

```sql
SELECT *
FROM users
WHERE email = 'test@example.com';
```

If the expected user record exists with the correct information, this provides database-level evidence that the registration process worked correctly.

---

# 16. Key Takeaways

### WHERE

Filters records.

### IS NULL

Finds missing values.

### IS NOT NULL

Finds values that exist.

### IN

Matches one of several values.

### NOT IN

Excludes several values.

### BETWEEN

Finds values within a range.

### LIKE

Searches for a text pattern.

### ORDER BY

Sorts results.

### ASC

Sorts from lowest to highest / A to Z.

### DESC

Sorts from highest to lowest / Z to A.

---

# 🧠 Day 32 Reflection

Today I learned how to filter database records using SQL.

I initially made mistakes with `LIKE` and `ORDER BY`, but correcting them helped me understand the difference between pattern matching, filtering, and sorting.

I am beginning to understand how SQL can help a QA Engineer verify what is happening to data behind an application.

## Status

✅ Day 32 Completed

**Score:** 7/10

**Overall understanding:** Good beginner understanding

**Areas to reinforce:**

* `LIKE`
* `ORDER BY`
* `ASC` / `DESC`
* SQL syntax accuracy
