import Card from "./Card.jsx";
import Checker from "../../assets/checker.png";

const Themes = () => {
  const themes = [
    {
      title: "Social Well-Being and Mental Health",
      description: "This track focuses on promoting inclusive societies, mental health awareness, and well-being for all individuals.",
      goals: [
        "Goal 3: Good Health and Well-being",
        "Goal 4: Quality Education",
        "Goal 5: Gender Equality",
        "Goal 10: Reduced Inequalities",
        "Goal 16: Peace, Justice, and Strong Institutions"
      ],
    },
    {
      title: "Economic Growth and Innovation",
      description: "This track emphasizes sustainable economic growth, innovation, and infrastructure development.",
      goals: [
        "Goal 8: Decent Work and Economic Growth",
        "Goal 9: Industry, Innovation, and Infrastructure",
        "Goal 11: Sustainable Cities and Communities",
        "Goal 12: Responsible Consumption and Production"
      ],
    },
    {
      title: "Environmental Sustainability",
      description: "This track is dedicated to protecting the planet and ensuring sustainable management of natural resources.",
      goals: [
        "Goal 6: Clean Water and Sanitation",
        "Goal 7: Affordable and Clean Energy",
        "Goal 13: Climate Action",
        "Goal 14: Life Below Water",
        "Goal 15: Life on Land"
      ],
    },
  ];

  return (
    <section id="themes" className="p-3 md:p-7 lg:p-10 text-white flex flex-col align-middle justify-center">
      <h1 className="julius-sans-one-regular text-6xl md:text-5xl lg:text-6xl text-[#00AEAD] tracking-wider">THEMES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
        {themes.map((theme, index) => (
          <Card 
            key={index} 
            img={Checker} 
            theme={theme.title} 
            description={theme.description} 
            goals={theme.goals} 
          />
        ))}
      </div>
    </section>
  );
};

export default Themes;