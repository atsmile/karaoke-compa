import type { PriceItem } from "@defs/types";

export default function PriceCard({
  time,
  title,
  setPrice,
  flatRatePrice,
}: PriceItem) {
  return (
    <div
      data-layout="PriceCard"
      className="bg-amber-50 border border-amber-100 rounded-xl p-6"
      aria-label={`${time} ${title}料金`}
    >
      <div className="text-xs text-amber-500 mb-2">{time}</div>
      <div className="text-base font-medium text-amber-800 mb-4">{title}</div>
      <dl>
        <div className="flex justify-between text-sm py-2.5 border-t border-amber-100">
          <dt className="text-amber-700">セット料金</dt>
          <dd
            className="text-stone-900 font-medium"
            aria-label={`セット料金 ${setPrice.toLocaleString()}円`}
          >
            ¥{setPrice.toLocaleString()}
          </dd>
        </div>
        <div className="flex justify-between text-sm py-2.5 border-t border-amber-100">
          <dt className="text-amber-700">飲み放題</dt>
          <dd
            className="text-stone-900 font-medium"
            aria-label={`飲み放題 ${flatRatePrice.toLocaleString()}円`}
          >
            ¥{flatRatePrice.toLocaleString()}
          </dd>
        </div>
      </dl>
      <div className="text-xs text-amber-400 mt-1">セット料金含む</div>
    </div>
  );
}
