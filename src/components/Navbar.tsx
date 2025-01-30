import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    const handleNavigation = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            scrollToSection(id);
        }
    };

    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-24 md:h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-primary font-bold text-2xl md:text-3xl font-greatVibes">
                            Hanuskowy Torcik
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => handleNavigation("about")}
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            O mnie
                        </button>
                        <button
                            onClick={() => handleNavigation("gallery")}
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            Galeria
                        </button>
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-accent transition-colors"
                        >
                            Kontakt
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;