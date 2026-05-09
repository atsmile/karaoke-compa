import { afterEach, beforeEach, beforeAll } from "vitest";
import { vi } from "vitest";
import { page } from "vitest/browser";
import { screenshot } from "@storycap-testrun/browser";

vi.mock("@hooks/useInView", () => ({
  useInView: () => ({ ref: { current: null }, isInView: true }),
}));

beforeEach(async (context) => {
  const projectName = context.task.file?.projectName ?? "";
  const isMobileProject = projectName.includes("storybook-mobile");
  const isDesktopStory = context.task.name.includes("Desktop");

  if (isMobileProject && isDesktopStory) {
    context.skip();
  }
  if (!isMobileProject && !isDesktopStory) {
    context.skip();
  }
});

beforeAll(() => {
  vi.mock("@hooks/useInView", () => ({
    useInView: () => ({ ref: { current: null }, isInView: true }),
  }));
});

afterEach(async (context) => {
  await screenshot(page, context);
});
