/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
      colors: {
        mint: {
          50: "#f0fdf9",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
        },
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
        },
        avocado: {
          50: "#f0f7ed",
          100: "#dcebd5",
          200: "#b9d7ab",
          300: "#96c381",
          400: "#73af57",
          500: "#569b3d",
        },
      },
    },
  },
  plugins: [],
};
