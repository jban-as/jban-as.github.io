import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss'
  ],
  vite: {
    plugins: [
      svgLoader()
    ]
  }
})
