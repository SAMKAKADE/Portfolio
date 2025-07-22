import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import MainSection from './MainSection';
import About from './About';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <Navbar />
      <MainSection />
      <About />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
