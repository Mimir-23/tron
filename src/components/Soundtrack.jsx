"use client";

import React from "react";
import { motion } from "framer-motion";
import daftPunk from '../assets/daft.jpg'; // ✅ Imagen de fondo correcta

const Soundtrack = () => {
  return (
    <section 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${daftPunk})` }}
    >
      {/* Fondo oscuro + blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Efecto Tron de Energía flotante */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.1, 0.05], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-tron-neon/10 blur-2xl"></div>
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 text-center">
        
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-tron-neon text-4xl sm:text-5xl md:text-6xl font-orbitron mb-12 drop-shadow-[0_0_20px_#00FFF7]"
        >
          Banda Sonora
        </motion.h2>

        {/* Spotify Embed Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-6xl h-[400px] sm:h-[500px] md:h-[600px] flex justify-center items-center"
        >
          <motion.div
            initial={{ boxShadow: "0 0 0px #00FFF7" }}
            animate={{ boxShadow: "0 0 25px #00FFF7, 0 0 45px #00FFF7 inset" }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-tron-neon backdrop-blur-md"
          >
            <iframe
              className="w-full h-full rounded-3xl"
              src="https://open.spotify.com/embed/album/3AMXFnwHWXCvNr5NCCpLZI?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ border: "none" }}
            ></iframe>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Soundtrack;
