import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h1 className="text-3xl font-pacifico text-white mb-6">Azure</h1>
            <p className="text-gray-400 mb-6">Providing exceptional service for luxury automobiles since 2005. We are committed to maintaining the highest standards of quality and precision.</p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center group">
                  <ChevronRight className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:mr-2 group-hover:-ml-0" size={16} />
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center group">
                  <ChevronRight className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:mr-2 group-hover:-ml-0" size={16} />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition flex items-center group">
                  <ChevronRight className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:mr-2 group-hover:-ml-0" size={16} />
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center group">
                  <ChevronRight className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:mr-2 group-hover:-ml-0" size={16} />
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center group">
                  <ChevronRight className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:mr-2 group-hover:-ml-0" size={16} />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition flex items-center group">
                  <ChevronRight className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:mr-2 group-hover:-ml-0" size={16} />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center group">
                  <ChevronRight className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:mr-2 group-hover:-ml-0" size={16} />
                  Regular Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center group">
                  <ChevronRight className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:mr-2 group-hover:-ml-0" size={16} />
                  Premium Detailing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center group">
                  <ChevronRight className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:mr-2 group-hover:-ml-0" size={16} />
                  Performance Upgrades
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center group">
                  <ChevronRight className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:mr-2 group-hover:-ml-0" size={16} />
                  Diagnostic Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center group">
                  <ChevronRight className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:mr-2 group-hover:-ml-0" size={16} />
                  Restoration Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center group">
                  <ChevronRight className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:mr-2 group-hover:-ml-0" size={16} />
                  Concierge Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form className="mb-4">
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-l border-none focus:outline-none text-gray-800 mb-2 sm:mb-0"
                />
                <button 
                  type="submit" 
                  className="bg-primary text-white px-4 py-2 rounded-r whitespace-nowrap hover:bg-opacity-90 transition sm:w-auto w-full"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Azure Luxury Automotive Services. All rights reserved.</p>
          <div className="flex flex-wrap justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;