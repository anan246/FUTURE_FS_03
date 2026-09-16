/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF6F0',
          100: '#F4ECE1',
          200: '#E8D7C3',
          300: '#D7BC9E',
          400: '#C5A078',
          500: '#B08857', // Primary warm bronze gold
          600: '#946E42',
          700: '#755433',
          800: '#563C25',
          900: '#382518',
          950: '#1F140D',
        },
        espresso: {
          50: '#F6F5F5',
          100: '#E7E5E4',
          200: '#D6D3D1',
          300: '#A8A29E',
          400: '#78716C',
          500: '#57534E',
          600: '#44403C',
          700: '#292524',
          800: '#1C1917',
          900: '#0C0A09', // Deep dark backdrop
        },
        cream: '#FAF8F5',
        warmCard: '#F5F0EB',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'slow-zoom': 'slowZoom 20s infinite alternate ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
        'luxury': '0 20px 40px -15px rgba(28, 25, 23, 0.15)',
        'glow': '0 0 25px rgba(176, 136, 87, 0.3)',
      },
    },
  },
  plugins: [],
}
