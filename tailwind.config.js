/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      cursor:{
        'edit':"url('./src/img/pen.svg'),auto",
        'trash':"url('./src/img/trash.svg'),auto"
      },
      colors:{
        'main':'#579BB1',
        'clear':'#ECE8DD',
        'accent':'#4F4557',
        'white-alt':'#F8F4EA',
        'red-p':'#EB455F'
      }
    },
  },
  plugins: [],
}

