type Props = {
  size?: "sm" | "md" | "lg";
};

export default function TelButton({ size = "md" }: Props) {
  const sizeClass = {
    sm: "px-6 py-2 text-base",
    md: "px-8 py-3 text-lg",
    lg: "px-10 py-4 text-xl",
  };

  return (
    <a
      data-layout="TelButton"
      href="tel:0669284566"
      aria-label="電話する 06-6928-4566"
      className={`
        w-fit block bg-amber-800 hover:bg-amber-900 text-white rounded-lg tracking-wide transition-colors ${sizeClass[size]}`}
    >
      ☎ 06-6928-4566
    </a>
  );
}
