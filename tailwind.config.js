/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/admin/**/*.{js,jsx}",
    "./components/admin/**/*.{js,jsx}",
  ],
  corePlugins: {
    // Preflight resets h1/a/body/img globally — turning it off keeps the
    // public site's hand-written CSS (styles/globals.css) untouched.
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        ink: "#141210",
        inksoft: "#1b1815",
        forest: "#1f3b2c",
        forestdeep: "#132720",
        gold: "#c9a24b",
        goldsoft: "#e2c98a",
        ivory: "#f3ece0",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Manrope'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
