/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sansLight: "Sans-Light",
        sansBold: "Sans-Bold"
      }
    },
  },
  plugins: [],
}

