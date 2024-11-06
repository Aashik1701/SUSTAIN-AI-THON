

const About = () => {
  return (
    <div className="flex flex-col h-screen">
        <h1 className="text-4xl font-bold text-center p-8 text-white">About</h1>
      {/* AIC Club Section */}
      <div className="flex flex-1 items-center justify-between p-8">
        <div className="flex-1">
          <img src="/path/to/aic-logo.png" alt="AIC Club Logo" className="w-40 h-40 rounded-full bg-white" />
        </div>
        <div className="flex-1 text-right">
          <h2 className="text-4xl font-bold text-white mb-4">AIC Club</h2>
          <p className="text-white">
            The AIC Club is dedicated to advancing interests in arts, culture, and innovation. 
            We engage students in various activities that foster creativity and community.
          </p>
        </div>
      </div>

      {/* Biosphere Club Section */}
      <div className="flex flex-1 items-center justify-between p-8">
        <div className="flex-1 text-left">
          <h2 className="text-4xl font-bold mb-4 text-white">Biosphere Club</h2>
          <p className="text-white">
            The Biosphere Club focuses on environmental awareness and sustainability. 
            We aim to educate and inspire members to take action in protecting our planet.
          </p>
        </div>
        <div className="flex-1">
          <img src="/path/to/biosphere-logo.png" alt="Biosphere Club Logo" className="w-40 h-40 rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
};

export default About;