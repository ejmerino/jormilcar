import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './imgs/logo/Logo-Blanco.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center font-poppins relative">
      <div className="logo">
        <Link to="/">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-12 cursor-pointer transition-transform duration-300 hover:scale-105" 
          />
        </Link>
      </div>

      {/* Menú hamburguesa solo para móviles */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Navegación normal en computadoras (visible en pantallas medianas y grandes) */}
      <nav className="hidden md:flex space-x-8">
        <Link 
          to="/" 
          className="transition-transform duration-300 hover:scale-105 hover:text-red-500"
        >
          Inicio
        </Link>
        <Link 
          to="/about" 
          className="transition-transform duration-300 hover:scale-105 hover:text-red-500"
        >
          ¿Quiénes somos?
        </Link>
        <Link 
          to="/services" 
          className="transition-transform duration-300 hover:scale-105 hover:text-red-500"
        >
          Vender
        </Link>
        <Link 
          to="/contact" 
          className="transition-transform duration-300 hover:scale-105 hover:text-red-500"
        >
          Contactos
        </Link>
      </nav>

      {/* Pestañas del menú hamburguesa en móviles */}
      <nav 
        className={`absolute top-16 right-0 w-48 bg-black p-4 rounded-lg shadow-lg z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
      >
        <ul className="space-y-4">
          <li>
            <Link 
              to="/" 
              className="block text-center transition-transform duration-300 hover:scale-105 hover:text-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="block text-center transition-transform duration-300 hover:scale-105 hover:text-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              ¿Quiénes somos?
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className="block text-center transition-transform duration-300 hover:scale-105 hover:text-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Vender
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="block text-center transition-transform duration-300 hover:scale-105 hover:text-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
