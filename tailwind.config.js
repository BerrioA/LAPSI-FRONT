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
      },
    },
  },
  plugins: [heroui()],
};
