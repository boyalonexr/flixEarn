/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       screens: {
        sm: '500px',
        'x12': '1200px', 
      },
       fontFamily: {
        reddit: ['Poppins', 'ui-sans-serif', 'system-ui', 'Reddit Sans', 'sans-serif'],
      },
      colors: {
        // adjust HEX to match exact design
        accent: {
          DEFAULT: '#10B981', // emerald-500 like accent
        },
      },  
       animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-out': 'fadeOut 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [scrollbar],
}
