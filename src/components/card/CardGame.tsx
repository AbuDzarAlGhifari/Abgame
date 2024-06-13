import { Tooltip } from "@material-tailwind/react";

import Typography from "@/components/ui/Typography";

export function BlogCard() {
    return (
        <section className='max-w-[24rem] overflow-hidden'>
            <div color='transparent' className='m-0 rounded-none'>
                <img
                    src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
                    alt='ui/ux review check'
                />
            </div>
            <div>
                <Typography variant='h4' color='blue-gray'>
                    UI/UX Review Check
                </Typography>
                <Typography
                    variant='lead'
                    color='gray'
                    className='mt-3 font-normal'>
                    Because it&apos;s about motivating the doers. Because
                    I&apos;m here to follow my dreams and inspire others.
                </Typography>
            </div>
            <div className='flex items-center justify-between'>
                <Typography className='font-normal'>January 10</Typography>
            </div>
        </section>
    );
}
