"use client";

import React, { useState, useEffect } from "react";
import Typography from "@/components/ui/Typography";
import IconButton from "@/components/ui/IconButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Collapse } from "@material-tailwind/react";
import Button from "@/components/ui/Button";
import NavList from "./NavList";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div className='mx-auto max-w-screen-xl px-6 py-3'>
            <div className='flex items-center justify-between text-blue-gray-900'>
                <div className='flex items-center'>
                    <Typography
                        variant='h6'
                        className='mr-4 cursor-pointer py-1.5'>
                        Brand Logo
                    </Typography>
                    <div className='flex '>
                        <Typography
                            variant='small'
                            color='blue-gray'
                            className='p-1 font-medium hidden lg:block'>
                            <a
                                href='#'
                                className='flex items-center hover:text-blue-500 transition-colors'>
                                Home
                            </a>
                        </Typography>
                        <Typography
                            variant='small'
                            color='blue-gray'
                            className='p-1 font-medium hidden lg:block'>
                            <a
                                href='#'
                                className='flex items-center hover:text-blue-500 transition-colors'>
                                Account
                            </a>
                        </Typography>
                    </div>
                </div>

                <div className='flex '>
                    <div className='hidden lg:block border border-gray-400 relative rounded-l-lg overflow-hidden flex-1 w-full xl:max-w-[400px]'>
                        <MagnifyingGlassIcon className='size-5 text-gray-700 absolute left-2 top-1/2 -translate-y-1/2' />
                        <input
                            type='search'
                            className='pl-8 pr-2 py-1 w-full outline-none hidden lg:block'
                        />
                    </div>
                    <button className='hidden lg:block bg-gray-300 border border-l-0 px-2 hover:bg-gray-500 border-gray-400 rounded-r-lg text-gray-700 '>
                        Search
                    </button>

                    <Typography
                        variant='small'
                        color='blue-gray'
                        className='p-1 font-medium hidden lg:block'>
                        <a
                            href='#'
                            className='flex items-center hover:text-blue-500 transition-colors'>
                            Sign In
                        </a>
                    </Typography>
                </div>
                <IconButton
                    className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
                    onClick={() => setOpenNav(!openNav)}>
                    {openNav ? (
                        <XMarkIcon className='h-6 w-6' strokeWidth={2} />
                    ) : (
                        <Bars3Icon className='h-6 w-6' strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </div>
    );
};

export default Navbar;
