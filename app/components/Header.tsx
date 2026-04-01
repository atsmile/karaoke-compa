"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-amber-100 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ロゴ */}
        <div
          className="text-lg font-bold text-amber-800 tracking-wide"
          style={{ fontFamily: "var(--font-noto-serif)" }}
        >
          カラオケ喫茶 コンパ
        </div>

        {/* PC用ナビ */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#price"
            className="text-sm text-amber-700 hover:text-amber-900 transition-colors"
          >
            メニュー・料金
          </a>
          <a
            href="#access"
            className="text-sm text-amber-700 hover:text-amber-900 transition-colors"
          >
            アクセス
          </a>
          <a
            href="tel:0669284566"
            className="text-sm font-bold text-amber-800 hover:text-amber-900 transition-colors"
          >
            ☎ 電話する
          </a>
        </nav>

        {/* ハンバーガーボタン（スマホ用） */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-amber-800 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-amber-800 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-amber-800 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* スマホ用メニュー */}
      {/* スマホ用メニュー */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-white border-t border-amber-100 shadow-md transition-all duration-300 overflow-hidden ${isOpen ? "max-h-48" : "max-h-0"}`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          <a
            href="#price"
            className="text-sm text-amber-700 py-2 border-b border-amber-50"
            onClick={() => setIsOpen(false)}
          >
            メニュー・料金
          </a>
          <a
            href="#access"
            className="text-sm text-amber-700 py-2 border-b border-amber-50"
            onClick={() => setIsOpen(false)}
          >
            アクセス
          </a>
          <a
            href="tel:0669284566"
            className="text-sm font-bold text-amber-800 py-2"
            onClick={() => setIsOpen(false)}
          >
            ☎ 06-6928-4566
          </a>
        </nav>
      </div>
    </header>
  );
}
