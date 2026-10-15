# Day 53 — DevTools Advanced QA Practice

## Project Overview

This project documents exploratory QA practice using Chrome DevTools on SauceDemo.

The exercises covered Console investigation, DOM/CSS inspection, Network activity, DOM breakpoints, and conditional breakpoints.

## Test Environment

- Application: SauceDemo
- Browser: Google Chrome
- Tool: Chrome DevTools
- Testing approach: Exploratory testing

## Test Findings

### Finding 1 — Console Permissions Policy Message

**Observation:** The Console displayed `Permissions policy violation: unload is not allowed in this document.`

**Reproducibility:** The message appeared again after reloading the page.

**Observed impact:** Products and Cart navigation worked normally during the checks.

**Assessment:** No confirmed functional defect. The underlying cause and impact were not established.

### Finding 2 — DOM and CSS Inspection

**Observation:** A CSS property was temporarily changed in DevTools, producing a visible styling change.

**Result:** Reloading restored the original styling.

**Assessment:** Expected behaviour during a temporary DevTools experiment. No defect identified.

### Finding 3 — Computed Styles

**Observation:** The Computed panel displayed a font size of `14px` for the selected element.

**Limitation:** The exact selector or stylesheet was not recorded.

**Assessment:** Learning observation only; no defect identified.

### Finding 4 — Cart Interaction and Network Activity

**Observation:** After Add to cart was clicked, the cart badge updated and the selected product appeared in the cart. No cart-related network request was identified.

**Additional observation:** A Google Analytics collection request displayed `(blocked:other)`.

**Assessment:** No confirmed cart defect. The analytics request was not established as a cause of or dependency for the cart behaviour.

### Finding 5 — DOM Breakpoint

**Observation:** A DOM breakpoint paused JavaScript execution when the selected element changed.

**Limitation:** The top stack frame was not recorded.

**Assessment:** Debugging technique successfully demonstrated; further Call Stack practice required.

### Finding 6 — Conditional Breakpoint

**Observation:** A conditional breakpoint was set on a relevant JavaScript line, and execution paused during the relevant action.

**Limitation:** The exact condition and line details were not recorded.

**Assessment:** Technique demonstrated. No application defect identified.

## Overall Result

**Status:** Completed

**Confirmed defects:** None

**Main learning outcome:** Practical use of Chrome DevTools to inspect UI behaviour and investigate JavaScript execution.

## Limitations

- Exact Console context and source location were not recorded.
- The selector for the computed font size was not documented.
- No cart-related request was identified, so its method and response status could not be assessed.
- The Call Stack top frame was not identified.
- The conditional breakpoint expression was not recorded.

These limitations should be retained rather than replaced with assumptions.

## Conclusion

The exercises improved familiarity with Chrome DevTools. The observed behaviours did not provide sufficient evidence to report a confirmed application defect. Further practice will focus on interpreting the JavaScript Call Stack.
