"use client";

import { useInView } from "@hooks/useInView";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function FadeIn({ children, className = "" }: Props) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}
