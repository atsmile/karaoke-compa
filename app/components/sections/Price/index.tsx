import SectionHeader from "@ui/SectionHeader";
import SectionWrapper from "@ui/SectionWrapper";
import PriceCard from "./PriceCard";
import { prices } from "@data/price";
import { PRICE_NOTE } from "@constants/price";

export default function Price() {
  return (
    <SectionWrapper variant="white" id="price">
      <SectionHeader label="price" title="料金" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {prices.map((price) => (
          <PriceCard key={price.title} {...price} />
        ))}
      </div>

      <p className="text-xs text-amber-500">{PRICE_NOTE}</p>
    </SectionWrapper>
  );
}
