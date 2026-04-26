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

  test("ページ全体", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot("top-fullpage.png", {
      fullPage: true,
      mask: [page.locator("iframe")],
    });
  });
});
