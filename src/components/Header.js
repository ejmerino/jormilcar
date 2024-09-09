import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './imgs/logo/Logo-Blanco.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (pathname) => location.pathname === pathname;

  return (
    <>
      {/* Oscurecimiento del fondo cuando el menú está abierto */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <header className="bg-black text-white p-4 flex justify-between items-center font-poppins relative z-50">
        <div className="logo">
          <Link to="/">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 cursor-pointer transition-transform duration-300 hover:scale-105" 
            />
          </Link>
        </div>

        {/* Menú hamburguesa para móviles */}
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="relative focus:outline-none z-50">
            <div className={`w-8 h-1 bg-white my-1 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
            <div className={`w-8 h-1 bg-white my-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-8 h-1 bg-white my-1 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
          </button>
          {isMenuOpen && (
            <button 
              onClick={toggleMenu} 
              className="absolute top-4 right-4 text-white text-3xl z-50"
            >
              &times;
            </button>
          )}
        </div>

        {/* Navegación en pantallas grandes */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`transition-transform duration-300 hover:scale-105 hover:text-red-500 ${isActive('/') ? 'text-red-500 font-bold' : ''}`}
          >
            Inicio
          </Link>
          <Link 
            to="/about" 
            className={`transition-transform duration-300 hover:scale-105 hover:text-red-500 ${isActive('/about') ? 'text-red-500 font-bold' : ''}`}
          >
            ¿Quiénes somos?
          </Link>
          <Link 
            to="/vender" 
            className={`transition-transform duration-300 hover:scale-105 hover:text-red-500 ${isActive('/vender') ? 'text-red-500 font-bold' : ''}`}
          >
            Vender
          </Link>
          <Link 
            to="/contact" 
            className={`transition-transform duration-300 hover:scale-105 hover:text-red-500 ${isActive('/contact') ? 'text-red-500 font-bold' : ''}`}
          >
            Contactos
          </Link>
        </nav>

        {/* Menú desplegable en móviles */}
        <nav 
          className={`fixed top-0 right-0 w-64 bg-black p-4 transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50 h-full`}
        >
          <div className="flex justify-end">
            <button 
              onClick={toggleMenu} 
              className="text-white text-3xl"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-4 mt-16">
            <li className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'} delay-100`}>
              <Link 
                to="/" 
                className={`block text-center text-white text-lg transition-transform duration-300 hover:text-red-500 ${isActive('/') ? 'text-red-500 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'} delay-200`}>
              <Link 
                to="/about" 
                className={`block text-center text-white text-lg transition-transform duration-300 hover:text-red-500 ${isActive('/about') ? 'text-red-500 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                ¿Quiénes somos?
              </Link>
            </li>
            <li className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'} delay-300`}>
              <Link 
                to="/vender" 
                className={`block text-center text-white text-lg transition-transform duration-300 hover:text-red-500 ${isActive('/vender') ? 'text-red-500 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Vender
              </Link>
            </li>
            <li className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'} delay-400`}>
              <Link 
                to="/contact" 
                className={`block text-center text-white text-lg transition-transform duration-300 hover:text-red-500 ${isActive('/contact') ? 'text-red-500 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contactos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
