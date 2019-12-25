/*
 * @Author: soda
 * @Date: 2019-12-25 09:36:36
 * @LastEditors  : soda
 * @LastEditTime : 2019-12-25 11:54:30
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (phase, {defaultConfig}) => {
    // fix: prevents error when .less files are required by node
    if (typeof require !== 'undefined') {
      require.extensions['.less'] = file => {}
    }
  return {
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
      
      config.plugins.push(new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }));
      
      config.module.rules.push({
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      })
  
      config.module.rules.push({
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: 'less-loader', options: {
              javascriptEnabled: true
            }
          }
        ]
      })
      
      return config;
    }
  }
}