-- Day 33 — SQL QA Data Validation
-- Purpose: Practice using SQL to investigate and validate application data
-- QA Context: User account and registration data validation

-- ============================================================
-- 1. VERIFY USERS WITH VALID EMAIL ADDRESSES
-- ============================================================
-- QA Scenario:
-- Verify that registered users have an email address.

SELECT *
FROM users
WHERE email IS NOT NULL;

-- ============================================================
-- 2. FIND USERS WITH MISSING EMAIL ADDRESSES
-- ============================================================
-- QA Scenario:
-- Identify users whose email field was not saved correctly.

SELECT *
FROM users
WHERE email IS NULL;

-- ============================================================
-- 3. FIND USERS FROM A SPECIFIC COUNTRY
-- ============================================================
-- QA Scenario:
-- Verify that users from Nigeria are correctly stored.

SELECT *
FROM users
WHERE country = 'Nigeria';

-- ============================================================
-- 4. FIND USERS OUTSIDE EXPECTED COUNTRIES
-- ============================================================
-- QA Scenario:
-- Investigate users whose country is not Nigeria or Canada.

SELECT *
FROM users
WHERE country NOT IN ('Nigeria', 'Canada');

-- ============================================================
-- 5. FIND USERS WITHIN AN AGE RANGE
-- ============================================================
-- QA Scenario:
-- Verify users whose age falls between 22 and 30.

SELECT *
FROM users
WHERE age BETWEEN 22 AND 30;

-- ============================================================
-- 6. FIND USERS WITH EMAIL PATTERNS
-- ============================================================
-- QA Scenario:
-- Check whether stored email values contain an @ symbol.

SELECT *
FROM users
WHERE email LIKE '%@%';

-- ============================================================
-- 7. FIND USERS WITH MULTIPLE CONDITIONS
-- ============================================================
-- QA Scenario:
-- Find users who are under 18, are not from Nigeria
-- or Canada, and have an email address.

SELECT *
FROM users
WHERE age < 18
AND country NOT IN ('Nigeria', 'Canada')
AND email IS NOT NULL;

-- ============================================================
-- 8. SORT USERS BY AGE
-- ============================================================
-- QA Scenario:
-- Review user records from oldest to youngest.

SELECT *
FROM users
ORDER BY age DESC;

-- ============================================================
-- 9. FILTER AND SORT USER RECORDS
-- ============================================================
-- QA Scenario:
-- Find users older than 18 and sort them from oldest
-- to youngest.

SELECT *
FROM users
WHERE age > 18
ORDER BY age DESC;

-- ============================================================
-- 10. QA DATA VALIDATION CHECK
-- ============================================================
-- QA Scenario:
-- Find records that may require investigation because
-- the user has an email address that does not contain @.

SELECT *
FROM users
WHERE email IS NOT NULL
AND email NOT LIKE '%@%';

-- ============================================================
-- QA NOTES
-- ============================================================
---------------------------------------------------------------

-- WHERE       = filters records
-- AND         = combines conditions
-- IN          = checks multiple allowed values
-- NOT IN      = excludes multiple values
-- BETWEEN     = checks a range
-- IS NULL     = finds missing values
-- IS NOT NULL = finds existing values
-- LIKE        = searches for a pattern
-- ORDER BY    = sorts query results
-- DESC        = sorts from highest to lowest
---------------------------------------------

-- QA APPLICATION:
-- SQL can help a QA Engineer investigate database records,
-- validate stored data, identify missing or suspicious values,
-- and confirm that application actions produce expected data.
