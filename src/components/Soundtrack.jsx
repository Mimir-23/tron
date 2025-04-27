"use client";

import React from "react";
import { motion } from "framer-motion";
import daftPunk from '../assets/daft.jpg'; // ✅ Imagen correcta

const Soundtrack = () => {
  return (
    <section 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${daftPunk})` }}
    >
      {/* Fondo oscuro + Blur más potente */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Efecto rayo Tron dinámico */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.1, 0.05], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-tron-neon/5 blur-3xl"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6">
        {/* Título Animado */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-tron-neon text-5xl sm:text-6xl font-orbitron mb-16 text-center drop-shadow-[0_0_20px_#00FFF7]"
        >
          Banda Sonora
        </motion.h2>

        {/* Spotify Embed con efecto Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-[500px] md:h-[600px] max-w-6xl flex justify-center items-center"
        >
          <motion.div
            initial={{ boxShadow: "0 0 0px #00FFF7" }}
            animate={{ boxShadow: "0 0 30px #00FFF7, 0 0 50px #00FFF7 inset" }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-tron-neon backdrop-blur-md"
          >
            <iframe
              style={{ border: "none" }}
              className="w-full h-full rounded-3xl"
              src="https://open.spotify.com/embed/album/3AMXFnwHWXCvNr5NCCpLZI?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Soundtrack;
