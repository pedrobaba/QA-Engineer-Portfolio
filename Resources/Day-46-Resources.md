# QA Engineering Learning Resources

## Day 46 — Mobile Testing Fundamentals

### Learning Focus
Mobile web testing focuses on verifying that websites remain functional, readable, and usable on smaller screens, different orientations, and varying browser zoom levels.

### Website Tested
- [SauceDemo](https://www.saucedemo.com/)

### Test Environment
- Browser: Google Chrome
- Testing method: Chrome DevTools device emulation
- Portrait viewport: 390 × 844 pixels
- Landscape viewport: 844 × 390 pixels
- Browser zoom: 125%

**Environment limitation:** These tests used desktop Chrome's device emulation. They were not performed on a physical mobile device or across multiple mobile browsers.

### Practical Testing Areas
- Responsive layout and content readability
- Product images and Add to Cart buttons
- Shopping cart functionality
- Empty checkout form validation
- Valid checkout information
- Order completion and confirmation
- Portrait and landscape layouts
- Mobile navigation
- Browser zoom and content accessibility

### Testing Results
All recorded checks passed across the eight practical tasks.

No defects were observed in the tested scenarios. These results apply only to the workflows and simulated viewports tested; they do not establish that the entire application is defect-free.

### Key Concepts Reviewed
- Mobile web testing versus native mobile app testing
- Responsive layout validation
- Touch interaction testing
- Mobile checkout form validation
- Orientation testing
- Navigation usability
- Browser zoom and content readability
- Evidence-based defect reporting

### Recommended Reference Resources
- [MDN Web Docs — Cross-browser testing](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Introduction)
- [Chrome DevTools — Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)
- [Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/)
- [Web.dev — Responsive web design basics](https://web.dev/articles/responsive-web-design-basics)
- [Sauce Labs Documentation](https://docs.saucelabs.com/)



### Learning Outcome
Practiced evaluating a web application's layout, shopping cart, checkout validation, navigation, orientation, and zoom behavior using Chrome DevTools. Learned to document observed results while acknowledging the limitations of simulated mobile testing.
