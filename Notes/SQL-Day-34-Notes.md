# Day 34 — SQL Notes

## 📚 Topic

**SQL Data Validation & QA-Oriented Queries**

---

## 🎯 What I Am Learning

Today I am building on the SQL filtering, sorting, and conditional queries from previous days.

The focus is on using SQL from a **QA Engineer's perspective** — not just writing queries, but using them to check whether application data is correct, complete, and consistent.

---

# 1. SQL for QA

SQL can help a QA Engineer verify data stored in a database after performing an action in an application.

For example:

1. User registers on a website.
2. Application creates a user record.
3. QA checks the database.
4. QA verifies that the expected information was stored.

Example:

```sql
SELECT *
FROM users
WHERE email = 'test@example.com';
```

This can help confirm whether the user record exists.

---

# 2. Data Validation

Data validation means checking whether stored data meets the expected requirements.

For example, if every registered user should have an email:

```sql
SELECT *
FROM users
WHERE email IS NULL;
```

If this query returns records, there may be users without email addresses.

This could indicate a:

* Validation issue
* Database issue
* Application bug
* Data migration problem

---

# 3. Checking for Duplicate Data

Duplicate records can cause problems in applications.

For example, if email addresses should be unique, I can investigate duplicates using:

```sql
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

This groups users by email and identifies emails that appear more than once.

### QA relevance

This can help detect:

* Duplicate accounts
* Registration bugs
* Database constraint problems
* Data migration issues

---

# 4. COUNT()

`COUNT()` is an SQL aggregate function used to count records.

Example:

```sql
SELECT COUNT(*)
FROM users;
```

This returns the total number of users.

I can also count records matching a condition:

```sql
SELECT COUNT(*)
FROM users
WHERE country = 'Nigeria';
```

This returns the number of Nigerian users.

---

# 5. GROUP BY

`GROUP BY` is used to group records that have the same value.

Example:

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country;
```

This shows how many users belong to each country.

Example result:

```text
Nigeria    15
Canada      8
UK         12
```

### QA relevance

Grouping can help investigate data distributions and identify unexpected results.

---

# 6. HAVING

`HAVING` is used to filter grouped results.

Example:

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country
HAVING COUNT(*) > 5;
```

This returns only countries with more than five users.

### Important difference

`WHERE` filters individual records **before grouping**.

`HAVING` filters grouped results **after grouping**.

---

# 7. WHERE vs HAVING

### WHERE

```sql
SELECT *
FROM users
WHERE age > 18;
```

Filters individual rows.

### HAVING

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country
HAVING COUNT(*) > 5;
```

Filters groups.

### Easy way to remember

**WHERE → rows**

**HAVING → groups**

---

# 8. Combining Filtering and Grouping

SQL allows filtering before grouping.

Example:

```sql
SELECT country, COUNT(*)
FROM users
WHERE age >= 18
GROUP BY country;
```

This means:

> Find users who are 18 or older, then count them by country.

This can be useful when validating specific subsets of application data.

---

# 9. Using ORDER BY with Aggregate Results

I can also sort grouped results.

Example:

```sql
SELECT country, COUNT(*) AS user_count
FROM users
GROUP BY country
ORDER BY user_count DESC;
```

This displays countries from the highest number of users to the lowest.

---

# 10. Aliases

An alias gives a temporary name to a column or expression.

Example:

```sql
SELECT COUNT(*) AS user_count
FROM users;
```

Instead of displaying the result simply as `COUNT(*)`, SQL displays it as:

```text
user_count
```

Aliases make query results easier to understand.

---

# 11. QA Data Validation Example

Imagine I test a registration form.

### Expected behavior

A user registers with:

```text
Name: John
Email: john@example.com
Country: Nigeria
Age: 30
```

After registration, I can check the database:

```sql
SELECT *
FROM users
WHERE email = 'john@example.com';
```

I would verify:

* User record exists.
* Name is correct.
* Email is correct.
* Country is correct.
* Age is correct.
* No unexpected NULL values exist.

---

# 12. Checking Required Fields

If `email` is required, I can investigate missing emails:

```sql
SELECT *
FROM users
WHERE email IS NULL;
```

If the query returns unexpected records, I should investigate further.

---

# 13. Checking Invalid Ages

If users must be at least 18 years old:

```sql
SELECT *
FROM users
WHERE age < 18;
```

If the application is supposed to prevent underage registration, unexpected records may indicate a validation problem.

---

# 14. Checking Invalid Countries

If the application only supports specific countries:

```sql
SELECT *
FROM users
WHERE country NOT IN ('Nigeria', 'UK', 'Canada');
```

This can identify records containing unsupported countries.

---

# 15. Checking Email Format

A simple pattern check can identify records that do not contain `@`:

```sql
SELECT *
FROM users
WHERE email NOT LIKE '%@%';
```

This is only a basic check and does not prove that an email address is fully valid.

For example, a value containing `@` could still be an invalid email.

---

# 16. SQL as a QA Investigation Tool

SQL can be useful when investigating bugs.

### Example bug

**Bug:**

> Newly registered users sometimes cannot log in.

A QA Engineer could investigate whether affected users were actually created in the database.

```sql
SELECT *
FROM users
WHERE email = 'affected@example.com';
```

If the record does not exist, this provides useful information for the investigation.

If the record exists, further investigation may be needed.

---

# 17. Important SQL Concepts

| Concept       | Purpose                 |
| ------------- | ----------------------- |
| `SELECT`      | Retrieve data           |
| `WHERE`       | Filter rows             |
| `ORDER BY`    | Sort results            |
| `COUNT()`     | Count records           |
| `GROUP BY`    | Group records           |
| `HAVING`      | Filter groups           |
| `AS`          | Create an alias         |
| `IS NULL`     | Find missing values     |
| `IS NOT NULL` | Find existing values    |
| `LIKE`        | Pattern matching        |
| `IN`          | Match multiple values   |
| `NOT IN`      | Exclude multiple values |

---

# 🧠 QA Mindset

When using SQL as a QA Engineer, I should not only ask:

> "Can I write this query?"

I should also ask:

> "What am I trying to validate?"

For every query, I should understand:

**Test condition → SQL query → Expected result → Actual result → Finding**

Example:

```text
Test condition:
Every registered user should have an email.

SQL:
SELECT *
FROM users
WHERE email IS NULL;

Expected:
0 records.

Actual:
If records are returned, investigate them.

Finding:
Potential data validation issue.
```

---

# 🔑 Key Takeaways

* SQL can be used to validate application data.
* `COUNT()` can count records.
* `GROUP BY` groups records.
* `HAVING` filters grouped results.
* `WHERE` filters individual rows.
* `ORDER BY` sorts query results.
* `AS` creates readable aliases.
* SQL can help investigate application defects.
* A query result does not automatically prove that a bug exists.
* QA should compare actual database results against the expected behavior or requirement.

---

# 📝 Day 34 Learning Reflection

Today I am moving beyond basic SQL filtering and beginning to think about SQL as a **QA validation and investigation tool**.

The important lesson is that SQL is not just about retrieving data. As a QA Engineer, I can use it to verify application behavior, investigate unexpected records, identify missing or duplicate data, and support bug investigations.

My goal is to become comfortable enough with SQL that I can independently investigate database-related issues during testing.
