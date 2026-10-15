# Day 53 Learning Journal — DevTools Advanced QA Techniques

## What I Practised

Today I used Chrome DevTools on SauceDemo to investigate Console messages, inspect DOM elements and CSS, review Network activity, and practise JavaScript breakpoints.

I reproduced a Permissions Policy message related to the `unload` event. The Products and Cart pages continued to work normally during my checks, so I did not classify the message as a confirmed defect.

I changed a CSS property temporarily and observed the visual result. Reloading restored the original styling. I also used the Computed panel, where Chrome displayed a font size of `14px` for the selected element.

During Network testing, the cart badge updated and the selected product appeared in the cart. I did not identify a cart-related network request. I also observed a blocked Google Analytics collection request, but I did not establish a connection between that request and the cart action.

I successfully used a DOM breakpoint and a conditional breakpoint to pause JavaScript execution.

## What I Learned

- Console messages need investigation before being classified as defects.
- The Computed panel shows the final CSS values applied by the browser.
- Network activity should be linked to a user action using evidence rather than assumptions.
- DOM breakpoints help investigate changes to page elements.
- Conditional breakpoints can pause execution only when a specified condition is true.
- The Call Stack helps trace function calls during paused JavaScript execution.

## What I Need to Improve

I could open the Call Stack panel but could not identify its top frame. I am currently using YouTube to learn how to interpret stack frames, function names, script files, and line numbers.

I also need to improve how I record exact selectors, source locations, and breakpoint conditions so that my findings are easier to reproduce.

## Final Reflection

I completed the planned Day 53 exercises. No confirmed application defect was identified.

My main goal for continued learning is to become more confident with the JavaScript Call Stack and to capture more precise technical evidence during debugging.
