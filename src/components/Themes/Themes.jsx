import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Card from "./Card";
import theme1 from "../../assets/Themes/MentalHealth.png"; 
import theme2 from "../../assets/Themes/economic.png"; 
import theme3 from "../../assets/Themes/sustainablity.png"; 
import BrochureButton from '../Button/BrochureButton';

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
      img: theme1, 
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
      img: theme2, 
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
      img: theme3, 
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="themes" className="p-3 md:p-7 lg:p-10 text-white flex flex-col align-middle justify-center">
      <h1 className="julius-sans-one-regular text-6xl md:text-5xl lg:text-6xl text-[#00AEAD] tracking-wider">THEMES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
        {themes.map((theme, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate only when visible
            transition={{ duration: 0.7, delay: index * 0.1 }} // Delay based on index for staggered effect
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
          >
            <Card 
              img={theme.img} 
              theme={theme.title} 
              description={theme.description} 
              goals={theme.goals} 
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <BrochureButton className="" />
      </div>
    </section>
  );
};

export default Themes;