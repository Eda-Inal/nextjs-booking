import React from 'react'
import Image from 'next/image'
import exploreData from "../../../public/data/datas.json"
import Head from 'next/head';

function Explore() {
    return (
        <>
            <Head>
                <title>Hotel Paradise - Explore Our Services</title>
                <meta
                    name="description"
                    content="Explore the luxurious services provided at Hotel Paradise. From spa treatments to free WiFi, we offer everything to make your stay exceptional."
                />
                <meta name="keywords" content="hotel services, luxury, free wifi, spa, booking, comfortable stay" />
                <meta property="og:title" content="Hotel Paradise - Explore Our Services" />
                <meta
                    property="og:description"
                    content="Explore the variety of premium services offered at Hotel Paradise to ensure a luxurious and comfortable stay."
                />
                <meta property="og:image" content="/images/services.jpg" />
                <meta property="og:url" content="https://hotelparadise.example.com/services" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
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
