import SectionHeader from "@ui/SectionHeader";
import SectionWrapper from "@ui/SectionWrapper";
import FaqItem from "./FaqItem";
import { faqs } from "@data/faq";

export default function Faq() {
  return (
    <SectionWrapper variant="white" id="faq">
      <SectionHeader label="faq" title="よくある質問" />
      <div className="max-w-2xl">
        {faqs.map((faq) => (
          <FaqItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
