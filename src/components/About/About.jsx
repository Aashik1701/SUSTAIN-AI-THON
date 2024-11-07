

const About = () => {
  return (
    <div className="flex flex-col h-screen p-16">
      <h1 className="text-4xl font-bold text-center p-8 text-white">About</h1>
      {/* AIC Club Section */}
      <div className="flex flex-1 items-center justify-between p-8">
      <div className="flex-1">
        <img src="/path/to/aic-logo.png" alt="AIC Club Logo" className="w-40 h-40 rounded-full bg-white transform transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="flex-1 text-right">
        <h2 className="text-4xl font-bold text-white mb-4">AIC Club</h2>
        <p className="text-white">
        The Artificial Intelligence Club at VIT Chennai is a dynamic community of tech enthusiasts, aspiring data scientists, and innovators passionate about Artificial
        Intelligence, Machine Learning, and Data Science. Renowned for its engaging hackathons, coding challenges, and hands-on workshops led by industry experts and alumni, the club offers students an immersive platform
        to explore and create impactful AI solutions. Members gain valuable technical skills, mentorship, and networking opportunities,
        equipping them with the tools and experience needed for successful careers and influential projects in the rapidly evolving AI landscape.
        </p>
      </div>
      </div>

      {/* Biosphere Club Section */}
      <div className="flex flex-1 items-center justify-between p-8">
      <div className="flex-1 text-left">
        <h2 className="text-4xl font-bold mb-4 text-white">Biosphere Club</h2>
        <p className="text-white">
        The Biosphere Club at VIT Chennai was started with the vision of raising awareness and making a meaningful impact on pressing
        environmental issues such as global warming and climate change. Driven by a commitment to sustainability and to creating a better world
        for future generations, the club organizes a range of initiatives, including beach cleanup drives, plantation projects, and guest
        seminars on wildlife protection. Through these efforts, the Biosphere Club has become a hub for nature lovers and eco-enthusiasts.
        </p>
      </div>
      <div className="flex-1 flex justify-end">
        <img src="src/assets/BioSphere.png" alt="Biosphere Club Logo" className=" w-40 h-40 rounded-full bg-white transform transition-transform duration-500 hover:scale-110" />
      </div>
      </div>
    </div>
    );
};

export default About;
