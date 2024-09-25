/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Light', 'sans-serif'],
        light: ['Light Italic', 'sans-serif'],
      },
      colors: {
        primary: '#f7f7f7',
        secondary: '#2b2b2b',
        green: '#5cc45c', // Fixed the hex color code
      }
    },
  },
  plugins: [],
}
