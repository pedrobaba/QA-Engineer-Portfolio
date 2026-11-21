const { test, expect } = require("@playwright/test");

test("login page loads", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await expect(page).toHaveTitle("Swag Labs");
});

test("valid login works", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
  await expect(page).toHaveURL(/inventory/);
});
