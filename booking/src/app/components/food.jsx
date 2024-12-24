import React from "react";
import Image from "next/image";
import foodData from "../../../public/data/food-data.json"
import Head from "next/head";


function Food() {

  return (
    <>
   
      <div className="flex flex-col gap-6">
      <h4 className="text-2xl text-center">Our Restaurant</h4>
      <div className="relative">
      <button className="absolute left-[-12px] top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-1 z-10"  aria-label="Scroll left">
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
      <div className=" overflow-x-auto flex space-x-4 scrollbar-hide snap-x snap-mandatory ">
        {foodData.map((item) => (
          <div
            key={item.id}
            className="bg-white h-24 rounded-full shadow-sm flex gap-2 shrink-0 w-96 snap-center"
          >

            <div className="h-24 w-24 rounded-full overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={item.alt}
                className="object-cover rounded-full"
                width={96}
                height={96}
                priority={false}
              />
            </div>

            <div className="flex flex-col w-3/4 gap-2 px-3 pr-8">
              <div className="flex justify-between">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="font-bold text-primary">${item.price}</p>
              </div>
              <p className="text-xs">{item.description}</p>
            </div>
          </div>
        ))}
     
      </div>
      <button className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-1 z-10"aria-label="Scroll right">
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

export default Food;

