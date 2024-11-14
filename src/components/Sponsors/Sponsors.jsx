import cittaLogo from "../../assets/Sponsors/Citta.png"; // Updated logo path
import PyramidLoader from "./PyraidLoader"; // Fixed typo in import
import problemStatement from "/src/assets/CittaProblemStatement.pdf"; // Updated problem statement path

const Sponsors = () => {
  return (
    <section id="sponsors" className="flex flex-col items-center justify-center gap-10 p-10">
      <h1 className="julius-sans-one-regular text-6xl md:text-5xl lg:text-6xl text-[#00AEAD] tracking-wider">SPONSORS</h1>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl"> {/* Added max-w-6xl for better centering */}
          {/* First Box */}
          <div className="relative flex flex-col items-center justify-center w-[90%] lg:w-[80%] border-[1px] border-[#72CC5080] rounded-[32px] p-5 md:p-10">
            <div className="absolute inset-0 w-full h-full rounded-[32px] bg-sponsors bg-cover bg-center opacity-20"></div>

            <div className="flex flex-col items-center justify-center z-[10] text-white">
              <img src={cittaLogo} className="max-h-[220px] rounded-lg" alt="Citta Logo" /> {/* Updated logo */}
              <h2 className="inter-semibold text-2xl align-middle uppercase tracking-wide">Citta</h2>
              <p className="inter-semibold text-sm lg:text-md sm:text-md max-w-[500px] text-wrap text-center">
                Sponsors details: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h1 className="inter-semibold text-xl md:text-2xl lg:text-3xl mt-5">Problem Statement:</h1>
              <a 
                href={problemStatement} 
                download 
                className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition-colors mt-2"
              >
                Download Problem Statement
              </a>
            </div>  
          </div>

          {/* Second Box with Dummy Values */}
          <div className="relative flex flex-col items-center justify-center w-[90%] lg:w-[80%] border-[1px] border-[#72CC5080] rounded-[32px] p-5 md:p-10">
            <div className="absolute inset-0 w-full h-full rounded-[32px] bg-sponsors bg-cover bg-center opacity-20"></div>
            <PyramidLoader />
            <h2 className="text-white inter-semibold text-2xl align-middle uppercase tracking-wide">To be revealed soon</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;