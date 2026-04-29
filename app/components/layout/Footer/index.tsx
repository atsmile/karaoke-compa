import { storeInfo } from "@data/access";
import { COPYRIGHT } from "@constants/footer";

export default function Footer() {
  const address = storeInfo.find((item) => item.label === "住所")?.value;
  const tel = storeInfo.find((item) => item.label === "電話")?.value;
  const hours = storeInfo.find((item) => item.label === "営業時間")?.value;
  const holiday = storeInfo.find((item) => item.label === "定休日")?.value;

  return (
    <footer className="bg-stone-900 py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div
          className="text-lg text-amber-300 mb-3"
          style={{ fontFamily: "var(--font-noto-serif)" }}
        >
          カラオケ喫茶 コンパ
        </div>

        <div className="text-sm text-amber-400 leading-relaxed mb-4">
          {address}
          <br />
          TEL: {tel} / 営業時間: {hours} / {holiday}
        </div>

        <div className="text-xs text-stone-400">{COPYRIGHT}</div>
      </div>
    </footer>
  );
}
