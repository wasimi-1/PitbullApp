// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['bulma', '~/assets/css/main.css'],
  devServer: {
      https: {
          key: './localhost+2-key.pem',
          cert: './localhost+2.pem',
      },
  },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
      registerType: 'autoUpdate',
      manifest: {
          name: 'Nuxt 3 PWA 2025',
          short_name: 'Nuxt3PWA',
          description: 'Demo Nuxt 3 PWA',
          theme_color: '#4DBA87',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
              {
                  src: 'pitbull_small.png',
                  sizes: '192x192',
                  type: 'image/png',
              },
              {
                  src: 'pitbull.png',
                  sizes: '512x512',
                  type: 'image/png',
              },
              {
                  src: 'pitbull.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'maskable',
              },
          ],
      },
      workbox: {
          globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      },
      devOptions: {
          enabled: true,
          type: 'module',
      },
  },
});