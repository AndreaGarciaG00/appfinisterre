import React from 'react';
import { Anchor, Facebook, Instagram, Twitter, Youtube, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Anchor className="h-8 w-8 text-blue-400 mr-3" />
              <div>
                <h3 className="text-2xl font-bold">Finisterre</h3>
                <p className="text-sm text-gray-400">Yachts and More</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Tu puerta de entrada a las aguas cristalinas de Cabo San Lucas. Experiencias marítimas inolvidables desde 2009.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100077519174494&locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>

            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Yates de Lujo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pesca Deportiva</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Catamaranes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Eventos Privados</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tours Personalizados</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Flota</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <div>
                  <p>+52 624 161 4680</p>
            
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <div>
                  <p>klorena.gc@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1">
                  <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p>Los Cabos San Lucas</p>
                  <p>Los Cabos, Baja California Sur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Finisterre Yachts and More. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;