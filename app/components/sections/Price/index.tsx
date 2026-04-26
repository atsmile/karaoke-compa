import SectionHeader from "@components/ui/SectionHeader";
import SectionWrapper from "@components/ui/SectionWrapper";
import PriceCard from "./PriceCard";

export default function Price() {
  const prices = [
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

  return (
    <SectionWrapper variant="white" id="price">
      <SectionHeader label="price" title="料金" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {prices.map((price) => (
          <PriceCard key={price.title} {...price} />
        ))}
      </div>

      <p className="text-xs text-amber-500">
        ※セット料金はアルコール1杯またはソフトドリンク3杯込み・歌い放題。飲み放題はセット料金を含む金額です。
      </p>
    </SectionWrapper>
  );
}
