import React from "react";
import { TbTerminal2 } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

const Card = ({ bgImageUrl }) => {
  return (
    <div>
      <div
        className="relative h-[250px] w-[340px] bg-cover bg-center rounded-2xl text-white flex flex-col-reverse overflow-hidden"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <div className="relative top-[70px] hover:top-[0px] transition-all duration-300">
          <div className="relative flex justify-center h-[15px]">
            <div className="flex justify-center w-10 bg-gray-400 bg-opacity-50 rounded-t-full">
              <IoIosArrowUp />
            </div>
          </div>
          <div className="flex flex-col bg-gray-400 bg-opacity-50 rounded-lg">
            <div className="flex items-center mt-2 mb-8 text-3xl font-bold justify-evenly">
              Aashik
              <TbTerminal2 />
            </div>
            <div className="flex mb-5 justify-evenly">
              <div className="flex items-center px-2 py-1 text-black bg-opacity-50 rounded-lg cursor-pointer Profile-BG-Sandal">
                LinkedIn <GoArrowUpRight className="h-[20px]" />
              </div>
              <div className="flex items-center px-2 py-1 text-black bg-opacity-50 rounded-lg cursor-pointer Profile-BG-Purple">
                Instagram <GoArrowUpRight className="h-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
