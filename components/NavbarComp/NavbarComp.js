import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillWallet,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineFavorite } from "react-icons/md";

import SidebarRow from "./SidebarRow/SidebarRow";

const NavbarComp = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" flex justify-between items-center pb-4">
      {/* left side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu onClick={() => setNav(!nav)} size={25} />
        </div>
        <h1 className="text-xl ml-2 sm:text-3xl lg:text-4xl">
          Best <span className="font-bold">Eats</span>{" "}
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ml-2">
          <p className="bg-black text-white rounded-full p-2 mr-1">Delivery</p>
          <p>Pickup</p>
        </div>
      </div>

      {/* Search Input */}

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          name=""
          id=""
          placeholder="Search food"
        />
      </div>

      {/* Right Side */}
      <div>
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          <BsFillCartFill size={20} className="mr-2" /> Cart
        </button>
      </div>

      {/* Mobile menu */}
      {nav && (
        <div
          onClick={() => setNav(!nav)}
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
        ></div>
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500 p-4"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500 p-4"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h1 className="text-2xl ">
          Best <span className="font-bold">Eats</span>{" "}
        </h1>
        <nav>
          <ul className="flex flex-col text-gray-800 ">
            <SidebarRow Icon={TbTruckDelivery} title="Order" />
            <SidebarRow Icon={MdOutlineFavorite} title="Favorites" />
            <SidebarRow Icon={AiFillWallet} title="Wallet" />
            {/* <SidebarRow Icon={IoHelpCircle} title="Help" /> */}
            <SidebarRow Icon={AiFillTag} title="Promotions" />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavbarComp;
