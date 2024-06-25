/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueDark: 'hsl(194,53,12)',
        colorText: 'hsl(0,0,40)',
        colorGray: 'hsl(0,0,13)'
      }
    },
  },
  plugins: [],
}