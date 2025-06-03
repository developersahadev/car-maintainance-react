import { ArrowRight, Settings, Car, BarChart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`service-card bg-white p-8 rounded shadow-md transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a href="learn-more.html" className="text-primary font-medium flex items-center group">
        Learn more
        <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
      </a>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Automotive Services</h2>
          <p className="text-gray-600">We specialize in high-end vehicle maintenance and care, providing exceptional service for luxury automobiles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Professional Maintenance" 
            description="Comprehensive maintenance services performed by certified technicians using advanced diagnostic equipment."
            icon={<Settings className="text-primary\" size={28} />}
            delay={100}
          />
          <ServiceCard 
            title="Detailing Services" 
            description="Premium detailing packages to restore and maintain your vehicle's pristine appearance inside and out."
            icon={<Car className="text-primary\" size={28} />}
            delay={200}
          />
          <ServiceCard 
            title="Performance Upgrades" 
            description="Custom performance enhancements to elevate your driving experience with precision engineering."
            icon={<BarChart className="text-primary\" size={28} />}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;