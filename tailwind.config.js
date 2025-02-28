
/** @type {import('tailwindcss').Config} */
import { keyframes } from 'framer-motion';
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: ["./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        'float': 'float 1.5s ease-in-out alternate infinite',
      },
      keyframes:{
        float: {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateY(36px)'}
        }
      },
      colors: {
        'primary': '#4d953e',
        'secondary': '#4d953e',
      },
      fontSize: {
        'title': '40px',
        'body': '16px',
      },
      fontFamily: {
        Quicksand: ['Quicksand', 'serif']
      }
    },
  },
  plugins: [
    tailwindScrollbarHide,
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-black': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 5)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ], 
}