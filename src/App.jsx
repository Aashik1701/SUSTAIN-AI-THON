import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import RegisterButton from './components/Register/RegisterButton';
import About from './components/About/About';
import Themes from './components/Themes/Themes';
import Sponsors from './components/Sponsors/Sponsors';
import Rounds from './components/Rounds/Rounds';
import CoreTeam from './components/CoreTeam/CoreTeam';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <RegisterButton />
      <About />
      <Themes />
      <Sponsors />
      <Rounds />
      <CoreTeam />
      <Footer />
    </div>
  );
}

export default App;
