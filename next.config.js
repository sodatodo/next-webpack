/*
 * @Author: soda
 * @Date: 2019-12-25 09:36:36
 * @LastEditors  : soda
 * @LastEditTime : 2019-12-25 14:11:25
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (phase, { defaultConfig }) => {
  // fix: prevents error when .less files are required by node 重要
  if (typeof require !== 'undefined') { // 在浏览器端 require 为 undefined
    require.extensions['.less'] = file => { }
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
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          "sass-loader"
        ]
      })

      // config.module.rules.push({
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10240,
      //     }
      //   }
      // })

      // config.module.rules.push({
      //   test: /\.(woff|woff2|eof|ttf|otf)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // })

      return config;
    }
  }
}