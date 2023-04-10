/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      cursor:{
        'edit':"url('./src/img/pen.svg'),auto",
        'trash':"url('./src/img/trash.svg'),auto",
      }
    },
  },
  plugins: [],
}

