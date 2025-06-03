import { useEffect, useState, useRef } from 'react';
import { Quote, User } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  index: number;
}

const Testimonial = ({ quote, name, title, index }: TestimonialProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 150);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={testimonialRef}
      className={`bg-white p-8 rounded-lg shadow-md transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex items-center mb-4">
        <Quote className="text-primary opacity-50" size={32} />
      </div>
      <p className="text-gray-600 mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
          <User className="text-gray-500" size={24} />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The attention to detail and level of service provided for my Bentley Continental GT was exceptional. The team truly understands luxury vehicles and treats them with the care they deserve.",
      name: "Jonathan Reynolds",
      title: "Bentley Owner"
    },
    {
      quote: "I've entrusted my Rolls Royce Phantom to this service center for years. Their expertise and commitment to excellence is unmatched. The vehicle always performs flawlessly after service.",
      name: "Victoria Harrington",
      title: "Rolls Royce Owner"
    },
    {
      quote: "The performance upgrades they recommended for my Bentley Bentayga transformed the driving experience. Their knowledge of luxury vehicles and attention to customer satisfaction is impressive.",
      name: "Alexander Mitchell",
      title: "Bentley Owner"
    }
  ];

  return (
    <section className="py-20">
      <div id="testimonials" className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600">Hear from our satisfied clients about their experience with our premium automotive services.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;