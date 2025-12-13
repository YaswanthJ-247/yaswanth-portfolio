/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.25rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#e7f8ff',
          100: '#c6eefe',
          200: '#99dffd',
          300: '#63c8fb',
          400: '#38aaf6',
          500: '#0ea5e9',
          600: '#0a86c5',
          700: '#0d6a9c',
          800: '#10597f',
          900: '#114b68',
        },
        accent: '#f97316',
      },
      boxShadow: {
        'glow': '0 10px 50px rgba(14, 165, 233, 0.15)',
        'glass': '0 10px 40px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'grid-light':
          'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.12) 1px, transparent 0)',
        'grid-dark':
          'radial-gradient(circle at 1px 1px, rgba(241, 245, 249, 0.16) 1px, transparent 0)',
        'hero-light':
          'radial-gradient(circle at 20% 20%, rgba(14,165,233,0.16), transparent 35%), radial-gradient(circle at 80% 0%, rgba(249,115,22,0.17), transparent 30%), radial-gradient(circle at 50% 70%, rgba(16,185,129,0.12), transparent 28%)',
        'hero-dark':
          'radial-gradient(circle at 20% 20%, rgba(94,234,212,0.12), transparent 35%), radial-gradient(circle at 80% 0%, rgba(125,211,252,0.12), transparent 32%), radial-gradient(circle at 50% 70%, rgba(248,113,113,0.12), transparent 30%)',
      },
    },
  },
  plugins: [],
}
