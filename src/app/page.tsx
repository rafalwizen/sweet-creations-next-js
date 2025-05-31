import { Metadata } from 'next';
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: 'Strona Główna - Słodkie Wypieki',
  description: 'Domowe wypieki i torty na zamówienie z dostawą w Hanusku i okolicach.',
  openGraph: {
    title: 'Strona Główna - Słodkie Wypieki',
    description: 'Domowe wypieki i torty na zamówienie z dostawą w Hanusku i okolicach.',
    url: 'https://tortyartystyczne.vercel.app/',
    siteName: 'Słodkie Wypieki',
    images: [
      {
        url: 'https://tortyartystyczne.vercel.app/assets/images/og_image.jpg',
        width: 464,
        height: 417,
        alt: 'Logo i wypieki Słodkie Wypieki',
      },
    ],
    type: 'website',
  }
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Słodkie Wypieki",
    "image": [
      "https://tortyartystyczne.vercel.app/assets/images/image00001.jpg",
      "https://tortyartystyczne.vercel.app/assets/images/image00002.jpg"
    ],
    "description": "Domowe wypieki i torty na zamówienie",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Twoja ulica",
      "addressLocality": "Hanusek",
      "postalCode": "42-690",
      "addressCountry": "PL"
    }
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
