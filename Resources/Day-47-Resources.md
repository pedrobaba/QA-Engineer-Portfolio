# Resources

## Day 47 — Mobile Interaction Testing Practice

### Testing Environment
- **Application:** SauceDemo
- **Browser:** Google Chrome
- **Testing tool:** Chrome DevTools Device Mode
- **Viewport:** 390 × 844 pixels
- **Testing type:** Mobile web interaction testing using desktop browser emulation
- **Physical device tested:** No

### Learning Resources

1. **Chrome DevTools — Device Mode**  
   https://developer.chrome.com/docs/devtools/device-mode/  
   Learn how to simulate mobile screen sizes, test responsive layouts, and inspect websites in different viewport configurations.

2. **MDN Web Docs — Responsive Design**  
   https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design  
   Learn how responsive websites adapt to different screen sizes and orientations.

3. **web.dev — Learn Responsive Design**  
   https://web.dev/learn/design/  
   Learn the principles behind responsive layouts and mobile-friendly web experiences.

4. **SauceDemo Practice Application**  
   https://www.saucedemo.com/  
   Practice mobile web interactions involving login, navigation, product selection, cart management, form validation, and checkout.

### Practical Testing Completed

Using Chrome DevTools mobile emulation, I tested the following workflows on SauceDemo:

- Mobile viewport configuration and page usability
- Opening and closing the navigation menu
- Adding products to the cart
- Verifying cart badges and product state
- Removing products and checking cart updates
- Empty checkout form validation
- Entering checkout information and navigating between fields
- Reviewing the order overview and completing checkout
- Returning to the Products page and checking cart state

### Results

- **Overall result:** All tested checks passed.
- **Defects observed:** None in the workflows tested.
- **Evidence:** Record screenshots or screen recordings only if captured and saved.

### Testing Limitations

Testing was performed in desktop Chrome using mobile viewport emulation. This does not replace testing on a physical iPhone or other mobile devices. Native mobile applications, actual mobile keyboards, operating-system behavior, and real-device performance were not tested.

### Key Learning

Mobile web testing involves more than checking whether a page fits the screen. It also requires verifying that navigation, buttons, forms, cart updates, validation messages, and complete user workflows remain usable within a mobile viewport.
