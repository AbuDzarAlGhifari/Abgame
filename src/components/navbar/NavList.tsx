import React from "react";
import Typography from "@/components/ui/Typography";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const NavList = () => {
    return (
        <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
            <Typography
                variant='small'
                color='blue-gray'
                className='p-1 font-medium'>
                <a
                    href='#'
                    className='flex items-center hover:text-blue-500 transition-colors'>
                    Home
                </a>
            </Typography>
            <Typography
                variant='small'
                color='blue-gray'
                className='p-1 font-medium'>
                <a
                    href='#'
                    className='flex items-center hover:text-blue-500 transition-colors'>
                    Account
                </a>
            </Typography>
            <Typography
                variant='small'
                color='blue-gray'
                className='p-1 font-medium'>
                <a
                    href='#'
                    className='flex items-center hover:text-blue-500 transition-colors'>
                    Sign In
                </a>
            </Typography>
            <div className='flex'>
                <div className='border border-gray-400 relative rounded-l-lg overflow-hidden flex-1 w-full xl:max-w-[400px]'>
                    <MagnifyingGlassIcon className='size-5 text-gray-700 absolute left-2 top-1/2 -translate-y-1/2' />
                    <input
                        type='search'
                        className='pl-8 pr-2 py-1 w-full outline-none'
                    />
                </div>
                <button className='bg-gray-300 border border-l-0 px-2 hover:bg-gray-500 border-gray-400 rounded-r-lg text-gray-700 '>
                    {/* <MicrophoneIcon className='size-4 text-gray-700' /> */}
                    Search
                </button>
            </div>
        </ul>
    );
};

export default NavList;
