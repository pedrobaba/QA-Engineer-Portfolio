# Session 1: First Playwright Test

**Date:** ____________
**Week / Session:** Week 1 / Session 1 of 12
**Time spent:** ____ hrs
**Goal:** Run my first test and understand `test`, `page`, `expect`.

---

## 1. Checklist

- [ ] `node -v`, `npm -v`, `git --version` all show a version
- [ ] Created project: `npm init playwright@latest` (JavaScript, tests folder, GitHub Actions: Yes, install browsers: Yes)
- [ ] Ran example tests: `npx playwright test`
- [ ] Opened the report: `npx playwright show-report`
- [ ] Made a test fail on purpose, then fixed it
- [ ] Wrote `tests/saucedemo.spec.js` (2 tests)
- [ ] Ran it with `--headed` and watched the browser
- [ ] Pushed to GitHub (repo: `playwright-learning`)
- [ ] Wrote these notes

---

## 2. Key ideas (like I'm 8)

| Word | Meaning |
|------|---------|
| `test` | A job for the robot. It has a name and steps. |
| `page` | The robot's browser tab. `page.goto(url)` = "go to this address". |
| `expect` | The robot checks something. If it's wrong, the test fails. |
| `await` | Wait for this step to finish before the next one. |

---

## 3. Commands I used

```
npm init playwright@latest
npx playwright test
npx playwright test saucedemo --headed
npx playwright show-report
git add .
git commit -m "Session 1: first Playwright tests"
git push
```

---

## 4. Code I wrote

```js
const { test, expect } = require('@playwright/test');

test('login page loads', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await expect(page).toHaveTitle('Swag Labs');
});

test('valid login works', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory/);
});
```

---

## 5. Result

- Example tests passed: Yes
- My saucedemo tests passed: Yes
- GitHub push done: Yes
- Confidence (1-5): 4

## 6. Next session

Session 2: Locators, clicks, typing, assertions.