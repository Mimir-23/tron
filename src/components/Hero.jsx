import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source 
          src="https://res.cloudinary.com/duzidxl2j/video/upload/v1744234212/TronLegacyVid_compressed_wmy0ow.mp4" 
          type="video/mp4" 
        />
        Tu navegador no soporta el video HTML5.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
        {/* Logo */}
        <img 
          src="/TRON.svg" 
          alt="TRON Legacy Logo" 
          className="w-40 md:w-52 animate-fade-in"
        />

        {/* Botón Ver Película */}
        <motion.a
          href="https://www.disneyplus.com/es-co?gclid=4673a6c716c4148ae3eccec97047c09f&gclsrc=3p.ds&cid=DSS-Search-Bing-71700000112307058&s_kwcid=AL!8468!10!79714802571516!disney.com&msclkid=4673a6c716c4148ae3eccec97047c09f"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-block px-8 py-3 border-2 border-tron-neon text-tron-neon font-orbitron text-lg rounded-full transition-all duration-300 hover:bg-tron-neon/10 backdrop-blur-md"
        >
          Ver película en Disney+
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
