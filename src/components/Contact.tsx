import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Twitter, 
  MessageSquare,
  ChevronDown
} from 'lucide-react';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ContactInfo = ({ icon, title, children }: ContactInfoProps) => {
  return (
    <div className="flex items-start">
      <div className="contact-icon">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        {children}
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error when user starts typing
    if (formErrors[id]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = 'This field is required';
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Form is valid
    setSubmitted(true);
    // In a real app, you would send the data to a server here
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">Schedule an appointment or inquire about our premium services for your luxury vehicle.</p>
            
            <div className="space-y-6">
              <ContactInfo icon={<MapPin className="text-primary\" size={24} />} title="Location">
                <p className="text-gray-600">Exit 18, Al Kharj Road, An Noor, Riyadh 14321, Saudi Arabia</p>
              </ContactInfo>
              
              <ContactInfo icon={<Phone className="text-primary\" size={24} />} title="Phone">
                <p className="text-gray-600">+966 50 818 1801</p>
              </ContactInfo>
              
              <ContactInfo icon={<MessageSquare className="text-primary\" size={24} />} title="WhatsApp">
                <a href="https://wa.me/508181801" className="text-gray-600 hover:text-primary transition">
                  +966 50 818 1801
                </a>
              </ContactInfo>
              
              <ContactInfo icon={<Instagram className="text-primary\" size={24} />} title="Instagram">
                <a href="https://www.instagram.com/azure_services.sa?igsh=MTJ0dGNmazh1ZXIyZg%3D%3D&utm_source=qr">
                  @azurecarservices
                </a>
              </ContactInfo>
              
              <ContactInfo icon={<Twitter className="text-primary\" size={24} />} title="Twitter">
                <a href="https://twitter.com/azurecarservice" className="text-gray-600 hover:text-primary transition">
                  @azurecarservice
                </a>
              </ContactInfo>
              
              <ContactInfo icon={<Mail className="text-primary\" size={24} />} title="Email">
                <p className="text-gray-600">service@luxuryautomotive.com</p>
              </ContactInfo>
              
              <ContactInfo icon={<Clock className="text-primary\" size={24} />} title="Hours">
                <p className="text-gray-600">
                  Monday - Thursday: 9:00 AM - 6:00 PM<br />
                  Saturday - Sunday: 9:00 AM - 6:00 PM<br />
                  Friday: Closed
                </p>
              </ContactInfo>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Schedule an Appointment</h3>
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                  <p className="text-gray-600">Your appointment request has been submitted. We will contact you shortly to confirm your booking.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:border-primary`} 
                        placeholder="Enter your name"
                      />
                      {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:border-primary`} 
                        placeholder="Enter your email"
                      />
                      {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded focus:border-primary`} 
                        placeholder="Enter your phone"
                      />
                      {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="vehicle" className="block text-gray-700 mb-2">Vehicle Model</label>
                      <input 
                        type="text" 
                        id="vehicle" 
                        value={formData.vehicle}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${formErrors.vehicle ? 'border-red-500' : 'border-gray-300'} rounded focus:border-primary`} 
                        placeholder="Enter your vehicle model"
                      />
                      {formErrors.vehicle && <p className="text-red-500 text-sm mt-1">{formErrors.vehicle}</p>}
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 mb-2">Service Required</label>
                    <div className="relative">
                      <select 
                        id="service" 
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${formErrors.service ? 'border-red-500' : 'border-gray-300'} rounded focus:border-primary appearance-none pr-10`}
                      >
                        <option value="" disabled selected>Select service type</option>
                        <option value="maintenance">Regular Maintenance</option>
                        <option value="detailing">Premium Detailing</option>
                        <option value="performance">Performance Upgrades</option>
                        <option value="repair">Repair Service</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <ChevronDown size={20} className="text-gray-500" />
                      </div>
                    </div>
                    {formErrors.service && <p className="text-red-500 text-sm mt-1">{formErrors.service}</p>}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Additional Information</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded focus:border-primary`} 
                      placeholder="Provide any additional details about your service needs"
                    ></textarea>
                    {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                  </div>
                  <button type="submit" className="btn-primary w-full py-3">Submit Request</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
