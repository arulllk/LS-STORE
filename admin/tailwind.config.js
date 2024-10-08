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
        'bolt-blue': '#2275fc',
        'pale-sky':'#f2f7fb',
        'perfect-storm':'#95989dff',
        'table-highlighter':'#f6f8fbcc',
        'aerospace-orange':'#ff5200',
        'welsh-onion': '#22c55e'
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
      borderRadius:{
      },
      boxShadow: {
        'custom-box': '0 4px 24px 0 rgba(20, 25, 38, 0.05)',
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
        '.page-heading':{
          fontSize:'24px',
          lineHeight:'37px',
          color:'#000000',
          fontWeight:700,         
        },
        '.white-box-cont':{
          display:'flex',
          padding:'24px',
          flexDirection:'column',
          gap:'24px',
          borderRadius:'12px',
          backgroundColor:'#ffffff',
          boxShadow:'0 4px 24px 2px rgba(20,25,38,.05)'
        },        
        '.uploaded-img-cont':{
          width:'100%',
          height:'208px',
          border:'1px dotted #2275fc',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:'12px',
          overflow:'hidden',
          position:'relative'
        }
        

      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

