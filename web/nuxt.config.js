
const devCondfig = {
  ssr: false,

  target: 'static',

  head: {
    title: 'nuxt-electron-sample',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
  },

  router: {
  }
}

const appConfig = {
  ...devCondfig,
  router: {
    ...devCondfig.router,
    base: './',
    mode: 'hash'
  },
  generate: {
    ...devCondfig.generate,
    dir: '../electron/dist',
  },
  build: {
    ...devCondfig.build
  }
}

const config = process.env.NODE_ENV === 'production' ? appConfig : devCondfig

export default config