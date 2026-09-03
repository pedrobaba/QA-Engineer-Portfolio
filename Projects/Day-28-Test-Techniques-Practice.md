# Day 28 — Test Techniques Practice

**Date:** September 3, 2026

---

## 🎯 Objective

The objective of this exercise was to practice selecting and applying appropriate software testing techniques to realistic testing scenarios.

---

# Exercise 1 — Equivalence Partitioning

### Requirement

Username must contain between 5 and 10 characters.

### Test Partitions

| Partition | Test Data | Expected |

|---|---|---|

| Less than 5 characters | `pedr` | Invalid |

| 5–10 characters | `Pedrof` | Valid |

| More than 10 characters | `Pedroflanbe` | Invalid |

### Result

The three equivalence partitions were identified successfully.

---

# Exercise 2 — Boundary Value Analysis

### Requirement

Password must contain between 8 and 20 characters.

### Boundary Test Values

| Test Value | Expected |

|---:|---|

| 7 | Invalid |

| 8 | Valid |

| 9 | Valid |

| 19 | Valid |

| 20 | Valid |

| 21 | Invalid |

### Result

All important boundary values were identified.

---

# Exercise 3 — Decision Table Testing

### Requirement

Checkout is allowed only when:

- User is logged in.

- Cart contains a product.

### Decision Table

| Rule | Logged in? | Product in cart? | Expected Result |

|---|---|---|---|

| 1 | Yes | Yes | Checkout allowed |

| 2 | Yes | No | Checkout blocked |

| 3 | No | Yes | Checkout blocked |

| 4 | No | No | Checkout blocked |

### Result

All four possible combinations were identified.

---

# Exercise 4 — State Transition Testing

### Scenario

An account becomes locked after three failed login attempts.

### State Flow

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

### Post-Lock Behavior

Once locked, the user cannot continue normal login and may need to complete an account verification or recovery process.

⸻

### Exercise 5 — Experience-Based Testing

Error Guessing Examples

While testing a login form, potential error scenarios include:

* Empty email
* Empty password
* Invalid email format
* Very long password
* Special characters
* Unexpected characters

### Exploratory Testing

A tester explores a new application while learning its behavior, designing tests, and executing them to discover unexpected issues.

⸻

Exercise 6 — Bank Transfer Testing

Requirements

* Account number: exactly 10 digits
* Amount: ₦1,000–₦500,000
* OTP: exactly 6 digits



