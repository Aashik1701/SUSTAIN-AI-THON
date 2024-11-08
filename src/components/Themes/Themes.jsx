import Card from "./Card";
import Checker from "../../assets/checker.png"
const Themes = () => {
  return (
    <section id="themes" className="p-3 md:p-7 lg:p-10 text-white flex flex-col align-middle justify-center">
      <h1 className="julius-sans-one-regular text-6xl md:text-5xl lg:text-6xl text-[#00AEAD] tracking-wider">THEMES</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
      <Card img={Checker} theme={"theme 1"}/>
      <Card img={Checker} theme={"theme 2"}/>
      <Card img={Checker} theme={"theme 3"}/>
     </div>
    </section>
  );
};

export default Themes;
