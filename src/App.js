import "./assets/css/style.css"
import "./assets/css/respo.css"
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spotlight from './components/screens/Spotlight';
import AboutUs from "./components/screens/AboutUs";
import NewsLetter from "./components/screens/NewsLetter";
import OurProjects from "./components/screens/OurProjects";
import Gallery from "./components/screens/Gallery";
import Contact from "./components/screens/Contact";
import Foote from "./components/screens/Foote";

function App() {
  return (
    <div className="App">
       <Spotlight />
       <AboutUs />
       <NewsLetter />
       <OurProjects />
       <Gallery />
       <Contact />
       <Foote />
    </div>
  );
}

export default App;
