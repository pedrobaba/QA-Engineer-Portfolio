# Day 45 — Cross-Browser Testing

## Overview

Cross-browser testing verifies that a web application behaves as expected across the browsers it supports.

The objective is to identify browser-specific differences that may affect functionality, usability, layout, or compatibility.

Browsers tested in today's exercises:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Apple Safari

**Practice note:** The scenarios and results documented today are hypothetical learning exercises, not results from executing tests against a live application.

## Learning Objectives

* Explain cross-browser testing and why it matters.
* Compare the same functionality across supported browsers.
* Build a browser compatibility matrix.
* Record expected and actual results.
* Use browser DevTools Console and Network evidence.
* Distinguish observed client-side symptoms from API/backend symptoms.
* Write clear browser-specific defect reports.
* Make an evidence-based release recommendation.

## 1. What Is Cross-Browser Testing?

Cross-browser testing checks whether a website or web application works consistently across supported browsers.

A feature may work in Chrome but fail in Firefox because of differences in browser behavior, JavaScript execution, supported web APIs, browser settings, or other compatibility factors.

### Example

| Feature | Chrome | Firefox | Edge | Safari |
| ------- | ------ | ------- | ---- | ------ |
| Login   | PASS   | FAIL    | PASS | PASS   |

This indicates that Login is not working consistently across the tested browsers.

A failed test does not, by itself, establish the root cause.

## 2. Why Cross-Browser Testing Matters

Cross-browser testing helps QA teams identify:

* Features that fail in a particular browser.
* Differences in layout and rendering.
* JavaScript errors or unsupported browser features.
* Browser-specific network or authentication behavior.
* Differences in form validation and user interactions.
* Compatibility risks affecting users and business operations.

## 3. Browser Compatibility Matrix

A compatibility matrix records the outcome of testing a feature in each supported browser.

| Browser | Version | Login result |
| ------- | ------- | ------------ |
| Chrome  | 154     | PASS         |
| Firefox | 154     | FAIL         |
| Edge    | 154     | PASS         |
| Safari  | 18      | PASS         |

The browser versions above belong to the hypothetical exercise.

A real test report should record the actual browser version, operating system, test environment, and observed result.

## 4. Using DevTools to Investigate Failures

### Console

The Console helps identify JavaScript errors, warnings, and other client-side problems.

Example:

`TypeError: Cannot read properties of undefined`

This error can indicate that code attempted to access a property on an undefined value. Further investigation is needed to establish the cause.

### Network

The Network panel helps inspect requests, responses, headers, payloads, and timing.

Example Firefox evidence:

* Login fails.
* A JavaScript TypeError appears.
* `POST /api/login` is not sent.

This suggests that the failure occurs before the login request is sent. It is a clue, not definitive proof of the root cause.

### HTTP 500

Example Safari evidence:

* `POST /api/checkout` is sent.
* The response is `500 Internal Server Error`.

This points toward an error on the server/API side, but server logs and further investigation are needed to determine the underlying cause.

## 5. Evidence-Based Defect Classification

| Evidence                                                      | Initial investigation direction   |
| ------------------------------------------------------------- | --------------------------------- |
| JavaScript error and request not sent                         | Client-side/browser compatibility |
| Request sent and HTTP 500 returned                            | Server/API investigation          |
| Different results across browsers, but no diagnostic evidence | Investigate further               |

**Important:** Do not declare the root cause based on a single symptom. Record what was observed and investigate before assigning a definitive cause.

## 6. Writing a Browser-Specific Bug Report

A useful bug report contains:

* Bug title
* Environment
* Preconditions
* Reproduction steps
* Expected result
* Actual result
* Evidence
* Severity and priority, where applicable

### Example bug title

**Login fails on Firefox due to JavaScript TypeError**

### Example environment

* Browser: Firefox 154
* Operating system: Windows 11

These details are from the hypothetical exercise and should be replaced with verified information when reporting a real defect.

### Example actual result

Login fails. The Console displays `TypeError: Cannot read properties of undefined`, and the expected `POST /api/login` request is not sent.

## 7. Severity and Release Decisions

A browser-specific failure should be assessed against:

* The application's supported-browser requirements.
* The functionality affected.
* The number and type of users potentially affected.
* Business impact.
* Available workarounds.
* The severity and likelihood of the failure.

If a core feature such as Login fails in a supported browser, QA should investigate the impact and recommend an appropriate release decision.

A release recommendation should be based on evidence, product requirements, and the team's release criteria.

## Key Takeaways

1. Cross-browser testing verifies behavior across supported browsers.
2. A feature passing in most browsers does not mean it passes in every supported browser.
3. A compatibility matrix makes browser differences easy to identify.
4. Console and Network evidence help narrow down the investigation.
5. A JavaScript error does not automatically prove a browser defect.
6. An HTTP 500 response indicates a server error response, but further investigation is needed to establish the root cause.
7. Bug reports should distinguish expected behavior from actual behavior.
8. Severity and release decisions should reflect actual impact and product requirements.
9. QA should follow the evidence instead of assuming the root cause.

## Day 45 Status

**Topic covered:** Cross-Browser Testing

**Practice completed:** Hypothetical browser matrix, test execution, defect classification, bug reporting, and release recommendation.

**Next practical step:** Execute cross-browser checks on a real application, capture evidence, and document verified results.
