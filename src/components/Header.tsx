import React, { useState } from 'react';
import { Menu, X, Anchor, Settings } from 'lucide-react';

interface HeaderProps {
  onAdminClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-xl fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl mr-3 shadow-lg">
              <Anchor className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Finisterre</h1>
              <p className="text-sm text-gray-600 font-medium">Yachts and More</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 px-3 py-2 rounded-lg hover:bg-blue-50">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 px-3 py-2 rounded-lg hover:bg-blue-50">Servicios</a>
            <a href="#galeria" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 px-3 py-2 rounded-lg hover:bg-blue-50">Flota</a>
            <a href="#nosotros" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 px-3 py-2 rounded-lg hover:bg-blue-50">Nosotros</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105 px-3 py-2 rounded-lg hover:bg-blue-50">Contacto</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onAdminClick}
              className="hidden md:flex items-center text-gray-700 hover:text-blue-600 transition-all duration-200 p-2 rounded-lg hover:bg-blue-50"
            >
              <Settings size={20} />
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 transition-all duration-200 hover:bg-blue-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#inicio" className="block px-4 py-3 text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg hover:bg-blue-50 font-medium">Inicio</a>
            <a href="#servicios" className="block px-4 py-3 text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg hover:bg-blue-50 font-medium">Servicios</a>
            <a href="#galeria" className="block px-4 py-3 text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg hover:bg-blue-50 font-medium">Flota</a>
            <a href="#nosotros" className="block px-4 py-3 text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg hover:bg-blue-50 font-medium">Nosotros</a>
            <a href="#contacto" className="block px-4 py-3 text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg hover:bg-blue-50 font-medium">Contacto</a>
            <button
              onClick={onAdminClick}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg hover:bg-blue-50 font-medium"
            >
              Admin
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;