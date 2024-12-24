import React from 'react';
import Head from 'next/head';
import Image from "next/image";
import Reservation from '../components/reservation';
import Explore from '../components/explore';
import Food from '../components/food';
import RoomBox from '../components/rooms';
import view from "../../../public/vieww.webp";



function Main() {

    return (
        <>
            <main className="w-full">
                <section>
                    <div className="w-full h-[450px] relative">
                        <Image
                            src={view}
                            alt="hotel"
                            fill
                            priority
                            style={{ objectFit: 'cover' }}
                       
                            

                        />
                        <div className="absolute top-1/3 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-lora">
                            <div className="flex flex-col items-center gap-6">
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-12 sm:mt-0 text-center font-bold">
                                    Feel Like in Paradise
                                </h1>
                                <button className="p-2 px-4 border-2 rounded-md text-sm lg:text-lg">
                                    Check the Rooms
                                </button>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full px-10 shadow-lg z-10">
                            <Reservation />
                        </div>
                    </div>
                </section>

                <div className="px-10 mt-36 sm:mt-28 lg:mt-20 relative z-0 mx-auto mb-20">


                </div>


                <div className="w-full overflow-x-auto  scrollbar-hide flex flex-col gap-20 lg:px-28 px-5">

                    <section id="services" className='scroll-mt-[80px]'>
                        <Explore />
                    </section>
                    <section id="rooms" className='scroll-mt-[80px]'>
                        <RoomBox />
                    </section>
                    <section id="restaurant" className='scroll-mt-[80px]'>
                        <Food />
                    </section>
               


                </div>
                <div className="mb-56"></div>
            </main>

        </>



    );
}

export default Main;
