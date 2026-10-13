import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GearBackdrop from "./components/GearBackdrop";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="site-frame">
      <GearBackdrop />
      <Navbar />
      <div className="site-main">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Process />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
