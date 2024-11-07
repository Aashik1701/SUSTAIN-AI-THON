/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: { sponsors: "url('./src/assets/sponsors_bg.png')" },
    },
  },
  plugins: [],
};
