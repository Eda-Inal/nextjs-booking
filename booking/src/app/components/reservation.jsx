import React from 'react'
import Head from 'next/head';

function Reservation() {
    return (

        <>
            <Head>
                <title>Book Your Stay at Hotel Paradise | Reservation</title>
                <meta
                    name="description"
                    content="Reserve your luxurious stay at Hotel Paradise. Choose your arrival and departure dates, select the number of people, and find the perfect room for your vacation."
                />
                <meta
                    name="keywords"
                    content="hotel reservation, luxury stay, booking, vacation, hotel rooms"
                />
                <meta property="og:title" content="Book Your Stay at Hotel Paradise" />
                <meta
                    property="og:description"
                    content="Reserve your luxurious stay at Hotel Paradise. Find the best rooms, check availability, and book your perfect vacation."
                />
                <meta property="og:image" content="/reservation-image.jpg" />
                <meta property="og:url" content="https://hotelparadise.example.com/reservation" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <div className='bg-white p-4 h-64 sm:h-40  md:h-24 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 place-items-center font-bitter'>
                <div className='relative w-full'>
                    <input
                        className='rounded-full bg-gray-100 w-full h-8 lg:h-10 outline-none text-md px-4 flex justify-between '
                        type="text"
                        placeholder='Arrival Date'
                    />
                    <div className='absolute inset-y-0 right-0 px-3 
                    flex items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>



                    </div>
                </div>

                <div className='relative w-full'>
                    <input
                        className='rounded-full bg-gray-100 w-full h-8 lg:h-10 outline-none text-md px-4 flex justify-between '
                        type="text"
                        placeholder='Departure Date'
                    />
                    <div className='absolute inset-y-0 right-0 px-3 
                    flex items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>


                    </div>
                </div>
                <div className='relative w-full'>
                    <input
                        className='rounded-full bg-gray-100 w-full h-8 lg:h-10 outline-none text-md px-4 flex justify-between '
                        type="text"
                        placeholder='People'
                    />
                    <div className='absolute inset-y-0 right-0 px-3 
                    flex items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>


                    </div>
                </div>
                <button
                    className='rounded-full w-full h-10 sm:h-8 lg:h-10 bg-gradient-to-r from-[#96d782] to-[#577f4b] text-white text-xl font-bitter shadow-md hover:shadow-lg transition-all'
                >
                    Find now
                </button>


            </div>
        </>

    )
}

export default Reservation