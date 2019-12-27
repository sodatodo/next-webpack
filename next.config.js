/*
 * @Author: soda
 * @Date: 2019-12-27 10:07:26
 * @LastEditors  : soda
 * @LastEditTime : 2019-12-27 13:29:47
 */
// images
const withImages = require('next-images')
// sass
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const path = require('path')

module.exports = withCSS(withSass(withImages({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  }
}))) 