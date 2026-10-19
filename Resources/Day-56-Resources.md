## Day 56 — Regression Testing Strategy

### Learning Focus

- Regression testing vs retesting
- Selecting regression tests after a defect fix
- Risk-based test prioritization
- Testing related functionality after code changes
- Recording a new failure without assuming its cause

### Learning Resources

1. **Atlassian — Types of Software Testing**  
   https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing

2. **ISTQB Glossary**  
   https://glossary.istqb.org/  
   Use the glossary to review the formal terminology for regression testing, retesting, and related testing concepts.

### Practice Notes

- Retest the original defect using the relevant scenario.
- Select regression tests based on the change, dependencies, risk, and business impact.
- Consider critical user workflows such as checkout, payment, and order creation when pricing logic changes.
- Record newly observed failures separately when appropriate and investigate their cause.
- Distinguish test design from actual test execution in portfolio documentation.

### Completion Status

- Learning exercises: Completed
- Scenario-based test design: Completed
- Real application execution: Not performed during this session
