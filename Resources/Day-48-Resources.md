## Day 48 — Responsive & Device Testing

### Testing Environment
- **Application:** SauceDemo
- **Browser:** Google Chrome
- **Testing tool:** Chrome DevTools Device Mode
- **Viewports tested:** 320 × 640, 390 × 844, 768 × 1024, and 844 × 390 pixels
- **Testing type:** Responsive web testing and end-to-end regression testing using browser emulation
- **Physical device testing:** Not performed

### Learning Resources

1. **Chrome DevTools — Device Mode**  
   https://developer.chrome.com/docs/devtools/device-mode/  
   Learn how to simulate mobile screen sizes, change viewport dimensions, and inspect responsive layouts.

2. **MDN Web Docs — Responsive Design**  
   https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design  
   Understand how responsive websites adapt their layouts to different viewport sizes and orientations.

3. **web.dev — Learn Responsive Design**  
   https://web.dev/learn/design/  
   Study responsive design principles and techniques for building usable experiences across screen sizes.

4. **SauceDemo Practice Application**  
   https://www.saucedemo.com/  
   Practice responsive web testing using product selection, cart management, checkout forms, order summaries, and order confirmation.

### Practical Testing Completed

The following areas were tested using Chrome DevTools Device Mode:

- Responsive product listing and content readability
- Product images, buttons, navigation, and cart accessibility
- Portrait and landscape orientation
- Checkout information form usability
- Checkout overview and order-summary presentation
- Order confirmation and post-checkout navigation
- Responsive navigation menu interactions
- Cart item removal and badge updates
- End-to-end shopping workflow at mobile and tablet-sized viewports

### Results Summary

- **Practical task groups completed:** 8
- **Reported results:** All submitted checks passed
- **Defects observed:** None reported in the tested scenarios

### Testing Limitations

Testing was conducted in desktop Chrome using simulated mobile and tablet viewport dimensions. The results do not establish behavior on physical devices, across all mobile browsers, or within native mobile applications.

### Key Learning

Responsive testing should cover both visual presentation and functional behavior. A page may fit a viewport but still have inaccessible buttons, broken navigation, unusable forms, or interrupted user workflows. Testing multiple viewport sizes and orientations helps identify these problems.
