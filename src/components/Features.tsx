import { useEffect, useState, useRef } from 'react';
import { CheckCircle, Settings, Users } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Feature = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className="flex items-start">
      <div className="w-12 h-12 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`lg:w-1/2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <img 
              src="https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Luxury Service Center" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className={`lg:w-1/2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Premium Service</h2>
            <p className="text-gray-600 mb-8">We understand the unique requirements of luxury vehicles and provide specialized care that exceeds expectations.</p>
            <div className="space-y-6">
              <Feature 
                title="Certified Technicians"
                description="Our team consists of factory-trained specialists with extensive experience working with luxury automobiles."
                icon={<CheckCircle className="text-primary\" size={24} />}
              />
              <Feature 
                title="Advanced Equipment"
                description="We utilize state-of-the-art diagnostic and service equipment specifically designed for high-end vehicles."
                icon={<Settings className="text-primary\" size={24} />}
              />
              <Feature 
                title="Personalized Service"
                description="Each client receives dedicated attention with customized maintenance plans tailored to their specific vehicle."
                icon={<Users className="text-primary\" size={24} />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;