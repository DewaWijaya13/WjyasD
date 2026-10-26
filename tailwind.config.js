/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'manga-cream': '#F5EEDC',
        'manga-ink': '#141414',
        'manga-yellow': '#F5CA3D',
        'manga-red': '#D64433',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        stamp: ['"Special Elite"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'hard-sm': '2px 2px 0 #141414',
        'hard': '4px 4px 0 #141414',
        'hard-md': '5px 5px 0 #141414',
        'hard-lg': '6px 6px 0 #141414',
        'hard-xl': '8px 8px 0 #141414',
      },
    },
  },
  plugins: [],
}