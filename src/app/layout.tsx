import type {Metadata} from "next";
import {Great_Vibes} from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-great-vibes",
});

export const metadata: Metadata = {
    title: "Słodkie Wypieki - Domowe Ciasta i Torty na Zamówienie",
    description: "Oferuję przepyszne, domowe wypieki na każdą okazję. Torty urodzinowe, weselne, ciasta i słodkie przekąski wykonane z pasją i najlepszych składników.",
    keywords: "torty na zamówienie, domowe ciasta, wypieki, cukiernik, słodkości, tort urodzinowy, tort weselny",
    authors: [{name: "Twoje Imię"}],
    openGraph: {
        title: "Słodkie Wypieki - Domowe Ciasta i Torty na Zamówienie",
        description: "Oferuję przepyszne, domowe wypieki na każdą okazję. Torty urodzinowe, weselne, ciasta i słodkie przekąski.",
        images: ['/og-image.jpg'],
    },
    alternates: {
        canonical: 'https://twoja-domena.pl',
    },
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pl" className={greatVibes.variable}>
        <body>
        {children}
        </body>
        </html>
    );
}