import Contact from '../../components/Contact';

// Typ dla danych strukturalnych (JSON-LD)
interface JsonLd {
    "@context": string;
    "@type": string;
    name: string;
    mainEntity: {
        "@type": string;
        name: string;
        telephone: string;
        email: string;
    };
}

// Dane strukturalne dla SEO
const jsonLd: JsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt - Słodkie Wypieki",
    "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Słodkie Wypieki",
        "telephone": "+48XXXXXXXXX",
        "email": "kontakt@twoja-domena.pl"
    }
};

export default function ContactPage() {
    return (
        <>
            {/* Dane strukturalne dla SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Contact />
        </>
    );
}
