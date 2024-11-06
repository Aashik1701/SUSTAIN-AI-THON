import { useState } from "react";
import RegisterButton from "../Register/RegisterButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 outline-dashed outline-2 align-middle items-center outline-offset-2 text-white flex justify-between">
      <div className="logo">LOGO</div>
      <div className="hidden md:flex links space-x-4 items-center">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#themes">Themes</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#core-team">Core Team</a>
        <a href="#contact">Contact</a>
        <RegisterButton />
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {/* Hamburger Icon */}
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
          <a href="#home" className="p-2">Home</a>
          <a href="#about" className="p-2">About</a>
          <a href="#themes" className="p-2">Themes</a>
          <a href="#sponsors" className="p-2">Sponsors</a>
          <a href="#core-team" className="p-2">Core Team</a>
          <a href="#contact" className="p-2">Contact</a>
          <RegisterButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;