import React from "react";
import AboutBG from "./AboutBG";
import image from "../../assets/image.jpg";

const About = () => {
  const content = [
    "The Artificial Intelligence Club at VIT Chennai is a dynamic community of tech enthusiasts, aspiring data scientists, and innovators passionate about Artificial Intelligence, Machine Learning, and Data Science. Renowned for its engaging hackathons, coding challenges, and hands-on workshops led by industry experts and alumni, the club offers students an immersive platform to explore and create impactful AI solutions. Members gain valuable technical skills, mentorship, and networking opportunities, equipping them with the tools and experience needed for successful careers and influential projects in the rapidly evolving AI landscape.",
    "The Biosphere Club at VIT Chennai was started with the vision of raising awareness and making a meaningful impact on pressing environmental issues such as global warming and climate change. Driven by a commitment to sustainability and to creating a better world for future generations, the club organizes a range of initiatives, including beach cleanup drives, plantation projects, and guest seminars on wildlife protection. Through these efforts, the Biosphere Club has become a hub for nature lovers and eco-enthusiasts.",
  ];
  return (
    <>
      <div className="relative w-screen h-screen">
        <AboutBG />
        <div className="absolute top-0 left-0 flex flex-col w-screen h-screen p-10 overflow-y-scroll lg:overflow-y-hidden sm:p-20 ">
          <div className="mb-10 font-normal text-center text-teal-400 lg:text-right text-7xl custom-font">
            ABOUT
          </div>
          <div>
            <div className="flex flex-col items-center justify-between gap-5 lg:gap-20 lg:flex-row">
              <img
                className="h-[150px] sm:h-[350px] rounded-full"
                src={image}
                alt=""
              />
              <div>
                <div className="mb-2 text-4xl font-semibold text-center text-white lg:text-left">
                  AI Club
                </div>
                <div className="mb-10 text-xl leading-8 text-center text-white lg:mb-0 lg:text-left ">
                  {content[0]}
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse items-center justify-between gap-10 lg:gap-20 lg:flex-row">
              <div>
                <div className="mb-2 text-4xl font-semibold text-center text-white lg:text-right">
                  Biosphere Club
                </div>
                <div className="text-xl leading-8 text-center text-white lg:text-right ">
                  {content[1]}
                </div>
              </div>
              <img
                className="h-[150px] sm:h-[350px] rounded-full"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
