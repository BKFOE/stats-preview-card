/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,html,js,jsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: { colors: {
      primary: {
        darkBlue: "#090B1A",
        mediumBlue: "#1B1938",
        softViolet: "#AA5CDB"
      }
    },
    fontFamily: {
      mainH1:
      ["Inter", "serif"],
      subH1:
      ["Lexend Deca", "serif"]
    }, 
    screens: {
      'xxs': "375px"
    }
  },
  },
  plugins: [],
}

