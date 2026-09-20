# Day 35 — QA Learning Journal

## 📅 Date

**Day 35 of 90**

## 🎯 Today's Focus

Today I continued building my SQL and database testing knowledge as part of my QA Engineering journey.

The main focus was understanding how a QA Engineer can use SQL to validate data stored in a database and investigate issues that may not be obvious from the application's user interface.

---

## 📚 What I Learned

Today I learned more about **database testing** and how it connects with software quality assurance.

I learned that database testing is not simply about writing SQL queries. It involves checking whether data is:

* Correct
* Complete
* Consistent
* Stored as expected
* Updated correctly
* Retrieved correctly
* Maintained after application actions

I also learned that SQL can be used by QA Engineers to investigate application behavior from the database side.

---

## 🧪 What I Practiced

I practiced using SQL to validate and investigate database records.

My practice focused on:

* Retrieving records from tables
* Filtering records
* Checking expected values
* Identifying missing data
* Validating stored information
* Comparing expected and actual database results
* Using SQL as part of a QA investigation

I approached the exercises from a QA perspective rather than only focusing on SQL syntax.

---

## 🧑‍💻 QA Scenario

One important way I understand database testing is through a simple application scenario.

### Example

A user changes their email address through an application.

From the UI, the application may show:

> Email updated successfully.

As a QA Engineer, I should not necessarily stop at the success message.

I can use SQL to verify whether the change was actually stored in the database.

```sql
SELECT *
FROM users
WHERE email = 'test@example.com';
```

If the expected record exists with the correct information, that provides additional evidence that the operation worked correctly.

---

## 🐛 What I Found Challenging

The main challenge is thinking about SQL from a **testing perspective** rather than just trying to remember commands.

I am learning to ask questions such as:

* What should the database contain after this action?
* How can I verify that?
* What data should not be present?
* What happens if data is missing?
* Can I use SQL to investigate a bug?
* Does the database match what the application displays?

This is helping me understand why SQL is useful for QA Engineers.

---

## 💡 Key Takeaways

Today's biggest takeaway is that a QA Engineer can test beyond the visible interface.

The UI may say an operation was successful, but database validation can provide another layer of verification.

I also learned that database testing can help with:

* Data validation
* Defect investigation
* Backend verification
* CRUD testing
* Data integrity checks
* Troubleshooting unexpected application behavior

---

## 🔗 Connection to Previous Days

The SQL filtering skills I learned previously are becoming more useful when applied to database testing.

For example:

```sql
WHERE
```

helps me find specific records.

```sql
IS NULL
```

helps me identify missing values.

```sql
IN
```

helps me check multiple expected values.

```sql
ORDER BY
```

helps me organize results when investigating data.

These commands are becoming tools I can use during QA investigations rather than just SQL exercises.

---

## 🧠 Self-Reflection

I am beginning to understand that SQL is not something I am learning just to add to my CV.

It can become a practical tool for investigating bugs and validating whether an application is correctly storing and retrieving information.

I still need more practice before I can confidently perform database testing on a real application, but I am becoming more comfortable reading and writing basic SQL queries.

---

## 📈 Confidence Level

**SQL:** 7/10

**Database Testing:** 6/10

**QA Application:** 7/10

I understand the basic concepts, but I need more realistic practice to become confident with database validation.

---

## ✅ Day 35 Status

**COMPLETED**

I completed today's database testing and SQL practice and documented what I learned.

---

## 🚀 Next Step

Continue building on SQL and database testing knowledge and begin applying the concepts to more realistic QA scenarios.
