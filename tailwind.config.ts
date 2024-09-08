/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': ['Montserrat'],
      'montserrat-light': ['Montserrat-Light'],
      'montserrat-thin': ['Montserrat-Thin'],
      'montserrat-medium': ['Montserrat-Medium'],
      'montserrat-bold': ['Montserrat-Bold'],
      'montserrat-black': ['Montserrat-Black'],
      'montserrat-italic': ['Montserrat-Italic']
    }
  },
  darkMode: 'class',
  plugins: []
}