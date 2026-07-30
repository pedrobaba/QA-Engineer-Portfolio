# SauceDemo Test Summary Report

## Project Information

**Project Name:** SauceDemo

**Application URL:** https://www.saucedemo.com/

**Test Engineer:** Sogo Omolanbe

**Test Type:** Manual Functional Testing

**Testing Date:** 30/07/2026

**Testing Duration:** 1 Hour

**Environment:**
- OS: Windows 10
- Browser: Google Chrome (Latest Version)
- Device: Desktop PC

---

# Test Objective

The objective of this testing activity was to verify the core functionality of the SauceDemo application, identify defects, and evaluate whether the application is ready for release.

---

# Scope of Testing

The following modules were tested:

- Login
- Product Listing
- Add to Cart
- Shopping Cart
- Checkout

Modules not tested:

- Performance Testing
- Security Testing
- Accessibility Testing
- Cross-browser Testing

---

# Test Execution Summary

| Metric | Result |
|---------|--------|
| Total Test Cases | 25 |
| Executed | 25 |
| Passed | 22 |
| Failed | 2 |
| Blocked | 1 |
| Not Executed | 0 |

---

# Defect Summary

| Severity | Count |
|----------|------:|
| Critical | 1 |
| High | 0 |
| Medium | 1 |
| Low | 1 |

---

# Major Findings

### Critical Issue

While testing the Checkout feature, clicking the **Checkout** button caused the application to crash and reload unexpectedly. This issue prevented users from completing the checkout process and significantly impacted the user experience.

---

# Test Evidence

Evidence collected during testing included:

- Screenshots
- Screen recordings
- Browser Console logs
- Test execution records

---

# Risks

- Critical defect prevents successful checkout.
- Users may abandon purchases due to application crashes.

---

# Recommendation

The application is **not recommended for release** until the critical checkout defect has been fixed, retested, and verified.

After resolving the issue, regression testing should be performed on the Checkout module to ensure no new defects have been introduced.

---

# Conclusion

A total of **25 test cases** were executed.

- 22 Passed
- 2 Failed
- 1 Blocked

The application's core functionality performed well overall; however, the critical defect in the Checkout process must be resolved before the application can be considered ready for production.

---

**Prepared by:**

**Sogo Omolanbe**

Manual QA Engineer (In Training)
