import React from "react";
import Accordion from "./Accordion";
import FaqBG from "./FaqBG";
import "./Faq.css";

const Faq = () => {
  const content =
    "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.";
  return (
    <div className="relative w-screen h-screen ">
      <FaqBG />
      <div className="absolute top-0 left-0 flex flex-col w-screen h-screen pl-10 sm:pl-20 justify-evenly">
        <div className="text-5xl font-semibold text-white">FAQs</div>
        <div>
          <Accordion
            title="What is the project idea submission process?"
            content={content}
          />
          <Accordion
            title="How can I submit my project idea?"
            content={content}
          />
          <Accordion
            title="Is there any specific format for submitting the project idea?"
            content={content}
          />
          <Accordion
            title="When is the deadline for project idea submission?"
            content={content}
          />
          <Accordion
            title="Can I submit multiple project ideas?"
            content={content}
          />
        </div>
        <div className="flex flex-col gap-2 text-white sm:gap-4">
          <div className="text-3xl font-semibold">Still have questions?</div>
          <div className="w-10/12 text-base lg:w-3/12">
            If you have any other questions related to project ideas submission,
            please feel free to reach out to this
          </div>
          <button className="w-[200px] py-3 border border-white rounded-full px-7">
            Submit Project Idea
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
