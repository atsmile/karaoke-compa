import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import storybookScreenshot from "@storycap-testrun/browser/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
          // storybookプロジェクト
          storybookScreenshot({
            viewport: { width: 1280, height: 800 },
            output: {
              dir: "__screenshots__",
              file: path.join("[file]", "desktop", "[name].png"),
            },
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
          // storybook-mobileプロジェクト
          storybookScreenshot({
            viewport: { width: 390, height: 844 },
            output: {
              dir: "__screenshots__",
              file: path.join("[file]", "mobile", "[name].png"),
            },
          }),
        ],
        test: {
          name: "storybook-mobile",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
