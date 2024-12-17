import React from 'react'
import Image from 'next/image';
import view from "../../../public/view.jpg";
import x from "../../../public/x.jpg";
import { FaUtensils } from "react-icons/fa";
import { PiWineFill } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";

function Bookingcard() {
    return (
        <div className='w-3/4 flex mx-auto gap-4'>
           <div className='w-1/2 h-96 mt-36 sm:mt-28 lg:mt-40 relative z-0 mx-auto bg-white shadow-lg '>
  <div className='relative h-1/2 w-full'>
    <Image
      src={view}
      alt='hotel'
      priority
      layout='fill'
      objectFit='cover'
      objectPosition='top'
    />
  </div>

  <div className='w-full flex flex-col justify-between p-3 h-1/3'>
    <div className='text-primary font-medium'>Golden Key Hotel</div>
    <p className='text-xl'>The Most Recommended Hotel In the World</p>
    <p className='text-sm'>
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
      there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
      Semantics, a large language ocean.
    </p>
    <div className='text-sm text-gray-600 flex gap-2 flex-wrap'>
      <div className='flex items-center gap-2'>
        <FaUtensils />
        <div>Gourmet International Cuisine</div>
      </div>

      <div className='flex items-center gap-2'>
        <PiWineFill />
        <div>Curated Wine Selection</div>
      </div>

      <div className='flex items-center gap-2'>
        <CiClock2 />
        <div>Open Daily: <span className='font-medium'>7 AM - 11 PM</span></div>
      </div>
    </div>

    <button className='bg-secondary w-40 p-2 rounded-md text-white text-sm mt-4'>
      Reserve your room
    </button>
  </div>
</div>
<div className='w-1/2 h-96 mt-36 sm:mt-28 lg:mt-40 relative z-0 mx-auto bg-white shadow-lg '>
  <div className='relative h-1/2 w-full'>
    <Image
      src={view}
      alt='hotel'
      priority
      layout='fill'
      objectFit='cover'
      objectPosition='top'
    />
  </div>

  <div className='w-full flex flex-col justify-between p-3 h-1/3'>
    <div className='text-primary font-medium'>Golden Key Hotel</div>
    <p className='text-xl'>Fine Dining Experience with a View</p>
    <p className='text-sm'>
    Indulge in a world-class dining experience at Golden Key Restaurant, where exquisite flavors meet breathtaking views. From the freshest local ingredients to international gourmet dishes, every meal is a masterpiece
    </p>
    <div className='text-sm text-gray-600 flex gap-2 flex-wrap'>
      <div className='flex items-center gap-2'>
        <FaUtensils />
        <div>Gourmet International Cuisine</div>
      </div>

      <div className='flex items-center gap-2'>
        <PiWineFill />
        <div>Curated Wine Selection</div>
      </div>

      <div className='flex items-center gap-2'>
        <CiClock2 />
        <div>Open Daily: <span className='font-medium'>7 AM - 11 PM</span></div>
      </div>
    </div>

    <button className='bg-secondary w-40 p-2 rounded-md text-white text-sm mt-4'>
      Reserve your room
    </button>
  </div>
</div>

     
        </div>
    )
}

export default Bookingcard
