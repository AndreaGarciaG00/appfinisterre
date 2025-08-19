import React from 'react';
import { Award, Heart, Shield, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Clientes Satisfechos', icon: <Users className="h-6 w-6" /> },
    { number: '4+', label: 'Años de Experiencia', icon: <Award className="h-6 w-6" /> },
    { number: '15+', label: 'Embarcaciones', icon: <Shield className="h-6 w-6" /> },
    { number: '100%', label: 'Satisfacción', icon: <Heart className="h-6 w-6" /> },
  ];

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre Finisterre Yachts and More
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              En Finisterre Yachts and More, somos más que una empresa de renta de embarcaciones. 
              Somos tu puerta de entrada a las aguas cristalinas de Los Cabos, donde cada travesía 
              se convierte en una aventura inolvidable.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Con más de 4 años de experiencia en el sector náutico, nos especializamos en 
              ofrecer servicios de primera clase que van desde yates de lujo hasta botes de 
              pesca deportiva, siempre priorizando la seguridad y satisfacción de nuestros clientes.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro equipo de profesionales altamente capacitados está comprometido con brindar 
              experiencias marítimas excepcionales que superen tus expectativas.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform rotate-3 opacity-0"></div>
            <img
              src="https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/272074108_108370751742037_9026015899656175374_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=e-FTexLYSckQ7kNvwErxwJi&_nc_oc=AdlExjzbukJ9ILU_mmHm3koSC3ctbTZiz_CDcBHe3-kq2g0aT_AC24Dp7lEp6UhMybgsrDvZmltx772igRngL2Hf&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=Qw8cmJbfO5JzHqMf65I4LA&oh=00_AfWq48BUt_cuU0GtjOBUfYkvdYTqx0PFuF9qQIJMrt80Hw&oe=68AA9830"
              alt="Equipo Finisterre"
              className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;