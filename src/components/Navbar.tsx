"use client";

import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const scrollToSection = (id: string, offset: number = -60) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({
                top,
                behavior: "smooth",
            });
        }
    };

    const handleNavigation = (id: string) => {
        if (pathname !== "/") {
            router.push(`/?scrollTo=${id}`);
        } else {
            scrollToSection(id);
        }
    };

    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="w-full mx-auto px-4">
                <div className="flex justify-between h-24 md:h-16">
                    <div className="flex items-center">
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => handleNavigation("gallery")}
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            Galeria
                        </button>
                        <button
                            onClick={() => handleNavigation("about")}
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            O mnie
                        </button>
                        <button
                            onClick={() => handleNavigation("contact")}
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-accent transition-colors"
                        >
                            Kontakt
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
