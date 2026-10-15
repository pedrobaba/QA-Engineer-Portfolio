# Day 53 — DevTools Advanced QA Techniques

## Overview

Day 53 focused on using Chrome DevTools to investigate browser behaviour, inspect DOM elements and CSS, analyse network activity, and debug JavaScript execution.

The practical exercises were performed on SauceDemo.

## Learning Objectives

- Investigate browser Console messages.
- Inspect DOM elements and applied CSS.
- Distinguish declared CSS rules from computed styles.
- Observe network activity associated with user actions.
- Use DOM breakpoints to investigate element changes.
- Locate the JavaScript Call Stack.
- Use conditional breakpoints to pause execution under specific conditions.
- Distinguish observed behaviour from confirmed defects.

## 1. Console Investigation

### Observation

The following message appeared in the Console and was reproduced after reloading the page:

`Permissions policy violation: unload is not allowed in this document.`

The Products and Cart pages continued to work normally during the checks.

### QA Assessment

The message is a reproducible browser Console observation. It does not, by itself, establish a functional defect.

Further investigation would be required to determine its cause and whether it affects application behaviour.

## 2. DOM and CSS Inspection

The Products heading was inspected using the Elements panel.

A CSS property was temporarily changed in DevTools, and the visible styling changed. Reloading the page restored the original styling.

### Key Learning

DevTools allows testers to inspect HTML elements and experiment with CSS without permanently modifying the application's source code.

A temporary styling change is an investigation technique, not automatically a defect.

## 3. Computed Styles

The Computed panel displayed a font size of `14px` for the selected element.

A relevant CSS rule was identified, but the exact selector or stylesheet was not recorded.

### Key Learning

- **Styles** shows applicable CSS declarations, including overridden rules.
- **Computed** shows the final CSS values applied by the browser.

The selected element should be recorded when documenting computed values so that the observation can be reproduced accurately.

## 4. Network Inspection

The Add to cart action was tested using the Network panel.

### Observations

- No cart-related Fetch/XHR request was identified.
- The cart badge updated.
- The selected product appeared in the cart.
- A request to Google Analytics was observed with a status shown as `(blocked:other)`.
- The method and status of a cart-related request were not recorded because no such request was identified.

### QA Assessment

The cart's visible behaviour worked as expected during the test. The available evidence does not establish a cart defect or prove that no network activity of any kind occurred.

The Google Analytics request should be treated separately from the cart action unless further evidence establishes a relationship.

**Security note:** Sensitive values in request URLs must be redacted before screenshots or logs are shared publicly.

## 5. DOM Breakpoints

A DOM breakpoint was set on a cart-related element.

When Add to cart was clicked, DevTools paused execution and the selected element changed.

### Key Learning

DOM breakpoints can help identify when an element or its descendants are modified during JavaScript execution.

The call stack was visible during the exercise, but the top frame was not identified. Call Stack interpretation remains an area for further practice.

## 6. Conditional Breakpoints

A relevant JavaScript line was located, a conditional breakpoint was set, and execution paused during the relevant action.

### Key Learning

A normal breakpoint pauses whenever execution reaches a line. A conditional breakpoint pauses only when the specified condition evaluates to true.

The exact condition was not recorded in this exercise.

## 7. Day 53 Summary

| Area | Result |
|---|---|
| Console investigation | Completed |
| DOM and CSS inspection | Completed |
| Computed Styles inspection | Completed |
| Network investigation | Completed |
| DOM breakpoint | Completed |
| Call Stack inspection | Practised; further learning required |
| Conditional breakpoint | Completed |

## Key Takeaways

1. A Console message does not automatically indicate a defect.
2. QA conclusions must be supported by reproducible evidence.
3. DevTools can help inspect HTML, CSS, network activity, and JavaScript execution.
4. Computed Styles shows the final values applied by the browser.
5. DOM breakpoints help investigate when elements change.
6. Conditional breakpoints help isolate specific execution conditions.
7. The Call Stack is useful for tracing the function calls involved in a paused execution.
8. No confirmed application defect was identified during this practice.
