import React from "react";
import Button from "@/components/ui/Button";
import Carousel from "@/components/ui/Carousel";
import { CardBasic } from "@/components/card/CardBasic";

const HomePage = () => {
    return (
        <>
            <Carousel>
                <img
                    src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
                    alt='image 1'
                    className='h-64 w-full object-cover'
                />
                <img
                    src='https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
                    alt='image 2'
                    className='h-64 w-full object-cover'
                />
                <img
                    src='https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80'
                    alt='image 3'
                    className='h-64 w-full object-cover'
                />
            </Carousel>
            {/* <div className='flex flex-col items-center justify-center h-screen'>
                <Button variant='gradient'>Get Started</Button>
            </div> */}
            <CardBasic />
        </>
    );
};

export default HomePage;
