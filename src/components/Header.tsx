import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header = ({ isMenuOpen, toggleMenu }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl font-pacifico text-primary mr-10">Azure</h1>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 left-0 md:top-auto w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none rounded-b md:rounded-none space-y-4 md:space-y-0 md:space-x-8 z-50`}>
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn-primary hidden sm:inline-block">Book Appointment</button>
          <button onClick={toggleMenu} className="md:hidden flex items-center justify-center">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;