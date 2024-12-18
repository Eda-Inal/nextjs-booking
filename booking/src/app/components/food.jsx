import React from 'react'
import Image from 'next/image'
import img from "../../../public/food/food.jpg";
import { FaUtensils } from "react-icons/fa";

function Food() {
    return (
        <div className='mt-12'>
            <div className='flex justify-center gap-5 items-center'>
            <h5 className='text-3xl font-sacramento '>Our Restaurant </h5>
            <span><FaUtensils/></span>
</div>
         
            
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-6'>
                <div className='bg-white h-24 rounded-full shadow-sm flex gap-6  '>
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                        <Image
                            src={img} // Resim yolunu buraya ekleyin
                            alt="Profile"

                            className="object-cover"
                        />
                    </div>
                    <div className='flex flex-col w-3/4 gap-2 py-3'>
                        <div className='flex justify-between '>
                            <p className='text-lg font-semibold'>Chickpeas Salad</p>
                            <p className='font-bold text-primary'>20$</p>
                        </div>

                        <p className='text-xs'>Refreshing mix of chickpeas, cucumbers, tomatoes, red onions</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Food
