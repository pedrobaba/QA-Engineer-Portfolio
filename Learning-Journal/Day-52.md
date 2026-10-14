# Day 52 Learning Journal — Proxy Testing

## What I Learned

Today, I learned how a proxy acts as an intermediary between a client and a server. I also learned that Charles Proxy can help QA testers inspect HTTP/HTTPS traffic routed through it.

I installed Charles Proxy on Windows and successfully captured a request from SauceDemo.

The captured request was a `GET` request to `/` with an HTTP `304` response. I learned that `304 Not Modified` is associated with conditional caching and does not automatically indicate a defect.

I also inspected four caching-related headers: `If-None-Match`, `If-Modified-Since`, `ETag`, and `Last-Modified`.

## Practical Experience

I completed and reviewed the first four tasks:

1. Understood the purpose of proxy testing.
2. Installed and opened Charles Proxy.
3. Captured SauceDemo browser traffic.
4. Inspected request and response headers.

## Challenges and Lessons

One important lesson was that a status code alone is not enough to determine whether an application is behaving correctly.

I also learned that identifying a header is different from verifying its value and proving how the server used it.

## QA Skills Practiced

- HTTP request inspection
- Status-code interpretation
- Request and response header inspection
- Basic proxy traffic capture
- Evidence-based testing

