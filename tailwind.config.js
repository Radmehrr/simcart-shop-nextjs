/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkBlue: "hsl(228,39%,23%)",
        veryDarkBlue: "hsl(233,12%,13%)",
        primary: "rgb(147 51 234)",
        primaryLight: "rgb(192 132 252)",
        primaryDark: "rgb(107 33 168)",
        lightGreen: "rgb(165 255 214)",
        lightYellow: "rgb(255 243 176)",
        lightGolbehi: "rgb(255 229 217)",
        golbehi: "rgb(255 205 178)",
        test: "#D3D3D3",
        test2: "rgb(108 117 125)",
      },
    },
  },
  plugins: [],
};
