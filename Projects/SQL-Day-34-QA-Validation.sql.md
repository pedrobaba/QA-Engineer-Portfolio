-- ============================================================
-- DAY 34 — QA DATABASE VALIDATION PROJECT
-- ============================================================
-- Project: User Data Validation
-- Role: QA Engineer
-- Objective: Use SQL to validate user data stored in a database
-- ============================================================


-- ------------------------------------------------------------
-- 1. VALIDATE THAT REQUIRED EMAIL ADDRESSES EXIST
-- ------------------------------------------------------------
-- QA Objective:
-- Check whether users who should have an email address
-- actually have one.

SELECT *
FROM users
WHERE email IS NULL;


-- Expected Result:
-- Users without an email should be identified for investigation.


-- ------------------------------------------------------------
-- 2. CHECK FOR POSSIBLE INVALID EMAIL DATA
-- ------------------------------------------------------------
-- QA Objective:
-- Identify email values that do not contain '@'.

SELECT *
FROM users
WHERE email IS NOT NULL
AND email NOT LIKE '%@%';


-- Expected Result:
-- No invalid email records should be returned.


-- ------------------------------------------------------------
-- 3. VALIDATE USER AGE DATA
-- ------------------------------------------------------------
-- QA Objective:
-- Identify users with an unrealistic or invalid age.

SELECT *
FROM users
WHERE age < 0;


-- Expected Result:
-- No users should have a negative age.


-- ------------------------------------------------------------
-- 4. FIND USERS BELOW THE EXPECTED AGE LIMIT
-- ------------------------------------------------------------
-- QA Objective:
-- Identify users younger than 18.

SELECT *
FROM users
WHERE age < 18;


-- Expected Result:
-- Records returned should represent users below 18.


-- ------------------------------------------------------------
-- 5. VALIDATE COUNTRY DATA
-- ------------------------------------------------------------
-- QA Objective:
-- Find users whose country is not one of the supported
-- countries being tested.

SELECT *
FROM users
WHERE country NOT IN ('Nigeria', 'UK', 'Canada');


-- Expected Result:
-- Any returned records should be reviewed to determine
-- whether the country value is valid or unexpected.


-- ------------------------------------------------------------
-- 6. CHECK FOR MISSING COUNTRY VALUES
-- ------------------------------------------------------------
-- QA Objective:
-- Identify users whose country information is missing.

SELECT *
FROM users
WHERE country IS NULL;


-- Expected Result:
-- Required country information should not be missing.


-- ------------------------------------------------------------
-- 7. VALIDATE USERS WITH COMPLETE BASIC INFORMATION
-- ------------------------------------------------------------
-- QA Objective:
-- Find users who have both an email and country recorded.

SELECT *
FROM users
WHERE email IS NOT NULL
AND country IS NOT NULL;


-- Expected Result:
-- Returned users should have both required fields populated.


-- ------------------------------------------------------------
-- 8. FILTER USERS WITH A SPECIFIC AGE RANGE
-- ------------------------------------------------------------
-- QA Objective:
-- Validate records for users between 22 and 30 years old.

SELECT *
FROM users
WHERE age BETWEEN 22 AND 30;


-- Expected Result:
-- Only users whose ages fall within the specified range
-- should be returned.


-- ------------------------------------------------------------
-- 9. SORT USERS BY AGE
-- ------------------------------------------------------------
-- QA Objective:
-- Verify that user records can be retrieved in descending
-- age order.

SELECT *
FROM users
ORDER BY age DESC;


-- Expected Result:
-- Users should appear from oldest to youngest.


-- ------------------------------------------------------------
-- 10. COMBINED QA VALIDATION
-- ------------------------------------------------------------
-- QA Objective:
-- Identify users under 18 who are outside Nigeria and Canada
-- and have an email address.

SELECT *
FROM users
WHERE age < 18
AND country NOT IN ('Nigeria', 'Canada')
AND email IS NOT NULL;


-- Expected Result:
-- Only records matching all three conditions should appear.


-- ============================================================
-- QA VALIDATION SUMMARY
-- ============================================================
--
-- Areas validated:
--
-- [x] Missing email values
-- [x] Possible invalid email values
-- [x] Invalid age values
-- [x] Age restrictions
-- [x] Unexpected country values
-- [x] Missing country values
-- [x] Complete user information
-- [x] Age range filtering
-- [x] Data sorting
-- [x] Multiple-condition filtering
--
-- QA Lesson:
-- SQL can be used to investigate database records,
-- identify potential data-quality issues, and verify
-- that application data meets expected conditions.
-- ============================================================
