/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        coffeeBrown: "#6F4E37",
        morningBeige: "#F5F0E6",
        calmGreen: "#A3B18A",
        softCream: "#FFF8E7"
      },
      fontFamily: {
        body: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
      }
    },
  },
  plugins: [],
}
