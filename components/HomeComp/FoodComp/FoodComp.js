import React, { useState } from "react";
import { data } from "../../../Data/DataFile";

const FoodComp = () => {
  
  const [food, setFood] = useState(data);
  return (
    <div>
      <h1 className="text-orange-600 font-medium text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between space-y-2">
        {/* filter types */}
        <div>
          <p className="font-medium mb-2">Filter Types</p>
          <div className="flex justify-between flex-wrap max-w-[400px] w-full lg:space-x-1">
            <button className="border-orange-600 py-[7px] px-4   hover:bg-white hover:text-orange-600 duration-300">
              All
            </button>
            <button className="border-orange-600 py-[7px] px-4   hover:bg-white hover:text-orange-600 duration-300">
              Burger
            </button>
            <button className="border-orange-600 py-[7px] px-4   hover:bg-white hover:text-orange-600 duration-300">
              Pizza
            </button>
            <button className="border-orange-600 py-[7px] px-4   hover:bg-white hover:text-orange-600 duration-300">
              Salads
            </button>
            <button className="border-orange-600 py-[7px] px-4   hover:bg-white hover:text-orange-600 duration-300">
              Chicken
            </button>
          </div>
        </div>
        {/* filter types */}
        <div>
          <p className="font-medium mb-2">Filter Price</p>
          <div className="flex justify-between flex-wrap max-w-[400px] w-full lg:space-x-2">
            <button className="border-orange-600 py-[7px] px-4   hover:bg-white hover:text-orange-600 duration-300">
              100
            </button>
            <button className="border-orange-600 py-[7px] px-4   hover:bg-white hover:text-orange-600 duration-300">
              500
            </button>
            <button className="border-orange-600 py-[7px] px-4   hover:bg-white hover:text-orange-600 duration-300">
              1000
            </button>
            <button className="border-orange-600 py-[7px] px-4   hover:bg-white hover:text-orange-600 duration-300">
              1500
            </button>
          </div>
        </div>
      </div>

      {/* food items */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4 ">
        {food?.map((item) => {
          return (
            <div className="border rounded-md shadow-sm hover:scale-105 duration-300">
              <img className="w-full h-[200px] rounded-t-md" src={item.image} alt="" />
              <div className="p-2 flex justify-between">
                {" "}
                <p>{item.name}</p>
                <p className="bg-orange-500 rounded-full text-white p-1">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodComp;
