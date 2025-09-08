/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        reddit: ['"Reddit Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
