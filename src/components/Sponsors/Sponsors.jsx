import sponsorImage from "../../assets/sponsorimage.jpg"
import Lock from "./Lock";
const Sponsors = () => {
  return (
    
    <section id="sponsors" className="flex flex-col items-center justify-center gap-10 p-10">
      <h1 className="julius-sans-one-regular text-6xl md:text-5xl lg:text-6xl text-[#00AEAD] tracking-wider">SPONSORS</h1>
      <div className="grid grid-cols-1 gap-10 w-full">
      <div className="relative  m-auto flex items-center justify-center w-[90%] lg:w-[80%]  border-[1px] border-[#72CC5080] rounded-[32px] p-5 md:p-10
       ">
      <div className="absolute inset-0 w-full h-full  rounded-[32px]
    bg-sponsors bg-cover bg-center opacity-20
      "></div>  
      
      <div className="flex items-center justify-center w-full h-full z-[10] text-white">
    <div className="text-white flex flex-col justify-center items-center gap-5 w-[50%] h-full">
    <h1 className="inter-semibold text-xl md:text-2xl lg:text-3xl mr-auto">Problem Statement:</h1>
      <h2 className="inter-semibold text-lg md:text-xl lg:text-2xl"> Will be revealed soon!!</h2>
    <span className="m-3"><Lock className={" w-[50px] md:w-[70px] lg:w-[80px] max-h-[120px]  text-white"}/></span></div>  
      <div className="flex flex-col items-center justify-center gap-5 w-[50%] h-full" >
      <img src={sponsorImage} className="max-h-[420px] rounded-lg"/>
      <h2 className="inter-semibold text-2xl align-middle uppercase tracking-wide">Sponsor name</h2>
      <p className="inter-semibold  text-sm lg:text-md sm:text-md max-w-[500px] text-wrap">Sponsors detailss Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
    
      </div>
      <div className="relative  m-auto flex items-center justify-center w-[90%] lg:w-[80%]  border-[1px] border-[#72CC5080] rounded-[32px] p-5 md:p-10
       ">
      <div className="absolute inset-0 w-full h-full  rounded-[32px]
    bg-sponsors bg-cover bg-center opacity-20
      "></div>  
      
      <div className="flex items-center justify-center w-full h-full z-[10] text-white">
    <div className="text-white flex flex-col justify-center items-center gap-5 w-[50%] h-full">
    <h1 className="inter-semibold text-xl md:text-2xl lg:text-3xl mr-auto">Problem Statement:</h1>
      <h2 className="inter-semibold text-lg md:text-xl lg:text-2xl"> Will be revealed soon!!</h2>
    <span className="m-3"><Lock className={" w-[50px] md:w-[70px] lg:w-[80px] max-h-[120px]  text-white"}/></span></div>  
      <div className="flex flex-col items-center justify-center gap-5 w-[50%] h-full" >
      <img src={sponsorImage} className="max-h-[420px] rounded-lg "/>
      <h2 className="inter-semibold text-2xl align-middle uppercase tracking-wide">Sponsor name</h2>
      <p className="inter-semibold  text-sm lg:text-md sm:text-md max-w-[500px] text-wrap">Sponsors detailss Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
    
      </div>
      <div className="relative  m-auto flex items-center justify-center w-[90%] lg:w-[80%]  border-[1px] border-[#72CC5080] rounded-[32px] p-5 md:p-10
       ">
      <div className="absolute inset-0 w-full h-full  rounded-[32px]
    bg-sponsors bg-cover bg-center opacity-20
      "></div>  
      
      <div className="flex items-center justify-center w-full h-full z-[10] text-white">
    <div className="text-white flex flex-col justify-center items-center gap-5 w-[50%] h-full">
    <h1 className="inter-semibold text-xl md:text-2xl lg:text-3xl mr-auto">Problem Statement:</h1>
      <h2 className="inter-semibold text-lg md:text-xl lg:text-2xl"> Will be revealed soon!!</h2>
    <span className="m-3"><Lock className={" w-[50px] md:w-[70px] lg:w-[80px] max-h-[120px]  text-white"}/></span></div>  
      <div className="flex flex-col items-center justify-center gap-5 w-[50%] h-full" >
      <img src={sponsorImage} className="max-h-[420px] rounded-lg"/>
      <h2 className="inter-semibold text-2xl align-middle uppercase tracking-wide">Sponsor name</h2>
      <p className="inter-semibold  text-sm lg:text-md sm:text-md max-w-[500px] text-wrap">Sponsors detailss Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
    
      </div>
      </div>
    </section>
  );
};

export default Sponsors;
