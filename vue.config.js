const path = require('path')

const name = 'Yeek'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.VUE_APP_PAGE_ENV === 'github'
    ? '/yeek-vue/'
    : '/',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    externals: {
      vue: 'Vue',
      'element-ui': 'ELEMENT'
    }
  },
  chainWebpack (config) {
    const cdn = {
      css: [
        // element-ui css
        'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
      ],
      js: [
        // vue must at first!
        'https://unpkg.com/vue/dist/vue.js',
        // element-ui js
        'https://unpkg.com/element-ui/lib/index.js'
      ]
    }
    config.plugin('html')
      .tap(args => {
        args[0].cdn = cdn
        return args
      })
  }
}
