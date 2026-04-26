import Image from "next/image";
import SectionHeader from "@ui/SectionHeader";
import SectionWrapper from "@ui/SectionWrapper";

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
    <SectionWrapper variant="amber">
      <SectionHeader label="gallery" title="店内の様子" />
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
              sizes="(max-width: 768px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
