import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Themes from "./components/Themes/Themes";
import Sponsors from "./components/Sponsors/Sponsors";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";
import Faq from "./components/FAQ/Faq";
import Mastermind from "./components/Mastermind.jsx/Mastermind.jsx";
import Timeline from "./components/Timeline/Timeline";
import Gallery from "./components/Gallery/Gallery";
import Countdown from "./components/Countdown/Countdown.jsx";
//import Contact from "./components/Contact/Contact";
//import CoreTeam from "./components/CoreTeam/CoreTeam"; // Added import for CoreTeam
//import RegisterButton from './components/Register/RegisterButton';
//import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
//import Coordinators from "./components/CoreTeam/Coordinators";
import "./App.css";
function App() {
  return (
    <div>
      <Countdown targetDate="2024-12-11T00:00:00" />
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="themes">
        <Themes />
      </div>
      <div id="sponsors">
        <Sponsors />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="mastermind">
        <Mastermind />
      </div>
      <div id="coreteam"></div> {/* Added CoreTeam component */}
      <div id="faq">
        <Faq />
      </div>
      <div id="location">
        <Location />
      </div>
      <Footer />
    </div>
  );
}

export default App;
