/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Fredoka", "sans-serif"],
        secondary: ["Zeyada", "cursive"],
        third: ["Dancing Script", "cursive"],
      },
      colors: {
        primary: "#ee1703",
        accentColor: "#fc8e86",
        secondary: "#fcd0cc",
        third: "#ab1103",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
