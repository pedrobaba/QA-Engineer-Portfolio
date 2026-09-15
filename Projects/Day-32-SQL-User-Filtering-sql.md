```sql
-- ============================================================
-- Day 32 QA Engineering Practice Project
-- Project: SQL User Filtering
-- Topic: WHERE Clause and Data Filtering
-- ============================================================

-- PURPOSE:
-- Practice using SQL to filter user records during QA
-- database validation and data investigation.
--
-- Assumed table: users
-- Assumed columns:
-- id, name, email, age, country
-- ============================================================


-- ------------------------------------------------------------
-- 1. Find users who have an email address
-- QA PURPOSE:
-- Verify that users have email data stored in the database.
-- ------------------------------------------------------------

SELECT *
FROM users
WHERE email IS NOT NULL;


-- ------------------------------------------------------------
-- 2. Find users older than 28
-- QA PURPOSE:
-- Validate age-based filtering.
-- ------------------------------------------------------------

SELECT *
FROM users
WHERE age > 28;


-- ------------------------------------------------------------
-- 3. Find users who are not from Nigeria
-- QA PURPOSE:
-- Verify that country filtering excludes Nigerian users.
-- ------------------------------------------------------------

SELECT *
FROM users
WHERE country <> 'Nigeria';


-- ------------------------------------------------------------
-- 4. Find Nigerian users aged 30 or older
-- QA PURPOSE:
-- Test multiple conditions using AND.
-- ------------------------------------------------------------

SELECT *
FROM users
WHERE country = 'Nigeria'
AND age >= 30;


-- ------------------------------------------------------------
-- 5. Find users from Nigeria, UK, or Canada
-- QA PURPOSE:
-- Verify filtering against multiple accepted country values.
-- ------------------------------------------------------------

SELECT *
FROM users
WHERE country IN ('Nigeria', 'UK', 'Canada');


-- ------------------------------------------------------------
-- 6. Find users between 22 and 30 years old
-- QA PURPOSE:
-- Validate an inclusive age range.
-- ------------------------------------------------------------

SELECT *
FROM users
WHERE age BETWEEN 22 AND 30;


-- ------------------------------------------------------------
-- 7. Find users who do not have an email address
-- QA PURPOSE:
-- Identify records containing missing email data.
-- ------------------------------------------------------------

SELECT *
FROM users
WHERE email IS NULL;


-- ------------------------------------------------------------
-- 8. Find users whose email contains '@'
-- QA PURPOSE:
-- Perform a basic validation of email data.
-- NOTE:
-- LIKE is used for pattern matching.
-- ------------------------------------------------------------

SELECT *
FROM users
WHERE email LIKE '%@%';


-- ------------------------------------------------------------
-- 9. Find users older than 18 and sort from oldest to youngest
-- QA PURPOSE:
-- Combine filtering with result sorting.
-- ------------------------------------------------------------

SELECT *
FROM users
WHERE age > 18
ORDER BY age DESC;


-- ------------------------------------------------------------
-- 10. Find users under 18 who:
--     - Are not from Nigeria or Canada
--     - Have an email address
--
-- QA PURPOSE:
-- Practice combining multiple validation conditions.
-- ------------------------------------------------------------

SELECT *
FROM users
WHERE age < 18
AND country NOT IN ('Nigeria', 'Canada')
AND email IS NOT NULL;


-- ============================================================
-- QA TESTING NOTES
-- ============================================================
--
-- WHERE       = filters records
-- AND         = requires multiple conditions to be true
-- IN          = matches any value in a list
-- NOT IN      = excludes values from a list
-- BETWEEN     = checks an inclusive range
-- IS NULL     = finds missing values
-- IS NOT NULL = finds values that exist
-- LIKE        = performs pattern matching
-- ORDER BY    = sorts query results
-- DESC        = sorts from highest to lowest / Z to A
--
-- ============================================================
-- QA APPLICATION
-- ============================================================
--
-- SQL can help a QA Engineer:
--
-- 1. Verify that test data was correctly stored.
-- 2. Find records with missing information.
-- 3. Validate application filters against database results.
-- 4. Investigate unexpected user data.
-- 5. Confirm that backend operations produced the expected data.
--
-- ============================================================
```
