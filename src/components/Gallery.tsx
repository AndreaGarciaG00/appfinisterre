import React from 'react';
import { MapPin, Users, Clock, Star } from 'lucide-react';
import { Boat } from '../types/Boat';

// Importar imágenes desde assets
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen33 from '../assets/imagen33.jpg';
import imagen4 from '../assets/imagen4.jpg';
import imagen5 from '../assets/imagen5.jpg';

// Datos de los yates
const boats: Boat[] = [
  {
    id: '1',
    name: 'Sunseeker predator 55ft',
    description: 'Un yate de lujo con todas las comodidades para una experiencia única.',
    category: 'Yate',
    capacity: 10,
    duration: 2,
    location: 'Los Cabos',
    rating: 4.8,
    price: 550,
    image: imagen1,
  },
  {
    id: '2',
    name: 'Azimut 45ft',
    description: 'Ideal para disfrutar con la familia y amigos.',
    category: 'Yate',
    capacity: 10,
    duration: 3,
    location: 'Cabo San Lucas',
    rating: 4.6,
    price: 350,
    image: imagen2,
  },
  {
    id: '3',
    name: 'Sea Ray 32ft',
    description: 'Perfecto para aventuras y deportes acuáticos.',
    category: 'Yate',
    capacity: 6,
    duration: 3,
    location: 'Cabo San Lucas',
    rating: 4.7,
    price: 150,
    image: imagen33,
  },
   {
    id: '4',
    name: 'Azimut 62ft',
    description: 'Diversión sin límites en alta mar',
    category: 'Yate',
    capacity: 10,
    duration: 2,
    location: 'Cabo San Lucas',
    rating: 4.7,
    price: 700,
    image: imagen4,
  },
   {
    id: '5',
    name: 'Catamaran Lagoona 62ft',
    description: 'Accion marina garantizada',
    category: 'Yate',
    capacity: 10,
    duration: 4,
    location: 'Cabo San Lucas',
    rating: 4.7,
    price: 6000,
    image: imagen5,
   },
];

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">Nuestra Flota</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra exclusiva colección de embarcaciones, desde yates de lujo hasta botes de pesca especializados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boats.map((boat) => (
            <div key={boat.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={boat.image}
                  alt={boat.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold">{boat.category}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{boat.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{boat.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{boat.capacity} personas</span>
                  </div>
                  <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{boat.duration}h</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{boat.location}</span>
                  </div>
                  <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-lg">
                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                    <span className="text-yellow-600 font-semibold">{boat.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    ${boat.price.toLocaleString()}
                    <span className="text-sm font-normal text-gray-500 ml-1">USD</span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
