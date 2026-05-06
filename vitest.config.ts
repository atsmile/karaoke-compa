import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import storybookScreenshot from "@storycap-testrun/browser/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import type { TestProjectConfiguration } from "vitest/config";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const createStorybookProject = (
  name: string,
  viewport: { width: number; height: number },
): TestProjectConfiguration => ({
  extends: true,
  plugins: [
    storybookTest({ configDir: path.join(dirname, ".storybook") }),
    storybookScreenshot({
      viewport,
      output: {
        dir: "__screenshots__",
        file: path.join("[file]", `${name}-[name].png`),
      },
    }),
  ],
  test: {
    name,
    browser: {
      enabled: true,
      headless: true,
      provider: playwright({}),
      instances: [{ browser: "chromium" }],
    },
    setupFiles: [".storybook/vitest.setup.ts"],
  },
});

export default defineConfig({
  test: {
    projects: [
      createStorybookProject("storybook-mobile", { width: 390, height: 844 }),
      createStorybookProject("storybook-desktop", { width: 1280, height: 800 }),
    ],
  },
});
