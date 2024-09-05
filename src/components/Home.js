import React, { useState, useEffect } from 'react';
import entrada from './imgs/local/entrada.jpg';
import entrada2 from './imgs/local/entrada2.jpeg';

const Body = () => {
  const images = [entrada, entrada2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="bg-gray-100 flex-grow relative">
      {/* Sección de las imágenes ocupando toda la pantalla */}
      <div className="relative w-full h-screen overflow-hidden">
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

      {/* Filtro de búsqueda */}
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-black bg-opacity-30 p-4">
        <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold text-white text-center mb-4">Filtrar Vehículos</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Marca</label>
              <input 
                type="text" 
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Modelo</label>
              <input 
                type="text" 
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex space-x-2">
              <div>
                <label className="block text-sm font-medium text-gray-300">Año Desde</label>
                <input 
                  type="number" 
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Hasta</label>
                <input 
                  type="number" 
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <label className="block text-sm font-medium text-gray-300">Precio Desde</label>
                <input 
                  type="number" 
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Hasta</label>
                <input 
                  type="number" 
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            <button 
              type="submit" 
              className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Body;
