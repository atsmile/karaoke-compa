export default function Access() {
  return (
    <section
      id="access"
      className="bg-amber-50 border-b border-amber-100 py-16 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-xs text-amber-500 tracking-widest uppercase mb-2">
          access
        </div>

        <h2
          className="text-2xl text-stone-900 mb-8"
          style={{ fontFamily: "var(--font-noto-serif)" }}
        >
          アクセス
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 店舗情報 */}
          <div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "店名", value: "カラオケ喫茶 コンパ" },
                  {
                    label: "住所",
                    value:
                      "〒534-0024 大阪府大阪市都島区東野田町5-7-1 千両ビル204号",
                  },
                  { label: "電話", value: "06-6928-4566" },
                  { label: "営業時間", value: "12:00〜23:00" },
                  { label: "定休日", value: "年中無休" },
                ].map((item) => (
                  <tr key={item.label} className="border-b border-amber-100">
                    <td className="py-3 pr-6 text-amber-500 font-medium whitespace-nowrap align-top">
                      {item.label}
                    </td>
                    <td className="py-3 text-stone-900 leading-relaxed">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <a
              href="tel:0669284566"
              className="inline-block mt-6 bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-lg text-lg tracking-wide transition-colors"
            >
              ☎ 06-6928-4566
            </a>
          </div>

          {/* Googleマップ */}
          <div className="rounded-xl overflow-hidden border border-amber-100 min-h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.2127659461516!2d135.5338401!3d34.6998131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e128109c9e85%3A0xb0393acced8a7a6f!2z44Kr44Op44Kq44Kx5Zar6Iy244Kz44Oz44OR!5e0!3m2!1sja!2sjp!4v1774995702432!5m2!1sja!2sjp"
              width="100%"
              height="300"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
