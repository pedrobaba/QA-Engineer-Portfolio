# SQL Sorting and Filtering Notes

## 📅 Day 33

## 🎯 Topic

**SQL Sorting and Filtering Data**

---

# 1. What Is SQL Filtering?

Filtering means telling the database:

> "Show me only the records that match this condition."

We use the `WHERE` clause to filter records.

Example:

```sql
SELECT *
FROM users
WHERE age > 18;
```

This means:

> Show users whose age is greater than 18.

### Simple rule

```text
WHERE = FILTER
```

---

# 2. What Is SQL Sorting?

Sorting means arranging the results in a particular order.

We use:

```sql
ORDER BY
```

to sort records.

Example:

```sql
SELECT *
FROM users
ORDER BY age;
```

The database will sort the results by age.

### Simple rule

```text
ORDER BY = SORT
```

---

# 3. ORDER BY ASC

`ASC` means **ascending order**.

For numbers:

```text
1 → 2 → 3 → 4 → 5
```

For ages:

```text
18 → 21 → 25 → 30 → 40
```

Example:

```sql
SELECT *
FROM users
ORDER BY age ASC;
```

This sorts users from the youngest to the oldest.

### Important

`ASC` is normally the default sorting direction, so this:

```sql
SELECT *
FROM users
ORDER BY age;
```

usually gives the same ordering as:

```sql
SELECT *
FROM users
ORDER BY age ASC;
```

---

# 4. ORDER BY DESC

`DESC` means **descending order**.

For numbers:

```text
5 → 4 → 3 → 2 → 1
```

For ages:

```text
40 → 30 → 25 → 21 → 18
```

Example:

```sql
SELECT *
FROM users
ORDER BY age DESC;
```

This sorts users from oldest to youngest.

---

# 5. WHERE + ORDER BY

We can filter records first and then sort the results.

Example:

```sql
SELECT *
FROM users
WHERE age > 18
ORDER BY age DESC;
```

This means:

1. Find users older than 18.
2. Sort those users from oldest to youngest.

The general structure is:

```sql
SELECT columns
FROM table
WHERE condition
ORDER BY column ASC/DESC;
```

---

# 6. Important Difference Between WHERE and ORDER BY

These two commands do different jobs.

### WHERE

Filters records.

```sql
WHERE age > 18
```

Means:

> Only show users older than 18.

### ORDER BY

Sorts the records.

```sql
ORDER BY age DESC
```

Means:

> Arrange the results from highest age to lowest age.

### Easy way to remember

```text
WHERE → Which records do I want?

ORDER BY → In what order do I want them?
```

---

# 7. Sorting by More Than One Column

SQL can sort using multiple columns.

Example:

```sql
SELECT *
FROM users
ORDER BY country ASC, age DESC;
```

This means:

1. Sort users by country alphabetically.
2. If multiple users are from the same country, sort those users by age from highest to lowest.

The first column has priority.

---

# 8. Filtering With Multiple Conditions

We can combine filtering conditions using `AND`.

Example:

```sql
SELECT *
FROM users
WHERE country = 'Nigeria'
AND age >= 30;
```

This returns users who:

* Are from Nigeria
* AND are at least 30 years old

Both conditions must be true.

---

# 9. Filtering With IN

`IN` allows us to check multiple possible values.

Example:

```sql
SELECT *
FROM users
WHERE country IN ('Nigeria', 'UK', 'Canada');
```

This means:

> Show users from Nigeria, the UK, or Canada.

---

# 10. Filtering With NOT IN

`NOT IN` excludes specified values.

Example:

```sql
SELECT *
FROM users
WHERE country NOT IN ('Nigeria', 'Canada');
```

This means:

> Show users who are not from Nigeria or Canada.

---

# 11. Filtering With BETWEEN

`BETWEEN` is useful for checking a range.

Example:

```sql
SELECT *
FROM users
WHERE age BETWEEN 22 AND 30;
```

