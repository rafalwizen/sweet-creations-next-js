'use client';
import Image from 'next/image';
import profilePhoto from "@/assets/images/profilePhoto.webp";

const About = () => {

    return (
        <section
            id="about"
        >
            <div className="relative w-full px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <Image
                        src={profilePhoto}
                        alt="Profile"
                        priority
                        className="rounded-full w-72 h-72 mx-auto object-cover shadow-lg border-4 border-white"
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                        <h1 className="text-4xl font-bold text-primary mb-4">
                            Witaj w moim świecie słodkości
                        </h1>
                        <p className="text-gray-600 text-justify mb-6">
                            Cześć, jestem Magda, tworzę wyjątkowe torty na zamówienie, idealne na każdą okazję. W mojej galerii znajdziesz przykłady moich prac, które zachwycają smakiem i wyglądem. Masz pomysł na swój wymarzony tort? Skontaktuj się ze mną a&nbsp;razem stworzymy coś wyjątkowego!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;