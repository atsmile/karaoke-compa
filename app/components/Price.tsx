import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

export default function Price() {
  return (
    <SectionWrapper variant="white" id="price">
      <SectionHeader label="price" title="料金" />

      <p className="text-sm text-amber-700 mb-8">すべて税込・歌い放題</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
          <div className="text-xs text-amber-500 mb-2">昼 12:00〜18:00</div>
          <div className="text-base font-medium text-amber-800 mb-4">共通</div>
          <div className="flex justify-between text-sm py-2.5 border-t border-amber-100">
            <span className="text-amber-700">入場料</span>
            <span className="text-stone-900 font-medium">¥1,500</span>
          </div>
          <div className="flex justify-between text-sm py-2.5 border-t border-amber-100">
            <span className="text-amber-700">飲み放題</span>
            <span className="text-stone-900 font-medium">¥2,700</span>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
          <div className="text-xs text-amber-500 mb-2">夜 18:00〜23:00</div>
          <div className="text-base font-medium text-amber-800 mb-4">男性</div>
          <div className="flex justify-between text-sm py-2.5 border-t border-amber-100">
            <span className="text-amber-700">入場料</span>
            <span className="text-stone-900 font-medium">¥2,000</span>
          </div>
          <div className="flex justify-between text-sm py-2.5 border-t border-amber-100">
            <span className="text-amber-700">飲み放題</span>
            <span className="text-stone-900 font-medium">¥2,600</span>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
          <div className="text-xs text-amber-500 mb-2">夜 18:00〜23:00</div>
          <div className="text-base font-medium text-amber-800 mb-4">女性</div>
          <div className="flex justify-between text-sm py-2.5 border-t border-amber-100">
            <span className="text-amber-700">入場料</span>
            <span className="text-stone-900 font-medium">¥1,500</span>
          </div>
          <div className="flex justify-between text-sm py-2.5 border-t border-amber-100">
            <span className="text-amber-700">飲み放題</span>
            <span className="text-stone-900 font-medium">¥2,100</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-amber-500">
        ※入場料にはアルコール1杯またはソフトドリンク3杯が含まれます。
      </p>
    </SectionWrapper>
  );
}
