"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TelButton from "@components/TelButton";
import FeatureBadge from "./FeatureBadge";

export default function KeyVisual() {
  const features = [
    "🎤 歌い放題",
    "🍺 飲み放題あり",
    "🍱 食べ物持込OK",
    "👥 貸切OK",
    "📅 年中無休",
  ];

  return (
    <section className="relative w-full h-[400px] md:h-[500px]">
      <Image
        src="/images/stage.jpeg"
        alt="カラオケ喫茶コンパ ステージ"
        fill
        style={{ objectFit: "cover", objectPosition: "left center" }}
        priority
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-4xl mx-auto left-0 right-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block bg-amber-400/30 border border-amber-300 text-amber-200 text-xs px-4 py-1 rounded-full mb-5 w-fit"
        >
          京橋駅徒歩圏内 · 20年以上の実績
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-white mb-3 leading-relaxed"
          style={{
            fontFamily: "var(--font-noto-serif)",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          お昼から気軽に
          <br />
          歌えるお店
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-amber-300 mb-6"
        >
          アットホームな大人の社交場 · 昼12時から営業
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {features.map((text) => (
            <FeatureBadge key={text}>{text}</FeatureBadge>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <TelButton size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
