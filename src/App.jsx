import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
//import RegisterButton from './components/Register/RegisterButton';
import About from "./components/About/About";
import Themes from "./components/Themes/Themes";
import Sponsors from "./components/Sponsors/Sponsors";
import Location from "./components/Location/Location"
import Rounds from "./components/Rounds/Rounds";
import Footer from "./components/Footer/Footer";
import Faq from "./components/FAQ/Faq";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import "./App.css"
import Timeline from "./components/Timeline/Timeline";
import Coordinators from "./components/CoreTeam/Coordinators";

function App() {
  return (
    <div>
      <BackgroundVideo />
      <Navbar />
      <Home />
      <About />
      <Themes />
      <Sponsors />
      <Timeline />
      <Rounds />
      <Location/>
      <Coordinators />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
