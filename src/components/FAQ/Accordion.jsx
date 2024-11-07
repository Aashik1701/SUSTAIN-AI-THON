import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-11/12 h-auto px-5 py-2 mb-3 text-white border border-white sm:py-4 sm:w-11/12">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="font-semibold">{title}</div>
        <div>{isOpen ? "-" : "+"}</div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out mt-2 ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
