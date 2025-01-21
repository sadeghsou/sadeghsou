// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@hypernym/nuxt-anime",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Delius: true,
        },
      },
    ],
  ],
  css: ["@/assets/css/style.css"],
});
