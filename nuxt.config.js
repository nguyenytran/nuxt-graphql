// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path')
const isDev = process.env.NODE_ENV !== 'production'
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/nuxt-graphql/'
        }
      }
    : {}

export default {
  ...routerBase,
  server: {
    port: 8000
  },

  mode: 'universal',

  /**
   * Dev mode
   */
  dev: isDev,

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~assets/css/tailwind.css', 'aos/dist/aos.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/v-viewer',
    '~/plugins/v-masonry',
    {
      src: '~/plugins/v-filepond',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-purgecss',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/svg-sprite'
  ],

  axios: {
    baseURL: 'https://thewe-api.test/api'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'authorization',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: {
            url: 'authorization',
            method: 'delete'
          },
          user: false
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/admin',
      callback: '/',
      home: '/admin'
    },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        expires: 30
      }
    }
  },

  purgeCSS: {
    mode: 'postcss',
    enabled: process.env.NODE_ENV === 'production'
  },

  svgSprite: {},

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {}
      }
    },
    preset: {
      stage: 1
    },
    analyze: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
