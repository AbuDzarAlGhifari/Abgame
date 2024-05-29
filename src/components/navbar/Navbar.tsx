"use client";

import Link from "next/link";
import React, { useState } from "react";
// import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className='flex flex-col md:flex-row justify-between items-center bg-white shadow border px-[20px] md:px-8 lg:px-[135px] pt-3 md:pt-12 pb-4'>
                <div className='flex w-full justify-between'>
                    <div>
                        <h1 className='text-lg md:text-2xl font-bold'>API</h1>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16m-7 6h7'
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className={`md:flex items-center space-x-2 ${
                        isMenuOpen ? "" : "hidden"
                    }`}>
                    <ul className='flex justify-center items-center gap-5 md:gap-8 lg:gap-12 text-sm md:text-base font-medium md:flex py-1'>
                        <Link href='/'>
                            <li className='focus:underline hover:underline'>
                                Home
                            </li>
                        </Link>
                        <Link href='/contact'>
                            <li className='focus:underline hover:underline'>
                                Contact
                            </li>
                        </Link>
                        <Link href='/about'>
                            <li className='focus:underline hover:underline'>
                                About
                            </li>
                        </Link>
                    </ul>
                    <div className='flex gap-1.5'>
                        <div className='relative flex items-center text-[#9CA3AF] focus-within:text-gray-600'>
                            <input
                                className='rounded text-xs md:text-base bg-[#F5F5F5] px-4 pr-5 py-0.5 md:py-1 appearance-none'
                                type='search'
                                placeholder='What are you looking for ?'
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
