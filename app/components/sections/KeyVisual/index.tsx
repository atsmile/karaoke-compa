"use client";

import Image from "next/image";
import TelButton from "@ui/TelButton";
import FeatureBadge from "./FeatureBadge";
import { features } from "@data/keyvisual";

export default function KeyVisual() {
  return (
    <section
      data-layout="KeyVisual"
      className="relative w-full h-100 md:h-125 bg-stone-900"
    >
      <Image
        src="/images/stage.jpeg"
        alt="カラオケ喫茶コンパ ステージ"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "left center" }}
        priority
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-4xl mx-auto left-0 right-0">
        <div className="animate-fade-in [animation-delay:100ms] opacity-0 inline-block bg-amber-400/30 border border-amber-300 text-amber-200 text-xs px-4 py-1 rounded-full mb-5 w-fit">
          京橋駅徒歩圏内 · 20年以上の実績
        </div>

        <h1
          className="animate-fade-in [animation-delay:200ms] opacity-0 text-3xl md:text-5xl font-bold text-white mb-3 leading-relaxed"
          style={{
            fontFamily: "var(--font-noto-serif)",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          お昼から夜まで
          <br />
          気軽に歌えるお店
        </h1>

        <p className="animate-fade-in [animation-delay:300ms] opacity-0 text-sm text-amber-300 mb-6">
          アットホームな大人の社交場 · 昼12時から営業
        </p>

        <div className="animate-fade-in [animation-delay:400ms] opacity-0 flex flex-wrap gap-2 mb-8">
          {features.map((text) => (
            <FeatureBadge key={text}>{text}</FeatureBadge>
          ))}
        </div>

        <div className="animate-fade-in [animation-delay:500ms] opacity-0">
          <TelButton size="lg" />
        </div>
      </div>
    </section>
  );
}
