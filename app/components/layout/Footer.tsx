export default function Footer() {
  return (
    <footer className="bg-stone-900 py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div
          className="text-lg text-amber-300 mb-3"
          style={{ fontFamily: "var(--font-noto-serif)" }}
        >
          カラオケ喫茶 コンパ
        </div>

        <div className="text-sm text-amber-700 leading-relaxed mb-4">
          〒534-0024 大阪府大阪市都島区東野田町5-7-1 千両ビル204号
          <br />
          TEL: 06-6928-4566 / 営業時間: 12:00〜23:00 / 年中無休
        </div>

        <div className="text-xs text-stone-600">
          © 2025 カラオケ喫茶 コンパ All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
