import { motion } from "framer-motion"; // Import motion from framer-motion
import BrochureButton from "../Button/BrochureButton";
import RegisterButton from "../Register/RegisterButton";
import "./Home.css";

const Home = () => {
  // Define animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const glowingCircleVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-screen flex flex-col items-center justify-between text-white font-bold relative overflow-x-hidden">
      {/* Gradient Background */}
      <div className="gradient-background"></div>
      
      <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Glowing Circle with animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={glowingCircleVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] glowing-circle"></div>
        </motion.div>

        <div className="relative z-10 text-center p-4 sm:p-6 lg:p-8">
          {/* Title with animation */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-sans tracking-wide mb-2 sm:mb-4"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            Sustain-Ai-Thon
          </motion.h1>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wide text-green-500"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            2025
          </motion.h2>
          <div className="mt-6 sm:mt-8 lg:mt-10">
            {/* Register Button with animation */}
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <RegisterButton />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full relative z-10 rounded bg-black/30 backdrop-blur-sm py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Venue Details */}
          <div className="text-center sm:text-left w-full sm:w-auto">
            <h3 className="text-green-500 text-lg sm:text-xl font-bold mb-1 sm:mb-2">VENUE</h3>
            <p className="text-base sm:text-lg lg:text-xl">
              VELLORE INSTITUTE OF TECHNOLOGY, CHENNAI
            </p>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              (MG Auditorium)
            </p>
          </div>
          
          {/* Date Details */}
          <div className="text-center sm :text-left w-full sm:w-auto">
            <h3 className="text-green-500 text-lg sm:text-xl font-bold mb-1 sm:mb-2">DATE</h3>
            <p className="text-base sm:text-lg lg:text-xl">20 - 21 January</p>
          </div>
          
          {/* Brochure Button with animation */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <BrochureButton />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;