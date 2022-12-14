const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'G-COM',
    themeColor: '#31467C',
    msTileColor: '#31467C',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#31467C'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },

};
