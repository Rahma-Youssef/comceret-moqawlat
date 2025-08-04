
import React, { useState } from 'react';
import workImg1 from '../../assets/images/workImg1.jpg'
import workImg2 from '../../assets/images/workImg2.jpg'
import workImg3 from '../../assets/images/workImg3.jpg'
import workImg4 from '../../assets/images/workImg4.jpg'
import workImg5 from '../../assets/images/workImg5.jpg'
import workImg6 from '../../assets/images/workImg6.jpg'
import workImg7 from '../../assets/images/workImg7.jpg'
import workImg8 from '../../assets/images/workImg8.jpg'
import workImg9 from '../../assets/images/workImg9.jpg'
import workImg10 from '../../assets/images/workImg10.jpg'
import workImg11 from '../../assets/images/workImg11.jpg'
import workImg12 from '../../assets/images/workImg12.jpg'
import workImg13 from '../../assets/images/workImg13.jpg'
import workImg14 from '../../assets/images/workImg14.jpg'
import workImg15 from '../../assets/images/workImg15.jpg'


const images = [
    {
        id: 1,
        src: workImg1,
        thumbnail: "/src/assets/thumbnailImg/workImg1_thumbnail.jpg", // Assuming you want to use the same image as thumbnail

    },
    {
        id: 2,
        src: workImg2,

        thumbnail: "/src/assets/thumbnailImg/workImg2_thumbnail.jpg",
    },
    {
        id: 3,
        src: workImg3,
        thumbnail: "/src/assets/thumbnailImg/workImg3_thumbnail.jpg",

    },
    {
        id: 4,
        src: workImg4,
        thumbnail: "/src/assets/thumbnailImg/workImg4_thumbnail.jpg",

    },
    {
        id: 5,
        src: workImg5,
        thumbnail: "/src/assets/thumbnailImg/workImg5_thumbnail.jpg",

    },
    {
        id: 6,
        src: workImg6,
        thumbnail: "/src/assets/thumbnailImg/workImg6_thumbnail.jpg",

    },
    {
        id: 7,
        src: workImg7,
        thumbnail: "/src/assets/thumbnailImg/workImg7_thumbnail.jpg",

    },
    {
        id: 8,
        src: workImg8,
        thumbnail: "/src/assets/thumbnailImg/workImg8_thumbnail.jpg",

    },
    {
        id: 9,
        src: workImg9,
        thumbnail: "/src/assets/thumbnailImg/workImg9_thumbnail.jpg",

    },
    {
        id: 10,
        src: workImg10,
        thumbnail: "/src/assets/thumbnailImg/workImg10_thumbnail.jpg",

    },
    {
        id: 11,
        src: workImg11,
        thumbnail: "/src/assets/thumbnailImg/workImg11_thumbnail.jpg",

    },
    {
        id: 12,
        src: workImg12,
        thumbnail: "/src/assets/thumbnailImg/workImg12_thumbnail.jpg",

    },
    {
        id: 13,
        src: workImg13,
        thumbnail: "/src/assets/thumbnailImg/workImg13_thumbnail.jpg",

    },
    {
        id: 14,
        src: workImg14,
        thumbnail: "/src/assets/thumbnailImg/workImg14_thumbnail.jpg",

    },
    {
        id: 15,
        src: workImg15,
        thumbnail: "/src/assets/thumbnailImg/workImg15_thumbnail.jpg",

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
                    loading="lazy"
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
                        src={img.thumbnail}
                        loading="lazy"
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

                    />
                ))}
            </div>
        </div>
    );
}
