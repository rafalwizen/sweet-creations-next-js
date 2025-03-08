"use client"

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Gallery from "../components/Gallery";
import backgroundImage from '../assets/images/background-image-home.webp';
import profilePhoto from '../assets/images/profilePhoto.webp';

const Home = () => {
    const searchParams = useSearchParams();
    const scrollTo = searchParams.get("scrollTo");

    useEffect(() => {
        if (scrollTo) {
            const element = document.getElementById(scrollTo);

            element?.scrollIntoView({ behavior: "smooth" });
            window.history.replaceState({}, document.title);
        }
    }, [scrollTo]);

    return (
        <div className="pt-24 md:pt-16 w-full">
            <section
                id="about"
                className="relative min-h-screen w-screen flex items-center justify-center"
            >
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${backgroundImage.src})`,
                        width: '100vw'
                    }}
                />
                <div className="absolute inset-0 bg-black/30 w-full" />

                <div className="relative w-full px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <Image
                            src={profilePhoto}
                            alt="Profile"
                            className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg border-4 border-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                            <h1 className="text-4xl font-bold text-primary mb-4">
                                Witaj w moim świecie słodkości
                            </h1>
                            <p className="text-gray-600 text-justify mb-6">
                                Tworzę wyjątkowe torty na zamówienie, idealne na każdą okazję. W mojej galerii znajdziesz przykłady moich prac, które zachwycają smakiem i wyglądem. Masz pomysł na swój wymarzony tort? Skontaktuj się ze mną a&nbsp;razem stworzymy coś wyjątkowego!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="min-h-screen bg-background px-4">
                <div className="max-w-7xl mx-auto py-16">
                    <h2 className="text-3xl font-bold text-primary text-center mb-12">
                        Moje realizacje
                    </h2>
                    <div className="w-full max-w-[2000px] mx-auto">
                        <Gallery />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;