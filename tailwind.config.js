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
        // primaryColor:"#2bd8bc",
        // primaryColor:"#5a189a",
        primaryColor:"#9AC27B",
        textColorDark:"#455A64"
      }
    },
  },
  plugins: [],
}

