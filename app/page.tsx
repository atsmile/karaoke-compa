import KeyVisual from "@components/KeyVisual";
import Gallery from "@components/Gallery";
import Price from "@components/Price";
import Faq from "@components/Faq";
import Access from "@components/Access";

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
