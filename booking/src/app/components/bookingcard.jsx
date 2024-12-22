import React from 'react'
import Image from 'next/image';
import view from "../../../public/view.jpg";
import Head from 'next/head';

function Bookingcard() {
  return (
 <>
       <Head>
        <title>Hotel Paradise - About Our Hotel</title>
        <meta
          name="description"
          content="Discover more about Hotel Paradise, offering world-class service, luxury accommodations, and stunning beach views. Book your stay now."
        />
        <meta
          name="keywords"
          content="hotel, luxury, beach views, golden key hotel, best hotels, reserve room"
        />
        <meta property="og:title" content="Hotel Paradise - About Our Hotel" />
        <meta
          property="og:description"
          content="Learn about the luxurious Golden Key Hotel, recommended by travelers worldwide for its exceptional service and stunning accommodations."
        />
        <meta property="og:image" content="/images/hotel.jpg" />
        <meta property="og:url" content="https://hotelparadise.example.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div className='flex flex-col gap-6'>
      <h5 className='text-2xl text-center'>About Our Hotel</h5>
      <div className="flex overflow-x-auto gap-4 mx-auto  scrollbar-hide px-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="relative bg-white shadow-lg flex flex-col w-96 flex-shrink-0">
            <div className="relative h-48 w-full">
              <Image
                src={view}
                alt="hotel"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority={false}
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div className="text-primary font-semibold text-sm md:text-md">Golden Key Hotel</div>
              <p className="text-md font-semibold">The Most Recommended Hotel In the World</p>
              <p className="text-sm">
                Far far away, behind the word mountains, far from the countries Vokalia
                and Consonantia
              </p>

              <div className="text-xs md:text-sm text-gray-600 flex gap-2 flex-wrap mt-4">



                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>


                  <div>
                    Open Daily: <span className="font-medium">7 AM - 11 PM</span>
                  </div>
                </div>
              </div>

              <button className="bg-gradient-to-r from-[#96d782] to-[#577f4b] w-40 p-2 rounded-full text-white text-sm mt-4">
                Reserve your room
              </button>
            </div>
          </div>
        ))}



      </div>
    </div>
 </>


  )
}

export default Bookingcard
