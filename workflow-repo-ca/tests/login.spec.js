import dotenv from "dotenv";
dotenv.config({ path: ".env.example" });
import { test, expect } from "@playwright/test";

// Skip tests if credentials are not provided
if (!process.env.LOGIN_EMAIL || !process.env.LOGIN_PASSWORD) {
  test.describe.skip("login", () => {});
} else {
  test.describe("login", () => {
    test("User can successfully log in with valid credentials", async ({
      page,
    }) => {
      await page.goto("/login/index.html");
      await page.waitForSelector('input[name="email"]');
      await page.fill('input[name="email"]', process.env.LOGIN_EMAIL);
      await page.fill('input[name="password"]', process.env.LOGIN_PASSWORD);
      await page.click('button[type="submit"]');
      // After login, should be redirected to home
      await page.waitForURL("/");
      // Verify welcome heading
      const heading = page.locator("h1").first();
      await expect(heading).toHaveText(/Welcome to this site/);
    });

    test("User sees an error message with invalid credentials", async ({
      page,
    }) => {
      await page.goto("/login/");
      await page.fill('input[name="email"]', "invalid@example.com");
      await page.fill('input[name="password"]', "wrongpassword");
      await page.click('button[type="submit"]');
      // Expect error message displayed
      const message = page.locator("#message-container");
      await expect(message).toBeVisible();
      await expect(message).not.toBeEmpty();
    });
  });
}
