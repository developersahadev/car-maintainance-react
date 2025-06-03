import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Vehicles from './components/Vehicles';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-poppins">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Hero />
      <Services />
      <Vehicles />
      <Features />
      <Testimonials />
      <AboutUs />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;