# Day 56 — Learning Journal

## Topic
Regression Testing Strategy

## What I Learned

Today, I learned how regression testing differs from retesting and how to choose tests after a developer fixes a defect.

Retesting focuses on the original issue. Regression testing checks whether existing functionality still works after a change. Both are important because fixing one problem does not guarantee that related functionality remains unaffected.

Using a simulated discount-code issue, I practiced identifying tests for cart totals, shipping calculations, checkout, payment, and order creation. I also learned to prioritize tests based on the changed functionality, dependencies, and potential business impact.

Another important lesson was how to respond when the original defect passes retesting but a different feature fails. The new failure should be documented separately when appropriate and investigated without automatically assuming that the fix caused it.

## Tasks Completed

- Identified regression testing scenarios.
- Distinguished retesting from regression testing.
- Selected appropriate regression tests after a discount calculation fix.
- Prioritized tests for critical checkout-related functionality.
- Analyzed a simulated checkout failure following a fix.

## Challenge and Reflection

The key challenge is deciding how much regression testing is necessary when time is limited. Testing every feature may not be practical, so a QA tester needs to understand the change and prioritize affected or high-risk areas.

I also learned that a passing retest confirms the result of the specific test performed; it does not prove that every related workflow or the entire application is defect-free.

## How I Can Apply This

When testing a real application, I will identify the functionality changed, review related dependencies, retest the original defect, and select regression tests based on risk and impact. I will document failures with clear expected and actual results and avoid making unsupported claims about their causes.

## Practice Status

The exercises and scenario analysis were completed. The test cases were designed but were not executed against a real application during this session.

## Key Takeaway

**Retesting checks the fix; regression testing checks what the change may have affected.**
