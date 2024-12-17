import React from 'react'
import room from "../../../public/bed.jpg";
import Image from 'next/image';
import { FaLock, FaClock, FaShower } from "react-icons/fa";
import { IoBedSharp } from "react-icons/io5";
import { PiSwimmingPool } from "react-icons/pi";
import { MdOutlineWbSunny } from "react-icons/md";

function RoomBox() {
  return (
    <div className='mt-20 px-5 mx-auto mb-20'>
      <div className='grid grid-cols-1  lg:grid-cols-2 w-full '>
        <div className='h-72 flex w-full gap-5 bg-white rounded-md'>
          <div className='w-full h-72 relative'>
            <Image
              src={room}
              alt='hotel'
              priority
              layout='fill'
              objectFit='cover'
              objectPosition='top'

            />
          </div>
          <div className='flex flex-col  w-full justify-between py-2'>



            <div className='flex flex-col gap-2'>
              <div className='text-xl font-medium'>Suit Room</div>
              <div className='flex gap-3 text-gray-600 items-center'>
                <div className='flex items-center gap-1'>
                  <div> <MdOutlineWbSunny /></div>
                  <div>Sunlight</div>
                </div>
                <div className='flex items-center gap-1'>
                  <div> <PiSwimmingPool /></div>
                  <div>Sea view</div>
                </div>



              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 text-sm text-gray-600 '>
              <div className='flex items-center gap-2'>
                <FaShower /> <span>Shower</span>
              </div>
              <div className='flex items-center gap-2'>
                <FaLock /> <span>Safe</span>
              </div>
              <div className='flex items-center gap-2'>
                <FaClock />  <span>24/7 Service</span>
              </div>
              <div className='flex items-center gap-2'>
                <IoBedSharp /> <span>Comfortable Bed</span>
              </div>
            </div>

            <button className='bg-primary w-40 px-5 py-2 text-white font-medium font-bitter rounded-md'>Reserve</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomBox
