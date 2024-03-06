/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primaryColor:"#2bd8bc",
        textColorDark:"#455A64"
      }
    },
  },
  plugins: [],
}

