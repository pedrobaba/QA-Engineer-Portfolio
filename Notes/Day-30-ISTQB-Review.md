# Day 30 — ISTQB Foundation Review & Consolidation

**Day:** 30/90  
**Date:** September 8, 2026  
**Phase:** QA Foundation & Test Design  
**Status:** ✅ Completed

---

## 🎯 Objective

Day 30 was focused on reviewing and consolidating the major ISTQB Foundation concepts covered during Days 22–29.

The goal was not to learn a completely new topic, but to confirm understanding and identify areas that require further practice before moving into technical QA skills.

---

# 📚 Topics Reviewed

## 1. The 7 Testing Principles

### 1. Testing Shows the Presence of Defects

Testing can demonstrate that defects exist, but testing cannot prove that a system contains no defects.

### 2. Exhaustive Testing Is Impossible

It is not practical to test every possible input, combination, device, environment and user behavior.

### 3. Early Testing Saves Time and Money

Testing activities should begin as early as possible in the development lifecycle.

### 4. Defect Clustering

A small number of modules or areas often contain a large proportion of defects.

### 5. Pesticide Paradox

Repeating the same tests continuously may eventually stop finding new defects. Tests should therefore be reviewed and updated.

### 6. Testing Is Context Dependent

The testing approach depends on the type of application, business requirements, risks and environment.

### 7. Absence-of-Errors Is a Fallacy

Even if no defects are found, the software can still fail to meet user or business requirements.

---

# 🧪 Test Technique Review

## Equivalence Partitioning

Divides input data into groups that are expected to behave similarly.

Example:

A transfer amount must be between ₦1,000 and ₦500,000.

Partitions:

- Below ₦1,000 → Invalid
- ₦1,000–₦500,000 → Valid
- Above ₦500,000 → Invalid

---

## Boundary Value Analysis

Focuses on values at and around boundaries.

For ₦1,000–₦500,000:

```text
₦999
₦1,000
₦1,001

₦499,999
₦500,000
₦500,001
```
## Decision Table Testing

Used when system behavior depends on combinations of conditions.

Example:
| Logged In | Cart Has Product | Checkout |
| --------- | ---------------- | -------- |
| Yes       | Yes              | Allowed  |
| Yes       | No               | Blocked  |
| No        | Yes              | Blocked  |
| No        | No               | Blocked  |

## State Transition Testing

Used when system behavior changes based on states and events.

Example:
Active
  ↓
Failed Login
  ↓
Failed Login
  ↓
Failed Login
  ↓
Locked

### White-Box Techniques

Examples:

- Statement Testing
- Branch Testing

Branch testing verifies that different outcomes of decision points are exercised.

₦499,999
₦500,000
₦500,001

### Experience-Based Techniques

Examples:

Error Guessing
Exploratory Testing

## 🐛 Defect Management Review
Error → Defect → Failure
Human mistake
     ↓
   ERROR
     ↓
Incorrect software/product
     ↓
  DEFECT
     ↓
Incorrect behavior observed
     ↓
  FAILURE

### ⚠️ Severity vs Priority
Severity

Describes the impact of a defect on the system.

Priority

Describes how urgently the defect should be fixed.

Easy memory rule
```
Severity = How bad?
Priority = How soon?
```
Priority can depend on business context.

### 📋 Testware Review

Important QA testware includes:
| Testware            | Purpose                                                   |
| ------------------- | --------------------------------------------------------- |
| Test Plan           | Defines testing objectives, scope, resources and approach |
| Test Cases          | Detailed tests to be executed                             |
| Test Log            | Records test execution results                            |
| Defect Report       | Documents identified defects                              |
| Test Summary Report | Summarizes overall testing results                        |

