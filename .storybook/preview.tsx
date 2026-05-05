import type { Preview } from "@storybook/nextjs-vite";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "../app/globals.css";
import "./preview.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const parameters: Preview["parameters"] = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  viewport: {
    viewports: {
      mobile: { name: "Mobile", styles: { width: "390px", height: "844px" } },
      tablet: { name: "Tablet", styles: { width: "768px", height: "1024px" } },
      desktop: {
        name: "Desktop",
        styles: { width: "1280px", height: "800px" },
      },
    },
  },
  a11y: {
    test: "todo",
  },
};

const preview: Preview = {
  parameters,
  decorators: [
    (Story) => (
      <div className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
