import React from 'react'
import Image from 'next/image'
import exploreData from "../../../public/data/datas.json"
import Head from 'next/head';

function Explore() {
    return (
        <>
          
            <div className='mt-20 '>

                <h2 className='text-2xl text-center font-bitter mb-6 '>Explore Our Hotel Services</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  '>
                    {exploreData.map((service) => (
                        <article
                            key={service.id}
                            className='bg-white w-full   h-28 border rounded-md shadow-sm flex flex-col items-center justify-around'
                        >
                            <div>
                                <Image src={service.imageSrc} width={50} height={50} alt={service.alt} />
                            </div>
                            <h3 className='text:md sm:text-lg'>{service.title}</h3>
                        </article>
                    ))}

                </div>
            </div>

        </>

    )
}

export default Explore
