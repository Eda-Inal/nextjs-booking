import React from 'react';
import Image from "next/image";
import Reservation from '../components/reservation';
import Explore from '../components/explore';
import Food from '../components/food';
import RoomBox from '../components/rooms';
import view from "../../../public/vieww.webp";
import About from '../components/aboutcard';



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
                                <button className="p-2 px-4 border-2 rounded-md text-sm lg:text-lg 'scroll-mt-[80px]" >
                                    <a href="#rooms"> Check the Rooms</a>
                                </button>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full  shadow-lg z-10 lg:px-20 px-5">
                            <Reservation />
                        </div>
                    </div>
                </section>

                <div className="px-10 mt-36 sm:mt-28 lg:mt-20 relative z-0 mx-auto mb-20">


                </div>


                <section id="main-content" className="w-full overflow-x-auto scrollbar-hide flex flex-col gap-20 lg:px-20 px-5">
                    <div id="services" className='scroll-mt-[80px]'>
                        <Explore />
                    </div>
                    <div id="rooms" className='scroll-mt-[80px]'>
                        <RoomBox />
                    </div>
                    <div id="restaurant" className='scroll-mt-[80px]'>
                        <Food />
                    </div>
                    <div id="about" className='scroll-mt-[80px]'>
                        <About />
                    </div>
                </section>

                <div className="mb-20"></div>
            </main>

        </>



    );
}

export default Main;
