import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
