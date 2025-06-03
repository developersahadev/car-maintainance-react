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
      <a href="#" className="text-primary font-medium flex items-center group">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bentley Car Specialist</h2>
          <p className="text-gray-600">A Bentley car specialist is a highly trained automotive professional who focuses exclusively or primarily on servicing, maintaining, restoring, and repairing Bentley luxury vehicles. These specialists have in-depth knowledge of Bentley’s engineering, design, and proprietary technology, making them experts in handling the unique requirements of this elite British marque.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Routine Servicing & Maintenance" 
            description="Conduct oil changes, filter replacements, brake checks, and other standard maintenance using Bentley-approved parts and procedures.

Ensure all services meet the brand’s luxury and performance standards."
            icon={<Settings className="text-primary\" size={28} />}
            delay={100}
          />
          <ServiceCard 
            title="Diagnostics & Repairs" 
            description="Use Bentley-specific diagnostic tools and software to detect and troubleshoot issues.

Perform repairs on the engine, transmission, suspension, electrical systems, and infotainment systems with extreme precision."
            icon={<Car className="text-primary\" size={28} />}
            delay={200}
          />
          <ServiceCard 
            title="Performance Tuning" 
            description="Optimize engine performance and driveability using OEM or high-end aftermarket tuning (if permitted).

Work with advanced Bentley performance systems like adaptive suspension and driving modes."
            icon={<BarChart className="text-primary\" size={28} />}
            delay={300}
          />
          <ServiceCard 
            title="Cosmetic & Body Restoration" 
            description="Provide detailing, paint correction, upholstery restoration, and cosmetic repair services using Bentley-approved materials.

Work on classic Bentley models for full or partial restoration."
            icon={<Car className="text-primary\" size={28} />}
            delay={200}
          />
          <ServiceCard 
            title="Software & Tech Updates" 
            description="Perform firmware and software updates on Bentley’s onboard systems, infotainment, and navigation platforms.

Calibrate cameras, sensors, and driver-assist features."
            icon={<Car className="text-primary\" size={28} />}
            delay={200}
          />
          <ServiceCard 
            title="Pre-Purchase Inspections" 
            description="Offer detailed inspection services for buyers to assess used Bentley vehicles before purchase.

Generate condition reports and estimated future maintenance needs."
            icon={<Car className="text-primary\" size={28} />}
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;