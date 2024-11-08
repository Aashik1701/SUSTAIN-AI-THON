import profileCard from "../../assets/profile-card.png";
import Card from "./Card";
import "./CoreTeam.css";
import image1 from "../../assets/image.jpg";

const CoreTeam = () => {
  const style = {
    backgroundColor: "#0A100E",
  };
  return (
    <section id="core-team" className="p-8 " style={style}>
      <div className="flex flex-col items-center">
        <div className="px-3 py-3 text-3xl font-semibold text-center text-white bg-gray-400 bg-opacity-25 rounded-lg">
          EVENT COORDINATORS
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-5 lg:mt-8 lg:gap-10">
          <Card bgImageUrl={image1} />
          <Card bgImageUrl={image1} />
        </div>
        <div className="px-3 py-3 my-5 text-3xl font-semibold text-center text-white bg-gray-400 bg-opacity-25 rounded-lg">
          WORKING COMMITTEE
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center gap-4 mb-4 lg:gap-10 lg:mb-10">
            <Card bgImageUrl={image1} />
            <Card bgImageUrl={image1} />
            <Card bgImageUrl={image1} />
            <Card bgImageUrl={image1} />
          </div>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-10">
            <Card bgImageUrl={image1} />
            <Card bgImageUrl={image1} />
            <Card bgImageUrl={image1} />
            <Card bgImageUrl={image1} />
          </div>
        </div>
      </div>
      {/* <p className="mt-4">Meet the team behind SustainAITHon...</p> */}
    </section>
  );
};

export default CoreTeam;
