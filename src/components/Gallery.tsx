import React from "react";

const images = [
  {
    src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Porsche Car",
  },
  {
    src: "https://images.pexels.com/photos/8641224/pexels-photo-8641224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Bentley Car",
  },
  {
    src: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Lamborghini Car",
  },
  {
    src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Mercedes Car",
  },
  {
    src: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Audi Car",
  },
  {
    src: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Tesla Car",
  },
];

const Gallery: React.FC = () => {
  return (
    <div id="gallery" className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Car Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map(({ src, alt }, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img
              src={src}
              alt={alt}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            <div className="p-4 text-center font-semibold text-gray-700">{alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
