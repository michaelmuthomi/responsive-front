/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "libre-baskerville": ["Libre Baskerville", "serif"],
      },
      colors: {
        primary: "#dd71c6",
        secondary: "#73c3f4",
        tertiary: "#ffd900",
        countdown: "#4D85B0",
        customWhite: "#f9f5f6",
      },
    },
  },
  plugins: [],
};
