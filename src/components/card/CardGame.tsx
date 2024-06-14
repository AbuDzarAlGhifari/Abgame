import Typography from "@/components/ui/Typography";

export function BlogCard() {
    return (
        <section className='max-w-[24rem] overflow-hidden'>
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
