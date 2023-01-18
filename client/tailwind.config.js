const plugin =require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          400:'#9898ad',
          500:'#6B6B7B',
        }
      },
      boxShadow:{
        DEFAULT: '0 3px 12px grba(0,0,0,0.03)',
        md: '0 3px 12px grba(0,0,0,0.1)',
      },
      keyframes:{
        fade:{
          from:{opacity: 0},
          to:{opacity: 1}
        },
        scaleIn:{
          '0%':{
            opacity:0,
            transform: 'scale(0.9)'
          },
          '50%':{
            opacity:0.3,
          },
          '100%':{
            opacity:0,
            transform: 'scale(1)'
          },
        } 
      },
      fontSize:{
        xs:'.9rem',
        sm:'1rem',
        tiny: '1.2rem',
        base: '1.4rem',
        lg: '1.5rem',
        xl: '1.6rem', 
        '2xl': '1.75rem', 
        '3xl': '1.9rem', 
        '4xl': '2.4rem', 
        '5xl': '3.5rem', 
        '6чl': '4.5rem', 
        '7xl': '5.5rem', 
      },
      animation:{
        fade:'fade .5s ease-in--out',
        scaleIn: 'scaleIn .35s ease-in-out'
      }, 
    },
  },
  plugins: [
    plugin(({addComponents}) =>{
      addComponents({
        'shadow-block':{
          display: 'block',
          boxShadow: 
            '0 10px 15px -3px rgb(0 0 0 /0.1), 0 4px 6px -4px rgb(0 0 0 /0.1) ',
          animation: 'scaleIn .35s easse-in-out',
          background: '#272532'
        }
      })
    })
  ],
}
