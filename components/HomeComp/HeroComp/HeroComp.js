import React from "react";

const HeroComp = () => {
  return (
    <div className="">
      <div className="mx-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 bg-black/70 flex justify-center flex-col">
          <h1 className="text-3xl px-10 font-bold sm:text-5xl lg:text-6xl">
            The <span className="text-orange-600">Best</span>{" "}
          </h1>
          <h1 className="text-3xl px-10 font-bold sm:text-5xl lg:text-6xl">
            {" "}
            <span className="text-orange-600">Foods</span> Delivered{" "}
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroComp;
