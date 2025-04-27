"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


import fondo from '../assets/fondo.webp';

import castor from '../assets/castor.jpg';
import clu from '../assets/clu.jpg';
import clu2 from '../assets/clu2.jpg';
import daftPunk from '../assets/daftPunk.png';
import gem from '../assets/gem.jpg';
import kevinFlynn from '../assets/kevinFlynn.jpg';
import quorra from '../assets/quorra.jpg';
import samFlynn from '../assets/samFlynn.jpg';
import tron from '../assets/tron.jpg';

const characters = [
  { name: "Castor", image: castor, description: "Castor es un programa excéntrico que administra el club End of Line en el Grid." },
  { name: "Clu", image: clu, description: "Clu es el programa creado por Kevin Flynn que se vuelve el antagonista en Tron Legacy." },
  { name: "Clu 2", image: clu2, description: "Clu 2 es la versión perfeccionada de Clu, obsesionado con un sistema perfecto." },
  { name: "Daft Punk", image: daftPunk, description: "Legendarios DJs que hacen un cameo en Tron Legacy, y crearon toda la banda sonora." },
  { name: "Gem", image: gem, description: "Gem es una sirena en el Grid, encargada de preparar a los nuevos programas." },
  { name: "Kevin Flynn", image: kevinFlynn, description: "El creador del Grid, atrapado en su propio mundo digital por décadas." },
  { name: "Quorra", image: quorra, description: "Quorra es una ISO, una entidad perfecta, protegida por Kevin Flynn." },
  { name: "Sam Flynn", image: samFlynn, description: "El hijo de Kevin Flynn que se adentra en el Grid para rescatar a su padre." },
  { name: "Tron", image: tron, description: "El primer defensor de los usuarios, reprogramado como Rinzler bajo el control de Clu." },
];

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section 
      className="relative py-20 min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${fondo})` }}
    >
      {/* Overlay oscurecido */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Energía flotante suave */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.04, 0.07, 0.04] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-tron-neon/10 blur-2xl"></div>
      </motion.div>

      <div className="relative z-10">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-tron-neon text-4xl sm:text-5xl font-orbitron mb-14"
        >
          Personajes
        </motion.h2>

        {/* Grid personajes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 px-4 sm:px-10">
          {characters.map((char, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer group"
              onClick={() => setSelectedCharacter(char)}
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-tron-neon shadow-neon group-hover:shadow-[0_0_30px_#00FFF7] transition-all duration-300">
                <img
                  src={char.image}
                  alt={char.name}
                  className="object-cover w-full h-40 sm:h-48 md:h-52 group-hover:opacity-80 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-tron-neon text-center text-base sm:text-lg font-orbitron">{char.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Modal de personaje */}
        <AnimatePresence>
          {selectedCharacter && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Fondo modal */}
              <div className="absolute inset-0 bg-black/80">
                <img 
                  src={fondo}
                  alt="Tron Background" 
                  className="w-full h-full object-cover opacity-20 blur-sm"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              </div>

              {/* Rayo Tron */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-tron-neon/10 pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />

              {/* Contenido modal */}
              <motion.div 
                className="bg-black/80 rounded-3xl border-2 border-tron-neon p-6 sm:p-8 max-w-md w-full text-center backdrop-blur-md shadow-neon"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <button
                  className="absolute top-3 right-4 text-tron-neon text-2xl"
                  onClick={() => setSelectedCharacter(null)}
                >
                  ×
                </button>

                <img
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                  className="w-full rounded-xl mb-5"
                />
                <h3 className="text-2xl font-orbitron text-tron-neon mb-3">
                  {selectedCharacter.name}
                </h3>
                <p className="text-tron-gray text-sm sm:text-base font-exo">{selectedCharacter.description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Characters;
