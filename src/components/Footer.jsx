"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiVite, SiTailwindcss } from "react-icons/si";


import disneyLogo from '/svg/disney.svg'; // 

const Footer = () => {
  return (
    <footer className="relative w-full bg-black/90 border-t-2 border-tron-neon backdrop-blur-md shadow-neon mt-20 overflow-hidden">
      
      {/* Rayo Tron Animado */}
      <motion.div
        className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-tron-neon/60 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <div className="max-w-7xl mx-auto py-12 px-6 flex flex-col items-center text-center relative z-10 pb-32 md:pb-12">
        
        {/* Tecnologías usadas con íconos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <h3 className="text-tron-neon text-2xl font-orbitron mb-6">
            Tecnologías Utilizadas
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-tron-neon text-4xl">
            <FaReact title="React" className="hover:scale-110 transition-transform" />
            <SiVite title="Vite" className="hover:scale-110 transition-transform" />
            <SiTailwindcss title="TailwindCSS" className="hover:scale-110 transition-transform" />
    
   
          </div>
        </motion.div>

        {/* Enlaces sociales con íconos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-10 text-tron-neon text-4xl mb-10"
        >
          <a 
            href="https://github.com/Mimir-23" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaGithub title="GitHub" />
          </a>

          <a 
            href="mailto:deivi1817@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <MdEmail title="Correo" />
          </a>

          <a 
            href="https://www.linkedin.com/in/deivi-mesa-3ba573186/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaLinkedin title="LinkedIn" />
          </a>
        </motion.div>

        {/* Créditos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-tron-gray font-exo text-sm"
        >
          <p className="mb-2">
            Desarrollado por <a href="https://deivimesa.art/" target="_blank" rel="noopener noreferrer" className="text-tron-neon underline hover:text-white">Deivi Mesa</a>
          </p>
          <p className="text-xs mb-4">
            © Todos los derechos reservados a Disney
          </p>

          {/* Logo Disney */}
          <div className="flex justify-center">
            <img 
              src="/svg/disney.svg" 
              alt="Disney Logo" 
              className="w-24 opacity-70 hover:opacity-100 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
