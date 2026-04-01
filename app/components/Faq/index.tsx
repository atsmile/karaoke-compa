import SectionHeader from "@components/SectionHeader";
import SectionWrapper from "@components/SectionWrapper";
import FaqItem from "./FaqItem";

const faqs = [
  {
    question: "団体でも可能ですか？",
    answer: "はい、団体でも可能ですのでお気軽にお越しください。",
  },
  {
    question: "カラオケの機種は何ですか？",
    answer: "最新のLIVE DAMをご用意しております。",
  },
  {
    question: "食べ物の持ち込みは可能ですか？",
    answer: "飲食物の持ち込みも可能ですのでお気軽にお越しください。",
  },
  {
    question: "飲み放題はありますか？",
    answer:
      "はい、単品メニューから飲み放題メニューをご用意しておりますので、ぜひお越しください。",
  },
  {
    question: "キャッシュレス対応はしていますか？",
    answer: "はい、ほぼ全てのキャッシュレス対応が可能です。",
  },
];

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
