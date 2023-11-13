/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#26292d",
        darkGray: "#202326",
        darkestGray: "#1b1d20",
        accentBlue: "#93c5fd",
      },
      fontFamily: {
        amiri: ["Amiri", "serif"],
        cairo: ["Cairo", "sans"],
      },
    },
  },
  plugins: [],
};
