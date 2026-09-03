# Day 28 — ISTQB Foundation: Test Techniques Review

**Date:** September 3, 2026  
**Roadmap:** 90-Day QA Engineering Roadmap  
**Topic:** ISTQB Foundation — Test Techniques Review

---

## 🎯 Learning Objectives

Today I reviewed the major software testing techniques covered in the ISTQB Foundation syllabus.

By the end of the session, I should be able to:

- Understand what a test technique is.
- Differentiate between black-box, white-box, and experience-based testing techniques.
- Apply Equivalence Partitioning (EP).
- Apply Boundary Value Analysis (BVA).
- Understand Decision Table Testing.
- Understand State Transition Testing.
- Understand Statement and Branch Testing.
- Understand Exploratory Testing.
- Understand Error Guessing.
- Select an appropriate test technique for a given testing situation.

---

# 📚 1. Test Technique Categories

Testing techniques can broadly be grouped into:

### Black-Box Testing

Black-box techniques focus on the behavior of the software without requiring knowledge of its internal code.

Examples:

- Equivalence Partitioning
- Boundary Value Analysis
- Decision Table Testing
- State Transition Testing

---

### White-Box Testing

White-box techniques consider the internal structure or implementation of the software.

Examples:

- Statement Testing
- Branch Testing

---

### Experience-Based Testing

Experience-based techniques rely on the tester's knowledge, experience, intuition, and understanding of common defect patterns.

Examples:

- Exploratory Testing
- Error Guessing

---

# 🧪 2. Equivalence Partitioning

Equivalence Partitioning divides input data into groups (partitions) where the system is expected to behave similarly.

Instead of testing every possible value, representative values can be selected from each partition.

### Example

Requirement:

> Username must contain between 5 and 10 characters.

Possible partitions:

| Partition | Example |
|---|---|
| Less than 5 characters | `pedr` |
| 5–10 characters | `Pedrof` |
| More than 10 characters | `Pedroflanbe` |

The representative values allow the tester to test the different expected behaviors without testing every possible input.

---

# 📏 3. Boundary Value Analysis

Boundary Value Analysis focuses on values at and around the boundaries of an input range.

Defects often occur near minimum and maximum limits.

### Example

Requirement:

> Password must contain between 8 and 20 characters.

Important boundary values:

| Value | Description |
|---:|---|
| 7 | Just below minimum |
| 8 | Minimum |
| 9 | Just above minimum |
| 19 | Just below maximum |
| 20 | Maximum |
| 21 | Just above maximum |

These values provide effective coverage around the boundaries.

---

# 📊 4. Decision Table Testing

Decision Table Testing is useful when system behavior depends on combinations of conditions.

### Example

A checkout process requires:

- User must be logged in.
- Cart must contain a product.

| Rule | Logged in? | Product in cart? | Expected Result |
|---|---|---|---|
| 1 | Yes | Yes | Checkout allowed |
| 2 | Yes | No | Checkout blocked |
| 3 | No | Yes | Checkout blocked |
| 4 | No | No | Checkout blocked |

The table ensures that all important combinations of conditions are considered.

---

# 🔄 5. State Transition Testing

State Transition Testing checks how a system behaves when it moves from one state to another after an event.

### Example

Login/account system:

```text
Active
   ↓
Failed Login
   ↓
Failed Login
   ↓
Failed Login
   ↓
Locked
```

### After the account becomes locked, the user may need to complete an account verification or recovery process before access can be restored.

Important concepts:

* State
* Event
* Transition
* Initial state
* Final state

### 🧠 6. Experience-Based Testing

Experience-based testing uses the tester’s knowledge and previous experience to identify potential problems.

Error Guessing

The tester predicts likely errors and deliberately tests them.

Examples:

* Empty fields
* Very long inputs
* Invalid formats
* Special characters
* Unexpected characters
* Duplicate submissions

Exploratory Testing

The tester explores the application while simultaneously learning about it, designing tests, and executing them.

Exploratory testing is useful when:

* Requirements are incomplete.
* Detailed test cases are not available.
* The tester wants to discover unexpected behavior.

⸻

### 🏦 7. Practical Example — Bank Transfer Form

Suppose a bank transfer form has these requirements:

* Account number: exactly 10 digits
* Transfer amount: ₦1,000–₦500,000
* OTP: exactly 6 digits

Appropriate techniques include:

Account Number

Equivalence Partitioning:

* Less than 10 digits
* Exactly 10 digits
* More than 10 digits

Boundary Value Analysis could also be applied:

* 9 digits
* 10 digits
* 11 digits

Transfer Amount

Boundary Value Analysis:

* ₦999
* ₦1,000
* ₦1,001
* ₦499,999
* ₦500,000
* ₦500,001

Valid/Invalid Combinations

Decision Table Testing can be used when multiple conditions determine whether a transfer should be allowed.

Unusual Inputs

Error Guessing can be used to test unexpected inputs such as:

* Special characters
* Letters where numbers are expected
* Empty values
* Extremely large values
