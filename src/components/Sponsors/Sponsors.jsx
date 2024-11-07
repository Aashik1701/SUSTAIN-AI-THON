import sponsorImage from "../../assets/sponsorimage.jpg"
const Sponsors = () => {
  return (
    <section id="sponsors" className="flex flex-col items-center justify-center gap-10 p-10">
      <h1 className="julius-sans-one-regular text-6xl md:text-5xl lg:text-6xl text-[#00AEAD] tracking-wider">SPONSORS</h1>
      <div className="relative flex items-center justify-center w-[90%] lg:w-[80%]  border-[1px] border-[#72CC5080] rounded-[32px] p-5 md:p-10
       ">
      <div className="absolute inset-0 w-full h-full  rounded-[32px]
    bg-sponsors bg-cover bg-center opacity-30
      "></div>  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 z-[10] items-center justify-center">
      <img src={sponsorImage} className="max-h-[420px] rounded-lg"/>
      <img src={sponsorImage} className="max-h-[420px] rounded-lg"/>
      <img src={sponsorImage} className="max-h-[420px] rounded-lg"/>
      </div>

      </div>
    </section>
  );
};

export default Sponsors;
