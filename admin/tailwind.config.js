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
        'powder-white': '#ecf0f4',
        'bolt-blue': '#2275fc'
      },
      margin:{
        '10':'.625rem'
      },
      padding:{
        '10':'.625rem'
      },
      borderWidth:{
        '1':'.0625rem'
      },
      gap:{
        '10':'.625rem'
      },

    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        '.btn-custom' : {
          backgroundColor: '#2275fc',
          border: '1px solid #2275fc',
          height: '50px',
          padding: '15px 22px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: '20px',
          backgroundSize: '100%',
          overflow: 'hidden',
          borderRadius: '12px',
          transition: 'all .3s ease'
        },
        '.btn-custom:hover': {
          backgroundColor: '#ffffff',
          color: '#2275fc',
        }, 
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

