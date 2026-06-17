"use client";

import { useGalleryView } from "@/context/GalleryViewContext";

const Navbar = () => {
    const { mobileColumns, toggleMobileColumns } = useGalleryView();
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
        if (window.location.pathname !== "/") {
            window.location.href = `/?scrollTo=${id}`;
        } else {
            scrollToSection(id);
        }
    };

    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="w-full mx-auto px-4">
                <div className="flex justify-between h-24 md:h-16">
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={toggleMobileColumns}
                            aria-pressed={mobileColumns === 2}
                            aria-label={`Układ galerii: ${mobileColumns} ${mobileColumns === 2 ? "kolumny" : "kolumna"}. Kliknij, aby przełączyć.`}
                            title={`Galeria: ${mobileColumns} kolumny`}
                            className="md:hidden p-2 -ml-2 rounded-md text-gray-600 hover:text-primary transition-colors"
                        >
                            {mobileColumns === 2 ? <IconTwoColumns /> : <IconSingleColumn />}
                        </button>
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

const IconTwoColumns = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <rect x="3" y="3" width="7" height="18" rx="1" />
        <rect x="14" y="3" width="7" height="18" rx="1" />
    </svg>
);

const IconSingleColumn = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <rect x="5" y="3" width="14" height="18" rx="1" />
    </svg>
);

export default Navbar;
