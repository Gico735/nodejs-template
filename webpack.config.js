const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: { app: ['@babel/polyfill', './src/index.js'] },
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
