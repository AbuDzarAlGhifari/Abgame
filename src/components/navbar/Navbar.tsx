"use client";

import React, { useState, useEffect } from "react";
import Typography from "@/components/ui/Typography";
import IconButton from "@/components/ui/IconButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Collapse } from "@material-tailwind/react";
import NavList from "./NavList";

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
                <Typography variant='h6' className='mr-4 cursor-pointer py-1.5'>
                    Brand Logo
                </Typography>
                <div className='hidden lg:block'>
                    <NavList />
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