This returns users aged from 22 through 30.

For numeric values, the boundary values are included.

---

# 12. Filtering NULL Values

`NULL` represents a missing or unknown value.

To find records where a value is missing:

```sql
SELECT *
FROM users
WHERE email IS NULL;
```

To find records where the value exists:

```sql
SELECT *
FROM users
WHERE email IS NOT NULL;
```

### Important

Do not use:

```sql
WHERE email = NULL;
```

Use:

```sql
WHERE email IS NULL;
```

---

# 13. LIKE for Pattern Matching

`LIKE` is used when we want to search for a pattern instead of an exact value.

Example:

```sql
SELECT *
FROM users
WHERE email LIKE '%@%';
```

This looks for email values containing `@`.

---

# 14. The `%` Wildcard

The `%` symbol represents zero or more characters.

Example:

```sql
LIKE '%@%'
```

Can be understood as:

```text
anything + @ + anything
```

Another example:

```sql
SELECT *
FROM users
WHERE country LIKE 'N%';
```

This looks for countries beginning with `N`.

---

# 15. SQL Query Order

A basic SQL query follows a particular structure.

```sql
SELECT *
FROM users
WHERE age > 18
ORDER BY age DESC;
```

Think of it as:

```text
SELECT → What do I want?
FROM → Where is the data?
WHERE → What should I filter?
ORDER BY → How should I sort it?
```

---

# 16. QA Example

SQL filtering and sorting can be useful during database testing.

### Scenario

A user changes their profile information in a web application.

The QA Engineer wants to verify the records stored in the database.

For example:

```sql
SELECT *
FROM users
WHERE email = 'test@example.com';
```

The tester can inspect the returned record and compare it with the information displayed in the application.

---

# 17. QA Data Investigation Example

Suppose a requirement says:

> All adult users must have an email address.

A QA Engineer could investigate possible problems using:

```sql
SELECT *
FROM users
WHERE age >= 18
AND email IS NULL;
```

If records are returned, those users may require further investigation.

SQL does not automatically prove that the application has a defect, but it can help the tester **identify data that requires investigation**.

---

# 18. Filtering + Sorting QA Example

Suppose we want to investigate Nigerian users aged 18 or older and see the oldest users first.

```sql
SELECT *
FROM users
WHERE country = 'Nigeria'
AND age >= 18
ORDER BY age DESC;
```

This allows the tester to:

1. Filter the relevant users.
2. Sort the results.
3. Inspect the data more easily.

---

# 🧠 Key Takeaways

* `WHERE` filters records.
* `ORDER BY` sorts records.
* `ASC` means ascending.
* `DESC` means descending.
* `WHERE` and `ORDER BY` can be used together.
* SQL can sort using multiple columns.
* `AND` combines conditions.
* `IN` checks multiple possible values.
* `NOT IN` excludes multiple values.
* `BETWEEN` checks a range.
* `IS NULL` checks for missing values.
* `IS NOT NULL` checks for existing values.
* `LIKE` performs pattern matching.
* `%` is a wildcard.
* SQL can help QA Engineers investigate and validate application data.

---

# ❗ Common Mistakes to Avoid

### Mistake 1

Incorrect:

```sql
WHERE email HAS '%@%';
```

Correct:

```sql
WHERE email LIKE '%@%';
```

---

### Mistake 2

Incorrect:

```sql
WHERE age > 18 DESC;
```

Correct:

```sql
WHERE age > 18
ORDER BY age DESC;
```

---

### Mistake 3

Incorrect:

```sql
WHERE email = NULL;
```

Correct:

```sql
WHERE email IS NULL;
```

---

# 🎯 Day 33 Learning Goal

The goal is not just to memorize SQL commands.

I should be able to look at a QA data-validation problem and think:

> **What data do I need? → How do I filter it? → How do I sort it? → What should I verify?**

This is the foundation for using SQL as a QA Engineer.
