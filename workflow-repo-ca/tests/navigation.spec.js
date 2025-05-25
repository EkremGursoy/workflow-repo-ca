import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("Navigate to venue details page", async ({ page }) => {
    // Go to home page
    await page.goto("/index.html");
    await page.waitForLoadState("networkidle");
    await page.waitForSelector('a[href^="/venue/?id="]');
    // Click the first venue card
    const firstCard = page.locator('a[href^="/venue/?id="]').first();
    await firstCard.click();
    // Verify URL changed to venue details
    await expect(page).toHaveURL(/\/venue\/\?id=/);
    // Verify heading contains "Venue details"
    const heading = page.locator("h1").first();
    await expect(heading).toHaveText(/Venue details/);
  });
});
