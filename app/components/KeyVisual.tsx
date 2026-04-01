import Image from "next/image";
import TelButton from "./TelButton";

export default function KeyVisual() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] mt-0">
      <Image
        src="/images/stage.jpeg"
        alt="カラオケ喫茶コンパ ステージ"
        fill
        style={{ objectFit: "cover", objectPosition: "left center" }}
        priority
      />

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/55" />

      {/* テキスト */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-4xl mx-auto left-0 right-0">
        <div className="inline-block bg-amber-400/30 border border-amber-300 text-amber-200 text-xs px-4 py-1 rounded-full mb-5 w-fit">
          京橋駅徒歩圏内 · 20年以上の実績
        </div>

        <h1
          className="text-3xl md:text-5xl font-bold text-white mb-3 leading-relaxed"
          style={{
            fontFamily: "var(--font-noto-serif)",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          お昼から気軽に
          <br />
          歌えるお店
        </h1>

        <p className="text-sm text-amber-300 mb-6">
          アットホームな大人の社交場 · 昼12時から営業
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "🎤 歌い放題",
            "🍺 飲み放題あり",
            "🍱 食べ物持込OK",
            "👥 貸切OK",
            "📅 年中無休",
          ].map((text) => (
            <span
              key={text}
              className="bg-white/20 border border-white/40 rounded-lg px-3 py-1.5 text-xs text-white"
            >
              {text}
            </span>
          ))}
        </div>

        <TelButton />
      </div>
    </section>
  );
}
