# Day 33 — SQL Data Sorting and Filtering Journal

## 📅 Date

**Day 33 of 90**

## 🎯 Today's Focus

Today I continued building my SQL foundation as part of my QA Engineering learning journey.

The main focus was understanding how to **filter and sort database records** and how these SQL skills can be applied to QA testing and data validation.

---

## 🧠 What I Practiced

Today I practiced using:

* `WHERE`
* `ORDER BY`
* `ASC`
* `DESC`
* `AND`
* `IN`
* `NOT IN`
* `BETWEEN`
* `IS NULL`
* `IS NOT NULL`
* `LIKE`
* Combining filtering and sorting conditions

I practiced writing queries against a `users` table and worked on retrieving specific records based on different conditions.

---

## 💡 What I Understood

One of the most important things I understood today is the difference between **filtering** and **sorting**.

### Filtering

`WHERE` is used to decide **which records should be returned**.

Example:

```sql
SELECT *
FROM users
WHERE age > 18;
```

This returns only users older than 18.

### Sorting

`ORDER BY` is used to decide **how the returned records should be arranged**.

Example:

```sql
SELECT *
FROM users
ORDER BY age DESC;
```

This returns the users sorted from the highest age to the lowest age.

I learned that filtering and sorting can also be combined:

```sql
SELECT *
FROM users
WHERE age > 18
ORDER BY age DESC;
```

This means:

> First filter the users who are older than 18, then sort the results from oldest to youngest.

---

## 🔍 Mistakes and Corrections

During my SQL practice, I noticed that I sometimes understand what I want the query to do but don't immediately remember the correct SQL syntax.

One example was confusing pattern matching with another type of search syntax.

I initially tried:

```sql
WHERE email HAS /%@%/
```

I learned that SQL uses `LIKE` for this type of pattern matching:

```sql
WHERE email LIKE '%@%';
```

I also initially placed `DESC` directly after a `WHERE` condition.

I corrected this by using:

```sql
WHERE age > 18
ORDER BY age DESC;
```

These mistakes helped me understand the purpose of each SQL clause rather than just memorizing syntax.

---

## 🧪 QA Connection

Today's SQL practice is relevant to QA because a tester may need to verify that data stored in a database is correct after an action is performed in an application.

For example, if a user changes their email address through a website, a QA Engineer could query the database to verify that the new email was actually stored.

SQL can also help investigate:

* Missing user information
* Incorrect records
* Unexpected values
* Data that does not match the UI
* Records created or updated incorrectly
* Possible backend defects

This makes SQL useful not only for database testing but also for investigating application bugs.

---

## 🧩 What I Found Difficult

The main difficulty today was remembering the exact syntax for different SQL operations.

I understand the purpose of the commands better now, but I still need more repetition before the syntax becomes natural.

I also need more practice combining multiple SQL clauses in a single query.

---

## 📈 My Progress

Compared with my previous SQL practice, I feel more comfortable writing basic filtering queries.

I can now recognize when I should use:

* `WHERE` for filtering
* `ORDER BY` for sorting
* `ASC` for ascending order
* `DESC` for descending order
* `LIKE` for pattern matching
* `IS NULL` for missing values

I still need more practice with complex queries.

---

## ⭐ Self-Assessment

**Understanding:** 7/10

**Practical confidence:** 7/10

**SQL syntax confidence:** 6/10

I understand the concepts, but I need more hands-on practice to become faster and more accurate.

---

## 📝 Key Lessons From Today

1. `WHERE` filters records.
2. `ORDER BY` sorts records.
3. `ASC` sorts from low to high or A to Z.
4. `DESC` sorts from high to low or Z to A.
5. Filtering and sorting can be used together.
6. `LIKE` is used for pattern matching.
7. SQL syntax matters even when the intended logic is correct.
8. Mistakes during practice help me understand the difference between SQL clauses.
9. SQL can help QA Engineers validate and investigate application data.

---

## 🚀 What I Want to Improve

I want to become comfortable enough with SQL that I can write basic QA database queries without constantly checking the syntax.

I also want to gradually move from simple SQL exercises to realistic QA scenarios involving:

* Data validation
* User registration
* Login data
* Updates
* Deletions
* Backend verification
* Bug investigation

---

## ✅ Day 33 Status

**COMPLETED ✅**

I practiced SQL filtering and sorting, documented my mistakes and corrections, and connected the concepts to real QA data validation.
