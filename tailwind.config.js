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
        'verdana': ['Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
      },
      colors: {
        'main-color-yellow': 'rgb(255, 170, 13)',
        'main-color-orange': 'rgb(237, 105, 52)',
        'main-bg-dark': 'rgba(26, 26, 26, 0.7)',
        'main-text-white': 'whitesmoke',
      },
      backgroundColor: {
        'transparent-dark': 'rgba(26, 26, 26, 0.7)',
        'transparent-light': 'rgba(255, 255, 255, 0.2)',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      scale: {
        '110': '1.1',
      },
      spacing: {
        '100': '100px',
        '150': '150px',
        '200': '200px',
      },
      boxShadow: {
        'custom': '0 4px 15px rgba(0, 0, 0, 0.5)',
        'custom-hover': '2px 2px 15px rgb(230, 149, 57)',
      },
      letterSpacing: {
        'letterSpacing-40': '40px',
        'letterSpacing-48': '48px',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
