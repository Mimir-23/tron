"use client";

import React from "react";
import { motion } from "framer-motion";
import castorImage from '../assets/fondo2.webp'; // Imagen actual

const Synopsis = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-20"
      style={{ backgroundImage: `url(${castorImage})` }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Efecto energía Tron */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.04, 0.07, 0.04] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-tron-neon/10 blur-2xl"></div>
      </motion.div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
        
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-tron-neon text-4xl sm:text-5xl font-orbitron mb-8 drop-shadow-[0_0_20px_#00FFF7]">
            Sinopsis
          </h2>
          <p className="text-tron-gray font-exo text-lg sm:text-xl leading-relaxed mb-8">
            Sam Flynn, un joven experto en tecnología, investiga la misteriosa desaparición de su padre, Kevin Flynn, el legendario creador de videojuegos. 
            <br /><br />
            En su búsqueda, Sam es transportado al mundo digital de su padre: un universo visualmente deslumbrante y mortal, donde programas luchan por su supervivencia. 
            <br /><br />
            Junto a Quorra, una aliada inesperada, Sam deberá enfrentarse a un enemigo implacable para intentar escapar de este universo cibernético.
          </p>

          {/* Información Adicional */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-tron-gray font-exo text-base sm:text-lg">
            <div>
              <span className="text-tron-neon font-bold">Fecha de estreno:</span> 17 de diciembre de 2010
            </div>
            <div>
              <span className="text-tron-neon font-bold">Director:</span> Joseph Kosinski
            </div>
            <div>
              <span className="text-tron-neon font-bold">Duración:</span> 2h 7min
            </div>
            <div>
              <span className="text-tron-neon font-bold">Recaudación:</span> $400 millones USD
            </div>
          </div>

        </motion.div>

        {/* Imagen destacada */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <div className="rounded-3xl overflow-hidden border-2 border-tron-neon shadow-neon backdrop-blur-md">
            <img 
              src={castorImage} 
              alt="Tron Castor" 
              className="object-cover w-full h-80 md:h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Synopsis;
