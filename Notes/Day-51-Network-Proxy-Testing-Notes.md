# Day 51 — Network & Proxy Testing Notes

## Overview

Day 51 focused on inspecting browser network activity using Chrome DevTools. I practiced reviewing HTTP requests, response status codes, request and response headers, response content, resource loading, request timings, and browser caching behavior.

The practical exercises used SauceDemo.

## Learning Objectives

By the end of this practice session, I learned how to:

- Inspect network requests using Chrome DevTools.
- Identify request URLs, HTTP methods, resource types, and status codes.
- Investigate a failed request without immediately treating it as a confirmed defect.
- Read request and response headers.
- Inspect the HTML response returned by a web application.
- Identify failed resource requests.
- Compare resource loading times.
- Investigate browser caching behavior.
- Record findings and distinguish observations from confirmed defects.

---

## 1. Network Request Inspection

Chrome DevTools provides a Network panel for monitoring requests made by a browser while loading or interacting with a web application.

During the exercise, I inspected three requests.

| Resource | Method | Status | Resource type | Timing |
|---|---|---:|---|---:|
| Browser-generated blob URL | GET | 200 | Script (reported) | 7 ms |
| SauceDemo product image | GET | 200 | JPG image | 327 ms |
| Google Fonts resource | GET | 200 | Font | 235 ms |

### Key observations

- All three inspected requests returned HTTP 200.
- The product image and font resources loaded successfully.
- The blob URL was browser-managed; its reported resource type should be verified in DevTools if this exercise is repeated.
- Request timings represent one recorded run and may change between runs.

### QA takeaway

A successful status code is useful evidence, but it does not automatically prove that a resource or the whole application behaves correctly.

---

## 2. Failed Network Request Investigation

During the investigation, I initially observed a request to:

`https://www.saucedemo.com/inventory.html`

The request returned HTTP 404 during the initial observation.

I then checked the normal login flow.

### Verification results

- Status during normal login: `200 OK`
- Products page loaded: Yes
- Repeated login result: Reported as the same successful behavior
- Additional observations: None recorded

### Conclusion

The initial 404 was not confirmed as a reproducible defect during the follow-up verification.

A single failed request should be investigated before being reported as a bug. The tester should reproduce the behavior, check the affected user flow, and compare the result with the application's expected behavior.

---

## 3. Request and Response Header Inspection

I inspected the request and response headers for:

`https://www.saucedemo.com/?/inventory.html`

| Property | Recorded value |
|---|---|
| Method | GET |
| Status | 200 |
| Response `Content-Type` | `text/html; charset=utf-8` |
| Request `Accept` | `text/html,application/xhtml+xml,application/xml;q=0.9,image/jxl,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7` |

### Understanding the headers

**Content-Type**

The response header `Content-Type: text/html; charset=utf-8` indicates that the server returned HTML content encoded using UTF-8.

**Accept**

The request header `Accept` lists the media types that the browser can accept. The `q` values express relative preferences for the listed types.

### QA takeaway

Request headers describe information sent by the client, while response headers describe information returned by the server. They should not be confused with the response body.

---

## 4. Response Content Inspection

I inspected the HTML response and identified these elements:

**Page title**

```html
<title>Swag Labs</title>
```

**Application root**

```html
<div id="root"></div>
```

**JavaScript bundle**

```html
<script type="module" crossorigin src="/assets/index-D3OxT1jE.js"></script>
```

**Stylesheet**

```html
<link rel="stylesheet" crossorigin href="/assets/index-aSZoiKGF.css">
```

### Findings

- The HTML response contained the Swag Labs page title.
- The document included a root element for the client-rendered application.
- JavaScript and CSS asset references were present.
- The Products page rendered as expected during the test.
- No additional observations were recorded.

### QA takeaway

Inspecting the response body can help identify application structure and referenced assets. However, finding an asset reference in HTML does not by itself prove that the asset loaded successfully or that the application has no JavaScript errors.

---

## 5. Resource Loading Failure Investigation

I inspected the Network panel for failed resource requests during the test run.

### Result

- Failed resources observed: None
- Additional observations: None recorded

### Conclusion

No failed resource requests were observed during this run.

This conclusion applies only to the requests captured during the exercise. It does not prove that the application can never experience resource-loading failures.

---

## 6. Request Timing Comparison

I compared the timings of three resources recorded during the investigation.

| Resource | Status | Recorded timing |
|---|---:|---:|
| Browser-generated blob resource | 200 | 24 ms |
| Products document | 200 | 942 ms |
| `manifest.json` | 200 | 681 ms |

### Findings

- The Products document was the slowest of these three recorded resources at 942 ms.
- The manifest request took 681 ms.
- The blob resource took 24 ms.
- All three requests returned HTTP 200.

### QA takeaway

A timing measurement is a snapshot, not a complete performance assessment. To investigate a suspected performance defect, repeat the measurement under controlled conditions and consider the resource type, request details, caching, and user-visible impact.

---

## 7. Browser Caching Investigation

I compared the Products document and a product image under two conditions: normal reload and cache disabled in Chrome DevTools.

### Recorded results

| Resource | Normal reload | Cache disabled | Difference |
|---|---:|---:|---:|
| Products document | 942 ms | 942 ms | 0 ms |
| Sauce Pullover product image | 683 ms | 603 ms | 80 ms faster with cache disabled |

**Product image URL:**

`https://www.saucedemo.com/assets/sauce-pullover-1200x1500-BfbI-PSd.jpg`

### Findings

- The document timing remained unchanged at 942 ms.
- The image was 80 ms faster in the cache-disabled run.
- No additional observations were recorded.
- Cache-source indicators were not recorded.

### Conclusion

The comparison did not show a consistent timing improvement from normal caching. The image was faster during the cache-disabled run, while the document timing remained unchanged.

These results do not establish whether the image was served from memory cache, disk cache, or the network during normal reload. Network variation and server response times can affect individual measurements.

### QA takeaway

When investigating browser caching, record both resource timings and DevTools cache indicators where available. Avoid assuming that disabling the cache must make every resource slower.

---

## 8. Final Network Testing Summary

| Check | Result |
|---|---|
| Requests inspected in Task 1 | 3 |
| Failed resources observed in Task 5 | None |
| Slowest resource in Task 6 | Products document — 942 ms |
| Caching comparison | Document unchanged; image 80 ms faster with cache disabled |
| Confirmed network defect | None confirmed |
| Additional observations | None recorded |

### Overall conclusion

The Day 51 exercises provided practice in inspecting browser network activity, reviewing headers and response content, investigating a failed request, comparing resource timings, and observing browser caching behavior.

No reproducible network defect was confirmed during these exercises.

This was a practice investigation, not a complete network-performance audit. The results are limited to the requests and conditions recorded during testing.

## Important Scope Note

Although the day is titled **Network & Proxy Testing**, the documented exercises above cover browser network inspection and caching. Proxy interception or request/response modification should only be added to the portfolio after those activities have actually been performed.

## Key Takeaways

1. Use the Network panel to inspect requests, status codes, headers, and timings.
2. Investigate failed requests before declaring them defects.
3. Keep request headers, response headers, and response bodies distinct.
4. A `200 OK` status does not guarantee correct application behavior.
5. Record the resource and timing conditions when comparing performance.
6. Cache-disabled timings may be faster or slower depending on the individual request and test conditions.
7. Report only what the evidence supports.
