import { caption } from 'framer-motion/client';
import React, { useState } from 'react';

const images = [
    {
        id: 1,
        src: "/src/assets/images/workImg1.jpg",
        caption: "صور مباني وتشطيب"
    },
    {
        id: 2,
        src: "/src/assets/images/workImg2.jpg",

    },
    {
        id: 3,
        src: "/src/assets/images/workImg3.jpg",

    },
    {
        id: 4,
        src: "/src/assets/images/workImg4.jpg",

    },
    {
        id: 5,
        src: "/src/assets/images/workImg5.jpg",

    },
    {
        id: 6,
        src: "/src/assets/images/workImg6.jpg",

    },
    {
        id: 7,
        src: "/src/assets/images/workImg7.jpg",

    },
    {
        id: 8,
        src: "/src/assets/images/workImg8.jpg",

    },
    {
        id: 9,
        src: "/src/assets/images/workImg9.jpg",

    },
    {
        id: 10,
        src: "/src/assets/images/workImg10.jpg",

    },
    {
        id: 11,
        src: "/src/assets/images/workImg11.jpg",

    },
    {
        id: 12,
        src: "/src/assets/images/workImg12.jpg",

    },
    {
        id: 13,
        src: "/src/assets/images/workImg13.jpg",

    },
    {
        id: 14,
        src: "/src/assets/images/workImg14.jpg",

    },
    {
        id: 15,
        src: "/src/assets/images/workImg15.jpg",

    }
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSelect = (index) => {
        setCurrentIndex(index);
    };

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="text-center">

            <div className="position-relative">
                <img
                    src={images[currentIndex].src}

                    alt="صور مباني وتشطيب"
                    className="img-fluid rounded"
                    style={{ height: "500px", objectFit: "cover" }}
                />



                <i onClick={goPrev} className="fa-solid fa-caret-left fs-1 position-absolute top-50 start-0 translate-middle-y btn border-0"></i>

                <i onClick={goPrev} className="fa-solid fa-caret-right fs-1 position-absolute top-50 end-0 translate-middle-y btn border-0 "></i>
            </div>

       


            <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
                {images.map((img, index) => (
                    <img
                        key={img.id}
                        src={img.src}
                        onClick={() => handleSelect(index)}
                        className={`rounded-3 border ${index === currentIndex ? "border-3 border-primary" : "border-1"
                            }`}
                        style={{

                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                            cursor: "pointer",
                            transition: "all 0.3s"
                        }}
                        alt={img.caption}
                    />
                ))}
            </div>
        </div>
    );
}
