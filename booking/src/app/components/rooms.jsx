import React from "react";
import room from "../../../public/bed.jpg";
import Image from "next/image";

function RoomBox() {
  return (
    <div className=" mx-auto mb-20  sm:p-0">
      <div>
        <h2 className="text-2xl text-center mb-12 pr-10">
          Elegant Rooms for Every Guest
        </h2>
      </div>


      <div className="flex overflow-x-auto space-x-4 scrollbar-hide px-4 snap-x snap-mandatory">
   
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg flex flex-col w-80 h-96 shrink-0 snap-center rounded-md"
          >
         
         <div className="relative h-48 w-full rounded-t-md overflow-hidden">
      <Image
        src={room}
        alt="hotel"
        priority
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
 
            <div className="p-4 flex flex-col items-center justify-around flex-grow">
              <p className="text-xl font-thin">Suit Room</p>
              <p className="text-sm text-gray-500">
                Far away behind mountains, from the countries
              </p>
              <div className="flex items-center justify-center gap-3">
                <p className="text-yellow-600">$400</p>
                <button className="p-1 rounded-md text-sm border-2 hover:bg-amber-950 hover:text-white">
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
