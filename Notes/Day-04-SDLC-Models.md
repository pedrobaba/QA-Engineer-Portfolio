# Day 4 – SDLC Models

## Objective

The goal of today's lesson is to understand the different Software Development Life Cycle (SDLC) models and how Quality Assurance (QA) Engineers contribute to each stage of software development.

---

# What is SDLC?

**Software Development Life Cycle (SDLC)** is a structured process used to plan, design, develop, test, deploy, and maintain software applications.

A well-defined SDLC helps development teams deliver high-quality software efficiently while reducing risks and defects.

---

# Common SDLC Phases

1. Requirement Analysis
2. System Design
3. Development
4. Testing
5. Deployment
6. Maintenance

---

# 1. Waterfall Model

The Waterfall Model is a **linear** software development approach where each phase must be completed before moving to the next.

## Workflow

Requirements
⬇️

Design
⬇️

Development
⬇️

Testing
⬇️

Deployment
⬇️

Maintenance

### Advantages

- Easy to understand and manage.
- Clear documentation.
- Suitable for projects with fixed requirements.

### Disadvantages

- Testing begins late.
- Difficult to accommodate requirement changes.
- Bugs are often discovered near the end of development.

### QA Engineer's Role

- Reviews requirements.
- Creates test plans and test cases.
- Executes testing after development is completed.
- Reports defects and verifies bug fixes.

---

# 2. Agile Model

Agile is an **iterative** software development methodology where development and testing happen continuously in short cycles called **Sprints**.

Instead of waiting until development is complete, QA works alongside developers throughout the project.

## Agile Workflow

Planning

⬇️

Sprint Planning

⬇️

Development

⬇️

Testing

⬇️

Review

⬇️

Next Sprint

### Advantages

- Continuous testing.
- Faster feedback.
- Easier to adapt to changing requirements.
- Frequent software releases.

### Disadvantages

- Requires strong communication.
- Scope may change frequently.
- Documentation can be lighter than in Waterfall.

### QA Engineer's Role

- Participates in Sprint Planning.
- Writes test cases before development is completed.
- Performs continuous testing during each sprint.
- Collaborates closely with developers and Product Owners.
- Verifies bug fixes before sprint completion.

---

# 3. V-Model

The V-Model (Verification and Validation Model) extends the Waterfall Model by planning testing activities alongside each development phase.

Every development activity has a corresponding testing activity.

## Relationship

Requirements
↔ Acceptance Testing

System Design
↔ System Testing

Architecture Design
↔ Integration Testing

Module Design
↔ Unit Testing

Coding

### Advantages

- Testing starts early.
- Better defect prevention.
- Strong documentation.
- High software quality.

### Disadvantages

- Less flexible.
- Requirement changes are difficult.
- Not suitable for rapidly changing projects.

### QA Engineer's Role

- Reviews requirements.
- Designs test cases early.
- Plans testing activities before coding is completed.
- Executes different levels of testing after development.

---

# Comparison of SDLC Models

| Feature | Waterfall | Agile | V-Model |
|---------|-----------|--------|---------|
| Development Style | Sequential | Iterative | Sequential |
| Testing Begins | After Development | During Every Sprint | Planned Early |
| Requirement Changes | Difficult | Easy | Moderate |
| Customer Feedback | End of Project | Continuous | Limited |
| Documentation | High | Moderate | High |
| Best For | Stable Projects | Fast-changing Projects | High-quality Systems |

---

# Which Model is Most Common Today?

Today, **Agile** is the most widely used SDLC model because it allows teams to:

- Deliver software faster.
- Respond quickly to changing requirements.
- Receive continuous customer feedback.
- Improve software quality through continuous testing.

Many modern companies use Agile frameworks such as **Scrum** or **Kanban**.

---

# Key Takeaways

- SDLC provides a structured process for software development.
- Waterfall follows a step-by-step approach.
- Agile focuses on continuous collaboration and frequent releases.
- The V-Model emphasizes planning testing alongside development.
- QA Engineers play an important role throughout the software development process, especially in Agile environments.

---

# Summary

Understanding SDLC models helps QA Engineers know **when** testing should begin, **how** testing fits into the development process, and **how** to collaborate effectively with developers and stakeholders.

As a QA Engineer, choosing the appropriate testing strategy often depends on the organization's SDLC model.
