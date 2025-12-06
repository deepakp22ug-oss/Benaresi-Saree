/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f7f4',
          100: '#f5e6d3',
          600: '#c41e3a',
          700: '#b71c1c',
          800: '#722F37',
          900: '#5a1f27',
        },
        gold: {
          300: '#E8D4A0',
          400: '#D4AF37',
          500: '#DAA520',
        },
        navy: '#1a3a52',
        emerald: '#2d5016',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

