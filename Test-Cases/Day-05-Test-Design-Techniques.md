# Day 5 Test Design Techniques

## Equivalence Partitioning

Requirement:
Password must contain 8–20 characters.

Valid:
15

Invalid:
2
25

---

## Boundary Value Analysis

7 ❌

8 ✅

9 ✅

19 ✅

20 ✅

21 ❌

---

## Decision Table

Username         Password     Expected Result

Valid             Valid       Login Successful

Invalid           Valid        Error Message

Valid            Invalid        Error Message

Invalid          Invalid        Error Message

---

## State Transition

Current State      Action           Next State

Active         Failed Login (1st)     Active

Active         Failed Login (2nd)     Active

Active         Failed Login (3rd)     Locked(Counter Reset)
Active          Successful Login       Active 

Locked          Login Attempt       Access Denied

