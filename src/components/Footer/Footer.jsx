
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700">Sustain-Ai-Thon 2024</h3>
          <p className="text-sm sm:text-base">
            © 2023 Sustain-Ai-Thon. All rights reserved.
          </p>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-sm sm:text-base">
            Website built by{' '}
            <a href="https://www.linkedin.com/in/mohammed-aashik-f-690418263/" target="_blank" rel="noopener noreferrer" className="text-green-400 
            hover:text-green-500 transition-colors duration-300">
              Aashik
            </a> and  
            <a href="https://www.linkedin.com/in/naveen-k-m-047b42288/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500 
            transition-colors duration-300"> Naveen</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;