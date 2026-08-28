# Day 24 — Risk Analysis Practice

## Task 1 — Multiple Choice

### 1. What is the main purpose of Risk-Based Testing?

**Answer: B — To prioritize testing based on risk.**

### 2. Which two factors are commonly used to evaluate risk?

**Answer: C — Likelihood and Impact.**

### 3. Which feature would usually have the highest testing priority?

**Answer: C — Payment processing.**

### 4. A feature was recently changed and is highly complex. What does this suggest?

**Answer: B — Higher likelihood of defects.**

### 5. Which is the best example of high impact?

**Answer: C — Customer payment fails.**

### 6. Does Risk-Based Testing mean low-risk features should never be tested?

**Answer: B — No.**

---

## Task 2 — Identify the Risk Level

| Scenario | Risk Level |
|---|---|
| Users cannot complete payments | High |
| Product image is slightly misaligned | Low |
| Users occasionally receive incorrect search results | Medium |
| Customer passwords are exposed | High |
| A footer link has the wrong text | Low |
| Users cannot add products to their cart | High |

---

## Task 3 — SauceDemo Prioritization

### Priority Order

1. Checkout
2. Cart
3. Login
4. Product Sorting
5. Product Images
6. Footer Links

### Reasoning

Checkout, Cart, and Login have the highest priority because failures in these features can prevent users from accessing the application, adding products, or completing a purchase.

Product Sorting and Product Images are important for the user experience but generally have less impact on the main purchasing flow.

Footer Links have the lowest priority because they do not directly affect the main shopping and checkout process.

---

## Task 4 — Risk Analysis

### Risk Table

| Feature | Likelihood | Impact | Priority |
|---|---|---|---|
| Payment | High | High | High |
| Product Search | Medium | Medium | Medium |
| Footer Text | Low | Low | Low |
| User Authentication | Medium | High | High |
| Profile Theme Colour | Low | Low | Low |
| Cart | High | High | High |

### Highest Priority

- Payment
- Cart
- User Authentication

### Medium Priority

- Product Search

### Low Priority

- Footer Text
- Profile Theme Colour

### If Only 30 Minutes Were Available

I would test Payment, Cart, and User Authentication first because they have the highest combination of likelihood and impact.

Failures in these areas could prevent users from accessing the application, adding products, or completing transactions.

---

## Task 5 — QA Thinking

### Scenario

> "We only have one hour before release. Test everything."

### 1. Is it realistic to test everything thoroughly in one hour?

No. It is usually not realistic to test everything thoroughly in one hour, especially when an application contains many features, test scenarios, devices, browsers, and possible user inputs.

### 2. What testing approach would I recommend?

I would recommend Risk-Based Testing because it helps prioritize testing based on the likelihood of defects and the impact those defects could have on users or the business.

### 3. What factors would I use to prioritize features?

- Likelihood of failure
- Impact of failure
- Business criticality
- Recent changes
- Feature complexity
- Previous defects

### 4. Three high-risk e-commerce features

1. Payment
2. Checkout
3. User Authentication

### 5. Why is Risk-Based Testing useful when time is limited?

Risk-Based Testing is useful because it helps testers focus their effort on features with the highest likelihood of failure and the greatest potential impact.

This increases the chances of finding critical defects before release.

---

## Task 6 — Interview Practice

### 1. What is Risk-Based Testing?

Risk-Based Testing is a testing approach where testing activities are prioritized based on the level of risk associated with different features. Features with a higher likelihood of failure and greater impact receive more testing attention.

### 2. What is risk in software testing?

Risk is a potential problem or event that could negatively affect the application, users, or business.

### 3. What is likelihood?

Likelihood is the probability or chance that a defect or problem may occur.

### 4. What is impact?

Impact is how serious the consequences would be if a defect or problem occurs.

### 5. How do likelihood and impact help prioritize testing?

They help testers identify which areas have the greatest risk. Features that are more likely to fail and would have serious consequences should receive higher testing priority.

### 6. Give two examples of high-risk features.

- Payment processing
- User Authentication

### 7. Does a low-risk feature mean it should never be tested?

No. Low-risk features should still be tested when time and resources allow. They simply receive lower priority compared with high-risk features.

### 8. What factors can increase the likelihood of defects?

The likelihood of defects may increase when a feature is:

- Complex
- Recently changed
- Developed quickly
- Connected to multiple systems
- Previously associated with many defects

### 9. How would you prioritize testing if you had limited time?

I would identify features with the highest risk by considering their likelihood of failure and potential impact. I would test critical features such as authentication, cart, checkout, payment, security, and recently changed areas before lower-risk features.

### 10. Why is Risk-Based Testing important for a QA Engineer?

Risk-Based Testing is important because it helps QA Engineers use limited testing time and resources effectively. It ensures that critical and high-risk areas receive more attention, increasing the chance of finding serious defects before release.

---

## Key Learning

> Risk-Based Testing = Prioritize testing based on risk.

> Risk = Likelihood × Impact.

High likelihood + High impact = High testing priority.
