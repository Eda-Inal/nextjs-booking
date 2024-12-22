import React from 'react';
import Head from 'next/head';
import Image from "next/image";
import Reservation from '../components/reservation';
import Explore from '../components/explore';
import Bookingcard from '../components/bookingcard';
import Food from '../components/food';
import RoomBox from '../components/rooms';
import view from "../../../public/vieww.webp";



function Main() {

    return (
        <>
            <Head>
                <title>Hotel Paradise - Luxury Stay & Beach Views | Book Now</title>

                <meta
                    name="description"
                    content="Welcome to Hotel Paradise, where luxury meets comfort. Explore our premium hotel services, including free WiFi, fine dining, easy booking, and beautiful beach views."
                />
                <meta name="keywords" content="hotel, luxury, booking, free wifi, beach, restaurant, comfortable stay" />
                <meta name="author" content="Hotel Paradise" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Hotel Paradise - Luxury and Comfort" />
                <meta
                    property="og:description"
                    content="Discover premium hotel services and enjoy a luxurious stay at Hotel Paradise. From free WiFi to fine dining, we offer everything to make your stay unforgettable."
                />
                <meta property="og:image" content="/hotel.jpg" />
                <meta property="og:url" content="https://hotelparadise.example.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://hotelparadise.example.com" />
            </Head>
            <main className="w-full">

                <div className="w-full h-[450px] relative">
                    <Image
                        src={view}
                        alt="hotel"
                        priority
                        layout="fill"
                        objectFit="cover"
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


                <div className="px-10 mt-36 sm:mt-28 lg:mt-20 relative z-0 mx-auto mb-20">


                </div>


                <div className="w-full overflow-x-auto  scrollbar-hide flex flex-col gap-20">
                  
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
                    <Bookingcard />
                    </div>
                    

                </div>
                <div className="mb-56"></div>
            </main>

        </>



    );
}

export default Main;
