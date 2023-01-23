/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#0B1D27",
        // secondary: "#00A3AD",
        primary: {
          100: "#02554B",
          500: "#042825",
          900: "#011B18",
        },
        secondary: {
          500: "#042825",
          900: "#011B18",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-20px)" },
        },
      },
      transitionProperty: {
        height: "height",
      },
    },
    screens: {
      xxs: "360px",
      xs: "475px",
      ...defaultTheme.screens,
      threeXl: "1920px",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
