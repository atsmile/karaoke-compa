"use client";

import { useState } from "react";
import type { FaqItem as FaqItemType } from "@defs/types";

export default function FaqItem({ question, answer }: FaqItemType) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-amber-100 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center py-4">
        <span className="text-sm font-medium text-stone-900">{question}</span>
        <span
          className={`text-amber-500 text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        >
          +
        </span>
      </div>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "200px" : "0px" }}
      >
        <p className="text-sm text-stone-600 pb-4 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
