import { useState } from "react";
import cake1 from '../assets/images/1.webp';
import cake2 from '../assets/images/2.webp';
import cake3 from '../assets/images/3.webp';
import cake4 from '../assets/images/4.webp';
import cake5 from '../assets/images/5.webp';
import cake6 from '../assets/images/6.webp';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        cake1, cake2, cake3, cake4, cake5, cake6
    ];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="cursor-pointer transform transition-transform hover:scale-105"
                        onClick={() => setSelectedImage(image)}
                    >
                        <img
                            src={image}
                            alt={`Cake ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="max-w-4xl w-full mx-4">
                        <img
                            src={selectedImage}
                            alt="Selected cake"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;