
/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: ["./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        'primary': '#86aa4d',
        'secondary': '#6ada0e',
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