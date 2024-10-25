/** @type {import('tailwindcss').Config} */
export default {
  content: [ // 新增
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color-yellow': 'rgb(255, 170, 13)',
      },
    },
  },
  plugins: [],
}
