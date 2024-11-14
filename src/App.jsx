import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
//import RegisterButton from './components/Register/RegisterButton';
import About from "./components/About/About";
import Themes from "./components/Themes/Themes";
import Sponsors from "./components/Sponsors/Sponsors";
import Location from "./components/Location/Location";
import Rounds from "./components/Rounds/Rounds";
import Footer from "./components/Footer/Footer";
import Faq from "./components/FAQ/Faq";
//import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import "./App.css";
import Timeline from "./components/Timeline/Timeline";
import Coordinators from "./components/CoreTeam/Coordinators";

function App() {
  return (
    <div>

      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="themes"><Themes /></div>
      <div id="sponsors"><Sponsors /></div>
      <div id="rounds"><Rounds /></div>
      <div id="timeline"><Timeline /></div>
      <div id="location"><Location /></div>
      <div id="core-team"><Coordinators /></div>
      <div id="faq"><Faq /></div>
      <Footer />
    </div>
  );
}

export default App;