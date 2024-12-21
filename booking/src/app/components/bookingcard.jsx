import React from 'react'
import Image from 'next/image';
import view from "../../../public/view.jpg";
import { FaUtensils } from "react-icons/fa";
import { PiWineFill } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";

function Bookingcard() {
  return (
    <div className="flex overflow-x-auto gap-4 mx-auto mt-12 scrollbar-hide">
   {[...Array(5)].map((_, index) => (  
         <div key={index} className="relative bg-white shadow-lg flex flex-col w-96 flex-shrink-0"> 
         <div className="relative h-48 w-full">
           <Image
             src={view}
             alt="hotel"
             layout="fill"
             objectFit="cover"
             objectPosition="top"
             priority= {false}
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
               <FaUtensils />
               <div>Gourmet International Cuisine</div>
             </div>
 
             <div className="flex items-center gap-2">
               <PiWineFill />
               <div>Curated Wine Selection</div>
             </div>
 
             <div className="flex items-center gap-2">
               <CiClock2 />
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
  )
}

export default Bookingcard
