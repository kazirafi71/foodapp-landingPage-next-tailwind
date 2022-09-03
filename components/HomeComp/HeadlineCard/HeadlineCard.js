import React from "react";

const HeadlineCard = () => {
  return (
    <div className="">
      {/* card */}
      <div className="rounded-xl relative hover:overflow-hidden">
        {/* overlay */}
        <div className="absolute rounded-xl w-full h-full bg-black/70 text-white p-4 flex justify-center flex-col  ">
          <div className="text-center space-y-2">
            <p className="text-xl md:text-2xl font-bold">
              Suns's Out BOGO'S out
            </p>
            <p className="text-xl">through 8/26</p>
            <button
              className="border-white bg-white text-black py-2
             mt-2 font-medium rounded-full hover:bg-transparent
              hover:text-white duration-300"
            >
              Order Now
            </button>
          </div>
        </div>
        <img
          className="rounded-xl w-full max-h-[160px] md:max-h-[260px] object-cover hover:scale-105 "
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCard;
