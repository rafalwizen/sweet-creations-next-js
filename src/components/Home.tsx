'use client';

import { Suspense } from "react";
import Image from "next/image";
import Gallery from "../components/Gallery";
import backgroundImage from '../assets/images/wood_background.webp';
import logo from '../assets/images/logo.webp';
import Contact from "@/components/Contact";
import {Footer} from "@/components/Footer";

const Home = () => {

    return (
        <div className="pt-24 md:pt-16 w-full">
            <section
                id="home"
                className="relative h-[50vh] w-screen flex items-center justify-center"
            >
                <Image
                    src={backgroundImage}
                    alt="Background"
                    priority
                    fill
                    className="absolute inset-0 object-cover w-full h-full z-0"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/30 w-full z-0" />

                <div className="relative w-full px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-8 z-10">
                    <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center">
                        <div className="h-[80%] max-h-[40vh] aspect-square">
                            <Image
                                src={logo}
                                alt="Logo"
                                priority
                                className="rounded-full object-cover shadow-lg border-4 border-white w-full h-full"
                            />
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

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Home />
            <Contact />
            <Footer />
        </Suspense>
    );
}
