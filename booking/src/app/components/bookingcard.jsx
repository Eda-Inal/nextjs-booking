import React from 'react'
import Image from 'next/image';
import view from "../../../public/view.jpg";
import x from "../../../public/x.jpg";

function Bookingcard() {
  return (
    <div>
         <div className='w-3/4 h-64 mt-36 sm:mt-28 lg:mt-40 relative z-0 mx-auto flex mb-16 font-bitter gap-6 '>
                          <div className='w-1/2 h-64 relative'>
                              <Image
                                  src={view}
                                  alt='hotel'
                                  priority
                                  layout='fill'
                                  objectFit='cover'
      
                              />
                          </div>
      
                          <div className='w-1/2  flex flex-col justify-between  '>
                              <div className='text-primary font-medium ' >Golden Key Hotel</div>
                              <p className='text-2xl'>The Most Recomended Hotel In the World</p>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                              <button className='bg-primary w-48 p-3 rounded-md text-white'>Reserve your room</button>
                          </div>
      
      
                      </div>
                      <div className='w-3/4 h-64 mt-36 sm:mt-28 lg:mt-20 relative z-0 mx-auto flex mb-16 font-bitter gap-6 '>
                      
      
                          <div className='w-1/2  flex flex-col justify-between  '>
                              <div className='text-primary font-medium ' >Golden Key Hotel</div>
                              <p className='text-2xl'>The Most Recomended Hotel In the World</p>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                              <button className='bg-primary w-48 p-3 rounded-md text-white'>Reserve your room</button>
                          </div>
                          <div className='w-1/2 h-64 relative'>
                              <Image
                                  src={x}
                                  alt='hotel'
                                  priority
                                  layout='fill'
                                  objectFit='cover'
                                  objectPosition='top'
      
                              />
                          </div>
      
      
                      </div>
    </div>
  )
}

export default Bookingcard
