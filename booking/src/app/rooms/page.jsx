import React from 'react'
import Image from 'next/image'
import hotel from "../../../public/room1.jpg";

function Rooms() {
  return (
    <div>
       <div className='w-full h-[700px] relative '>
        <Image
          src={hotel}
          alt='hotel'
          priority
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute top-1/3 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-lora'>
          <div className='flex flex-col items-center  gap-6'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl mt-12 sm:mt-0 text-center'>Feel Like in Paradise </h1>
            <button className='p-2 px-4 border-2 rounded-md text-sm lg:text-lg' >Check the Rooms</button>
          </div>

        </div>
      
      </div>
    </div>
  )
}

export default Rooms
