"use client";

import { useState } from "react";
import Image from "next/image";
import cake01 from '../assets/images/image00001.webp';
import cake02 from '../assets/images/image00002.webp';
import cake03 from '../assets/images/image00003.webp';
import cake04 from '../assets/images/image00004.webp';
import cake06 from '../assets/images/image00006.webp';
import cake07 from '../assets/images/image00007.webp';
import cake08 from '../assets/images/image00008.webp';
import cake09 from '../assets/images/image00009.webp';
import cake10 from '../assets/images/image00010.webp';
import cake11 from '../assets/images/image00011.webp';
import cake12 from '../assets/images/image00012.webp';
import cake13 from '../assets/images/image00013.webp';
import cake14 from '../assets/images/image00014.webp';
import cake15 from '../assets/images/image00015.webp';
import cake16 from '../assets/images/image00016.webp';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        cake01, cake02, cake03, cake04, cake06, cake07, cake08,
        cake09, cake10, cake11, cake12, cake13, cake14, cake15, cake16
    ];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="cursor-pointer transform transition-transform hover:scale-105"
                        onClick={() => setSelectedImage(image.src)}
                    >
                        <Image
                            src={image}
                            alt={`Cake ${index + 1}`}
                            width={400}
                            height={384}
                            className="w-full h-96 object-cover rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="max-w-4xl mx-4 relative w-screen h-screen">
                        <Image
                            src={selectedImage}
                            alt="Selected cake"
                            fill
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
