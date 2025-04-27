"use client";

import { motion } from "framer-motion";
import { Children, cloneElement } from "react";

function DockItem({ children, className = "", onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.08 }}
      className={`relative inline-flex items-center justify-center 
                  w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                  border-2 border-tron-neon rounded-2xl 
                  bg-gradient-to-br from-black via-black to-tron-dark
                  hover:from-tron-neon/20 hover:via-black hover:to-black
                  transition-all duration-300 ease-out shadow-[0_0_20px_#00FFF7]
                  backdrop-blur-md overflow-hidden animate-energy-blink ${className}`}
      tabIndex={0}
      role="button"
    >
      <span className="absolute inset-0 animate-pulse bg-tron-neon/5 blur-md rounded-2xl pointer-events-none" />
      {Children.map(children, (child) => cloneElement(child))}
    </motion.button>
  );
}

function DockIcon({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-center text-tron-neon text-2xl sm:text-3xl lg:text-4xl ${className}`}>
      {children}
    </div>
  );
}

export default function Dock({ items, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed z-50 bottom-4 left-0 right-0 mx-auto w-[90%] max-w-md flex flex-row justify-around items-center gap-6 bg-black/70 border-2 border-tron-neon/60 rounded-2xl backdrop-blur-lg p-3 overflow-hidden
                 sm:bottom-6 sm:p-4
                 md:top-[30%] md:right-4 md:left-auto md:bottom-auto md:mx-0 md:translate-y-0 md:w-24 md:flex-col md:justify-center md:items-center md:gap-14 md:rounded-3xl md:min-h-[500px] md:border-2 md:border-tron-neon/80 md:p-6`}
    >
      {/* Scan Line Animation */}
      <motion.div
        className="hidden md:block absolute top-0 left-0 w-1 bg-tron-neon/80 animate-scan-move"
      />
      {items.map((item, index) => (
        <DockItem
          key={index}
          onClick={item.onClick}
          className={item.className}
        >
          <DockIcon>{item.icon}</DockIcon>
        </DockItem>
      ))}
    </motion.div>
  );
}
