import React, { useState } from "react";
import { categories } from "../../../Data/DataFile";

const MenuComp = () => {
  const [category, setCategory] = useState(categories);
  
  return (
    <div>
      <h2 className="text-center py-8 text-orange-600 text-3xl font-bold">Top Rated Menu Items</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 rounded-xl'>
        {category?.map((item) => {
          return (
            <div className="bg-gray-200 flex items-center justify-between px-3 rounded-xl">
              <p className='font-bold'>{item.name}</p>
              <img className="w-20" src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuComp;
