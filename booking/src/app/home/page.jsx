import React from 'react';
import HeroSection from '../components/herosection';
import Explore from '../components/explore';
import Food from '../components/food';
import RoomBox from '../components/rooms';
import About from '../components/aboutcard';



function Main() {

    return (
        <>
            <main className="w-full">

                {/* <HeroSection /> */}
                <div className="px-10 mt-36 sm:mt-28 lg:mt-20 relative z-0 mx-auto mb-20">


                </div>


                <section id="main-content" className="w-full overflow-x-auto scrollbar-hide flex flex-col gap-20 lg:px-20 px-5">
                    <div id="services" className='scroll-mt-[80px]'>
                        <Explore />
                    </div>
                    <div id="rooms" className='scroll-mt-[80px]'>
                        <RoomBox />
                    </div>
                    <div id="restaurant" className='scroll-mt-[80px]'>
                        <Food />
                    </div>
                    <div id="about" className='scroll-mt-[80px]'>
                        <About />
                    </div>
                </section>

                <div className="mb-20"></div>
            </main>

        </>



    );
}

export default Main;
