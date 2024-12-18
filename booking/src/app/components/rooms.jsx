import React from 'react'
import room from "../../../public/bed.jpg";
import Image from 'next/image';
import { FaLock, FaClock, FaShower } from "react-icons/fa";
import { IoBedSharp } from "react-icons/io5";
import { PiSwimmingPool } from "react-icons/pi";
import { MdOutlineWbSunny } from "react-icons/md";

function RoomBox() {
  return (
    <div className='mt-12 px-5 mx-auto mb-20 '>
      <div>
        <h2 className='text-2xl text-center mb-12  ita'>Elegant Rooms for Every Guest</h2>
      </div>
      <div className='grid grid-cols-1  lg:grid-cols-3 w-full gap-3 '>
        <div className='h-64 flex w-full   bg-white rounded-xl  shadow-lg  '>
        <div className='w-full h-64 relative rounded-lg overflow-hidden'>
  <Image
    src={room}
    alt='hotel'
    priority
    layout='fill'
    objectFit='cover'
    objectPosition='top'
  />
</div>

          <div className='flex flex-col  w-full justify-between py-2 px-4'>



            <div className='flex flex-col gap-3 '>
              <div className='text-xl font-medium text-primary'>Suit Room</div>
              <div className='flex gap-3  items-center text-xs'>
                <div className='flex items-center gap-1 '>
                  <div> <MdOutlineWbSunny /></div>
                  <div>Sunlight</div>
                </div>
                <div className='flex items-center gap-1'>
                  <div> <PiSwimmingPool /></div>
                  <div>Sea view</div>
                </div>



              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 text-xs text-gray-700 '>
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

            <button className='bg-gradient-to-r from-[#96d782] to-[#577f4b] w-full px-5 py-2 text-white font-semibold font-bitter rounded-md  shadow-lg text-md'>Reserve</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default RoomBox
