import { afterEach, beforeAll, beforeEach } from "vitest";
import { vi } from "vitest";
import { page } from "vitest/browser";
import { screenshot } from "@storycap-testrun/browser";

const VIEWPORTS: Record<string, { width: number; height: number }> = {
  mobile: { width: 390, height: 844 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 800 },
};

const DEFAULT_VIEWPORT = VIEWPORTS.desktop;

beforeAll(() => {
  vi.mock("@hooks/useInView", () => ({
    useInView: () => ({ ref: { current: null }, isInView: true }),
  }));
});

beforeEach(async (context) => {
  const globals = (context.task.meta as Record<string, unknown>)
    ?.storyGlobals as Record<string, unknown> | undefined;
  const viewportKey = (globals?.viewport as { value?: string } | undefined)
    ?.value;
  const viewport =
    (viewportKey ? VIEWPORTS[viewportKey] : undefined) ?? DEFAULT_VIEWPORT;
  await page.viewport(viewport.width, viewport.height);
});

afterEach(async (context) => {
  await screenshot(page, context);
});
