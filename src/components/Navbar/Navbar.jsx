import { useState } from "react";
import RegisterButton from "../Register/RegisterButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-3 bg-black outline-dashed outline-8 align-middle items-center outline-offset-8 text-white flex justify-between">
      <div className="logo">LOGO</div>
      <div className="hidden md:flex links space-x-10 items-center align-middle">
        <a href="#home" className="hover:text-green-400 transition-colors duration-300 focus:underline">Home</a>
        <a href="#about" className="hover:text-green-400 transition-colors duration-300 focus:underline">About</a>
        <a href="#themes" className="hover:text-green-400 transition-colors duration-300 focus:underline">Themes</a>
        <a href="#sponsors" className="hover:text-green-400 transition-colors duration-300 focus:underline">Sponsors</a>
        <a href="#core-team" className="hover:text-green-400 transition-colors duration-300 focus:underline">Core Team</a>
        <a href="#contact" className="hover:text-green-400 transition-colors duration-300 focus:underline">Contact</a>
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
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center md:hidden">
          <a href="#home" className="p-2 hover:text-green-400 transition-colors duration-300 focus:underline">Home</a>
          <a href="#about" className="p-2 hover:text-green-400 transition-colors duration-300 focus:underline">About</a>
          <a href="#themes" className="p-2 hover:text-green-400 transition-colors duration-300 focus:underline">Themes</a>
          <a href="#sponsors" className="p-2 hover:text-green-400 transition-colors duration-300 focus:underline">Sponsors</a>
          <a href="#core-team" className="p-2 hover:text-green-400 transition-colors duration-300 focus:underline">Core Team</a>
          <a href="#contact" className="p-2 hover:text-green-400 transition-colors duration-300 focus:underline">Contact</a>
          <RegisterButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;