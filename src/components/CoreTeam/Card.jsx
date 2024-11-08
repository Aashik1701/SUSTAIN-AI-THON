// Card.jsx

import { TbTerminal2 } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

// eslint-disable-next-line react/prop-types
const Card = ({ bgImageUrl, name, linkedin, instagram }) => {
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
              {name}
              <TbTerminal2 />
            </div>
            <div className="flex mb-5 justify-evenly">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-2 py-1 text-black bg-opacity-50 rounded-lg cursor-pointer Profile-BG-Sandal"
              >
                LinkedIn <GoArrowUpRight className="h-[20px]" />
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-2 py-1 text-black bg-opacity-50 rounded-lg cursor-pointer Profile-BG-Purple"
              >
                Instagram <GoArrowUpRight className="h-[20px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;