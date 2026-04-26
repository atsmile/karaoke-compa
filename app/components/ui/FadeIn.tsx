"use client";

import { useInView } from "@/app/hooks/useInView";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function FadeIn({ children, className = "" }: Props) {
  const { ref, isInView } = useInView();

  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform:
          isInView || prefersReducedMotion ? "none" : "translateY(24px)",
        transition: prefersReducedMotion
          ? "none"
          : "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}
