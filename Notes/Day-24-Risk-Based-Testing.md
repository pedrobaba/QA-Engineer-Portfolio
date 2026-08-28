# Day 24 — Risk-Based Testing

## What is Risk-Based Testing?

Risk-Based Testing is a testing approach where testing activities are prioritized according to the level of risk associated with different features or areas of an application.

The main idea is:

> Higher Risk = Higher Testing Priority

When time and resources are limited, high-risk features should receive more testing attention.

---

## What is Risk?

A risk is a potential problem or event that could negatively affect the application, users, or business.

Examples include:

- Users cannot log in.
- Payments fail.
- Users cannot complete checkout.
- Customer data is exposed.
- Orders are duplicated.
- The application crashes.

---

## Risk Factors

Two important factors used when evaluating risk are:

### Likelihood

Likelihood refers to how likely a problem or defect is to occur.

The likelihood of defects may increase when a feature is:

- Complex
- Recently changed
- Developed quickly
- Connected to multiple systems
- Associated with previous defects

### Impact

Impact refers to how serious the consequences would be if a problem or defect occurs.

High-impact failures may include:

- Payment failures
- Security breaches
- Data loss
- Users being unable to log in
- Users being unable to complete orders

Low-impact failures may include:

- Minor visual issues
- Small spacing problems
- Typographical errors

---

## Risk Formula

A simple way to evaluate risk is:

> Risk = Likelihood × Impact

This does not always require an exact mathematical calculation.

The purpose is to help prioritize testing effort.

---

## Risk Levels

| Likelihood | Impact | Typical Risk Level |
|---|---|---|
| High | High | High |
| High | Low | Medium |
| Low | High | Medium or High |
| Low | Low | Low |

---

## Example: E-Commerce Application

| Feature | Likelihood | Impact | Testing Priority |
|---|---|---|---|
| Payment | High | High | High |
| Checkout | High | High | High |
| Cart | High | High | High |
| User Authentication | Medium | High | High |
| Product Search | Medium | Medium | Medium |
| Footer Text | Low | Low | Low |
| Profile Theme Colour | Low | Low | Low |

---

## How Risk-Based Testing Works

1. Identify potential risks.
2. Analyze the likelihood of failure.
3. Analyze the impact of failure.
4. Prioritize risks.
5. Design and execute tests based on priority.
6. Review risks as the application changes.

---

## Prioritizing Testing

When time is limited, high-risk features should generally be tested first.

For an e-commerce application, a possible priority order is:

### High Priority

- Payment
- Checkout
- Cart
- User Authentication

### Medium Priority

- Product Search
- Product Sorting

### Low Priority

- Footer Text
- Minor UI issues
- Profile Theme Colour

Low-risk features should not be ignored completely. They receive lower priority when time and resources are limited.

---

## Key Takeaway

> Risk-Based Testing helps QA testers use limited time and resources effectively by focusing more testing effort on features with a higher likelihood of failure and greater potential impact.
