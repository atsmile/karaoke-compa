import type { Preview } from "@storybook/nextjs-vite";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "../app/globals.css";

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

const preview: Preview = {
  parameters: {
    // ...既存のまま
  },
  decorators: [
    (Story) => (
      <div className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
