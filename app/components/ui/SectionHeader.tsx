type Props = {
  label: string;
  title: string;
};

export default function SectionHeader({ label, title }: Props) {
  return (
    <div data-layout="SectionHeader" className="mb-8">
      <div className="text-xs text-amber-500 tracking-widest uppercase mb-2">
        {label}
      </div>
      <h2
        className="text-2xl text-stone-900"
        style={{ fontFamily: "var(--font-noto-serif)" }}
      >
        {title}
      </h2>
    </div>
  );
}
