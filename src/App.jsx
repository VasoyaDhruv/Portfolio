import './App.css';
import Navbar from './common/Navbar/Navbar';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Education from './sections/Education/Education';
import Testimonials from './sections/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* <Education /> */}
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
