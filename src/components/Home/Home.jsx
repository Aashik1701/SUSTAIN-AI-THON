import BrochureButton from "../Button/BrochureButton";
import RegisterButton from "../Register/RegisterButton";
import "./Home.css";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-between text-white font-bold relative overflow-x-hidden">
      {/* Gradient Background */}
      <div className="gradient-background"></div>
      
      <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Glowing Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] glowing-circle"></div>
        </div>
        <div className="relative z-10 text-center p-4 sm:p-6 lg:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-sans tracking-wide mb-2 sm:mb-4">
            Sustain-Ai-Thon
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wide text-green-500">
            2024
          </h2>
          <div className="mt-6 sm:mt-8 lg:mt-10">
            <RegisterButton />
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full relative z-10 rounded- bg-black/30 backdrop-blur-sm py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Venue Details */}
          <div className="text-center sm:text-left w-full sm:w-auto">
            <h3 className="text-green-500 text-lg sm:text-xl font-bold mb-1 sm:mb-2">VENUE</h3>
            <p className="text-base sm:text-lg lg:text-xl">
              VELLORE INSTITUTE OF TECHNOLOGY, CHENNAI
            </p>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              (Mahatma Gandhi Auditorium)
            </p>
          </div>
          
          {/* Date Details */}
          <div className="text-center sm:text-left w-full sm:w-auto">
            <h3 className="text-green-500 text-lg sm:text-xl font-bold mb-1 sm:mb-2">DATE</h3>
            <p className="text-base sm:text-lg lg:text-xl">11-12 December</p>
          </div>
          
          {/* Brochure Button */}
          <BrochureButton />
        </div>
      </div>
    </div>
  );
};

export default Home;