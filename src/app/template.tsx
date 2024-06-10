import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <main className='h-[calc(100dvh-99px)] '>{children}</main>
            <Footer />
        </>
    );
}
