import React from 'react'
import Reservation from './reservation'
import Image from "next/image";
import Head from 'next/head';

function HeroSection() {
    return (
        <>
            <Head>
                <link
                    rel="preload"
                    as="image"
                    href="/viewimg.webp"
                    fetchpriority="high"
                />
            </Head>
            <section>
                <div className="w-full h-[450px] relative">
                    <Image
                        src="/viewimg.webp"
                        alt="hotel"
                        fill
                        priority
                        style={{ objectFit: 'cover' }}
                        quality={20}



                    />
                    <div className="absolute top-1/3 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-lora">
                        <div className="flex flex-col items-center gap-6">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-12 sm:mt-0 text-center font-bold">
                                Feel Like in Paradise
                            </h1>
                            <a
                                href="#rooms"
                                className="p-2 px-4 border rounded-md text-sm lg:text-lg inline-block text-center  bg-black/50">
                                Check the Rooms
                            </a>

                        </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full  shadow-lg z-10 lg:px-20 px-5">
                        <Reservation />
                    </div>
                </div>
            </section>
        </>

    )
}

export default HeroSection
