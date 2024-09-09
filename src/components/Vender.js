import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useSpring, animated } from 'react-spring';

// Importa las imágenes
import venta1 from './imgs/venta/venta1.jpg';
import venta2 from './imgs/venta/venta2.png';
import venta3 from './imgs/venta/venta3.jpeg';

// Array con las imágenes importadas
const images = [venta1, venta2, venta3];

const Vender = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    marca: '',
    modelo: '',
    anio: '',
    infoAdicional: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Configuración para el desvanecimiento de imágenes
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    reverse: true,
    onRest: () => {
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Cambia la imagen cada 3 segundos
    }
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      marca: formData.marca,
      modelo: formData.modelo,
      anio: formData.anio,
      infoAdicional: formData.infoAdicional
    };

    emailjs
      .send(
        'service_ifkgh5i', // Tu Service ID de EmailJS
        'template_xls711k', // Tu Template ID de EmailJS
        templateParams,
        'V_aFeDqKzHsoaRsNr' // Tu Public Key (User ID)
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 5000); // Oculta el mensaje después de 5 segundos
          setFormData({
            nombre: '',
            email: '',
            telefono: '',
            marca: '',
            modelo: '',
            anio: '',
            infoAdicional: ''
          });
        },
        (err) => {
          console.log('FAILED...', err);
          alert('Hubo un error al enviar el mensaje.');
        }
      );
  };

  const overlayProps = useSpring({
    opacity: submitted ? 1 : 0,
    transform: submitted ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension: 250, friction: 20 }
  });

  return (
    <main className="relative flex flex-col lg:flex-row items-center bg-gray-100 p-6 min-h-screen">
      {/* Carrusel de imágenes */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-screen overflow-hidden">
        {images.map((image, index) => (
          <animated.img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            style={{
              ...props,
              opacity: index === currentImageIndex ? 1 : 0
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000`}
          />
        ))}
      </div>

      {/* Formulario */}
      <div className="relative w-full lg:w-1/2 p-4 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Formulario de Contacto</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold mb-1">
                Nombre<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-1">
                Teléfono<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-1">
                Marca del vehículo<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-1">
                Modelo<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="modelo"
                value={formData.modelo}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-1">
                Año<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="anio"
                value={formData.anio}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-1">
                Información Adicional
              </label>
              <textarea
                name="infoAdicional"
                value={formData.infoAdicional}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Mensaje de éxito */}
      {submitted && (
        <animated.div
          style={overlayProps}
          className="fixed inset-0 flex items-center justify-center bg-green-100 bg-opacity-90 border border-green-300 text-green-800 rounded-lg z-50"
        >
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">¡Mensaje enviado con éxito!</h2>
            <p>Tu mensaje ha sido enviado correctamente y nos pondremos en contacto contigo pronto.</p>
          </div>
        </animated.div>
      )}
    </main>
  );
};

export default Vender;