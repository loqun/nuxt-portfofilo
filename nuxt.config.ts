export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      backendUrl: 'http://localhost:8000',
      apiBaseUrl: 'http://localhost:8000/api',
      reverbKey: '',
      reverbHost: 'localhost',
      reverbPort: '8080',
      reverbScheme: 'http',
    }
  },
  app: {
    head: {
      title: 'Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal portfolio' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@500;600;700&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
