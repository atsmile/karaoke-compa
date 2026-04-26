import KeyVisual from "@components/sections/KeyVisual";
import Gallery from "@components/sections/Gallery";
import Price from "@components/sections/Price";
import Faq from "@components/sections/Faq";
import Access from "@components/sections/Access";

export default function Home() {
  return (
    <main className="min-h-screen">
      <KeyVisual />
      <Gallery />
      <Price />
      <Faq />
      <Access />
    </main>
  );
}
