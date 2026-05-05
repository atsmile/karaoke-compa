import { afterEach, beforeAll, beforeEach } from "vitest";
import { vi } from "vitest";
import { page } from "vitest/browser";
import { screenshot } from "@storycap-testrun/browser";

beforeAll(() => {
  vi.mock("@hooks/useInView", () => ({
    useInView: () => ({ ref: { current: null }, isInView: true }),
  }));
});

beforeEach(async () => {
  await page.viewport(1280, 720);
});

afterEach(async (context) => {
  await screenshot(page, context);
});
