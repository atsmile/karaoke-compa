import KeyVisual from "@sections/KeyVisual";
import Gallery from "@sections/Gallery";
import Price from "@sections/Price";
import Faq from "@sections/Faq";
import Access from "@sections/Access";

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
