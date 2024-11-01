/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'georgia': ['Georgia', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        'main-color-yellow': 'rgb(255, 170, 13)',
      },
    },
  },
  plugins: [],
}
