import React from 'react'
import { LuCalendarDays, LuUser } from "react-icons/lu";

function Reservation() {
    return (


        <div className='bg-white p-4 h-64 sm:h-40  md:h-24 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 place-items-center font-bitter'>
            <div className='relative w-full'>
                <input
                    className='rounded-full bg-gray-100 w-full h-8 lg:h-10 outline-none text-md px-4 flex justify-between '
                    type="text"
                    placeholder='Arrival Date'
                />
                <div className='absolute inset-y-0 right-0 px-3 
                    flex items-center '>
                    <LuCalendarDays />
                </div>
            </div>

            <div className='relative w-full'>
                <input
                    className='rounded-full bg-gray-100 w-full h-8 lg:h-10 outline-none text-md px-4 flex justify-between '
                    type="text"
                    placeholder='Departure Date'
                />
                <div className='absolute inset-y-0 right-0 px-3 
                    flex items-center '>
                    <LuCalendarDays />
                </div>
            </div>
            <div className='relative w-full'>
                <input
                    className='rounded-full bg-gray-100 w-full h-8 lg:h-10 outline-none text-md px-4 flex justify-between '
                    type="text"
                    placeholder='People'
                />
                <div className='absolute inset-y-0 right-0 px-3 
                    flex items-center '>
                    <LuUser />
                </div>
            </div>
            <button 
  className='rounded-full w-full h-10 sm:h-8 lg:h-10 bg-gradient-to-r from-[#96d782] to-[#577f4b] text-white text-xl font-bitter shadow-md hover:shadow-lg transition-all'
>
  Find now
</button>


        </div>
    )
}

export default Reservation