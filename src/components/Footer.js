import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 font-roboto">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        {/* Información de Contacto */}
        <div className="w-full md:w-1/3 mb-6">
          <div className="flex flex-col">
            <a 
              href="https://maps.app.goo.gl/REYtkZsy6WVoYrG48" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center mb-3 group hover:text-gray-400 transition-colors duration-300"
            >
              <i className="fas fa-map-marker-alt text-lg mr-3 group-hover:text-red-500 transition-colors duration-300"></i>
              <span className="text-sm group-hover:text-red-500 transition-colors duration-300">
                Av. Gral. Rumiñahui e Isla Genovesa.
              </span>
            </a>
            <div className="flex items-center mb-3">
              <i className="fab fa-whatsapp text-lg mr-3"></i>
              <div className="flex flex-col">
                <span className="text-sm">
                  <a href="https://wa.me/5930999397710" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
                    0999397710
                  </a> / 
                  <a href="https://wa.me/5930981699864" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
                    0981699864
                  </a> /
                  <a href="https://wa.me/5930939362234" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
                    0939362234
                  </a> / 
                  <a href="https://wa.me/5930962903866" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
                    0962903866
                  </a> /
                  <a href="https://wa.me/5930998244858" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
                    0998244858
                  </a>
                </span>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <i className="fas fa-phone-alt text-lg mr-3"></i>
              <span className="text-sm">(02) 296-3690</span>
            </div>
            <div className="flex items-center mb-3">
              <i className="fas fa-envelope text-lg mr-3"></i>
              <span className="text-sm">jormilcar@hotmail.com</span>
            </div>
          </div>
        </div>

        {/* Horarios de Atención */}
        <div className="w-full md:w-1/3 mb-6 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Horarios de Atención</h3>
          <p className="text-sm">Lunes a Viernes: 9:00 AM - 17:30 PM</p>
          <p className="text-sm">Sábados: 10:00 AM - 13:00 PM</p>
        </div>

        {/* Redes Sociales */}
        <div className="w-full md:w-1/3 mb-6 flex justify-end">
          <div className="flex flex-col items-end">
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Jormilcar.ec" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://www.tiktok.com/@jormilcar_sm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
                <i className="fab fa-tiktok fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/jormilcar_ec/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-black text-gray-500 text-center py-4 mt-8 border-t border-gray-700">
        <p className="text-sm">&copy; {new Date().getFullYear()} Jormilcar S.A. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
