import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";
import "./preview.css";

const preview: Preview = {
  initialGlobals: {
    viewport: { value: "mobile2" },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
