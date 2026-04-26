export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: "カラオケ喫茶 コンパ",
    url: "https://karaoke-compa.com",
    telephone: "06-6928-4566",
    address: {
      "@type": "PostalAddress",
      streetAddress: "東野田町5-7-1 千両ビル204号",
      addressLocality: "大阪市都島区",
      addressRegion: "大阪府",
      postalCode: "534-0024",
      addressCountry: "JP",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "23:00",
    },
    priceRange: "¥1,500〜¥2,700",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
