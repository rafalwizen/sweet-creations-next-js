import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Home from "@/components/Home";
import { Footer } from "@/components/Footer";

const Contact = dynamic(() => import("@/components/Contact"));

export const metadata: Metadata = {
  title: 'Strona Główna - Słodkie Wypieki',
  description: 'Domowe wypieki i torty na zamówienie z dostawą w Hanusku i okolicach.',
  openGraph: {
    title: 'Strona Główna - Słodkie Wypieki',
    description: 'Domowe wypieki i torty na zamówienie z dostawą w Hanusku i okolicach.',
    url: 'https://hanuskowytorcik.vercel.app/',
    siteName: 'Słodkie Wypieki',
    images: [
      {
        url: 'https://hanuskowytorcik.vercel.app/images/og-image.jpg',
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
    "image": "https://hanuskowytorcik.vercel.app/images/og-image.jpg",
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
        <Contact />
        <Footer />
      </>
  );
}
