# Day 52 — Charles Proxy Practical Report

## Project Information

- **Application:** SauceDemo
- **Tool:** Charles Proxy
- **Operating system:** Windows 10/11
- **Testing focus:** Proxy traffic capture and HTTP caching headers
- **Status:** In progress

## Objective

Practice capturing browser traffic and inspecting HTTP request and response details using Charles Proxy.

## Test Results

### Test 1 — Initial Traffic Capture

**Action:** Enabled recording in Charles and opened SauceDemo.

**Observed result:**

- Request method: `GET`
- Request path: `/`
- Response status: `304`

**Assessment:** Traffic capture was successful. The `304` status is consistent with conditional caching, but the relevant validator values were not recorded.

### Test 2 — Request and Response Header Inspection

**Observed headers:**

| Header | Direction | Result |
|---|---|---|
| `If-None-Match` | Request | Present |
| `If-Modified-Since` | Request | Present |
| `ETag` | Response | Present |
| `Last-Modified` | Response | Present |

**Response status:** `304 Not Modified`

**Assessment:** The required headers were located. Their actual values were not recorded, so the specific cache-validation decision cannot be independently established from this evidence alone.

## Findings

No confirmed defect was identified during the completed tasks.

The `304` response was not treated as a defect because it is a valid HTTP status used in conditional caching.

## Limitations

- The actual values of the caching headers were not recorded.
- No request or response modification was performed.
- The cache-disabled comparison remains pending.
- No conclusion is made about the overall performance or correctness of SauceDemo based on this limited exercise.

## Conclusion

The completed exercises demonstrated basic Charles Proxy setup, browser traffic capture, and request/response header inspection. Further testing is needed to compare normal and cache-disabled responses.

