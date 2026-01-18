/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9AEBA3',
        secondary: '#45C4B0',
        tertiary: '#13678A',
        accent: '#DAFDBA',
        background: '#012030',
      },
      fontFamily: {
        pixel: ['"VT323"', 'monospace'],
        display: ['"Press Start 2P"', 'cursive'],
      },
      backgroundImage: {
        'space-pattern': "url('https://www.transparenttextures.com/patterns/stardust.png')",
      }
    },
  },
  plugins: [],
}