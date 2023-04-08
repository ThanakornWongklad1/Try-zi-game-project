/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '14': '14px',
    },
    dropShadow: {
      '2xl': '0 20px 20px rgba(0, 0, 0, 0.4)',
    },
    colors: {
      'orange-yellow': '#F47B4C',
      'black': '#000000',
      'white': '#FFFFFF',
      'yellow-white': '#EFB83B',
      'yellow-light':'#FFF6E3',
      'yellow-dark':'#EFB83B',
      'lightblue':'#0C8DCD',
      'lightred':'#F43232',
      'yellow-plus':'#FFE7AB'
    },
  },
  plugins: [],
}