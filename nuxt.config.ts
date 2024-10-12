// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
    port: 3000, // You can change this if needed
  },
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css", "@/node_modules/devicon/devicon.min.css"],
  app: {
    head: {
      title: "Abhishek Maurya | Portfolio",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
        },
      ],
    },
  },
});
