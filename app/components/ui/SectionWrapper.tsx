"use client";

import { motion } from "framer-motion";

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
    <motion.section
      id={id}
      data-layout="SectionWrapper"
      className={`${variantClass[variant]} border-b border-amber-100 py-16 px-6`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="max-w-4xl mx-auto">{children}</div>
    </motion.section>
  );
}
