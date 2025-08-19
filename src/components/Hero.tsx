import React from 'react';
import { ArrowRight, Waves } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-600/60"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-400/30 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative text-center text-white max-w-6xl mx-auto px-4 z-10">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Waves className="h-20 w-20 text-yellow-400 animate-pulse" />
            <div className="absolute inset-0 h-20 w-20 text-yellow-400/50 animate-ping">
              <Waves className="h-20 w-20" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Navega en el
          </span>
          <span className="text-yellow-400 block bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
            Paraíso de Los Cabos
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 font-light max-w-4xl mx-auto leading-relaxed text-blue-100">
          Experimenta la belleza de Baja California desde el mar con nuestra exclusiva flota de yates de lujo, catamaranes y embarcaciones de pesca
        </p>
        
      
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-blue-100">Clientes Satisfechos</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">25+</div>
            <div className="text-blue-100">Embarcaciones</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">4+</div>
            <div className="text-blue-100">Años de Experiencia</div>
          </div>
        </div>
      </div>
      
      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" className="w-full h-32 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z">
            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z;M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z;M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;