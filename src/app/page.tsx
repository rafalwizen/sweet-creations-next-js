import { Metadata } from 'next';
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: 'Strona Główna - Słodkie Wypieki',
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Słodkie Wypieki",
    "image": [
      "https://twoja-domena.pl/zdjecie1.jpg",
      "https://twoja-domena.pl/zdjecie2.jpg"
    ],
    "description": "Domowe wypieki i torty na zamówienie",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Twoja ulica",
      "addressLocality": "Twoje miasto",
      "postalCode": "00-000",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.2297,
      "longitude": 21.0122
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ]
  };

  return (
      <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Home />
      </>
  );
}