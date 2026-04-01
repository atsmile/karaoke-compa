import Image from "next/image";

export default function Gallery() {
  const photos = [
    { src: "/images/interior.jpeg", alt: "店内ソファ席" },
    { src: "/images/stage2.jpeg", alt: "ステージ・照明" },
    { src: "/images/counter.jpeg", alt: "カウンター席" },
    { src: "/images/drinks.jpeg", alt: "ドリンク" },
    { src: "/images/livedam.jpeg", alt: "LIVE DAM" },
    { src: "/images/mic.jpeg", alt: "マイク" },
  ];

  return (
    <section className="bg-amber-50 border-b border-amber-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-xs text-amber-500 tracking-widest uppercase mb-2">
          gallery
        </div>

        <h2
          className="text-2xl text-stone-900 mb-8"
          style={{ fontFamily: "var(--font-noto-serif)" }}
        >
          店内の様子
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative h-48 rounded-xl overflow-hidden border border-amber-100"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
