import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/vrt",
  snapshotDir: "./tests/vrt/__snapshots__",
  updateSnapshots: "missing",
  use: {
    baseURL: "http://localhost:3000",
    contextOptions: {
      reducedMotion: "reduce",
    },
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "iPhone 13",
      use: { ...devices["iPhone 13"] },
    },
  ],
});
