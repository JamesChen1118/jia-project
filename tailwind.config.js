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
        'cart-orange': 'rgb(255, 147, 59)',
        'cart-orange-hover': 'rgb(255, 190, 77)',
        'cart-bg': '#b6acace1',
        'cart-text': 'rgb(245, 222, 180)',
        'cart-delete': 'rgb(226, 99, 99)',
        'cart-delete-hover': 'rgb(227, 62, 62)',
        'cart-count': '#0736b8',
      },
      backgroundColor: {
        'transparent-dark': 'rgba(26, 26, 26, 0.7)',
        'transparent-light': 'rgba(255, 255, 255, 0.2)',
        'news-hover': '#e9ba985d',
        'login-bg': 'rgba(41,40,40,0.7)',
        'btn-bg': 'rgba(161,167,142,0.2)',
        'input-bg': 'rgba(255,255,255,0.2)',
        'product-bg': 'rgb(120,117,117)',
        'button-bg': 'rgb(245,222,180)',
        'button-hover': 'rgba(255,170,13,0.8)',
        'checkout-bg': 'rgba(255, 255, 255, .3)',
        'member-bg': '#292828',
        'member-hover': 'rgba(255, 170, 13, 0.1)',
        'member-even': 'rgba(255, 255, 255, 0.05)',
        'member-header': 'rgba(255, 170, 13, 0.2)',
      },
      textColor: {
        'product-category': 'rgb(240,201,130)',
        'product-count': '#3e0de0',
      },
      borderColor: {
        'product-input': 'rgba(255,170,13,0.5)',
        'category-border': '#bbaf48',
        'cart-border': 'rgba(255, 255, 255, .2)',
        'member-border': 'rgba(255, 170, 13, 0.3)',
      },
      transitionDelay: {
        '1000': '1000ms',
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
        'login': '0 4px 15px rgba(0,0,0,0.5)',
        'btn': '0 0 25px 5px #0000003b',
        'btn-hover': '2px 1px 5px rgba(255,255,255,0.3)',
        'input': '-1px -1px 5px rgba(255,255,255,0.9)',
        'input-focus': '-1px -1px 5px rgba(255,69,0,0.5)',
        'reservation': '10px 15px 20px rgba(0, 0, 0, .5)',
      },
      letterSpacing: {
        'letterSpacing-1': '1px',
        'letterSpacing-3': '3px',
        'letterSpacing-5': '5px',
        'letterSpacing-40': '40px',
        'letterSpacing-48': '48px',
        'cart': '2px',
        'cart-total': '15px',
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
        'reservation': '60%',
        'form': '400px',
        'seating': '400px',
      },
      height: {
        '500': '500px',
        '80vh': '80vh',
        'seating': '300px',
      },
      backgroundPosition: {
        '40': '40%',
      },
      blur: {
        'xs': '0.5px',
      },
      backdropBlur: {
        '10': '10px',
      },
      backgroundImage: {
        'menu-gradient': 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7))',
        'reservation-gradient': 'radial-gradient(circle, rgba(52, 51, 51, 1) 4%, rgba(82, 80, 80, 1) 40%, rgba(56, 54, 54, 1) 74%)',
        'table-2': "url('@/assets/images/reservation/seat-2-1.png')",
        'table-4': "url('@/assets/images/reservation/table-4.png')",
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.1, 0.7, 0, 1)',
      },
      perspective: {
        '960': '960px',
      },
      rotate: {
        '35': '35deg',
        '40': '40deg',
        '25': '25deg',
      },
      translate: {
        '278': '278px',
        '236': '236.32px',
        '155': '155.68px',
        '66': '66.72px',
        '17': '17.6px',
      },
      textShadow: {
        'cart': '1px 1px 2px #403f3f',
        'cart-item': '1px 1px 5px #403f3f',
        'member': '2px 2px 5px #646464',
        'cart-hover': '1px 1px 3px #b67729',
        'reservation': '1px 1px 3px #3a3939',
        'table': `
          1px 1px 0 rgba(0, 0, 0, 0.8),
          -1px -1px 0 rgba(0, 0, 0, 0.8),
          -1px 1px 0 rgba(0, 0, 0, 0.8),
          1px -1px 0 rgba(0, 0, 0, 0.8),
          2px 2px 4px rgba(0, 0, 0, 0.5)
        `,
      },
      padding: {
        'title': '50px',
      },
      fontSize: {
        'reservation': '32px',
      },
      gridTemplateColumns: {
        'seating': 'repeat(auto-fill, minmax(50px, 1fr))',
      },
      gridTemplateRows: {
        'seating': 'repeat(auto-fill, minmax(50px, 1fr))',
      },
    },
  },
}