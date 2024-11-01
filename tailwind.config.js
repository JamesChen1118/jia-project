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
        'crimson': ['Crimson Text', 'serif'],
      },
      colors: {
        'main-color-yellow': 'rgb(255, 170, 13)',
        'main-color-orange': 'rgb(237, 105, 52)',
        'main-bg-dark': 'rgba(26, 26, 26, 0.7)',
        'main-text-white': 'whitesmoke',
        'news-border': '#b89881',
        'news-text-gray': '#9a9a9a',
      },
      backgroundColor: {
        'transparent-dark': 'rgba(26, 26, 26, 0.7)',
        'transparent-light': 'rgba(255, 255, 255, 0.2)',
        'news-hover': '#e9ba985d',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDelay: {
        '1000': '1000ms',
      },
      scale: {
        '110': '1.1',
      },
      spacing: {
        '100': '100px',
        '150': '150px',
        '200': '200px',
        '350': '350px',
      },
      boxShadow: {
        'custom': '0 4px 15px rgba(0, 0, 0, 0.5)',
        'custom-hover': '2px 2px 15px rgb(230, 149, 57)',
      },
      letterSpacing: {
        'letterSpacing-1': '1px',
        'letterSpacing-3': '3px',
        'letterSpacing-5': '5px',
        'letterSpacing-40': '40px',
        'letterSpacing-48': '48px',
      },
      borderWidth: {
        '3': '3px',
      },
      minHeight: {
        '30vh': '30vh',
        '60vh': '60vh',
      },
      maxHeight: {
        '60vh': '60vh',
      },
      width: {
        '350': '350px',
        '400': '400px',
        '500': '500px',
        '700': '700px',
      },
      height: {
        '500': '500px',
      },
      lineHeight: {
        'extra-loose': '3',
      },
      translate: {
        '40': '40px',
      },
      backgroundPosition: {
        '40': '40%',
      },
    },
  },
  plugins: [],
}