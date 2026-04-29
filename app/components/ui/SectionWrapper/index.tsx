import { FadeIn } from "@ui/FadeIn";

type Props = {
  children: React.ReactNode;
  variant?: "white" | "amber";
  id?: string;
};

export default function SectionWrapper({
  children,
  variant = "white",
  id,
}: Props) {
  const variantClass = {
    white: "bg-white",
    amber: "bg-amber-50",
  };

  return (
    <section
      id={id}
      data-layout="SectionWrapper"
      className={`${variantClass[variant]} border-b border-amber-100 py-16 px-6`}
    >
      <FadeIn>
        <div className="max-w-4xl mx-auto">{children}</div>
      </FadeIn>
    </section>
  );
}
