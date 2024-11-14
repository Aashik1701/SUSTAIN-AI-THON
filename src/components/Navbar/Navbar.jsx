import { useState } from "react";
import RegisterButton from "../Register/RegisterButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-3 bg-black align-middle items-center outline-offset-8 flex justify-between z-50">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">
        Sustain-Ai-Thon
      </div>
      <div className="hidden md:flex space-x-10 items-center align-middle">
        <a href="#home" onClick={() => handleScrollTo('home')} className="hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Home</a>
        <a href="#about" onClick={() => handleScrollTo('about')} className="hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">About</a>
        <a href="#themes" onClick={() => handleScrollTo('themes')} className="hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Themes</a>
        <a href="#sponsors" onClick={() => handleScrollTo('sponsors')} className="hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Sponsors</a>
        <a href="#timeline" onClick={() => handleScrollTo('timeline')} className="hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Timeline</a>
        <a href="#gallery" onClick={() => handleScrollTo('gallery')} className="hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Gallery</a>
        <a href="#matermind" onClick={() => handleScrollTo('mastermind')} className="hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Experts</a>
        <a href="#core-team" onClick={() => handleScrollTo('core-team')} className="hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Core Team</a>
        <a href="#faq" onClick={() => handleScrollTo('faq')} className="hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">FAQs</a>
        <a href="#location" onClick={() => handleScrollTo('location')} className="hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Location</a>
        <RegisterButton />
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none hover:text-green-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center md:hidden">
          <a href="#home" onClick={() => handleScrollTo('home')} className="p-2 hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Home</a>
          <a href="#about" onClick={() => handleScrollTo('about')} className="p-2 hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">About</a>
          <a href="#themes" onClick={() => handleScrollTo('themes')} className="p-2 hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Themes</a>
          <a href="#sponsors" onClick={() => handleScrollTo('sponsors')} className="p-2 hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Sponsors</a>
          <a href="#core-team" onClick={() => handleScrollTo('core-team')} className="p-2 hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Core Team</a>
          <a href="#contact" onClick={() => handleScrollTo('faq')} className="p-2 hover:text-green-400 transition-colors duration-300 focus:underline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">FAQs</a>
          <RegisterButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;