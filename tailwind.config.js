/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Noto Sans'", "sans-serif"],
      display: ["'Noto Sans'", "sans-serif"],
      body: ["'Noto Sans'", "sans-serif"],
    },
    colors: {
      ...colors,
      primary: {
        50: "#e2f7fa",
        100: "#b8ebf1",
        200: "#8ddfe9",
        300: "#68d1df",
        400: "#55c7d7",
        500: "#49bed1",
        600: "#45aebe",
        700: "#3e98a5",
        800: "#38848d",
        900: "#2b6164",
      },
      complementary: {
        50: "#ffebec",
        100: "#fecdcd",
        200: "#eb9b92",
        300: "#df7668",
        400: "#e65b41",
        500: "#e84f22",
        600: "#da4523",
        700: "#c93b1e",
        800: "#bc3517",
        900: "#ad2b08",
      },
      analogous1: {
        50: "#ddf8ec",
        100: "#aaecd0",
        200: "#68dfb1",
        300: "#00d194",
        400: "#00c57f",
        500: "#00b869",
        600: "#00a95e",
        700: "#009650",
        800: "#008544",
        900: "#00652d",
      },
      analogous2: {
        50: "#e7f2fb",
        100: "#c5def7",
        200: "#a3c9f1",
        300: "#86b4ea",
        400: "#74a4e5",
        500: "#6896df",
        600: "#6188d1",
        700: "#5876be",
        800: "#5165ab",
        900: "#43488a",
      },
      triadic1: {
        50: "#ebeafb",
        100: "#cecaf4",
        200: "#ada8ed",
        300: "#8d85e6",
        400: "#7668df",
        500: "#624ad7",
        600: "#5c41cb",
        700: "#5435be",
        800: "#4d28b3",
        900: "#420c9b",
      },
      triadic2: {
        50: "#fae6f7",
        100: "#f2c1eb",
        200: "#e996de",
        300: "#df68d1",
        400: "#d640c6",
        500: "#ca0bbb",
        600: "#bc05b6",
        700: "#a800af",
        800: "#9700a8",
        900: "#77009c",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
          "@screen 2xl": {
            maxWidth: "1536px",
          },
        },
      });
    },
  ],
};
