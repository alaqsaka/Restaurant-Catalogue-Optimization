/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
// eslint-disable-next-line import/order
const common = require('./webpack.common');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 1,
          progressive: true,
        }),
      ],
    }),
  ],
});
