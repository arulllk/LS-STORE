/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'dreamless-sleep': '#111111',
        'black-water': '#575864',
        'powder-white': '#ecf0f4'
      },
      margin:{
        '10':'.625rem'
      },
      padding:{
        '10':'.625rem'
      },
      borderWidth:{
        '1':'.0625rem'
      }

    },
  },
  plugins: [],
}
