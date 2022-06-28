/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#142850",
        secondary: "#27496D",
        tertiary: "#0C7B93",
        quaternary: "#00A8CC",
      },
      fontFamily: {
        nurito: ["Nurito", "sans-serif"],
      },
    },
  },
  plugins: [],
}
