import SectionHeader from "@ui/SectionHeader";
import SectionWrapper from "@ui/SectionWrapper";
import TelButton from "@ui/TelButton";

export default function Access() {
  return (
    <SectionWrapper variant="amber" id="access">
      <SectionHeader label="access" title="アクセス" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <dl className="text-sm">
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
              <div
                key={item.label}
                className="flex gap-6 border-b border-amber-100 py-3"
              >
                <dt className="text-amber-700 font-medium whitespace-nowrap w-20 shrink-0">
                  {item.label}
                </dt>
                <dd className="text-stone-900 leading-relaxed">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6">
            <TelButton size="md" />
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-amber-100 min-h-72">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.2127659461516!2d135.5338401!3d34.6998131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e128109c9e85%3A0xb0393acced8a7a6f!2z44Kr44Op44Kq44Kx5Zar6Iy244Kz44Oz44OR!5e0!3m2!1sja!2sjp!4v1774995702432!5m2!1sja!2sjp"
            width="100%"
            height="300"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="カラオケ喫茶コンパの地図"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
