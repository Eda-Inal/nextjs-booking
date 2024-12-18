import React from 'react'
import Image from 'next/image';
import view from "../../../public/view.jpg";
import x from "../../../public/x.jpg";
import { FaUtensils } from "react-icons/fa";
import { PiWineFill } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";

function Bookingcard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto mt-12">

      <div className="relative bg-white shadow-lg flex flex-col">
        <div className="relative h-64 w-full">
          <Image
            src={view}
            alt="hotel"
            priority
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div className="text-primary font-semibold text-sm md:text-md">Golden Key Hotel</div>
          <p className="text-md md:text-xl font-bold">The Most Recommended Hotel In the World</p>
          <p className="text-sm">
            Far far away, behind the word mountains, far from the countries Vokalia
            and Consonantia, there live the blind texts. Separated they live in
            Bookmarksgrove right at the coast of the Semantics, a large language
            ocean.
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

          <button className="bg-gradient-to-r from-[#96d782] to-[#577f4b] w-40 p-2 rounded-md text-white text-sm mt-4">
            Reserve your room
          </button>
        </div>
      </div>


      <div className="relative bg-white shadow-lg flex flex-col">
        <div className="relative h-64 w-full">
          <Image
            src={view}
            alt="hotel"
            priority
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div className="text-primary  text-sm md:text-md font-semibold">Golden Key Hotel</div>
          <p className="text-md md:text-xl font-bold">Fine Dining Experience with a View</p>
          <p className="text-sm">
            Indulge in a world-class dining experience at Golden Key Restaurant,
            where exquisite flavors meet breathtaking views. From the freshest
            local ingredients to international gourmet dishes, every meal is a
            masterpiece.
          </p>


          <div className="text-xs md:text-sm text-gray-600 flex gap-2 flex-wrap mt-4 ">
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

          <button className="bg-gradient-to-r from-[#96d782] to-[#577f4b] w-40 p-2 rounded-md text-white text-sm mt-4">
            Reserve your room
          </button>
        </div>
      </div>
    </div>

  )
}

export default Bookingcard
