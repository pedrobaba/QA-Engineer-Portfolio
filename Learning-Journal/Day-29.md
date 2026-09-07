# Day 29 — Learning Journal

**Date:** September 7, 2026

## 📚 Topic

**ISTQB Foundation — Defect Management**

---

## 🎯 What I Learned

Today I studied defect management and practiced identifying, documenting, prioritizing, and managing software defects.

I learned about:

- Errors
- Defects
- Failures
- Defect reports
- Severity
- Priority
- Defect life cycle
- Reopened defects
- Defect clustering

---

## 🧠 Key Learning

One of the most important concepts I learned today is:

> **Severity = Impact**

> **Priority = Urgency**

Severity tells me how badly a defect affects the software, while priority tells me how urgently it should be fixed.

---

## 🔄 Defect Life Cycle

I learned the typical defect workflow:

```text
New
 ↓
Assigned
 ↓
In Progress
 ↓
Fixed
 ↓
Retest
 ↓
Verified
 ↓
Closed

I also learned that if a defect fails during retesting, the existing defect should normally be reopened.

Fixed
 ↓
Retest
 ↓
Failed
 ↓
Reopened
 ↓
Verified
 ↓
Closed
```
### What I Need to Improve

I initially confused the Reopened status with New when a defect failed during retesting.

I learned that when the original defect still exists, the existing defect should normally be reopened rather than creating a duplicate defect.

I also need to continue improving my understanding of severity classification because severity levels can depend on the project's defined guidelines.
---
# 🔑 Key Takeaways
Error   = Human mistake
Defect  = Problem in software
Failure = Incorrect behavior observed

Severity = Impact
Priority = Urgency

Failed Retest = Reopen existing defect
