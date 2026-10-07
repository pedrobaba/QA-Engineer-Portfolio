# Day 32 — SQL Filtering Resources

## 📚 Topic

**SQL Filtering with WHERE**

Today’s resources were used to understand how SQL can be used to filter and sort database records.

---

## 🔗 Learning Resources

### 1. W3Schools — SQL WHERE Clause

https://www.w3schools.com/sql/sql_where.asp

**Used for:**

* `WHERE`
* Comparison operators
* Filtering records

---

### 2. W3Schools — SQL AND, OR and NOT

https://www.w3schools.com/sql/sql_and_or.asp

**Used for:**

* `AND`
* `OR`
* `NOT`
* Combining multiple conditions

---

### 3. W3Schools — SQL IN Operator

https://www.w3schools.com/sql/sql_in.asp

**Used for:**

* `IN`
* `NOT IN`
* Filtering against multiple possible values

---

### 4. W3Schools — SQL BETWEEN Operator

https://www.w3schools.com/sql/sql_between.asp

**Used for:**

* `BETWEEN`
* Filtering values within a range

---

### 5. W3Schools — SQL NULL Values

https://www.w3schools.com/sql/sql_null_values.asp

**Used for:**

* `IS NULL`
* `IS NOT NULL`
* Understanding missing database values

---

### 6. W3Schools — SQL LIKE Operator

https://www.w3schools.com/sql/sql_like.asp

**Used for:**

* `LIKE`
* `%` wildcard
* Searching for text patterns

**Example:**

```sql
SELECT *
FROM users
WHERE email LIKE '%@%';
```

---

### 7. W3Schools — SQL ORDER BY

https://www.w3schools.com/sql/sql_orderby.asp

**Used for:**

* `ORDER BY`
* `ASC`
* `DESC`
* Sorting query results

**Example:**

```sql
SELECT *
FROM users
WHERE age > 18
ORDER BY age DESC;
```

---

## 🧪 Practice

The Day 32 exercises focused on filtering a `users` table using:

* `WHERE`
* `>`
* `>=`
* `<>`
* `AND`
* `IN`
* `NOT IN`
* `BETWEEN`
* `IS NULL`
* `IS NOT NULL`
* `LIKE`
* `ORDER BY`
* `DESC`

---

## 🎯 QA Relevance

SQL filtering is useful in QA because testers may need to:

* Verify that application data was stored correctly.
* Find specific users or records in a database.
* Check for missing values.
* Validate data against requirements.
* Investigate defects using database records.
* Confirm that application actions produce the expected database changes.

---

## 💡 Key Learning

SQL is not only about retrieving data. It can also be used to **filter, investigate, validate, and organize data**, which makes SQL an important skill for software testing and QA.

---

## 📌 Day 32 Status

**Completed ✅**

Practical exercises completed: **10**

Main areas practiced:

**WHERE → Conditions → NULL → IN → BETWEEN → LIKE → ORDER BY**
