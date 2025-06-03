import { useEffect, useState } from 'react';

interface VehicleCardProps {
  name: string;
  description: string;
  imageSrc: string;
  delay: number;
}

const VehicleCard = ({ name, description, imageSrc, delay }: VehicleCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`car-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="relative h-64">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover object-center" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="btn-primary">View Services</button>
      </div>
    </div>
  );
};

const Vehicles = () => {
  const vehicles = [
    {
      name: "Bentley",
      description: "Specialized maintenance and care for Bentley vehicles, preserving their unparalleled craftsmanship and performance.",
      imageSrc: "https://images.pexels.com/photos/8641224/pexels-photo-8641224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Rolls Royce",
      description: "Expert care for Rolls Royce automobiles, maintaining their legendary quality and sophisticated engineering.",
      imageSrc: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Lamborghini",
      description: "Premium service for Lamborghini vehicles, ensuring peak performance and maintaining their iconic Italian engineering excellence.",
      imageSrc: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Porsche",
      description: "Specialized care for Porsche vehicles, delivering precision maintenance and performance optimization for the ultimate driving experience.",
      imageSrc: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialty Vehicles</h2>
          <p className="text-gray-600">We provide exceptional care for the world's most prestigious automotive brands, ensuring your luxury vehicle receives the attention it deserves.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={index}
              name={vehicle.name}
              description={vehicle.description}
              imageSrc={vehicle.imageSrc}
              delay={index * 100 + 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;