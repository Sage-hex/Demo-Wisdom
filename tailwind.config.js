/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Titan One', 'Nutino','Pangolin', 'sans-serif'],
      },
      backgroundImage: {
        'grid-large': "linear-gradient(to left, #e0e0e0 1px, transparent 1px), linear-gradient(to top, #e0e0e0 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-large': '60px 60px', // Larger grid pattern
      },
      screens: {
        'sm': '320px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        customPink: '#F079AE',
        customBlue:'#08B7E8',
        customWhite:'#FFFFFF'

      },
      animation: {
        'bounce-infinite': 'bounceInfinite 2s infinite',
      },
      keyframes: {
        bounceInfinite: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-15px)',
          },
        },
      },
    }
  },
  plugins: [],
}


