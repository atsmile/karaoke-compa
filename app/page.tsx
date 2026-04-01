import KeyVisual from "@components/KeyVisual";
import Gallery from "@components/Gallery";
import Price from "@components/Price";
import Access from "@components/Access";

export default function Home() {
  return (
    <main className="min-h-screen">
      <KeyVisual />
      <Gallery />
      <Price />
      <Access />
    </main>
  );
}
