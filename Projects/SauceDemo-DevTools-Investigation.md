# SauceDemo DevTools Investigation

## Project Overview

This investigation was conducted to understand how Chrome DevTools can assist Manual QA Engineers in identifying UI issues, JavaScript errors, and network-related problems while testing a web application.

**Application:** https://www.saucedemo.com/

**Browser:** Google Chrome

**Operating System:** Windows 10

**Testing Tool:** Chrome DevTools

**Date:** 31 Jul, 2026

---

# Objectives

- Inspect the application's HTML structure.
- Check for JavaScript errors.
- Monitor network requests.
- Inspect page elements.
- Practice using Chrome DevTools during manual testing.

---

# Investigation Steps

## 1. Open Chrome DevTools

- Opened the SauceDemo website.
- Pressed **F12** to launch Chrome DevTools.

---

## 2. Elements Tab Investigation

### Action

Inspected the Login button.

### Findings

- Verified the Login button exists.
- Confirmed the button text displays correctly.
- Observed the HTML structure and CSS classes.
- No visual issues were identified.

---

## 3. Console Tab Investigation

### Action

Checked the Console for JavaScript errors.

### Findings

Observed the following message during testing:

```text
GET https://www.saucedemo.com/inventory.html
404 (Not Found)
```

### Observation

The error occurred while attempting to access the inventory page directly. This should be verified to determine whether it is expected application behavior or a potential issue related to authentication or routing.

---

## 4. Network Tab Investigation

### Action

Opened the Network tab and refreshed the page.

### Findings

Observed multiple network requests.

One request returned:

| Request | Status |
|----------|--------|
| inventory.html | 404 |

### Observation

The request to `inventory.html` returned **HTTP 404 (Not Found)**, indicating that the requested resource was unavailable under the tested conditions.

---

## 5. Application Tab Investigation

### Action

Inspected browser storage.

### Findings

Verified the presence of browser storage used by the application.

Observed:

- Cookies
- Local Storage
- Session Storage

No unusual issues were identified during this investigation.

---

# DevTools Tabs Used

| Tab | Purpose |
|------|---------|
| Elements | Inspect HTML and CSS |
| Console | View JavaScript errors |
| Network | Monitor requests and responses |
| Application | Inspect cookies and browser storage |

---

# Lessons Learned

This investigation demonstrated how Chrome DevTools supports Manual QA testing by allowing testers to:

- Inspect page elements.
- Detect JavaScript errors.
- Monitor API and network traffic.
- Inspect browser storage.
- Collect technical evidence for bug reports.

Using DevTools improves bug reporting by providing developers with detailed technical information to reproduce and resolve issues.

---

# Conclusion

Chrome DevTools is an essential tool for Manual QA Engineers. It helps identify issues beyond the user interface and provides valuable evidence such as console logs, network requests, and HTML inspection results.

This investigation improved my understanding of how QA engineers analyze web applications during testing.
