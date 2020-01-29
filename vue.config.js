const path = require('path')

const name = 'Yeek'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
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
