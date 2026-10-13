# Day 51 — Network & Proxy Testing Journal

## Overview

Day 51 focused on inspecting browser network activity using Chrome DevTools. I practiced reviewing network requests, checking HTTP status codes, inspecting request and response headers, examining HTML responses, investigating failed requests, comparing resource timings, and testing browser caching behavior.

## Tasks Completed

- [x] **Task 1: Network Request Inspection** — Inspected three network requests and recorded their URLs, methods, status codes, resource types, and timings.
- [x] **Task 2: Failed Network Request Investigation** — Investigated an initial `404 Not Found` response for `/inventory.html`. A subsequent normal login returned `200 OK`, and the Products page loaded. I did not confirm a reproducible defect.
- [x] **Task 3: Request and Response Headers** — Identified the request `Accept` header and response `Content-Type` header.
- [x] **Task 4: Response Content Inspection** — Examined the HTML response and identified the application root element, JavaScript bundle, and stylesheet references.
- [x] **Task 5: Resource Loading Failure Investigation** — No failed resource requests were observed during the test run.
- [x] **Task 6: Network Timing Comparison** — Compared the recorded timings of a document, manifest, and browser-managed blob resource.
- [x] **Task 7: Browser Caching Investigation** — Compared document and image timings with normal caching and with the browser cache disabled.
- [x] **Task 8: Final Network Testing Summary** — Consolidated the observations and reviewed the results.

## Key Results

### Network Request Inspection

Three requests were inspected. The reported status codes were `200 OK`. The inspected resources included a product image, a font, and a blob URL.

### Failed Request Investigation

An initial request to `https://www.saucedemo.com/inventory.html` returned `404 Not Found`. During a subsequent normal login, the document returned `200 OK` and the Products page loaded. No reproducible defect was confirmed from the available observations.

### Header Inspection

I identified the following headers:

- **Request `Accept`:** Lists the media types the browser can accept.
- **Response `Content-Type`:** `text/html; charset=utf-8`, indicating an HTML response using UTF-8 character encoding.

### Response Content

I inspected the HTML response and identified:

- The page title: `Swag Labs`
- The application root: `<div id="root"></div>`
- A JavaScript module bundle
- A linked CSS stylesheet

The Products page rendered as expected during the test.

### Resource Timing

| Resource | Recorded time | Status |
|---|---:|---:|
| Products document | 942 ms | 200 |
| `manifest.json` | 681 ms | 200 |
| Blob resource | 24 ms | 200 |

The Products document was the slowest of these three recorded resources in that test run.

### Browser Caching Comparison

| Resource | Normal reload | Cache disabled |
|---|---:|---:|
| Products document | 942 ms | 942 ms |
| Sauce Pullover product image | 683 ms | 603 ms |

The document timing remained unchanged. The product image was 80 ms faster in the cache-disabled run. These are single-run observations and do not establish a consistent performance trend. Cache-source indicators were not recorded, so I cannot conclude whether the image was served from memory cache, disk cache, or the network during the normal reload.

## What I Learned

1. Chrome DevTools Network helps identify requests made while a page loads.
2. HTTP status codes must be interpreted alongside the application’s actual behavior.
3. The request `Accept` header describes media types the client can accept, while `Content-Type` describes the response body’s media type and encoding.
4. Inspecting response content can reveal application structure and linked resources.
5. Timing measurements are snapshots and can vary between runs.
6. Disabling browser caching is useful for comparing resource-loading behavior, but it does not guarantee slower loading for every resource.
7. An unusual status code or timing is not automatically a defect; findings should be reproducible and supported by evidence.

## Challenges and Limitations

- The initial `404` response was not established as a reproducible defect.
- The timing comparison was based on a single recorded run.
- Cache-source indicators were not recorded.
- No failed resources were observed during Task 5.
- No confirmed network defect was identified.
- This day's recorded work focused on browser network inspection and caching. Proxy interception or request modification was not documented as completed.

## Final Outcome

Day 51's eight practical tasks were completed and reviewed. I practiced network request inspection, status-code investigation, header and response-content analysis, resource timing comparison, and browser caching investigation.

**Conclusion:** No reproducible network defect was confirmed in this practice session. The results represent the observations recorded during testing and do not establish that the application is free of network or performance defects.
