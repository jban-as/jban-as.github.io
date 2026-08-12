import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-13',
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss'
  ],
  colorMode: {
    classSuffix: ''
  },
  vite: {
    plugins: [
      svgLoader()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_global.scss" as *;'
        }
      }
    }
  }
})
