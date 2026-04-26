import { test, expect } from "@playwright/test";

test.describe("トップページ VRT", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("ファーストビュー", async ({ page }) => {
    await expect(page).toHaveScreenshot("top-firstview.png", {
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });
  });
});
