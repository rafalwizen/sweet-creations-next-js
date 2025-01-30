import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Gallery from "../components/Gallery";
import backgroundImage from '../assets/images/background-image-home.webp';
import profilePhoto from '../assets/images/profilePhoto.webp';

interface LocationState {
    scrollTo?: string;
}

const Home = () => {
    const location = useLocation();
    const state = location.state as LocationState;

    useEffect(() => {
        if (state?.scrollTo) {
            const element = document.getElementById(state.scrollTo);
            element?.scrollIntoView({ behavior: "smooth" });
            window.history.replaceState({}, document.title);
        }
    }, [state]);

    return (
        <div className="pt-24 md:pt-16">
            <section
                id="about"
                className="relative min-h-screen flex items-center justify-center px-4"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-black/30" />

                <div className="relative max-w-7xl mx-auto py-16 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <img
                            src={profilePhoto}
                            alt="Profile"
                            className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg border-4 border-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
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
                    <Gallery />
                </div>
            </section>
        </div>
    );
};

export default Home;