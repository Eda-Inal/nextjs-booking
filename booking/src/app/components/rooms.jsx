import React from 'react'
import room from "../../../public/bed.jpg";
import Image from 'next/image';

function RoomBox() {
  return (
    <div className='mt-20 px-5 mx-auto mb-20'>
      <div className='grid grid-cols-1  lg:grid-cols-2'>
<div className='h-72 border flex '>
    <div className='w-1/2 h-72 relative'>
    <Image
                            src={room}
                            alt='hotel'
                            priority
                            layout='fill'
                            objectFit='cover'
                            objectPosition='top'

                        />
    </div>

        </div>
      </div>
    </div>
  )
}

export default RoomBox
