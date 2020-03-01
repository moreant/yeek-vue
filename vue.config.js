const path = require('path')

const name = 'Yeek'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.VUE_APP_PUBLICPATH,
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }

}
