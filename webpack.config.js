const path = require('path')
const webpack = require('webpack')
module.exports = {
  target: 'node',
  entry: { app: ['@babel/polyfill', './app/index.js'] },
  output: { path: path.resolve(__dirname, './build'), filename: 'index.js' },
  devtool: 'source-map',
  plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: 'production' })],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
}
