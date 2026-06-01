import { storeInfo } from "@data/access";
import { COPYRIGHT } from "@constants/footer";

export default function Footer() {
  return (
    <footer className="bg-stone-900 py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div
          className="text-lg text-amber-300 mb-3"
          style={{ fontFamily: "var(--font-noto-serif)" }}
        >
          {storeInfo.name}
        </div>

        <div className="text-sm text-amber-400 leading-relaxed mb-4">
          {storeInfo.address}
          <br />
          TEL: {storeInfo.phone} / 営業時間: {storeInfo.businessHours} /{" "}
          {storeInfo.closedDays}
        </div>

        <div className="text-xs text-stone-400">{COPYRIGHT}</div>
      </div>
    </footer>
  );
}
