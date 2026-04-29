import Image from "next/image";
import SectionHeader from "@ui/SectionHeader";
import SectionWrapper from "@ui/SectionWrapper";
import { photos } from "@data/gallery";

export default function Gallery() {
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
