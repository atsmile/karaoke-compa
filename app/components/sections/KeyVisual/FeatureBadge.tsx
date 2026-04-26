import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function FeatureBadge({ children }: Props) {
  return (
    <span
      data-layout="FeatureBadge"
      className="bg-white/20 border border-white/40 rounded-lg px-3 py-1.5 text-xs text-white"
    >
      {children}
    </span>
  );
}
