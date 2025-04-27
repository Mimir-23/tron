/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tron: {
          black: "#000000",   // Fondo principal
          neon: "#00FFF7",    // Color neón TRON
          dark: "#0B0C10",    // Oscuro de TRON
          gray: "#A7A9AC",    // Gris metálico
          white: "#FFFFFF",   // Blanco puro
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'], // Fuente principal
        exo: ['Exo 2', 'sans-serif'],          // Fuente secundaria
      },
      boxShadow: {
        neon: '0 0 10px #00FFF7, 0 0 20px #00FFF7, 0 0 30px #00FFF7', // Glow neón
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'energy-blink': {
          '0%, 90%, 100%': { boxShadow: '0 0 20px #00FFF7' },
          '95%': { boxShadow: '0 0 35px #00FFF7, 0 0 50px #00FFF7' },
        },
        'scan-move': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 2s ease-out',
        'energy-blink': 'energy-blink 5s infinite ease-in-out',
        'scan-move': 'scan-move 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
