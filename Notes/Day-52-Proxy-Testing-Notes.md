# Day 52 — Proxy Testing with Charles Proxy

## Overview

Day 52 introduced proxy-based testing using Charles Proxy on Windows 10/11. The objective was to understand how a proxy helps QA testers inspect HTTP/HTTPS traffic between a client and a server.

## Learning Objectives

- Understand the role of a proxy in QA testing.
- Compare Chrome DevTools Network with a proxy tool.
- Capture browser traffic using Charles Proxy.
- Inspect HTTP request methods and status codes.
- Identify request and response headers.
- Understand conditional HTTP caching and the `304 Not Modified` response.

## 1. What Is a Proxy?

A proxy acts as an intermediary between a client and a server. It forwards traffic and can allow testers to inspect requests and responses passing through it.

A simplified flow is:

Browser → Proxy → Server

A proxy can help QA testers investigate communication issues, inspect request headers, examine response data, and troubleshoot unexpected application behavior.

HTTPS inspection may require additional configuration and a trusted certificate. Certificate installation and HTTPS decryption were not part of the completed tasks documented here.

## 2. Chrome DevTools vs Charles Proxy

### Chrome DevTools Network

Chrome DevTools displays browser network activity, including:

- Request URLs
- HTTP methods
- Status codes
- Request and response headers
- Resource types
- Loading timings

### Charles Proxy

Charles Proxy captures traffic routed through it from supported applications. Depending on the configuration, it can also support request and response modification.

The two tools complement each other when investigating web application behavior.

## 3. HTTP Methods and Status Codes

### GET

The `GET` method requests a resource or representation from a server.

### 200 OK

The `200 OK` status indicates that the request succeeded at the HTTP level. The response content must still be validated against the expected behavior.

### 304 Not Modified

The `304 Not Modified` status is associated with conditional requests and caching. It indicates that the client can reuse its cached representation rather than receiving a new response body.

A `304` response is not automatically a defect.

## 4. Conditional Caching Headers

| Header | Direction | Purpose |
|---|---|---|
| `If-None-Match` | Request | Sends an entity tag validator. |
| `If-Modified-Since` | Request | Provides a date-based validator. |
| `ETag` | Response | Identifies a representation for cache validation. |
| `Last-Modified` | Response | Indicates the resource's reported modification time. |

When both `If-None-Match` and `If-Modified-Since` are present, `If-None-Match` generally takes precedence for conditional GET requests.

Recording the presence of these headers does not, by itself, establish which validator determined the server's response.

## 5. Practical Work Completed

### Task 1 — Understand Proxy Testing

Reviewed the purpose of a proxy, the difference between browser DevTools and a proxy, HTTP GET and 200 OK, and a product-price investigation example.

### Task 2 — Prepare Charles Proxy

Installed and opened Charles Proxy on Windows 10/11. No licence purchase was reported.

### Task 3 — Capture Browser Traffic

Opened SauceDemo with Charles recording enabled.

Recorded request:

- Method: `GET`
- Path: `/`
- Status: `304`

This confirmed that browser traffic was captured. The status was consistent with conditional caching, although the relevant validator values were not recorded.

### Task 4 — Inspect Request and Response Headers

Recorded the following:

- `If-None-Match`: Present
- `If-Modified-Since`: Present
- `ETag`: Present
- `Last-Modified`: Present
- Response status: `304`

The header values were not recorded, so the specific validator responsible for the response was not established.

## 6. QA Relevance

Proxy testing can help QA testers:

- Investigate unexpected API or web application behavior.
- Inspect request and response headers.
- Understand conditional caching.
- Compare server responses with expected application behavior.
- Gather evidence for defect reports.

## Key Takeaways

1. A proxy forwards traffic and can expose request and response details.
2. `GET` is used to request a resource.
3. `200 OK` does not guarantee that the response content is correct.
4. `304 Not Modified` is a valid response associated with conditional caching.
5. Request and response headers provide useful evidence when investigating caching.
6. Findings should be based on recorded evidence rather than assumptions.

