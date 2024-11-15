import { motion } from "framer-motion";
import BioSphereLogo from "../../assets/Logo/BioSphere.png";
import AicLogo from "../../assets/Logo/AicLogo.png";

const About = () => {
  const styles = {
    background:
      "radial-gradient(circle, rgba(14,30,37,1) 0%, rgba(12,25,28,1) 50%, rgba(2,10,12,1) 100%)",
  };
  const content = [
    "The Artificial Intelligence Club at VIT Chennai is a dynamic community of tech enthusiasts, aspiring data scientists, and innovators passionate about Artificial Intelligence, Machine Learning, and Data Science. Renowned for its engaging hackathons, coding challenges, and hands-on workshops led by industry experts and alumni, the club offers students an immersive platform to explore and create impactful AI solutions. Members gain valuable technical skills, mentorship, and networking opportunities, equipping them with the tools and experience needed for successful careers and influential projects in the rapidly evolving AI landscape.",
    "The Biosphere Club at VIT Chennai was started with the vision of raising awareness and making a meaningful impact on pressing environmental issues such as global warming and climate change. Driven by a commitment to sustainability and to creating a better world for future generations, the club organizes a range of initiatives, including beach cleanup drives, plantation projects, and guest seminars on wildlife protection. Through these efforts, the Biosphere Club has become a hub for nature lovers and eco-enthusiasts.",
  ];

  return (
    <>
      <div className="w-screen min-h-screen p-5 lg:p-20" style={styles}>
        <motion.div
          className="mb-5 font-normal text-center text-teal-400 lg:text-right text-5xl lg:text-7xl custom-font"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ABOUT
        </motion.div>
        <div>
          <div className="flex flex-col items-center justify-between gap-5 lg:gap-20 lg:flex-row">
            <motion.a
              href="https://www.instagram.com/aiclubvitc/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-40 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                className="h-[100px] sm:h-[250px] rounded-full"
                src={AicLogo}
                alt="AI Club"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.a>
            <div>
              <motion.div
                className="mb-2 text-2xl lg:text-4xl font-semibold text-center text-white lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                Artificial Intelligence Club
              </motion.div>
              <motion.div
                className="mb-5 lg:mb-10 text-lg lg:text-xl leading-8 text-center text-white lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {content[0]}
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center justify-between gap-10 lg:gap-20 lg:flex-row">
            <div>
              <motion.div
                className="mb-2 text-2xl lg:text-4xl font-semibold text-center text-white lg:text-right"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                Biosphere
              </motion.div>
              <motion.div
                className="text-lg lg:text-xl leading-8 text-center text-white lg:text-right"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {content[1]}
              </motion.div>
            </div>
            <motion.a
              href="https://www.instagram.com/biosphere_club_vitcc/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-40 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                className="h-[100px] sm:h-[250px] rounded-full"
                src={BioSphereLogo}
                alt="Biosphere Club"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
