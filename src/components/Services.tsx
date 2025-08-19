import React from 'react';
import { Anchor, Fish, Sailboat, Users, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Anchor className="h-12 w-12" />,
      title: 'Yates de Lujo',
      description: 'Embarcaciones premium con todas las comodidades para una experiencia única en el mar.',
      features: ['Tripulación profesional', 'Servicio de catering', 'Equipamiento completo'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Fish className="h-12 w-12" />,
      title: 'Pesca Deportiva',
      description: 'Botes especializados para la pesca deportiva en las aguas ricas de Los Cabos.',
      features: ['Equipos de pesca incluidos', 'Guías expertos', 'Licencias incluidas'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Sailboat className="h-12 w-12" />,
      title: 'Catamaranes',
      description: 'Embarcaciones estables perfectas para grupos y celebraciones en el agua.',
      features: ['Amplio espacio', 'Ideal para eventos', 'Navegación suave'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Eventos Privados',
      description: 'Organización completa de eventos corporativos y celebraciones especiales.',
      features: ['Planificación completa', 'Servicios personalizados', 'Coordinación profesional'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: 'Disponibilidad 24/7',
      description: 'Servicio de reservas y atención al cliente disponible las 24 horas.',
      features: ['Reservas flexibles', 'Atención inmediata', 'Soporte continuo'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Seguridad Garantizada',
      description: 'Todas nuestras embarcaciones cumplen con los más altos estándares de seguridad.',
      features: ['Equipos certificados', 'Seguros completos', 'Protocolos de seguridad'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios náuticos para hacer de tu experiencia en Los Cabos algo inolvidable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 group transform hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;