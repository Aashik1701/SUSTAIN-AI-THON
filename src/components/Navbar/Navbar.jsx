
const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <div className="logo">LOGO</div>
      <div className="links flex space-x-4">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#themes">Themes</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#core-team">Core Team</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
