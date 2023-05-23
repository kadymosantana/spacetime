// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Spacetime",
      meta: [
        {
          name: "description",
          content: "Colecione momentos marcantes da sua jornada."
        },
        {
          name: "keywords",
          content: "JavaScript, TypeScript, Vue.js, Nuxt.js, Tailwind CSS, NLW, NLW Spacetime"
        }
      ]
    }
  },

  modules: [
    "@sidebase/nuxt-auth",
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
    "@nuxt/devtools",
    "nuxt-icon"
  ],

  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      Inter: {
        wght: [400, 500, 600, 700, 800]
      },

      "Bai+Jamjuree": {
        wght: [500, 600, 700]
      }
    }
  },

  devtools: {
    enabled: true
  }
});
