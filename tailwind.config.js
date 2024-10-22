/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#854d3d',
        secondary:'#4a1e1b',
        brandDark:'#270c03',
        'utama': '#EB0029',
        'text_utama': '#333333',
        'putih': '#f2f2f2',
        'cream': '#FEE9DE',
        'kuning': '#F2C94C',
        'choco': {
          100: '#7b4819',
          200: '#6c3c0c',
          300: '#622A0F',
          400: '#5a330d',
          500: '#4f3011',

        }
      },
      fontFamily: { 
        sans: [
        "Poppins",
        "sans-serif"],
        cursive: [
        "Pacifico", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      fontSize: {
        'xs': ['.75rem', { lineHeight: '1.5' }],
        'sm': ['.875rem', { lineHeight: '1.25' }],
        'tiny': ['.875rem', { lineHeight: '1.25' }],
         'base': ['1rem', { lineHeight: '1.5' }],
         'lg': ['1.125rem', { lineHeight: '1.2' }],
         'xl': ['1.25rem', { lineHeight: '1.2' }],
         '2xl': ['1.5rem', { lineHeight: '1.2' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
         '5xl': ['3rem', {
          lineHeight: '1.2',
        }],
         '6xl': ['4rem', {
          lineHeight: '1.2',
        }],
        '7xl': ['4.13rem', {
          lineHeight: '1.2',
        }],
       }
    },
   plugins: [],
  }
}

