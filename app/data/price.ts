import type { PriceItem } from "@defs/types";

export const prices: PriceItem[] = [
  {
    time: "昼 12:00〜18:00",
    title: "共通",
    setPrice: 1500,
    flatRatePrice: 2700,
  },
  {
    time: "夜 18:00〜23:00",
    title: "男性",
    setPrice: 2000,
    flatRatePrice: 2600,
  },
  {
    time: "夜 18:00〜23:00",
    title: "女性",
    setPrice: 1500,
    flatRatePrice: 2100,
  },
];
