/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#F8F3E9',
          200: '#F1E8D5',
          300: '#E7D9BC',
        },
        gold: {
          light: '#EED9A4',
          DEFAULT: '#C5A46D',
          dark: '#9E7E45',
          metallic: '#DFB76C',
          deep: '#8C6C32',
        },
        maroon: {
          light: '#882A47',
          DEFAULT: '#681F35',
          dark: '#4B1425',
          deep: '#350A17',
        },
        sage: {
          light: '#919E84',
          DEFAULT: '#76816A',
          dark: '#58614E',
        },
        chocolate: {
          light: '#4B3A31',
          DEFAULT: '#30251F',
          dark: '#1C1512',
        },
        blush: {
          light: '#F5ECEB',
          DEFAULT: '#EBD8D5',
          dark: '#D8B8B4',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        gujaratiSerif: ['"Noto Serif Gujarati"', 'serif'],
        gujaratiSans: ['"Noto Sans Gujarati"', 'sans-serif'],
        sans: ['Inter', '"Noto Sans Gujarati"', 'sans-serif'],
      },
      boxShadow: {
        'royal': '0 10px 30px -5px rgba(104, 31, 53, 0.15), 0 0 15px 0 rgba(197, 164, 109, 0.2)',
        'royal-lg': '0 20px 45px -10px rgba(104, 31, 53, 0.25), 0 0 25px 2px rgba(197, 164, 109, 0.3)',
        'gold-glow': '0 0 20px rgba(197, 164, 109, 0.45)',
        'door-shadow': '0 25px 50px -12px rgba(0, 0, 0, 0.65)',
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #ECCF9B 0%, #C5A46D 50%, #E3C385 100%)',
        'royal-card': 'radial-gradient(circle at top, #FFFDF9 0%, #F8F3E9 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
