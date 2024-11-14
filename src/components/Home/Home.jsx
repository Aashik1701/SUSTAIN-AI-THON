// Home.jsx
import RegisterButton from "../Register/RegisterButton";
import "./Home.css";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center text-white font-bold relative">
      {/* Gradient Background */}
      <div className="gradient-background"></div>
      
      <div className="flex flex-col items-center justify-center gap-10 relative z-10">
        {/* Glowing Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] glowing-circle"></div>
        </div>
        <div className="relative z-10 text-center p-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold font-sans tracking-wide">Sustain-Ai-Thon</h1>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-wide text-green-500">2024</h2>
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default Home;