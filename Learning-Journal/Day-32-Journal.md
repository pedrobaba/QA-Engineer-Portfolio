# Day 32 — SQL Filtering & WHERE Clause Journal

## 📅 Day

Day 32

## 🎯 Today's Focus

Today I continued my SQL learning as part of my 90-Day QA Engineering journey.

The main focus was learning how to **filter database records using the `WHERE` clause** and different SQL conditions.

---

## 📚 What I Learned

Today I practiced the following SQL concepts:

* `WHERE`
* Comparison operators:

  * `>`
  * `<`
  * `>=`
  * `<=`
  * `=`
  * `<>`
* `AND`
* `IN`
* `NOT IN`
* `BETWEEN`
* `IS NULL`
* `IS NOT NULL`
* `LIKE`
* `ORDER BY`
* `ASC`
* `DESC`

---

## 🧪 Practical Exercise

I practiced SQL queries using a `users` table.

Some of the tasks included:

* Finding users who have an email address.
* Finding users without an email address.
* Finding users older than a specific age.
* Finding users from specific countries.
* Excluding users from specific countries.
* Finding users within an age range.
* Combining multiple conditions using `AND`.
* Finding emails containing specific characters.
* Sorting filtered results by age.

---

## ❌ Mistakes I Made

I made two important mistakes during today's exercise.

### 1. Using `HAS` instead of `LIKE`

I initially wrote:

```sql
SELECT *
FROM users
WHERE email HAS /%@%/;
```

I learned that SQL uses `LIKE` for pattern matching.

The corrected query is:

```sql
SELECT *
FROM users
WHERE email LIKE '%@%';
```

The `%` wildcard means that any number of characters can appear before or after the `@`.

---

### 2. Using `DESC` directly with `WHERE`

I initially wrote:

```sql
SELECT *
FROM users
WHERE age > 18 DESC;
```

I learned that `WHERE` is used for **filtering**, while `ORDER BY` is used for **sorting**.

The corrected query is:

```sql
SELECT *
FROM users
WHERE age > 18
ORDER BY age DESC;
```

This filters users who are older than 18 and then sorts them from the highest age to the lowest.

---

## 💡 Important Things I Understand Now

One important lesson from today is that SQL commands have different jobs.

### WHERE

Used to decide **which records should be returned**.

```sql
WHERE age > 18
```

### ORDER BY

Used to decide **how the returned records should be arranged**.

```sql
ORDER BY age DESC
```

This distinction is important when writing database queries for QA testing.

---

## 🐞 QA Connection

SQL filtering is useful for QA because testers often need to check whether the data stored in a database matches what the application is displaying.

For example, if a website says that a user is from Nigeria and is 30 years old, SQL can be used to check the actual database record.

A QA tester may use queries such as:

```sql
SELECT *
FROM users
WHERE country = 'Nigeria'
AND age >= 30;
```

This can help validate application behavior against the underlying database.

---

## 🧠 What Was Easy?

I found these concepts relatively easy to understand:

* `WHERE`
* `AND`
* `IN`
* `NOT IN`
* `BETWEEN`
* `IS NULL`
* `IS NOT NULL`
* Basic comparison operators

I was able to use them correctly in most of the exercises.

---

## 🤔 What Was Difficult?

The most difficult parts today were:

1. Understanding SQL pattern matching with `LIKE`.
2. Remembering that `DESC` belongs to `ORDER BY`, not `WHERE`.

These mistakes helped me understand the purpose of each SQL clause better.

---

## 📈 My Progress

### Understanding: 7/10

I understand the basic idea of filtering database records and can write most simple filtering queries without assistance.

I still need more practice with:

* `LIKE`
* Wildcards
* `ORDER BY`
* Combining filtering and sorting
* More complex conditions

---

## 🔑 Key Takeaways

1. `WHERE` filters records.
2. `IS NULL` checks for missing values.
3. `IS NOT NULL` checks for values that exist.
4. `IN` checks whether a value belongs to a list.
5. `NOT IN` excludes values from a list.
6. `BETWEEN` checks whether a value falls within a range.
7. `LIKE` is used for pattern matching.
8. `%` is a wildcard in SQL.
9. `ORDER BY` sorts query results.
10. `DESC` sorts from highest to lowest, while `ASC` sorts from lowest to highest.

---

## 🧪 Exercise Result

I completed 10 SQL filtering exercises.

**Score: 7/10**

Although I made mistakes in some queries, I understood the corrections and was able to identify why the original queries were incorrect.

### Status: ✅ PASSED

---

## 🎯 What I Need to Practice

Before moving deeper into SQL, I need to continue practicing:

* `LIKE`
* `%` and `_` wildcards
* `ORDER BY`
* Multiple `AND` / `OR` conditions
* Combining `WHERE` with `ORDER BY`
* Real QA database validation scenarios

---

## 📝 Personal Reflection

Today's lesson showed me that learning SQL is not just about memorizing commands.

I made mistakes, but correcting those mistakes helped me understand the difference between filtering and sorting.

As a QA Engineer, I need to be comfortable reading and writing SQL because database validation can help me confirm whether the application is storing and retrieving the correct information.

I am still building my SQL foundation, but today's practice gave me more confidence in working with database records.

---

## ✅ Day 32 Completion Checklist

* [x] Learned `WHERE`
* [x] Practiced comparison operators
* [x] Practiced `AND`
* [x] Practiced `IN`
* [x] Practiced `NOT IN`
* [x] Practiced `BETWEEN`
* [x] Practiced `IS NULL`
* [x] Practiced `IS NOT NULL`
* [x] Learned `LIKE`
* [x] Learned SQL wildcards
* [x] Learned `ORDER BY`
* [x] Practiced `DESC`
* [x] Completed 10 exercises
* [x] Reviewed and corrected mistakes
* [x] Connected SQL filtering to QA database validation

---

**Day 32 Status: ✅ Completed**
