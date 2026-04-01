import { ReactNode } from "react";
import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

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

export const metadata: Metadata = {
  title: "カラオケ喫茶 コンパ | 京橋駅徒歩圏内・昼12時から営業",
  description:
    "大阪市都島区、京橋駅徒歩圏内のカラオケ喫茶コンパ。昼12時から営業、歌い放題・飲み放題あり。食べ物持込OK・貸切OK・年中無休。",
  keywords: [
    "カラオケ喫茶",
    "京橋",
    "都島区",
    "大阪",
    "カラオケ",
    "喫茶店",
    "歌い放題",
    "飲み放題",
  ],
  openGraph: {
    title: "カラオケ喫茶 コンパ | 京橋駅徒歩圏内・昼12時から営業",
    description:
      "大阪市都島区、京橋駅徒歩圏内のカラオケ喫茶コンパ。昼12時から営業、歌い放題・飲み放題あり。食べ物持込OK・貸切OK・年中無休。",
    url: "https://karaoke-compa.com",
    siteName: "カラオケ喫茶 コンパ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://karaoke-compa.com/images/stage.jpeg",
        width: 1200,
        height: 630,
        alt: "カラオケ喫茶 コンパ",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
