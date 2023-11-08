// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@vite-pwa/nuxt"], // https://vite-pwa-org.netlify.app/frameworks/nuxt
  pwa: {
    manifest: {}, // set to generate manifest.webmanifest
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,json,ico,png,svg}"], // <== json files included: when offline you will see missing json files request
    },
  },
  generate: {
    routes: ["/"],
    // TODO https://vite-pwa-org.netlify.app/frameworks/nuxt#prompt-for-update-and-offline-ready
  },
});
