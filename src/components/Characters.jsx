"use client";

import React, { useState } from "react";
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

  return (
    <section 
      className="py-20 min-h-screen bg-cover bg-center bg-no-repeat relative" 
      style={{ backgroundImage: `url(${fondo})` }}
    >
      {/* Capa oscura y blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Efecto de energía flotante */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.03, 0.07, 0.03] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-tron-neon/10 blur-3xl"></div>
      </motion.div>

      <div className="relative z-10">
        {/* Título animado */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-tron-neon text-4xl sm:text-5xl font-orbitron mb-16 drop-shadow-[0_0_20px_#00FFF7]"
        >
          Personajes
        </motion.h2>

        {/* Grid de personajes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 px-6">
          {characters.map((char, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer group"
              onClick={() => setSelectedCharacter(char)}
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-tron-neon shadow-neon transition-all duration-300 group-hover:shadow-[0_0_30px_#00FFF7]">
                <img
                  src={char.image}
                  alt={char.name}
                  className="object-cover w-full h-48 group-hover:opacity-80 transition-all duration-300"
                />
              </div>
              <h3 className="mt-4 text-tron-neon text-center text-lg font-orbitron">{char.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Modal Tron */}
        <AnimatePresence>
          {selectedCharacter && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Fondo Imagen Tron */}
              <div className="absolute inset-0 bg-black/80">
                <img 
                  src={fondo}
                  alt="Tron Background" 
                  className="w-full h-full object-cover opacity-20 blur-sm"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              </div>

              {/* Efecto Rayo Tron */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-tron-neon/10 pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Modal contenido */}
              <motion.div 
                className="bg-black/80 rounded-3xl border-2 border-tron-neon p-8 max-w-lg text-center relative backdrop-blur-md shadow-neon"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Botón cerrar */}
                <button
                  className="absolute top-4 right-4 text-tron-neon text-2xl"
                  onClick={() => setSelectedCharacter(null)}
                >
                  ×
                </button>

                {/* Imagen y descripción */}
                <img
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                  className="w-full rounded-xl mb-6"
                />
                <h3 className="text-3xl font-orbitron text-tron-neon mb-4">
                  {selectedCharacter.name}
                </h3>
                <p className="text-tron-gray font-exo">{selectedCharacter.description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Characters;
