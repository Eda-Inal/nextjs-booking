import React from "react";
import Image from "next/image";
import roomsData from "../../../public/data/rooms.json"
import Head from "next/head";

function RoomBox() {
  return (
    <>
      <Head>
        <title>Hotel Paradise - Elegant Rooms for Every Guest</title>
        <meta
          name="description"
          content="Discover our elegant and luxurious rooms at Hotel Paradise. From beach views to cozy interiors, find the perfect room for your stay."
        />
        <meta
          name="keywords"
          content="hotel rooms, luxury rooms, beach view, cozy rooms, booking, stay"
        />
        <meta property="og:title" content="Hotel Paradise - Elegant Rooms for Every Guest" />
        <meta
          property="og:description"
          content="Explore a variety of elegant rooms with stunning views and luxurious amenities at Hotel Paradise."
        />
        <meta property="og:image" content="/images/rooms.jpg" />
        <meta property="og:url" content="https://hotelparadise.example.com/rooms" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-2xl text-center">
            Elegant Rooms for Every Guest
          </h3>
        </div>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide px-4 snap-x snap-mandatory">

          {roomsData.map((room) => (
            <div
              key={room.id}
              className="relative bg-white shadow-lg flex flex-col w-80 h-96 shrink-0 snap-center rounded-md transform transition-transform duration-300 hover:scale-105"
            >

              <div className="relative h-48 w-full rounded-t-md overflow-hidden">
                <Image
                  src={room.imageSrc}
                  alt={`Luxury room with ${room.description}`}
                  priority={false}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>

              <div className="p-4 flex flex-col items-center justify-around flex-grow">
                <p className="text-xl font-thin">{room.title}</p>
                <p className="text-sm text-gray-500">
                  {room.description}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <p className="text-primary font-semibold">${room.price}</p>
                  <button className="p-2 rounded-md text-sm border-2 hover:bg-amber-950 hover:text-white">
                    Book now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  );
}

export default RoomBox;
