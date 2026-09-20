-- ============================================================
-- DAY 35: QA DATABASE VALIDATION PROJECT
-- 90-Day QA Engineering Journey
-- ============================================================
---------------------------------------------------------------

-- Objective:
-- Use SQL to perform basic database validation from a QA
-- Engineer's perspective.
--------------------------

-- Scenario:
-- An application stores user information in a `users` table.
-- As a QA Engineer, I will use SQL to validate data quality,
-- identify potential issues, and verify expected conditions.
-------------------------------------------------------------

-- ============================================================

-- ============================================================
-- 1. VERIFY TOTAL USER RECORDS
-- ============================================================
-- Purpose:
-- Check how many user records exist in the database.

SELECT COUNT(*) AS total_users
FROM users;

-- ============================================================
-- 2. CHECK FOR USERS WITHOUT EMAIL ADDRESSES
-- ============================================================
-- Purpose:
-- Identify records where the email field is missing.
-----------------------------------------------------

-- QA relevance:
-- Email may be a required field during registration.

SELECT *
FROM users
WHERE email IS NULL;

-- ============================================================
-- 3. CHECK FOR USERS WITH EMAIL ADDRESSES
-- ============================================================
-- Purpose:
-- Confirm which user records contain an email address.

SELECT *
FROM users
WHERE email IS NOT NULL;

-- ============================================================
-- 4. CHECK FOR INVALID EMAIL PATTERNS
-- ============================================================
-- Purpose:
-- Identify email values that do not contain '@'.
-------------------------------------------------

-- Note:
-- This is a basic pattern check, not complete email validation.

SELECT *
FROM users
WHERE email NOT LIKE '%@%';

-- ============================================================
-- 5. CHECK FOR USERS WITH INVALID / MISSING AGE
-- ============================================================
-- Purpose:
-- Identify records where age is missing or contains a value
-- that may require investigation.

SELECT *
FROM users
WHERE age IS NULL
OR age < 0;

-- ============================================================
-- 6. CHECK FOR USERS BELOW THE EXPECTED AGE
-- ============================================================
-- Purpose:
-- Identify users below the expected minimum age of 18.
-------------------------------------------------------

-- QA scenario:
-- If the application requires users to be at least 18,
-- these records should be investigated.

SELECT *
FROM users
WHERE age < 18;

-- ============================================================
-- 7. CHECK USERS BY COUNTRY
-- ============================================================
-- Purpose:
-- Validate that users from expected countries exist.

SELECT *
FROM users
WHERE country IN ('Nigeria', 'UK', 'Canada');

-- ============================================================
-- 8. CHECK FOR MISSING COUNTRY DATA
-- ============================================================
-- Purpose:
-- Identify users whose country information is missing.

SELECT *
FROM users
WHERE country IS NULL;

-- ============================================================
-- 9. CHECK FOR POTENTIAL DUPLICATE EMAILS
-- ============================================================
-- Purpose:
-- Identify email addresses that appear more than once.
-------------------------------------------------------

-- QA relevance:
-- If email addresses are expected to be unique,
-- duplicate records may indicate a data integrity issue.

SELECT email, COUNT(*) AS email_count
FROM users
WHERE email IS NOT NULL
GROUP BY email
HAVING COUNT(*) > 1;

-- ============================================================
-- 10. VALIDATE USER DATA USING MULTIPLE CONDITIONS
-- ============================================================
-- Purpose:
-- Find records that may require investigation because
-- multiple data-quality conditions are present.

SELECT *
FROM users
WHERE email IS NULL
OR country IS NULL
OR age IS NULL
OR age < 0;

-- ============================================================
-- 11. SORT USERS BY AGE
-- ============================================================
-- Purpose:
-- Review user records from oldest to youngest.

SELECT *
FROM users
ORDER BY age DESC;

-- ============================================================
-- 12. QA INVESTIGATION QUERY
-- ============================================================
-- Purpose:
-- Investigate users who are under 18, outside the expected
-- countries, and have an email address.

SELECT *
FROM users
WHERE age < 18
AND country NOT IN ('Nigeria', 'Canada')
AND email IS NOT NULL;

-- ============================================================
-- QA VALIDATION CHECKLIST
-- ============================================================
---------------------------------------------------------------

-- [ ] User records can be counted.
-- [ ] Missing email addresses can be identified.
-- [ ] Missing country values can be identified.
-- [ ] Missing/invalid age values can be identified.
-- [ ] Basic email pattern issues can be investigated.
-- [ ] Expected countries can be filtered.
-- [ ] Duplicate email addresses can be investigated.
-- [ ] Records can be sorted for investigation.
-- [ ] Multiple validation conditions can be combined.
------------------------------------------------------

-- ============================================================
-- DAY 35 STATUS
-- ============================================================
---------------------------------------------------------------

-- Database validation queries created.
-- SQL filtering concepts applied to QA scenarios.
-- ============================================================
