import React from "react";
import Image from "next/image";
import aboutData from "../../../public/data/about.json"

function About() {
  return (
    <>

      <div className="flex flex-col gap-6">
        <div>
          <h5 className="text-2xl text-center">
            Experience Unforgettable Moments
          </h5>
        </div>
        <div className="relative">
          <button className="absolute left-[-12px] top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 z-10" aria-label="Scroll left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide  snap-x snap-mandatory">

            {aboutData.map((about) => (
              <div
                key={about.id}
                className="relative bg-white shadow-lg flex flex-col w-80 h-96 shrink-0 snap-center rounded-md "
              >

                <div className="relative h-48 w-full rounded-t-md overflow-hidden">
                  <Image
                    src={about.imageSrc}
                    alt={`Luxury room with ${about.description}`}
                    priority={false}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div className="text-primary font-semibold text-sm md:text-md">Golden Key Hotel</div>
                  <p className="text-md font-semibold">{about.title}</p>
                  <p className="text-sm">
                    {about.description}
                  </p>

                  <div className="text-xs md:text-sm text-gray-600 flex gap-2 flex-wrap mt-4">



                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>


                      <div>
                        {about.time}
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            ))}
          </div>
          <button className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 z-10" aria-label="Scroll right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

      </div>
    </>
  )
}

export default About
