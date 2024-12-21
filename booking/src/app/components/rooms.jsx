import React from "react";
import Image from "next/image";
import roomsData from "../../../public/data/rooms.json"

function RoomBox() {
  return (
    <div className=" mx-auto sm:p-0">
      <div>
        <h3 className="text-2xl text-center mb-12 pr-10">
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
        layout="fill"
        objectFit="cover"
        objectPosition="center"
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
  );
}

export default RoomBox;
