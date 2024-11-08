// CoreTeam.jsx

import Card from "./Card";
import CoreTeamData from "./CoreTeamData.json"; // Adjust the path as necessary
import "./CoreTeam.css";

const CoreTeam = () => {
  const style = {
    backgroundColor: "#0A100E",
  };

  return (
    <section id="core-team" className="p-8" style={style}>
      <div className="flex flex-col items-center">
        <div className="px-3 py-3 text-3xl font-semibold text-center text-white bg-gray-400 bg-opacity-25 rounded-lg">
          EVENT COORDINATORS
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-5 lg:mt-8 lg:gap-10">
          {CoreTeamData.slice(0, 2).map((member, index) => (
            <Card 
              key={index} 
              bgImageUrl={member.image} 
              name={member.name} 
              linkedin={member.linkedin} 
              instagram={member.instagram} 
            />
          ))}
        </div>
        <div className="px-3 py-3 my-5 text-3xl font-semibold text-center text-white bg-gray-400 bg-opacity-25 rounded-lg">
          WORKING COMMITTEE
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center gap-3 mb-3 lg:gap-8 lg:mb-8">
            {CoreTeamData.slice(2, 6).map((member, index) => (
              <Card 
                key={index} 
                bgImageUrl={member.image} 
                name={member.name} 
                linkedin={member.linkedin} 
                instagram={member.instagram} 
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-10">
            {CoreTeamData.slice(6).map((member, index) => (
              <Card 
                key={index} 
                bgImageUrl={member.image} 
                name={member.name} 
                linkedin={member.linkedin} 
                instagram={member.instagram} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;