import React from "react";
import Image from "next/image";
import foodData from "../../../public/data/food-data.json"
import Head from "next/head";


function Food() {

  return (
    <>
     <Head>
        <title>Hotel Paradise - Our Restaurant</title>
        <meta
          name="description"
          content="Discover the exquisite menu at Hotel Paradise. Enjoy a variety of gourmet dishes made with fresh ingredients."
        />
        <meta name="keywords" content="restaurant, hotel paradise, gourmet, food, dining, menu" />
        <meta property="og:title" content="Hotel Paradise - Restaurant Menu" />
        <meta
          property="og:description"
          content="Explore the delightful dishes at Hotel Paradise restaurant. Enjoy a range of mouth-watering meals prepared to perfection."
        />
        <meta property="og:image" content="/images/restaurant.jpg" />
        <meta property="og:url" content="https://hotelparadise.example.com/restaurant" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="flex flex-col gap-6">
      <h4 className="text-2xl text-center">Our Restaurant</h4>
      <div className=" overflow-x-auto flex space-x-4 scrollbar-hide snap-x snap-mandatory px-4">
        {foodData.map((item) => (
          <div
            key={item.id}
            className="bg-white h-24 rounded-full shadow-sm flex gap-2 shrink-0 w-96 snap-center"
          >

            <div className="h-24 w-24 rounded-full overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={item.alt}
                className="object-cover rounded-full"
                width={96}
                height={96}
                priority={false}
              />
            </div>

            <div className="flex flex-col w-3/4 gap-2 px-3 pr-8">
              <div className="flex justify-between">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="font-bold text-primary">${item.price}</p>
              </div>
              <p className="text-xs">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  
  );
}

export default Food;

