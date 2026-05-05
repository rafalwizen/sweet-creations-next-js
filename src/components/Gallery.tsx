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
import cake13 from '../assets/images/image00013.webp';
import cake15 from '../assets/images/image00015.webp';
import cake16 from '../assets/images/image00016.webp';
import cake17 from '../assets/images/image00017.webp';
import cake18 from '../assets/images/image00018.webp';
import cake19 from '../assets/images/image00019.webp';
import cake20 from '../assets/images/image00020.webp';
import cake21 from '../assets/images/image00021.webp';
import cake22 from '../assets/images/image00022.webp';
import cake23 from '../assets/images/image00023.webp';
import cake24 from '../assets/images/image00024.webp';
import cake25 from '../assets/images/image00025.webp';
import cake26 from '../assets/images/image00026.webp';
import cake27 from '../assets/images/image00027.webp';
import cake28 from '../assets/images/image00028.webp';
import cake29 from '../assets/images/image00029.webp';
import cake30 from '../assets/images/image00030.webp';
import cake31 from '../assets/images/image00031.webp';
import cake32 from '../assets/images/image00032.webp';
import cake33 from '../assets/images/image00033.webp';
import cake34 from '../assets/images/image00034.webp';
import cake35 from '../assets/images/image00035.webp';
import cake36 from '../assets/images/image00036.webp';
import cake37 from '../assets/images/image00037.webp';
import cake38 from '../assets/images/image00038.webp';

const fullHeightImages = new Set([cake34.src]);

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        cake24, cake22, cake01, cake02, cake03, cake04, cake06,
        cake08, cake09, cake10, cake11, cake15, cake13, cake16,
        cake23, cake17, cake25, cake26, cake27, cake28, cake29,
        cake30, cake31, cake32, cake33, cake34, cake35, cake36,
        cake37, cake38, cake18, cake19, cake20, cake21, cake07
    ];

    const isFullHeight = selectedImage ? fullHeightImages.has(selectedImage) : false;

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
                            loading="lazy"
                            placeholder="blur"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    <div className={`mx-4 relative ${isFullHeight ? 'w-screen h-screen' : 'max-w-4xl w-screen h-screen'}`}>
                        <Image
                            src={selectedImage}
                            alt="Selected cake"
                            fill
                            className={`w-full h-auto ${isFullHeight ? 'object-contain' : 'object-cover'}`}
                            priority
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
