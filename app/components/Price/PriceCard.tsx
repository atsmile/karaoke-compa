type Props = {
  time: string;
  title: string;
  setPrice: number;
  flatRatePrice: number;
};

export default function PriceCard({
  time,
  title,
  setPrice,
  flatRatePrice,
}: Props) {
  return (
    <div
      data-layout="PriceCard"
      className="bg-amber-50 border border-amber-100 rounded-xl p-6"
    >
      <div className="text-xs text-amber-500 mb-2">{time}</div>
      <div className="text-base font-medium text-amber-800 mb-4">{title}</div>
      <div className="flex justify-between text-sm py-2.5 border-t border-amber-100">
        <span className="text-amber-700">セット料金</span>
        <span className="text-stone-900 font-medium">
          ¥{setPrice.toLocaleString()}
        </span>
      </div>
      <div className="flex justify-between text-sm py-2.5 border-t border-amber-100">
        <span className="text-amber-700">飲み放題</span>
        <span className="text-stone-900 font-medium">
          ¥{flatRatePrice.toLocaleString()}
        </span>
      </div>
      <div className="text-xs text-amber-400 mt-1">セット料金含む</div>
    </div>
  );
}
