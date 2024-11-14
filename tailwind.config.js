/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        BlueGradientCountDown: "#026DF7",
        GreenGradientCountDown: "#05d57f",
      },
      backgroundImage: { sponsors: "url('./src/assets/sponsors_bg.png')" },
    },
  },
  plugins: [],
};
