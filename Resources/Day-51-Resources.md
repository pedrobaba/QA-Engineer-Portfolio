## Day 51 — Network & Proxy Testing Resources

### Learning Resources

1. **Chrome DevTools — Network panel**  
   https://developer.chrome.com/docs/devtools/network/  
   Learn how to inspect network requests, HTTP methods, status codes, request and response headers, resource types, timing, and browser caching.

2. **Chrome DevTools — Network reference**  
   https://developer.chrome.com/docs/devtools/network/reference/  
   Reference for filtering requests, viewing request details, inspecting timing information, and disabling the browser cache during testing.

3. **MDN — HTTP overview**  
   https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview  
   Understand HTTP requests and responses, methods, status codes, headers, and how browsers communicate with web servers.

4. **MDN — HTTP response status codes**  
   https://developer.mozilla.org/en-US/docs/Web/HTTP/Status  
   Reference for interpreting HTTP status codes, including successful responses and client or server errors.

5. **MDN — HTTP caching**  
   https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching  
   Learn how HTTP caching works and how browsers may reuse previously downloaded resources.

6. **OWASP Web Security Testing Guide**  
   https://owasp.org/www-project-web-security-testing-guide/  
   Reference for web application testing and security-testing techniques. Further proxy-based testing can be studied separately.

### Practice Application

**SauceDemo**  
https://www.saucedemo.com/

Used as the practice application for inspecting browser network activity and comparing resource-loading timings.

### Day 51 — Practical Summary

**Activities completed:**

- Inspected network requests and recorded request details.
- Checked HTTP status codes, methods, resource types, and timings.
- Inspected request and response headers.
- Examined the HTML response structure.
- Investigated a reported failed request and checked normal application behavior.
- Checked for failed resource requests during the test run.
- Compared resource-loading timings.
- Compared normal reload timings with cache-disabled timings.

**Selected observations:**

- Three requests were inspected during the initial network inspection.
- No failed resources were observed during the dedicated resource-loading investigation.
- The Products document returned HTTP 200 during the normal login verification.
- The Products document timing was 942 ms in both recorded caching conditions.
- The Sauce Pullover image took 683 ms with normal caching and 603 ms with caching disabled.
- No reproducible network defect was confirmed during this practice session.

### Limitations

- Timing results represent individual observations and are not a controlled performance benchmark.
- Cache-source indicators were not recorded, so the image's cache behavior cannot be confirmed from timings alone.
- No proxy interception or request modification was documented as completed.
- The findings apply to the recorded test session and do not establish that the application is free of network defects.

### Key Takeaway

Chrome DevTools Network helps QA testers investigate how a web application loads resources, inspect HTTP communication, identify failed requests, and compare loading timings. Findings should be based on recorded evidence, and a single timing difference should not automatically be reported as a defect.
