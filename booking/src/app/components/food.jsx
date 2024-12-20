import React from "react";
import Image from "next/image";
import img from "../../../public/food/food.jpg";
import { FaUtensils } from "react-icons/fa";

function Food() {

  const foodItems = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `Chickpeas Salad ${i + 1}`,
    description:
      "Refreshing mix of chickpeas, cucumbers, tomatoes, red onions",
    price: "$20",
  }));

  return (
    <div className="mt-12">
   
      <div className="flex justify-center gap-5 items-center pr-10">
        <h5 className="text-3xl font-bitter">Our Restaurant</h5>
        <span>
          <FaUtensils />
        </span>
      </div>

  
      <div className="mt-6 overflow-x-auto flex space-x-4 scrollbar-hide snap-x snap-mandatory px-4">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="bg-white h-24 rounded-full shadow-sm flex gap-2 shrink-0 w-96 snap-center"
          >
        
            <div className="h-24 w-24 rounded-full overflow-hidden">
              <Image
                src={img}
                alt={item.name}
                className="object-cover"
              />
            </div>
        
            <div className="flex flex-col w-3/4 gap-2 px-3 pr-8">
              <div className="flex justify-between">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="font-bold text-primary">{item.price}</p>
              </div>
              <p className="text-xs">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;

