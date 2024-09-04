import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo/Logo-Blanco.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center font-poppins">
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
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Navegación */}
      <nav className={`flex-col md:flex md:flex-row md:space-x-6 items-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
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
    </header>
  );
};

export default Header;
