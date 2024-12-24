import React from "react";
import Image from "next/image";
import roomsData from "../../../public/data/rooms.json"

function RoomBox() {
  return (
    <>
    
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-2xl text-center">
            Elegant Rooms for Every Guest
          </h3>
        </div>
        <div className="relative">
        <button className="absolute left-[-12px] top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 z-10"  aria-label="Scroll left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide  snap-x snap-mandatory">

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
<button className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 z-10" aria-label="Scroll right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        </div>
     
      </div>
    </>

  );
}

export default RoomBox;
