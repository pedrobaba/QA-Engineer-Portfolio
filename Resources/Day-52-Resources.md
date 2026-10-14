## Day 52 — Proxy Testing Resources

### Learning Resources

1. **Charles Proxy — Official Website**  
   https://www.charlesproxy.com/  
   Official product information and documentation for inspecting HTTP/HTTPS traffic.

2. **Charles Proxy — Download**  
   https://www.charlesproxy.com/download/latest-release/  
   Official download page for supported operating systems.

3. **MDN — HTTP Overview**  
   https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview  
   Learn about HTTP requests, responses, methods, headers, and status codes.

4. **MDN — HTTP Caching**  
   https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching  
   Understand browser caching, cache validation, and conditional requests.

5. **MDN — HTTP Response Status Codes**  
   https://developer.mozilla.org/en-US/docs/Web/HTTP/Status  
   Reference for understanding HTTP status codes, including `200 OK` and `304 Not Modified`.

6. **Chrome DevTools — Network Panel**  
   https://developer.chrome.com/docs/devtools/network/  
   Learn how to inspect browser requests, headers, status codes, timings, and cache behavior.

### Practice Application

**SauceDemo**  
https://www.saucedemo.com/

Used to practice capturing browser traffic and inspecting HTTP requests and response headers.

### Day 52 — Progress Summary

**Completed and reviewed:**

- Proxy fundamentals
- Charles Proxy installation and setup
- Initial SauceDemo traffic capture
- Request and response header inspection
- Identification of conditional caching headers

**Recorded observation:**

A `GET /` request returned `304 Not Modified`. The request included `If-None-Match` and `If-Modified-Since`, while the response included `ETag` and `Last-Modified`.

**Limitations:**

- Actual header values were not recorded.
- Cache-disabled response comparison remains pending.
- Request modification and HTTPS decryption were not documented as completed.

**Status:** Day 52 in progress.
