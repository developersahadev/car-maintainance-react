import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full h-screen">
      <img 
        src="https://i.ibb.co/5hcFd93y/d3100801352727af5077002aed264637-1.jpg" 
        alt="Luxury Cars" 
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />
      <div id="home" className="absolute inset-0 bg-black bg-opacity-50">
        <div className="relative w-full h-full flex flex-col items-center justify-between py-32">
          <div className="container px-4 text-center">
            <div className={`transition-all duration-1000 ease-out transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
                AZURE CAR SERVICES
              </h1>
              <p className="text-lg md:text-xl text-white opacity-90 mx-auto max-w-2xl">
                EXPERIENCE ELITE AUTOMOTIVE EXCELLENCE
              </p>
            </div>
          </div>
          
          <div className="container px-4 w-full">
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 max-w-2xl mx-auto">
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-outline group w-full sm:w-auto"
              >
                <span>Our Services</span>
                <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-outline group w-full sm:w-auto"
              >
                <span>Contact Us</span>
                <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;