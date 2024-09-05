import React, { useState, useEffect } from 'react';
import entrada from './imgs/local/entrada.jpg';
import entrada2 from './imgs/local/entrada2.jpeg';

const Body = () => {
  const images = [entrada, entrada2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="bg-gray-100 flex-grow p-8">
      <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold mb-4">Jormilcar es...</h1>
        <p className="text-lg text-gray-700">
          {/* Aquí puedes agregar la descripción o más información */}
        </p>
      </div>
    </main>
  );
};

export default Body;
