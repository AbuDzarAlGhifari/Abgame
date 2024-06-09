"use client";

import React, { useState } from "react";
import IconButton from "./IconButton";

interface CarouselProps {
    children: React.ReactNode[];
    className?: string;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
    children,
    className = "",
    autoPlay = false,
    autoPlayInterval = 3000,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? children.length - 1 : prevIndex - 1
        );
    };

    React.useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(nextSlide, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [autoPlay, autoPlayInterval, children.length]);

    return (
        <div className={`relative w-full ${className}`}>
            <div className='overflow-hidden'>
                <div
                    className='whitespace-nowrap transition-transform duration-500'
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {children.map((child, index) => (
                        <div
                            className='inline-block w-full'
                            key={index}
                            style={{ width: "100%" }}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <IconButton
                onClick={prevSlide}
                className='absolute top-2/4 left-4 transform -translate-y-2/4 p-2 rounded-full bg-gray-800 bg-opacity-60 hover:bg-opacity-90 text-white'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='h-4 w-4'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                    />
                </svg>
            </IconButton>
            <IconButton
                onClick={nextSlide}
                className='absolute top-2/4 right-4 transform -translate-y-2/4 p-2 rounded-full bg-gray-800 bg-opacity-60 hover:bg-opacity-90 text-white'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='h-4 w-4'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                </svg>
            </IconButton>
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2'>
                {children.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full ${
                            index === activeIndex
                                ? "bg-gray-800"
                                : "bg-gray-400"
                        }`}></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
