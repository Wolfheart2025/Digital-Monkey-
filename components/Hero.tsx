import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-black pt-20 pb-16 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-sm font-semibold tracking-wide">
          AUDITORÍA CONFIDENCIAL
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Body<span className="text-green-500">4</span>Combat
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 font-light mb-8 max-w-3xl mx-auto">
          Estrategia para transformar la presencia digital: de un "sitio informativo" a una <span className="text-white font-medium">máquina de captación de leads</span>.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <div className="text-center">
                <p className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Elaborado por</p>
                <p className="text-white font-semibold">Digital Monkey Agency</p>
            </div>
             <div className="hidden md:block w-px h-10 bg-zinc-800"></div>
            <div className="text-center">
                <p className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Foco</p>
                <p className="text-white font-semibold">Captación & Ventas</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;