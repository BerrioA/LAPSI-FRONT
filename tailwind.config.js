/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B29A64", // Color dorado/tierra
        secondary: "#152E3A", // Azul oscuro
        "light-gray": "#F5F5F5", // Gris muy claro
        "off-white": "#FAFAFA", // Blanco con un toque cálido
        "full-white": "#FFFFFF",

        "accent-green": "#A3B18A", // Verde oliva suave (armoniza con el dorado)
        "accent-blue": "#284B63", // Azul intermedio, más claro que el secundario
        "accent-beige": "#E6D3B3", // Beige claro, cálido y elegante para fondos
        "accent-brown": "#7E685A", // Marrón suave para tarjetas con iconos
        "accent-sky": "#C9DDF0", // Azul cielo apagado (para fondo o contraste)
      },
    },
  },
  plugins: [heroui()],
};
