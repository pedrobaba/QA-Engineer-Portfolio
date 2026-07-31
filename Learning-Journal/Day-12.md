# 📅 Day 12 – Chrome DevTools for Manual QA

**Date:** July 31, 2026

---

# 📚 Topics Covered

- Chrome DevTools Overview
- Elements Tab
- Console Tab
- Network Tab
- Application Tab
- Sources Tab
- HTTP Status Codes
- Using DevTools during Manual Testing

---

# 🎯 Learning Objectives

Today I learned how QA Engineers use Chrome DevTools to investigate application behavior beyond the user interface. I explored the different DevTools tabs and understood how each one helps identify bugs, collect evidence, and communicate findings to developers.

---

# 📝 Key Takeaways

### Chrome DevTools

Chrome DevTools is a built-in browser tool that helps QA Engineers inspect, debug, and analyze web applications.

---

### Elements Tab

Used to:
- Inspect HTML
- Inspect CSS
- Verify UI elements
- Check page structure (DOM)

---

### Console Tab

Used to:
- View JavaScript errors
- Display warnings
- Check application logs

---

### Network Tab

Used to:
- Monitor API requests
- View HTTP status codes
- Measure response times
- Identify failed requests

---

### Application Tab

Used to inspect:
- Cookies
- Local Storage
- Session Storage
- Cache

---

### Sources Tab

Used mainly for:
- Debugging JavaScript
- Setting breakpoints
- Investigating application scripts

---

# 🌐 HTTP Status Codes Learned

| Code | Meaning |
|------|---------|
| 200 | OK |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

# 🧪 Practical Exercise

I investigated the SauceDemo website using Chrome DevTools.

### Console Findings

Observed a **404 (Not Found)** error related to:

`/inventory.html`

This highlighted the importance of understanding whether an issue is caused by expected application behavior (such as accessing a protected page directly) before reporting it as a defect.

---

### Network Findings

- Monitored network requests.
- Identified an HTTP 404 response for `/inventory.html`.
- Learned how to inspect request status codes.

---

### Elements Inspection

Inspected the Login button using the Elements tab to examine its HTML structure and CSS properties.

---

# 💡 What I Learned Today

One important lesson from today's session is that Chrome DevTools is more than a developer tool—it is an essential investigation tool for QA Engineers. It helps identify frontend issues, backend communication problems, JavaScript errors, and browser storage information, making bug reports more detailed and actionable.

---

# 📈 Challenges Faced

I initially confused some DevTools tabs and HTTP status codes, but reviewing the differences helped reinforce my understanding of their specific purposes.

---

# 🚀 Reflection

Today's lesson showed me that successful QA testing involves more than interacting with the application's interface. Using Chrome DevTools allows me to investigate issues more deeply, gather technical evidence, and communicate findings more effectively with developers.

I plan to continue practicing with Chrome DevTools on different websites to become more confident in using it during real-world testing.

---

# ✅ Day 12 Status

**Completed Successfully** ✔️
