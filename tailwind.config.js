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
      boxShadow: {
        'custom-khaki': 'rgba(195, 176, 145, 0.4) 5px 5px, rgba(195, 176, 145, 0.3) 10px 10px, rgba(195, 176, 145, 0.2) 15px 15px, rgba(195, 176, 145, 0.1) 20px 20px, rgba(195, 176, 145, 0.05) 25px 25px',
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
        customWhite:'#FFFFFF',
        customYellow:'#FFDC4C',

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


