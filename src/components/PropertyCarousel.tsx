'use client'
import Image from 'next/image'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

type PropertyCarouselProps = {
    images: string[]
    title: string
}

function NextArrow(props: any) {
    const { onClick } = props
    return (
        <button
            onClick={onClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next image"
        >
            <FaChevronRight className="w-6 h-6 text-gray-800" />
        </button>
    )
}

function PrevArrow(props: any) {
    const { onClick } = props
    return (
        <button
            onClick={onClick}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous image"
        >
            <FaChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
    )
}

export default function PropertyCarousel({ images, title }: PropertyCarouselProps) {
    // If there's only one image, don't use the carousel
    if (images.length === 1) {
        return (
            <div className="relative h-[400px] w-full">
                <Image
                    src={images[0]}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
        )
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: (dots: any) => (
            <div className="absolute bottom-4 w-full">
                <ul className="flex justify-center items-center gap-2"> {dots} </ul>
            </div>
        ),
        customPaging: () => (
            <button className="w-3 h-3 bg-white/50 hover:bg-white/80 rounded-full transition-all duration-200 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white" />
        )
    }

    return (
        <div className="relative h-[400px] w-full group">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="relative h-[400px]">
                        <Image
                            src={image}
                            alt={`${title} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                        <span className="absolute bottom-12 right-4 text-white text-sm bg-black/50 px-2 py-1 rounded">
                            {index + 1} / {images.length}
                        </span>
                    </div>
                ))}
            </Slider>
        </div>
    )
} 