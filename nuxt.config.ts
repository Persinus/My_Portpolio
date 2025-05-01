import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
   
    
    '@pinia/nuxt',
    
  ],
  css: [
    
  ],
  runtimeConfig: {
    public: {
      darkMode: true, // Config cho dark mode
    },
  },
  app: {
    head: {
      title: 'My Game Dev Portfolio',
      meta: [
        { name: 'description', content: 'Portfolio showcasing game development projects and resources.' },
      ],
    },
  },
});
